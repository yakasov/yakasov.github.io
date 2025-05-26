function updateMain(sectionTitle) {
  let titleEl = document.getElementById("main-title");
  let allSections = document.querySelectorAll("#main > div");
  let sectionEl = document.getElementById(`main-${sectionTitle}`);

  titleEl.innerText =
    sectionTitle !== "homepage"
      ? sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1)
      : "";

  allSections.forEach((s) => {
    if (!s.classList.contains("hidden")) {
      s.classList.add("hidden");
    }
  });
  sectionEl.classList.remove("hidden");
}
