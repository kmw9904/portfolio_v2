<?php
$services = [
    ["number" => "01", "title" => "브랜드 웹사이트", "description" => "기업의 서비스와 강점을 명확한 정보 구조와 반응형 화면으로 전달합니다."],
    ["number" => "02", "title" => "운영 페이지 개선", "description" => "기존 화면의 깨짐, 접근성, 폼 오류를 확인하고 수정하기 쉬운 구조로 정리합니다."],
    ["number" => "03", "title" => "콘텐츠 업데이트", "description" => "반복되는 소식과 프로젝트 항목을 데이터로 분리해 안전하게 갱신합니다."],
];

$works = [
    ["type" => "Corporate", "title" => "서비스 기업 홈페이지", "summary" => "회사 소개와 상담 전환을 위한 반응형 사이트"],
    ["type" => "Publishing", "title" => "프로젝트 아카이브", "summary" => "필터와 상세 구조를 갖춘 작업 사례 페이지"],
    ["type" => "Maintenance", "title" => "운영 화면 정비", "summary" => "오류 상태와 모바일 화면을 보완한 유지보수 사례"],
];
?>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="반응형 웹 구축과 운영 페이지 개선을 제공하는 스튜디오 시연 홈페이지입니다.">
    <meta name="robots" content="index,follow">
    <meta property="og:title" content="North Studio 기업 홈페이지 시연">
    <meta property="og:description" content="PHP와 jQuery로 구현한 반응형 기업 홈페이지 시연물">
    <meta property="og:type" content="website">
    <link rel="canonical" href="http://localhost:8088/">
    <link rel="stylesheet" href="assets/styles.css">
    <title>North Studio | 반응형 웹 구축</title>
</head>
<body>
    <a class="skip-link" href="#main-content">본문 바로가기</a>
    <header class="site-header">
        <div class="header-inner">
            <a class="logo" href="#top" aria-label="North Studio 홈">NORTH</a>
            <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-menu">
                <span class="sr-only">메뉴 열기</span>
                <span></span><span></span>
            </button>
            <nav id="site-menu" class="site-menu" aria-label="주요 메뉴">
                <a href="#services">서비스</a>
                <a href="#works">프로젝트</a>
                <a href="#faq">자주 묻는 질문</a>
                <a href="#contact">문의</a>
            </nav>
        </div>
    </header>

    <main id="main-content">
        <section id="top" class="hero" aria-labelledby="hero-title">
            <p class="label">Web publishing and maintenance</p>
            <h1 id="hero-title">좋은 홈페이지는<br>찾기 쉽고, 고치기 쉽습니다.</h1>
            <p class="hero-copy">화면 크기에 맞게 읽히고 키보드로도 이동할 수 있는 웹을 만듭니다. 콘텐츠는 PHP 데이터로 분리해 반복 수정을 줄였습니다.</p>
            <a class="primary-link" href="#works">작업 방식 보기</a>
        </section>

        <section id="services" class="section" aria-labelledby="services-title">
            <div class="section-heading">
                <p class="label">Services</p>
                <h2 id="services-title">필요한 화면을 만들고 운영 기준을 남깁니다.</h2>
            </div>
            <div class="service-list">
                <?php foreach ($services as $service): ?>
                    <article class="service-row">
                        <p class="service-number"><?= htmlspecialchars($service["number"]) ?></p>
                        <h3><?= htmlspecialchars($service["title"]) ?></h3>
                        <p><?= htmlspecialchars($service["description"]) ?></p>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section id="works" class="section section-dark" aria-labelledby="works-title">
            <div class="section-heading">
                <p class="label">Selected work</p>
                <h2 id="works-title">내용이 먼저 보이는 프로젝트 화면</h2>
            </div>
            <div class="work-grid">
                <?php foreach ($works as $work): ?>
                    <article class="work-card">
                        <p class="work-type"><?= htmlspecialchars($work["type"]) ?></p>
                        <h3><?= htmlspecialchars($work["title"]) ?></h3>
                        <p><?= htmlspecialchars($work["summary"]) ?></p>
                        <a href="#contact">비슷한 작업 문의하기</a>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section id="faq" class="section" aria-labelledby="faq-title">
            <div class="section-heading">
                <p class="label">FAQ</p>
                <h2 id="faq-title">작업 전 확인할 내용</h2>
            </div>
            <div class="faq-list">
                <article>
                    <h3><button type="button" aria-expanded="false">모바일 화면도 함께 확인하나요?</button></h3>
                    <div class="faq-answer" hidden><p>360픽셀부터 데스크톱까지 주요 구간을 확인하고, 메뉴와 폼의 터치 영역도 점검합니다.</p></div>
                </article>
                <article>
                    <h3><button type="button" aria-expanded="false">기존 홈페이지 수정도 가능한가요?</button></h3>
                    <div class="faq-answer" hidden><p>현재 구조와 오류를 먼저 확인한 뒤 공통 영역과 반복 콘텐츠부터 작은 단위로 수정합니다.</p></div>
                </article>
                <article>
                    <h3><button type="button" aria-expanded="false">검색 노출을 위해 무엇을 확인하나요?</button></h3>
                    <div class="faq-answer" hidden><p>페이지 제목과 설명, 제목 구조, 대체텍스트, canonical 주소와 모바일 표시를 확인합니다.</p></div>
                </article>
            </div>
        </section>

        <section id="contact" class="section contact" aria-labelledby="contact-title">
            <div class="section-heading">
                <p class="label">Contact</p>
                <h2 id="contact-title">프로젝트 내용을 알려주세요.</h2>
            </div>
            <form id="contact-form" novalidate>
                <div class="form-row">
                    <label for="name">이름</label>
                    <input id="name" name="name" autocomplete="name" required>
                </div>
                <div class="form-row">
                    <label for="email">이메일</label>
                    <input id="email" name="email" type="email" autocomplete="email" required>
                </div>
                <div class="form-row form-row-wide">
                    <label for="message">문의 내용</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button class="submit-button" type="submit">내용 확인하기</button>
                <p id="form-status" class="form-status" role="status" aria-live="polite"></p>
            </form>
        </section>
    </main>

    <footer>
        <p>North Studio demo. Portfolio publishing case.</p>
        <a href="#top">맨 위로</a>
    </footer>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="assets/site.js"></script>
</body>
</html>
