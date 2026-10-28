function solve() {

   // const listItems = Array.from(document.querySelectorAll("ul#towns > li"));
   const listItems = document.querySelectorAll('#towns li');
   // const inputElement = document.getElementById('searchText');
   const inputElement = document.querySelector('#searchText');
   const searchQuery = inputElement.value;
   const resultContainer = document.getElementById('result');


   let matchCount = 0;

   for (const item of listItems) {

      if (item.innerText.includes(searchQuery)) {
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         matchCount++;

      }

      // } else {
      //    item.style = null;
      // }

   }

   // resultContainer.innerText = `${matchCountResult} matches found`;
   resultContainer.textContent = `${matchCount} matches found`;

}