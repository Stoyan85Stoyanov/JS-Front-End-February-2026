function solve() {

    const inputElement = document.querySelector("textarea");
    const bestRestaurantOutput = document.querySelector("div#bestRestaurant > p");
    const workersOutput = document.querySelector("div#workers > p");

    const restaurants = {};

    // •	Display the best restaurant of 
    // all the added restaurants with its average salary and best salary. 
    for (const entry of JSON.parse(inputElement.value)) {
        const [name, workersData] = entry.split(" - ");

        if (!restaurants.hasOwnProperty(name)) restaurants[name] = { workers: [] };

        for (const pair of workersData.split(", ")) {
            const [worker, salary] = pair.split(" ");
            restaurants[name].workers.push({ name: worker, salary: Number(salary) });
        }
    }

    // •	If there is a restaurant in the input array that is added more than once,
    //  you need to add new workers to the old ones and update the values of the 
    // average salary and the best salary.
    for (const restaurant in restaurants) {
        const salaries = restaurants[restaurant].workers.map(w => w.salary);

        let averageSalary = 0;
        let maxSalary = 0;

        if (salaries.length !== 0) {
            averageSalary = salaries.reduce((a, b) => a + b, 0) / salaries.length;
            maxSalary = Math.max(...salaries);

        }

        restaurants[restaurant].averageSalary = averageSalary;
        restaurants[restaurant].maxSalary = maxSalary;
    }

    // •	The best restaurant is the restaurant with the highest average salary. 
    // If two restaurants have the same average salary the best restaurant is the 
    // first one added.
    let bestRestaurant = null;

    for (const current in restaurants) {
        if (bestRestaurant == null || restaurants[current].averageSalary > restaurants[bestRestaurant].averageSalary) {
            // имаме най-добър ресторант
            bestRestaurant = current;
        }
    }

    // •	Display all workers in the best restaurant with their salaries.
    // The best restaurant's workers should be sorted by their salaries in 
    // descending order.
      if (bestRestaurant == null) {  // когато няма най-добри ресторанти
          bestRestaurantOutput.textContent = "";
          workersOutput.textContent = "";

      } else {
          bestRestaurantOutput.textContent = `Name: ${bestRestaurant} Average Salary: ${restaurants[bestRestaurant].averageSalary.toFixed(2)} Best Salary: ${restaurants[bestRestaurant].maxSalary.toFixed(2)}`;
          workersOutput.textContent = restaurants[bestRestaurant].workers.sort((x, y) => y.salary - x.salary).map(z => `Name: ${z.name} With Salary: ${z.salary}`).join(" ");
      }

}    
