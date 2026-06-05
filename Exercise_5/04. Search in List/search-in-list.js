function solve() {

   const listItems = Array.from(document.querySelectorAll("ul#towns > li"));
   const inputElement = document.getElementById("searchText");
   const searchQuery = inputElement.value;
   const resultContainer = document.getElementById("result");


   let matchCountResult = 0;

   for (const item of listItems) {

      if (item.innerText.includes(searchQuery)) {
         item.style.fontWeight = "bold";
         item.style.textDecoration = "underline";
         matchCountResult++;

      } else {
         item.style = null;
      }

   }

   resultContainer.innerText = `${matchCountResult} matches found`;

}