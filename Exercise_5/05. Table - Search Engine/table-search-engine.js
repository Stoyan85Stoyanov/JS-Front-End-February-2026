function solve() {

   const tableRows = Array.from(document.querySelectorAll("table.container > tbody > tr"));
   const searchInput = document.getElementById("searchField");

   const searchQuery = searchInput.value;

   for (const row of tableRows) {
      let match = false;
      const cells = Array.from(row.children);

      for (const cell of cells) {

         if (searchQuery !== "" && cell.innerText.includes(searchQuery)) {
            match = true;
            break;
         }
      }

      // If any of the rows contain 
      // the submitted string, add a class select to that row
      // row.classList.toggle("select", hasMatches(row, searchQuery));
      if (match) {
         row.classList.add("select");

      } else {
         row.classList.remove("select");
      }
   }

   // зачистване на търсената информация (бутона Search)
   searchInput.value = "";
}