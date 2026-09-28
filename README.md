# 김명원 프론트엔드·웹퍼블리싱 포트폴리오

반응형 화면 구현, API 연동, 빈 데이터와 오류 흐름 점검 사례를 정리한 Next.js 포트폴리오입니다.

## 대표 내용

- 주식회사 두부 Project Operation팀 AX 인턴 경력
- Boda 반응형 웹
- ITPE Quiz 학습 서비스
- 금융상품 비교 웹서비스
- PHP·jQuery 기업 홈페이지 시연

## 기술

- Next.js 15.5, React 19, TypeScript
- HTML5, CSS, JavaScript
- React, Vue, REST API
- PHP 8.2, jQuery, Docker

## 실행

```bash
npm install
npm test
npm run build
npm start
```

PHP 시연물은 별도로 실행합니다.

```bash
cd demos/company-site
docker compose up --build
```

브라우저에서 `http://localhost:8088`을 엽니다.

## 검증

- 콘텐츠·접근성 요구 테스트 6건 통과
- Next.js 프로덕션 빌드 성공
- 포트폴리오 Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100
- PHP 시연물 Lighthouse: Performance 99, Accessibility 100, Best Practices 100, SEO 100
- 데스크톱과 모바일 반응형 화면 확인

## 범위

PHP 시연물은 PHP 데이터 출력과 jQuery 상호작용을 보여주기 위한 작업입니다. 문의 폼은 입력 검증만 하며 서버로 전송하지 않습니다. 그누보드는 구현 범위에 포함하지 않았고 사용 기술로 주장하지 않습니다.