const ragTags = ["Go", "Hybrid RAG", "DynamoDB", "AWS", "품질 측정"];
const curriculumTags = ["SQL", "Python", "DynamoDB", "데이터 모델링", "자동 갱신"];

export default function Experience() {
  return (
    <section id="experience" className="section-block experience-section" aria-labelledby="experience-title">
      <div className="section-heading section-heading-split">
        <div>
          <p className="eyebrow">Work experience</p>
          <h2 id="experience-title">서비스 신뢰성을 배운 개발과 운영</h2>
        </div>
        <div className="experience-intro">
          <p className="company-line">주식회사 두부 · Project Operation팀 AX 인턴</p>
          <p>2026.06 - 2026.07</p>
          <p>
            기존 고객상담 AI와 운영 자동화에 합류해 검색, 데이터, 배포와
            사용 결과를 점검하고 오류를 고쳤습니다.
          </p>
        </div>
      </div>

      <div className="experience-metrics" aria-label="두부 경력 주요 수치">
        <div><strong>56.3% → 78.2%</strong><span>5월 대비 7월 AI 답변 채택률</span></div>
        <div><strong>4,446건</strong><span>답변 단위 품질 판정 데이터</span></div>
        <div><strong>2,381개</strong><span>커리큘럼 색인 아이템</span></div>
        <div><strong>1,615개</strong><span>검색 가능한 수업 활동</span></div>
      </div>

      <div className="case-study-grid">
        <article className="case-card case-card-blue">
          <div className="case-card-top">
            <p className="case-number">Case 01</p>
            <div className="tag-list">
              {ragTags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <h3>근거를 확인하는 상담 AI</h3>
          <p className="case-lead">
            기준 문서와 고객별 운영 데이터를 한 답변에 연결하고, 담당자가 실제로
            사용한 문장을 품질 신호로 되돌리는 흐름을 구현했습니다.
          </p>
          <div className="rag-flow" aria-label="RAG 개선 흐름">
            <span>문의</span><i></i><span>검색</span><i></i><span>근거 검증</span><i></i><span>초안</span><i></i><span>채택 측정</span>
          </div>
          <ul className="case-points">
            <li>벡터 검색과 BM25를 결합하고 공식 가이드와 상담 QA를 함께 검색</li>
            <li>후속 질문 맥락화, 인용 근거 대조, 관련성 가드로 오답 경로 분리</li>
            <li>QA 356건과 문서 60건을 대조해 검증된 35건 정정</li>
          </ul>
        </article>

        <article className="case-card case-card-mint">
          <div className="case-card-top">
            <p className="case-number">Case 02</p>
            <div className="tag-list">
              {curriculumTags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <h3>변경과 복구를 고려한 데이터 구조</h3>
          <p className="case-lead">
            사람이 기억으로 답하던 수업 문의를 회기와 활동 근거로 찾도록
            DynamoDB 단일 테이블 색인을 설계했습니다.
          </p>
          <div className="index-layers" aria-label="커리큘럼 색인 계층">
            <div><strong>19</strong><span>학습플랜</span></div>
            <div><strong>587</strong><span>회기</span></div>
            <div><strong>1,615</strong><span>활동</span></div>
            <div><strong>55</strong><span>표준 태그</span></div>
          </div>
          <ul className="case-points">
            <li>원본값, 코드 계산값, 사람이 검증한 값을 나눠 재적재 손실 방지</li>
            <li>회기 번호를 커리큘럼별 정렬키로 두어 공유 활동의 번호 충돌 해결</li>
            <li>매일 원본 변경을 비교하고 수정, 삭제, 재검증하는 자동 갱신 구성</li>
          </ul>
        </article>
      </div>
    </section>
  );
}