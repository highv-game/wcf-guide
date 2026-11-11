// 공략 페이지에 넣은 지도(iframe)가 알려 주는 높이에 맞춰 늘리기
window.addEventListener("message", function (e) {
  if (!e.data || typeof e.data.wcfMapHeight !== "number") return;
  document.querySelectorAll("iframe.wcf-map").forEach(function (f) {
    if (f.contentWindow === e.source) f.style.height = e.data.wcfMapHeight + "px";
  });
});
