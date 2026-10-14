export const certData: Record<
  string,
  {
    label: string;
    title: string;
    image?: string;
    period: string;
    review: string;
  }
> = {
  egig: {
    label: "인터넷거버넌스 전문가그룹 EG@IG",
    title: "기술과 사회를 함께 보는 관점",
    image: "/egig.jpg",
    period: "",
    review: `인터넷 거버넌스의 주요 의제와 글로벌 기술·정책 동향을 학습했습니다.

미국과 유럽연합의 개인정보보호법 입법 동향을 국내 법제와 비교하고, 자료의 출처와 관점에 따라 결론이 달라질 수 있음을 배웠습니다. 이 경험은 기술을 기능만으로 보지 않고 이용자, 제도와 책임까지 함께 살피는 출발점이 됐습니다.`,
  },
  ssafy: {
    label: "삼성청년SW아카데미 12기 1학기 코딩집중과정",
    title: "개발 기반을 만든 800시간",
    image: "/ssafy.jpg",
    period: "",
    review: `1학기 코딩집중과정 800시간을 이수하며 Python, 자료구조와 알고리즘, 웹, 관계형 데이터베이스와 SQL을 학습했습니다.

Django와 Vue를 사용한 팀 프로젝트에서는 화면과 API를 연결하고 요청 필드와 응답 구조를 팀원과 맞췄습니다. 생성형 AI의 기초 원리와 AI 윤리·거버넌스도 함께 배웠습니다.`,
  },
  react: {
    label: "React 학습",
    title: "컴포넌트와 상태 흐름",
    image: "/react.jpg",
    period: "",
    review: `컴포넌트 분리, props, 상태와 생명주기를 학습하고 개인·팀 프로젝트의 화면과 상태 처리에 적용했습니다.

강의 수강에 그치지 않고 API 응답과 화면 상태가 어긋나는 문제를 직접 고치며 재사용 가능한 구조와 오류 흐름을 익혔습니다.`,
  },
  tailwind: {
    label: "Tailwind CSS 학습",
    title: "일관된 반응형 화면 구성",
    image: "/tailwind.jpg",
    period: "",
    review: `반응형 유틸리티, 다크 모드, hover와 focus 상태를 학습했습니다.

포트폴리오와 웹 프로젝트에서 화면 크기별 배치와 컴포넌트 스타일을 일관된 기준으로 구성하는 데 활용했습니다.`,
  },
  typescript: {
    label: "TypeScript 학습",
    title: "데이터 구조를 코드에 명확히 표현하기",
    image: "/typescript.jpg",
    period: "",
    review: `함수의 입력과 반환값, API 응답 객체와 화면 상태에 타입을 적용했습니다.

ITPE Quiz와 Boda 프로젝트에서 잘못된 필드 접근을 컴파일 단계에서 찾고, 프론트엔드와 백엔드가 주고받는 데이터 형태를 명확히 하는 데 사용했습니다.`,
  },
  nextjs: {
    label: "Next.js 학습",
    title: "화면과 서버 기능을 함께 구현하기",
    image: "/nextjs.jpg",
    period: "",
    review: `App Router, 동적 라우팅, 서버와 클라이언트 컴포넌트, API 구현과 배포 흐름을 학습했습니다.

ITPE Quiz 백엔드와 포트폴리오에 적용해 인증, 기록 API와 화면을 연결하고 Vercel 배포까지 확인했습니다.`,
  },
  nodejs: {
    label: "Node.js 학습",
    title: "요청과 응답의 흐름 이해하기",
    image: "/node.jpg",
    period: "",
    review: `REST API, 라우팅, 미들웨어와 데이터베이스 연동의 기본 흐름을 학습했습니다.

프론트엔드 구현에 머물지 않고 서버가 요청을 검증하고 데이터를 저장한 뒤 응답하는 구조를 이해하는 데 활용했습니다.`,
  },
  certificate1: {
    label: "정보처리기사",
    title: "정보처리기사 취득",
    image: "/certificate1.jpg",
    period: "",
    review: `소프트웨어 설계와 개발, 데이터베이스, 운영체제, 네트워크와 정보보안의 기초를 정리했습니다.

자격시험 학습 과정에서 불편했던 기록 단절을 해결하기 위해 ITPE Quiz 서비스를 직접 개발했고, 실제 학습에 사용해 자격을 취득했습니다.`,
  },
  certificate2: {
    label: "SQLD",
    title: "SQL 개발자 자격 취득",
    image: "/certificate2.jpg",
    period: "",
    review: `데이터 모델링, 정규화, SQL과 트랜잭션의 기초를 학습했습니다.

개인 프로젝트의 PostgreSQL 스키마와 인턴 업무의 SQL·DynamoDB 데이터 검증에서 관계와 중복, 변경 전후의 정합성을 확인하는 기반으로 활용했습니다.`,
  },
};

export const certList = Object.entries(certData).map(([id, data]) => ({
  id,
  label: data.label,
}));
