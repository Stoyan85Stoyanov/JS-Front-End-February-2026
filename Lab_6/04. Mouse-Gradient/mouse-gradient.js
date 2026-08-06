function attachGradientEvents() {

    const gradientDivEL = document.getElementById('gradient');
    const resultDivEl = document.getElementById('result');

    gradientDivEL.addEventListener('mousemove', handleMouseMove);

    function handleMouseMove(event) {

        const cursorDistanceFromLeft = event.offsetX;

        const divElWidth = event.target.clientWidth;

        const percent = Math.floor(cursorDistanceFromLeft / divElWidth * 100);
        resultDivEl.textContent = `${percent}%`;
    }
}
