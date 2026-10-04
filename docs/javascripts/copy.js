// 본문 인라인 코드 중 "/"로 시작하는 것(/way, /cast, /tar 등)을 클릭하면 복사
(function () {
  function toast(msg) {
    var t = document.getElementById("wcf-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "wcf-toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 1400);
  }
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    var ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } finally { ta.remove(); }
    return Promise.resolve();
  }
  function init() {
    document.querySelectorAll(".md-typeset code:not(pre code)").forEach(function (el) {
      if (el.dataset.wcfCopy) return;
      var text = el.textContent.trim();
      if (text.charAt(0) !== "/") return;
      el.dataset.wcfCopy = "1";
      el.classList.add("wcf-copy");
      el.title = "클릭해서 복사";
      el.setAttribute("role", "button");
      el.tabIndex = 0;
      var go = function () { copy(text).then(function () { toast("복사됨: " + text); }); };
      el.addEventListener("click", go);
      el.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    });
  }
  if (window.document$) window.document$.subscribe(init); else document.addEventListener("DOMContentLoaded", init);
})();
