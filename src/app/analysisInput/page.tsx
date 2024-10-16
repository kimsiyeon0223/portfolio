"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import * as S from "./style.css";

export default function AnalysisInput() {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAnalyze = async () => {
    setLoading(true);
    setAnalysis("");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      setAnalysis("분석 중 오류가 발생했습니다.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={S.Layout}>
      <Header color />
      <main className={S.MainLayout}>
        <div className={S.TitleContainer}>
          <img src="svgs/thinkingFace.svg" alt="Thinking Face" />
          <span className={S.Title}>포트폴리오 입력</span>
        </div>
        <span className={S.Subtitle}>
          포트폴리오를 작성해주세요. AI가 포트폴리오를 분석해서 첨삭해드려요.
        </span>
        <textarea
          className={S.Input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="여기에 포트폴리오 내용을 입력하세요..."
        />
        <button className={S.Btn} onClick={handleAnalyze} disabled={loading}>
          {loading ? "분석 중..." : "분석하기"}
        </button>

        {analysis && (
          <div className={S.Result}>
            <h3>분석 결과:</h3>
            <p>{analysis}</p>
          </div>
        )}
      </main>
    </div>
  );
}
