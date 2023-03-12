window.onload = async function () {
    const chosenName = document.location.href.split("?").pop()
    const quotes = await fetch(`quotes/${chosenName}.txt`)
      .then((response) => {
        if (response.ok) {return response.text()}
        else {window.location = `quotes/${chosenName}.html`}
      })
      .then((data) => {
        return data
      });
    const quotesList = quotes.split("\n")

    // let elementBody = document.getElementById("body-main")
    let elementName = document.getElementById("h1-name")
    let elementQuotes = document.getElementById("div-quotes")

    // elementBody.classList.add(chosenName)
    elementName.innerHTML = quotesList[0]
    quotesList.slice(1).forEach((quote) => {
      elementQuotes.innerHTML += `\
      <blockquote><h2>${quote}</h2></blockquote>
      `
    })
  }