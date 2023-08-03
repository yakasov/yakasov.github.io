const tabs = document.querySelectorAll("menu[role=tablist]");
var currentQuoteTab = "arturo";
var currentIndexTab = "index2019nov7";

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];
  const tabButtons = tab.querySelectorAll("button");

  tabButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      tabButtons.forEach((button) => {
        if (
          button.getAttribute("aria-controls") ===
          e.target.getAttribute("aria-controls")
        ) {
          button.setAttribute("aria-selected", true);
          openTab(e, tab);
        } else {
          button.setAttribute("aria-selected", false);
        }
      });
    })
  );
}

function openTab(event, tab) {
  const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
  articles.forEach((p) => {
    if (
      (p.id != currentQuoteTab || tab.id == "quotesMenuEl") &&
      (p.id != currentIndexTab || tab.id == "indexesMenuEl")
    ) {
      p.setAttribute("hidden", true);
      p.removeAttribute("flex");
    }
  });
  const article = tab.parentNode.querySelector(
    `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
  );
  article.removeAttribute("hidden");
  article.setAttribute("flex", true);
  if (tab.id == "quotesMenuEl") {
    currentQuoteTab = article.id;
  } else if (tab.id == "indexesMenuEl") {
    currentIndexTab = article.id;
  }
}
