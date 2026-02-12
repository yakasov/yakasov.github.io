let timer = 0;
let fastTimer = 0;
let dotCounter = 100;
let showDash = false;
let firstPrint = false;
let loginState = 0;
let logPrint = false;

const text = document.getElementById("text");
const dash = document.getElementById("input-dash");

setInterval(() => {
  timer += 0.5;
  timerEvents();
}, 500);

setInterval(() => {
  fastTimer += 2;
  loginType();
}, 200);

function timerEvents() {
  inputDashBlink();
  addDots();

  if (timer === 1.5) {
    text.innerText = STRINGS.first;
  }

  if (timer === 2.5) {
    text.innerText += "\n\nChecking credentials";
    dotCounter = 0;
  }

  if (timer === 9) {
    text.innerHTML += STRINGS.outdatedCredentials;
    fastTimer = 0;
    loginState = 1;
  }

  if (loginState === 2) {
    text.innerHTML += STRINGS.usernameAccepted;
    dotCounter = -10;
    loginState = 3;
  }

  if (loginState === 3 && dotCounter === 10 && !logPrint) {
    text.innerHTML += STRINGS.lastLog;
    logPrint = true;
  }
}

function loginType() {
  if (loginState === 1) {
    const login = document.getElementById("input");

    if (fastTimer === 16) {
      login.innerHTML += "j";
    }
    if (fastTimer === 18) {
      login.innerHTML += "l";
    }
    if (fastTimer === 20) {
      login.innerHTML += "a";
    }
    if (fastTimer === 22) {
      login.innerHTML += "w";
    }
    if (fastTimer === 24) {
      login.innerHTML += "s";
    }
    if (fastTimer === 28) {
      login.innerHTML += "o";
    }
    if (fastTimer === 30) {
      login.innerHTML += "n";
    }
    if (fastTimer === 34) {
      loginState = 2;
    }
  }
}

function inputDashBlink() {
  if (!firstPrint) return;

  if ((timer * 2) % 2 === 0) {
    showDash = !showDash;
  }

  if (showDash) {
    dash.classList.add("white");
    dash.classList.remove("dgrey");
  } else {
    dash.classList.add("dgrey");
    dash.classList.remove("white");
  }
}

function addDots() {
  if (dotCounter < 10) {
    text.innerHTML += ".";
    dotCounter++;
  }
}
