function toggle() {

    const accordionElement = document.getElementById("accordion");
    const button = accordionElement.querySelector("div.head > span.button");
    // const element = accordionElement.querySelector("div#extra");
    const element = document.getElementById('extra');


    if (element.style.display === "block") {
        element.style.display = "none";
        // button.innerText = "More";
        button.textContent = 'More';


    } else {
        element.style.display = "block";
        // button.innerText = "Less";
        button.textContent = "Less";
    }

}