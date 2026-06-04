function toggle() {

    const accordionElement = document.getElementById("accordion");
    const button = accordionElement.querySelector("div.head > span.button");
    const element = accordionElement.querySelector("div#extra");


    if (element.style.display === "block") {
        element.style.display = "none";
        button.innerText = "More";


    } else {
        element.style.display = "block";
        button.innerText = "Less";
    }

}