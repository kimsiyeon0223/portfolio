import { Header } from "@/components/header/page";
import * as S from "./style.css";
import Link from "next/link";

export default function Main() {
  return (
    <div className={S.Layout}>
      <img className={S.RBigCloud} src="/svgs/bigCloud.svg" alt="Big Cloud" />
      <img className={S.LBigCloud} src="/svgs/bigCloud.svg" alt="Big Cloud" />
      <img
        className={S.smallCloud}
        src="/svgs/smallCloud.svg"
        alt="Small Cloud"
      />
      <Header />
      <div className={S.MainContainer}>
        <span className={S.Title}>PORTIFY</span>
        <span className={S.SubTitle}>당신만의 포트폴리오를 만들어보세요.</span>
        <Link href="/writePortfolio">
          <button className={S.WriteBtn}>작성하러가기 {">"}</button>
        </Link>
      </div>

      <div className={S.Line} />
    </div>
  );
}
