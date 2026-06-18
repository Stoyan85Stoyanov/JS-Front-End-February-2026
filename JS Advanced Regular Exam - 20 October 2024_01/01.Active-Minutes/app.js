window.addEventListener("load", solve);

function solve() {

  const activityTypeInputElement = document.getElementById("type");
  const intensityInputElement = document.getElementById("intensity");
  const caloriesBurnedInputElement = document.getElementById("calories");
  const durationMinutesInputElement = document.getElementById("duration");
  const dateInputElement = document.getElementById("date");

  const addActivityButton = document.getElementById("add-activity");

  const previewActivityUlElement = document.getElementById("preview-activity");
  const activitiesTableTbodyElement = document.getElementById("activities-table");


  addActivityButton.addEventListener("click", handleAddActivity);

  function handleAddActivity(event) {

    const activityType = activityTypeInputElement.value.trim();
    const intensity = intensityInputElement.value.trim();
    const caloriesBurned = caloriesBurnedInputElement.value.trim();
    const durationMinutes = durationMinutesInputElement.value;
    const date = dateInputElement.value;

    if (!activityType || !intensity || !caloriesBurned || !durationMinutes || !date) {
      return;
    }

    const liElement = document.createElement("li");
    const articleElement = document.createElement("article");

    const activityTypePElement = document.createElement("p");
    activityTypePElement.textContent = `Activity: ${activityType}`;

    const intensityPElement = document.createElement("p");
    intensityPElement.textContent = `Intensity: ${intensity}`;

    const durationMinutesPElement = document.createElement("p");
    durationMinutesPElement.textContent = `Duration: ${durationMinutes} min.`;

    const datePElement = document.createElement("p");
    datePElement.textContent = `Date: ${date}`;

    const caloriesBurnedPElement = document.createElement("p");
    caloriesBurnedPElement.textContent = `Calories: ${caloriesBurned}`;

    const divElement = document.createElement("div");
    divElement.classList.add("btn-container");

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("edit-btn");
    editButtonElement.textContent = "Edit";

    const nextButtonElement = document.createElement("button");
    nextButtonElement.classList.add("next-btn");
    nextButtonElement.textContent = "Next";

    articleElement.appendChild(activityTypePElement);
    articleElement.appendChild(intensityPElement);
    articleElement.appendChild(durationMinutesPElement);
    articleElement.appendChild(datePElement);
    articleElement.appendChild(caloriesBurnedPElement);

    divElement.appendChild(editButtonElement);
    divElement.appendChild(nextButtonElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);

    previewActivityUlElement.appendChild(liElement);

    activityTypeInputElement.value = "";
    intensityInputElement.value = "";
    caloriesBurnedInputElement.value = "";
    durationMinutesInputElement.value = "";
    dateInputElement.value = "";

    addActivityButton.disabled = true;


    editButtonElement.addEventListener("click", handleEdit);

    function handleEdit() {
      activityTypeInputElement.value = activityTypePElement.textContent
        .replace("Activity: ", "");
      intensityInputElement.value = intensityPElement.textContent
        .replace("Intensity: ", "");
      caloriesBurnedInputElement.value = caloriesBurnedPElement.textContent
        .replace("Calories: ", "");
      durationMinutesInputElement.value = durationMinutesPElement.textContent
        .replace("Duration: ", "").replace(" min.", "");
      dateInputElement.value = datePElement.textContent
        .replace("Date: ", "");

      liElement.remove();

      addActivityButton.disabled = false;
    }

    nextButtonElement.addEventListener("click", handleNext);

    function handleNext() {

      const activityType = activityTypePElement.textContent.replace("Activity: ", "");
      const intensity = intensityPElement.textContent.replace("Intensity: ", "");
      const duration = durationMinutesPElement.textContent.replace("Duration: ", "").replace(" min.", "");
      const date = datePElement.textContent.replace("Date: ", "");
      const calories = caloriesBurnedPElement.textContent.replace("Calories: ", "");

      const row = document.createElement("tr");

      const typeCell = document.createElement("td");
      typeCell.className = "type-cell";
      typeCell.textContent = activityType;

      const durationCell = document.createElement("td");
      durationCell.className = "duration-cell";
      durationCell.textContent = duration;

      const caloriesCell = document.createElement("td");
      caloriesCell.className = "calories-cell";
      caloriesCell.textContent = calories;

      const dateCell = document.createElement("td");
      dateCell.className = "date-cell";
      dateCell.textContent = date;

      const intensityCell = document.createElement("td");
      intensityCell.className = "intensity-cell";
      intensityCell.textContent = intensity;

      const actionsCell = document.createElement("td");
      actionsCell.className = "btn-cell";

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", () => {
        row.remove();
      });

      actionsCell.appendChild(deleteButton);

      row.appendChild(typeCell);
      row.appendChild(durationCell);
      row.appendChild(caloriesCell);
      row.appendChild(dateCell);
      row.appendChild(intensityCell);
      row.appendChild(actionsCell);

      activitiesTableTbodyElement.appendChild(row);

      liElement.remove();

      addActivityButton.disabled = false;
    }
  }
}
