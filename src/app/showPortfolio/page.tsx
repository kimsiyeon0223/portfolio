"use client";

import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header/page";
import * as S from "./style.css";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";

export default function ShowPortfolio() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const contents =
    searchParams.get("contents") || localStorage.getItem("content") || "";
  const title =
    searchParams.get("titles") || localStorage.getItem("title") || "";
  const tags = searchParams.get("tags") || localStorage.getItem("tags") || "";

  const tagList = tags.split(",").map((tag) => tag.trim());

  const handleEdit = () => {
    router.push(
      `/writePortfolio?contents=${encodeURIComponent(
        contents,
      )}&titles=${encodeURIComponent(title)}&tags=${encodeURIComponent(tags)}`,
    );
  };

  return (
    <>
      <Header color />
      <div className={S.Layout}>
        <div className={S.PortfolioContainer}>
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
      </div>
    </>
  );
}
