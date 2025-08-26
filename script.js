const buttons = document.querySelectorAll(".btn-share");
const shareBar = document.getElementById("share-bar");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (shareBar.getAttribute("aria-hidden") === "true") {
      shareBar.classList.remove("hidden");
      shareBar.removeAttribute("inert");
      shareBar.setAttribute("aria-hidden", "false");
    } else {
      shareBar.classList.add("hidden");
      shareBar.setAttribute("inert", "");
      shareBar.setAttribute("aria-hidden", "true");
    }
  });
});
