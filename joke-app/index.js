// https://api.blablagues.net/?rub=blagues

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const { content } = data.data;
      header.textContent = content.text_head;
      text.textContent =
        content.text !== "" ? content.text : content.text_hidden;
    });
}

getJoke();

document.body.addEventListener("click", getJoke);
