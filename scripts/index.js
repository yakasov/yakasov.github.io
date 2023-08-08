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

function audioClicked(a) {
  const cmdPre = document.getElementById("audioCmdPre");
  cmdPre.innerHTML = `Microsoft&#10094;R&#10095; Windows DOS 
&#10094;C&#10095; Copyright Microsoft Corp 1990-2001.

C:&#92;Users&#92;yakasov&#92;Music&#92;${a[1]}> ${a[0]}
<br><a class="cmd-pause" href="#" onclick="return toggleMusic();">PAUSE/UNPAUSE</a><audio id="cmdAudio" src="res/audio/${a[1]}" type="audio/mpeg">
  `;
  toggleMusic();
}

function toggleMusic() {
  const audioPlayer = document.getElementById("cmdAudio");
  const cmdTitle = document.getElementById("cmdTitle");

  if (!audioPlayer.paused) {
    audioPlayer.pause();
    cmdTitle.innerText = "Command Prompt - Paused";
  } else {
    audioPlayer.play();
    cmdTitle.innerText = "Command Prompt - Playing";
  }
}

function revealStories() {
  const storiesButton = document.getElementById("storiesButton");
  storiesButton.style = "";
}
