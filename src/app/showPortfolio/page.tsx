"use client";

import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header/index";
import * as S from "./style.css";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ShowPortfolio() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const contents =
    searchParams?.get("contents") || localStorage.getItem("content") || "";
  const title =
    searchParams?.get("titles") || localStorage.getItem("title") || "";
  const tags = searchParams?.get("tags") || localStorage.getItem("tags") || "";

  const tagList = tags.split(",").map((tag) => tag.trim());

  const handleEdit = () => {
    router.push(
      `/writePortfolio?contents=${encodeURIComponent(
        contents,
      )}&titles=${encodeURIComponent(title)}&tags=${encodeURIComponent(tags)}`,
    );
  };

  const handleSaveAsPDF = () => {
    const portfolioElement = document.getElementById("portfolio");

    if (portfolioElement) {
      html2canvas(portfolioElement).then((canvas: HTMLCanvasElement) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${title || "portfolio"}.pdf`);
      });
    }
  };

  return (
    <>
      <Header color />
      <div className={S.Layout}>
        <div id="portfolio" className={S.PortfolioContainer}>
          <span className={S.Title}>{title}</span>
          <div className={S.TagContainer}>
            {tagList.map((tag, index) => (
              <span key={index} className={S.Tag}>
                {tag}
              </span>
            ))}
          </div>
          <MDEditor.Markdown style={{ padding: 10 }} source={contents} />
        </div>
        <button onClick={handleEdit} className={S.EditBtn}>
          수정
        </button>
        <button onClick={handleSaveAsPDF} className={S.PDFBtn}>
          PDF로 저장하기
        </button>
      </div>
    </>
  );
}
