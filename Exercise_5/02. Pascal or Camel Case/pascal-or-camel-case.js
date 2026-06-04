function solve() {

  function transform(words, namingConvention) {

    if (namingConvention === "Camel Case") {
      return words.map((x, y) => (y === 0 ? x.toLowerCase() : capitalize(x))).join("");
    }

    if (namingConvention === "Pascal Case") {
      return words.map((x) => capitalize(x)).join("");

    }

    return "Error!";

  }

  function capitalize(word) {
    return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;

  }


  const textInput = document.getElementById("text");
  const words = textInput.value.split(" ");
  const namingConvention = document.getElementById("naming-convention").value;

  const result = transform(words, namingConvention);
  const resultElement = document.getElementById("result");
  resultElement.innerText = result;

}

