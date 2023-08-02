const audioFiles = [
  ["Ali-A blesses the nations", "ascension.mp3"],
  ["Smash Mouth but the years never come", "charlieasked.mp3"],
  ["O̧̖̺͔̞̬̖͈͂̍̀̃́̚͢͟͡͞W̴̹̯̰̗̹̑̊͋̆̿̕", "corrupthdd.mp3"],
  ["Disclaimer: made by Tom not me", "despacositafrica.mp3"],
  ["The longer you listen the better", "DONOTLISTENTO.mp3"],
  ["Self explanatory", "eminem_breaks_the_sound_barrier.mp3"],
  [
    "Dylusion's newest collab",
    "FBC_FREESTYLE_2_FEAT_YUNG_GRAVY_PRIVATE!!!!DONOTDISTRIBUTE.mp3",
  ],
  ["Dylusion's hottest track", "fbc_freestyle.mp3"],
  ["Despacito 2", "godsmessage.mp3"],
  [
    "World famous piano rendition of the John Cena theme",
    "John_Cena_theme_midi_Version.mp3",
  ],
  ["Dylusion's newest EP", "mountainmomma.mp3"],
  ["Country Roads", "sing_along.mp3"],
  [
    "Eminem goes mad after the loss of Busta Rhymes",
    "the_fastest_rapper_alive.mp3",
  ],
  ["Resulted in a few death wishes", "yesman.mp3"],
];

const quoteFiles = [
  ["Arturo", "arturo.txt"],
  ["Charlie", "charlie.txt"],
  ["James M", "james_m.txt"],
  ["James C", "james.txt"],
  ["Josh", "josh.txt"],
  ["Parth", "parth.txt"],
  ["Tom", "tom.txt"],
  ["Others", "others.html"],
  ["Others (Crispins)", "others_crispins.html"],
  ["Teachers", "teachers.html"],
];

async function displayAudioFiles() {
  const audioFilesUl = document.getElementById("audioFilesUl");

  audioFiles.forEach(
    (a) =>
      (audioFilesUl.innerHTML += `<li><a href="#" onclick="return audioClicked([\`${a[0]}\`, \`${a[1]}\`]);">${a[1]}</a></li>`)
    // the audioClicked argument is stupid, right?
  );
}

async function displayQuoteFiles() {
  const quotesMenuEl = document.getElementById("quotesMenuEl");

  quoteFiles.forEach(async (q) => {
    if (!q[1].includes("html")) {
      const quotes = await fetch(`./pages/quotes/${q[1]}`)
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
        })
        .then((data) => {
          return data;
        });

      const quotesList = quotes.split("\n").slice(1);
      var quotesListEl = "";

      quotesList.forEach((q) => (quotesListEl += `<li>${q}</li>`));
      quotesMenuEl.insertAdjacentHTML(
        "afterend",
        `
        <article role="tabpanel" id="${
          q[1].split(".")[0]
        }" class="inner-quote-article">
            <ul>${quotesListEl}</ul>
        </article>
    `
      );
    }
  });
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

(async () => {
  await displayAudioFiles();
  await displayQuoteFiles();
})();
