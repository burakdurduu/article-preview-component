const shareBar = document.getElementById("share-bar");
const toggleBtn = document.getElementById("btn-share");
const closeBtn = document.getElementById("btn-share-close");

function openShareBar() {
  shareBar.classList.remove("hidden");
  shareBar.removeAttribute("inert");
  shareBar.setAttribute("aria-hidden", "false");
  toggleBtn.setAttribute("aria-expanded", "true");
}

function closeShareBar() {
  shareBar.classList.add("hidden");
  shareBar.setAttribute("inert", "");
  shareBar.setAttribute("aria-hidden", "true");
  toggleBtn.setAttribute("aria-expanded", "false");
  toggleBtn.focus();
}

toggleBtn.addEventListener("click", () => {
  const isHidden = shareBar.getAttribute("aria-hidden") === "true";
  isHidden ? openShareBar() : closeShareBar();
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    closeShareBar();
  });
}
