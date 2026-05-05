// window.addEventListener("load", solve);

// function solve() {


//   const form = document.querySelector("form.registerEvent");
//   const emailInput = form.querySelector("input#email");
//   const eventInput = form.querySelector("input#event");
//   const locationInput = form.querySelector("input#location");
//   const nextButton = form.querySelector("button#next-btn");

//   const previewList = document.querySelector("ul#preview-list");
//   const finalList = document.querySelector("ul#event-list");

//   nextButton.addEventListener("click", () => {

//     if (!emailInput.value || !eventInput.value || !locationInput.value) {
//       return;
//     }


//     const data = { email: emailInput.value, event: eventInput.value, location: locationInput.value };

//     const emailHeader = document.createElement("h4");
//     emailHeader.textContent = data.email;

//     const eventParagraph = createEventDetails("Event:", data.event);
//     const locationParagraph = createEventDetails("Location:", data.location);

//     const article = document.createElement("article");
//     article.appendChild(emailHeader);
//     article.appendChild(eventParagraph);
//     article.appendChild(locationParagraph);

//     const editButton = createActionButton("edit");
//     const applyButton = createActionButton("apply");

//     const listItem = document.createElement("li");
//     listItem.className = "application";
//     listItem.appendChild(article);
//     listItem.appendChild(editButton);
//     listItem.appendChild(applyButton);

//     editButton.addEventListener("click", () => {
//       listItem.remove();

//       emailInput.value = data.email;
//       eventInput.value = data.event;
//       locationInput.value = data.location;
//     });


//     applyButton.addEventListener("click", () => {
//       listItem.remove();

//       editButton.remove();
//       applyButton.remove();
//       finalList.appendChild(listItem);
//     });


//     previewList.appendChild(listItem);

//     emailInput.value = "";
//     eventInput.value = "";
//     locationInput.value = "";
//   });


//   function createEventDetails(name, value) {
//     const strong = document.createElement("strong");
//     strong.textContent = name;

//     const newLine = document.createElement("br");

//     const paragraph = document.createElement("p");
//     paragraph.appendChild(strong);
//     paragraph.appendChild(newLine);

//     paragraph.appendChild(document.createTextNode(value));

//     return paragraph;
//   }

  
//   function createActionButton(action) {
//     const button = document.createElement("button");
//     button.classList.add("action-btn", action);
//     button.textContent = action;

//     return button;
//   }

// }


window.addEventListener("load", solve);

function solve() {
  const emailInput = document.getElementById("email");
  const eventInput = document.getElementById("event");
  const locationInput = document.getElementById("location");
  const nextBtn = document.getElementById("next-btn");

  const previewList = document.getElementById("preview-list");
  const finalList = document.getElementById("event-list");

  nextBtn.addEventListener("click", function () {

    if (!emailInput.value || !eventInput.value || !locationInput.value) {
      return;
    }

    
    const email = emailInput.value;
    const event = eventInput.value;
    const location = locationInput.value;

    
    const li = document.createElement("li");
    li.className = "application";

    const article = document.createElement("article");

    const h4 = document.createElement("h4");
    h4.textContent = email;

    const pEvent = document.createElement("p");
    const strongEvent = document.createElement("strong");
    strongEvent.textContent = "Event:";
    pEvent.appendChild(strongEvent);
    pEvent.appendChild(document.createElement("br"));
    pEvent.appendChild(document.createTextNode(event));

    const pLocation = document.createElement("p");
    const strongLocation = document.createElement("strong");
    strongLocation.textContent = "Location:";
    pLocation.appendChild(strongLocation);
    pLocation.appendChild(document.createElement("br"));
    pLocation.appendChild(document.createTextNode(location));

    article.appendChild(h4);
    article.appendChild(pEvent);
    article.appendChild(pLocation);

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.className = "action-btn edit";

    const applyBtn = document.createElement("button");
    applyBtn.textContent = "apply";
    applyBtn.className = "action-btn apply";

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(applyBtn);

    previewList.appendChild(li);

   
    emailInput.value = "";
    eventInput.value = "";
    locationInput.value = "";

    
    editBtn.addEventListener("click", function () {
      li.remove();
      emailInput.value = email;
      eventInput.value = event;
      locationInput.value = location;
    });

    
    applyBtn.addEventListener("click", function () {
      editBtn.remove();
      applyBtn.remove();
      finalList.appendChild(li);
    });
  });
}