$(function () {
  const $menuButton = $(".menu-button");
  const $menu = $("#site-menu");

  $menuButton.on("click", function () {
    const isOpen = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!isOpen));
    $menu.toggleClass("is-open", !isOpen);
    $(this).find(".sr-only").text(isOpen ? "메뉴 열기" : "메뉴 닫기");
  });

  $menu.find("a").on("click", function () {
    $menuButton.attr("aria-expanded", "false");
    $menu.removeClass("is-open");
    $menuButton.find(".sr-only").text("메뉴 열기");
  });

  $(".faq-list button").on("click", function () {
    const $button = $(this);
    const isOpen = $button.attr("aria-expanded") === "true";
    $button.attr("aria-expanded", String(!isOpen));
    $button.closest("article").find(".faq-answer").prop("hidden", isOpen);
  });

  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    const name = String($("#name").val()).trim();
    const email = String($("#email").val()).trim();
    const message = String($("#message").val()).trim();
    const $status = $("#form-status");

    if (!name || !email || !message) {
      $status.text("이름과 이메일, 문의 내용을 모두 입력해 주세요.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $status.text("이메일 주소 형식을 확인해 주세요.");
      $("#email").trigger("focus");
      return;
    }

    $status.text(`${name}님의 문의 내용을 확인했습니다. 이 폼은 시연용이며 서버로 전송하지 않습니다.`);
  });
});
