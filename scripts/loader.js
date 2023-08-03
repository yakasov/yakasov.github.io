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
  ["Others", "others.txt"],
  ["Others (Crispins)", "others_crispins.txt"],
  ["Teachers", "teachers.txt"],
];

const indexes = [
  "index2019nov7",
  "index2020feb10",
  "index2020apr15",
  "index2020may2",
  "index2020may26",
  "index2020jul11",
  "index2020jul16",
  "index2021jul16",
  "index2022jan20",
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
    const quotes = await fetch(`./res/quotes/${q[1]}`)
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
  });
}

async function displayFBCFreestyleLyrics() {
  const fbcFreestyleLyrics = document.getElementById("fbcFreestyleLyrics");

  const lyrics = await fetch("./res/fbc_freestyle.txt")
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
    })
    .then((data) => {
      return data;
    });

  fbcFreestyleLyrics.innerHTML = lyrics;
}

async function displayIndexes() {
  const indexesMenuEl = document.getElementById("indexesMenuEl");

  indexes.forEach(async (i) => {
    const index = await fetch(`./pages/indexes/${i}.html`)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
      })
      .then((data) => {
        return data;
      });

    indexesMenuEl.insertAdjacentHTML(
      "afterend",
      `
        <article role="tabpanel" id="${i}" class="inner-quote-article">
            ${index}
        </article>
    `
    );
  });
}

(async () => {
  await displayAudioFiles();
  await displayQuoteFiles();
  await displayFBCFreestyleLyrics();
  await displayIndexes();
})();
