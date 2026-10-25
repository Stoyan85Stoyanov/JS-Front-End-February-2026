// function solve() {

//   function transform(words, namingConvention) {

//     if (namingConvention === "Camel Case") {
//       return words.map((x, y) => (y === 0 ? x.toLowerCase() : capitalize(x))).join("");
//     }

//     if (namingConvention === "Pascal Case") {
//       return words.map((x) => capitalize(x)).join("");

//     }

//     return "Error!";

//   }

//   function capitalize(word) {

//     const result = `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
//     return result;

//   }


//   const textInput = document.getElementById("text");
//   const words = textInput.value.split(" ");
//   const namingConvention = document.getElementById("naming-convention").value;

//   const result = transform(words, namingConvention);
//   const resultElement = document.getElementById("result");
//   resultElement.innerText = result;

// }



function solve() {

  const textInput = document.getElementById("text");
  const words = textInput.value.split(" ");
  const namingConvention = document.getElementById("naming-convention").value;

  function transform(words, namingConvention) {

    if (namingConvention === "Camel Case") {
      const result = words.map((x, y) => (y === 0 ? x.toLowerCase() : capitalize(x))).join("");
      return result;

    } else if (namingConvention === "Pascal Case") {
      const result = words.map((x) => capitalize(x)).join("");
      return result;

    } else {
      return "Error!";
    }

  }

  function capitalize(word) {

    const result = `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
    return result;

  }

  const result = transform(words, namingConvention);
  const resultElement = document.getElementById("result");
  resultElement.innerText = result;

}

