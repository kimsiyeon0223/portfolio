"use client";

import { Header } from "@/components/header/page";
import { useState } from "react";
import * as S from "./style.css";
import MDEditor from "@uiw/react-md-editor";
import Link from "next/link";

export default function WritePortfolio() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputTag !== "") {
      setTags([...tags, inputTag]);
      setInputTag("");
    }
  };
  return (
    <main className={S.Layout}>
      <Header color />
      <main className={S.ContentLayout}>
        <div className={S.Write}>
          <input
            className={S.InputTitle}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="제목을 입력하세요"
          />
          <div className={S.Line} />
          <div className={S.CreateTag}>
            {tags.map((t) => (
              <button
                className={S.Tag}
                onClick={() => setTags(tags.filter((x) => x !== t))}
                key={t}
              >
                {t}
              </button>
            ))}
            <input
              className={S.InputTag}
              type="text"
              onChange={(e) => setInputTag(e.target.value)}
              value={inputTag}
              placeholder="태그를 입력하세요"
              onKeyUp={handleOnKeyPress}
            />
          </div>
          <MDEditor
            value={content}
            onChange={(val?: string) => setContent(val || "")}
            data-color-mode="light"
            height={800}
          />
        </div>
      </main>
      <footer className={S.Footer}>
        <Link href="/">
          <span className={S.GetOut}>{"<-"} 나가기</span>
        </Link>
        <button className={S.btn}>올리기</button>
      </footer>
    </main>
  );
}
