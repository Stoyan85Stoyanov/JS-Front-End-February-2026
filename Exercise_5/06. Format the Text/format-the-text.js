function solve() {

  const textareaElement = document.querySelector("textarea#input");
  const text = textareaElement.value;

  const outputContainer = document.querySelector("div#output");

  const sentences = text
    .trim()
    .split(/(?<=[.!?])\s*/)
    .filter((s) => s.length > 0);

  const paragraphs = [];

  for (let i = 0; i < sentences.length; i += 3) {
     // построяване на <p>
    const p = document.createElement('p');
    p.textContent = sentences.slice(i, i + 3).join(" ");
    paragraphs.push(p);
  }

  // <p> стават част от текста а не част от HTML (затова използваме именно innerHTML)
  // РАБОТИ, НО НЕ Е БЕЗОПАСНО !!!
  // outputContainer.innerHTML= paragraphs.map((x) => `<p>${x}</p>`).join("");

  // за да се зачисти вече създадени контейнери!!!!
    outputContainer.replaceChildren(...paragraphs);

}
