import Link from "next/link";
import * as S from "./style.css";
import classNames from "classnames";

interface ttype {
  color?: boolean;
}

export const Header = ({ color }: ttype) => {
  return (
    <div className={classNames(S.Layout, { [S.LayoutColor]: color })}>
      <Link href="/">
        <h1 className={S.Title}>PORTIFY</h1>
      </Link>
      <div className={S.Bars}>
        <Link href="/analysisInput">
          <span className={S.Btn}>AI 분석</span>
        </Link>
        <Link href="/writePortfolio">
          <span className={S.Btn}>포트폴리오 작성</span>
        </Link>
        <Link href="/showPortfolio">
          <span className={S.Btn}>내 포트폴리오</span>
        </Link>
      </div>
    </div>
  );
};
