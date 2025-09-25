(function () {
  document.addEventListener("DOMContentLoaded", function () {
    loadContent();
  });

  function loadContent() {
    const innerContent = document.getElementsByTagName("body")[0].innerHTML;

    fetch("/pages/template.html")
      .then((response) => response.text())
      .then((outerHTML) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(outerHTML, "text/html");

        document.body.innerHTML = doc.body.innerHTML;

        document.getElementById("main").innerHTML = innerContent;
      })
      .catch((error) => {
        console.error("Failed to load outer template", error);
      });
  }
})();
