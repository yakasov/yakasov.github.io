const audioFiles = [
  "ascension.mp3",
  "charlieasked.mp3",
  "corrupthdd.mp3",
  "despacositafrica.mp3",
  "DONOTLISTENTO.mp3",
  "eminem_breaks_the_sound_barrier.mp3",
  "FBC_FREESTYLE_2_FEAT_YUNG_GRAVY_PRIVATE!!!!DONOTDISTRIBUTE.mp3",
  "fbc_freestyle.mp3",
  "godsmessage.mp3",
  "John_Cena_theme_midi_Version.mp3",
  "mountainmomma.mp3",
  "sing_along.mp3",
  "the_fastest_rapper_alive.mp3",
  "yesman.mp3",
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
    (a) => (audioFilesUl.innerHTML += `<li><a href="">${a}</a></li>`)
  );
}

async function displayQuoteFiles() {
  const quotesMenuEl = document.getElementById("quotesMenuEl");

  quoteFiles.forEach(async (q) => {
    const quotes = await fetch(`./pages/quotes/${q[1]}`)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          // window.location = `./pages/quotes/${chosenName}.html`;
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
        <article role="tabpanel" hidden id="${
          q[1].split(".")[0]
        }" class="inner-quote-article">
            <ul>${quotesListEl}</ul>
        </article>
    `
    );
  });
}

(async () => {
  await displayAudioFiles();
  await displayQuoteFiles();
})();
