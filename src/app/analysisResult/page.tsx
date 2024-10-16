import { Header } from "@/components/header";
import * as S from "./style.css";

export default function AnalysisResult() {
  return (
    <div className={S.Layout}>
      <Header color />
      <main className={S.MainLayout}>
        <div className={S.TitleContainer}>
          <img src="svgs/thinkingFace.svg" alt="Thinking Face" />
          <span className={S.Title}>분석 결과</span>
        </div>
        <span className={S.Subtitle}>
          AI가 분석한 김시연님의 포트폴리오예요.
        </span>
        <div className={S.ResultContainer}>
          <h2 className={S.BoldText}>1. 목표 및 커리어 방향 추가</h2>
          <p>
            - 포트폴리오 상단에 본인의 커리어 목표나 비전을 추가하면 더욱 강렬한
            인상을 남길 수 있습니다. 예를 들어, 어떤 분야에서 성장하고 싶은지,
            특정 기술에 대한 전문성을 키우고 싶은지를 짧게 언급해보세요.
          </p>
          <p>
            예시: “React와 프론트엔드 기술을 통해 사용자 친화적인 인터페이스를
            개발하고, 확장 가능한 웹 애플리케이션을 구축하는 전문가로 성장하고
            싶습니다.”
          </p>
          <h2 className={S.BoldText}>2. 프로젝트 세부 정보</h2>
          <p>
            - 각 프로젝트에 대해 조금 더 구체적인 설명을 추가하는 것이 좋습니다.
            프로젝트에서 직면했던 어려움이나 문제 해결 과정, 본인의 기여도,
            프로젝트 결과 등을 포함하면 더욱 구체적이고 실질적인 경험으로 느껴질
            수 있습니다.
          </p>
          <p>
            예시: “포트폴리오 웹사이트 프로젝트에서는 반응형 디자인을 구현하는
            과정에서 CSS Grid와 Flexbox를 활용하여 다양한 화면 크기에 적응하는
            레이아웃을 성공적으로 구축했습니다. 또한, GitHub Pages를 통해
            웹사이트를 배포하여 지속적인 업데이트를 쉽게 할 수 있는 구조로
            만들었습니다.”
          </p>
          <h2 className={S.BoldText}>3. 디자인 포트폴리오와 연계</h2>
          <p>
            - Figma와 같은 디자인 툴을 사용하신다고 하셨는데, 만약 디자인 경험이
            있다면 디자인 과정에 대한 설명을 추가하거나 Figma에서 작업한
            포트폴리오를 함께 링크로 첨부하는 것도 좋습니다. UI/UX 디자인에 대한
            관심과 역량을 강조할 수 있습니다.
          </p>
          <h2 className={S.BoldText}>4. 프로젝트의 성과 또는 결과</h2>
          <p>
            - 프로젝트 설명에 단순히 개발한 것만 나열하기보다는 성과나 결과를
            강조하는 것이 좋습니다. 예를 들어, 팀 프로젝트에서 얼마나 많은
            사용자가 서비스를 사용했는지, 성능 개선 효과가 있었는지 등을 포함할
            수 있습니다.
          </p>
          <p>
            예시: “팀 프로젝트에서 구현한 온라인 쇼핑몰은 첫 달에 100명의
            사용자가 가입하였고, 평균 장바구니 체류 시간이 20% 증가하는 성과를
            얻었습니다.”
          </p>
          <h2 className={S.BoldText}>5. 개인 블로그 또는 추가 링크</h2>
          <p>
            - 개인적으로 공부한 내용이나 경험을 공유하는 블로그나 기술 자료가
            있다면 추가하면 좋습니다. 기술 블로그는 본인의 학습 과정과 문제 해결
            능력을 보여주는 훌륭한 방법입니다.
          </p>
          <p>예시: “개인 블로그: siyeon-devlog.com”</p>
          <h2 className={S.BoldText}>6. 어필할 수 있는 소프트 스킬</h2>
          <p>
            - 프로젝트 경험 외에도 소프트 스킬을 강조하는 것도 중요합니다. 협업
            경험, 문제 해결 능력, 시간 관리 등은 개발자로서 중요한 능력입니다.
          </p>
          <p>
            예시: “팀 프로젝트에서 맡은 프론트엔드 개발 외에도 팀 내에서 원활한
            커뮤니케이션을 통해 기획과 디자인 팀과의 협업을 성공적으로
            이끌었습니다.”
          </p>
          <h2 className={S.BoldText}>요약</h2>
          <h3>
            - 현재 상태: 깔끔하고 체계적으로 구성되어 있어 기본적인 요소는
            충실히 포함되어 있습니다.
          </h3>
          <h3>
            - 개선점: 프로젝트에 대한 구체적인 설명, 성과, 커리어 목표 등을
            추가하여 포트폴리오를 더욱 풍성하게 만들 수 있습니다. 디자인
            경험이나 개인 블로그를 추가하는 것도 본인의 역량을 더욱 강조하는
            방법입니다.
          </h3>
          <h4 className={S.LastText}>
            이러한 점들을 보완한다면, 김시연님의 포트폴리오는 한층 더 완성도
            높은 포트폴리오가 될 것입니다!​
          </h4>
        </div>
      </main>
    </div>
  );
}