const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const clockTime = document.getElementById('clockTime');
const clockDate = document.getElementById('clockDate');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const progressFills = document.querySelectorAll('.progress-fill');
const transitionLinks = document.querySelectorAll('a[data-nav]');

const quotes = [
  {
    text: 'The harder you work for something, the greater you will feel when you achieve it.',
    author: 'Study Mindset'
  },
  {
    text: 'Small steps each day lead to big results over time.',
    author: 'UPSC Prep Wisdom'
  },
  {
    text: 'Consistent focus is the premium fuel for long-term success.',
    author: 'Academic Energy'
  },
  {
    text: 'Turn every revision into an opportunity to become stronger.',
    author: 'Topper Habit'
  }
];

function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  clockTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  clockDate.textContent = now.toLocaleDateString([], options);
}

function setRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `— ${quote.author}`;
}

function animateProgressBars() {
  progressFills.forEach((fill) => {
    const value = fill.dataset.value || '0%';
    fill.style.width = value;
  });
}

function initNavigationTransition() {
  transitionLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) {
        return;
      }
      event.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = href;
      }, 420);
    });
  });
}

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  sidebarToggle.classList.toggle('active');
});

window.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setRandomQuote();
  animateProgressBars();
  initNavigationTransition();
  setInterval(updateClock, 1000);
});
