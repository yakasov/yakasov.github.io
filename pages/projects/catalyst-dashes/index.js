const TOTALLY_NOT_URL_FOR_API = "https://jmcd.uk/mec/";

let player = null;
const uploadTimes = {};
let benTimes = {};
let yemsTimes = {};

function selectButton(id) {
  const buttonB = document.getElementById("buttonB");
  const buttonY = document.getElementById("buttonY");

  if (id === "Ben") {
    buttonB.classList.add("selected");
    buttonY.classList.remove("selected");
    player = "ben";
  } else if (id === "Yems") {
    buttonY.classList.add("selected");
    buttonB.classList.remove("selected");
    player = "yems";
  }

  document.getElementById("uploadButton").classList.remove("disabled");
}

function uploadFile() {
  if (!player) {
    return;
  }

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "*/*";
  fileInput.click();

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        await processFile(e.target.result);
      };
      reader.onerror = (e) => {
        console.error("Error reading file:", e);
        alert("Failed to read file!");
      };
      reader.readAsArrayBuffer(file);
    }
  });
}

async function processFile(buffer) {
  const dataView = new DataView(buffer);

  const chunks = [];
  let textChunk = "";
  for (let i = 0; i < dataView.byteLength; i++) {
    const byte = dataView.getUint8(i);

    // If byte is in English ASCII range
    if (byte >= 0x20 && byte <= 0x7e) {
      textChunk += String.fromCharCode(byte);
    } else if (textChunk.length > 0) {
      chunks.push(textChunk);
      textChunk = "";
    }
  }

  chunks.forEach((c, i) => {
    if (c.startsWith("ch_rrt_") && c.includes("time")) {
      const t = c.replace(/_\d+$/, "");

      if (chunks[i + 1] != 9999999) {
        uploadTimes[t] = parseInt(chunks[i + 1]);
      }
    }
  });

  await saveTimes();
  showTimes();
}

function formatTime(t) {
  if (t < 6000) {
    return (t / 100).toFixed(2);
  }

  const mins = Math.floor(t / 6000);
  return `${mins}:${((t % 6000) / 100).toFixed(2)}`;
}

async function getTimes() {
  const url = `${TOTALLY_NOT_URL_FOR_API}getLeaderboard`;

  benTimes = await fetch(`${url}/ben`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((r) => r.json())
    .then((j) => j.data);
  yemsTimes = await fetch(`${url}/yems`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((r) => r.json())
    .then((j) => j.data);
}

async function saveTimes() {
  const url = `${TOTALLY_NOT_URL_FOR_API}setLeaderboard`;
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      player,
      times: uploadTimes,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (player === "ben") {
    benTimes = uploadTimes;
  } else {
    yemsTimes = uploadTimes;
  }
}

function showTimes() {
  Object.entries(benTimes).forEach(([t, v]) => {
    document.getElementById(`${t}_ben`).innerText = formatTime(v);
  });
  Object.entries(yemsTimes).forEach(([t, v]) => {
    document.getElementById(`${t}_yems`).innerText = formatTime(v);
  });

  Object.entries(uploadTimes).forEach(([t, v]) => {
    document.getElementById(`${t}_${player}`).innerText = formatTime(v);
  });

  Object.keys(benTimes).forEach((d) => {
    if (benTimes[d] > yemsTimes[d]) {
      document.getElementById(`${d}_ben`).classList.remove("green");
      document.getElementById(`${d}_yems`).classList.add("green");
    } else if (benTimes[d] < yemsTimes[d]) {
      document.getElementById(`${d}_ben`).classList.add("green");
      document.getElementById(`${d}_yems`).classList.remove("green");
    }
  });
}

async function loadData() {
  await getTimes();
  showTimes();
}

document.addEventListener("DOMContentLoaded", async () => await loadData());
