document.addEventListener('DOMContentLoaded', solve);

function solve() {

  let rightAnswers = 0;

  const sections = document.querySelectorAll('.question');
  const results = document.getElementById('results');

  const correctAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];

  let current = 0;

  sections.forEach(section => {
    section.addEventListener('click', (event) => {
      if (event.target.tagName !== 'LI') {
        return;
      }

      if (event.target.textContent === correctAnswers[current]) {
        rightAnswers++;
      }

      sections[current].classList.add('hidden');

      current++;

      if (current < sections.length) {
        sections[current].classList.remove('hidden');

      } else {
        showResult();
      }

    });
  });

  function showResult() {
    results.style.display = 'block';

    const h1 = document.createElement('h1');

    if (rightAnswers === 3) {
      h1.textContent = 'You are recognized as top JavaScript fan!';

    } else if (rightAnswers === 1) {
      h1.textContent = `You have ${rightAnswers} right answer`;
      
    } else {
      h1.textContent = `You have ${rightAnswers} right answers`;
    }

    results.appendChild(h1);
  }
}