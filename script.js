const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const heroImage = document.getElementById('heroImage');
if (heroImage) {
  const heroSlides = [
    'https://content.skyscnr.com/m/17facff22bc5efda/original/GettyImages-138160482_doc.jpg?resize=1224%3Aauto',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80'
  ];

  let heroIndex = 0;
  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroImage.src = heroSlides[heroIndex];
  }, 5000);
}

const filterButtons = document.querySelectorAll('.filter-btn');
const destinationCards = document.querySelectorAll('.info-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    destinationCards.forEach((card) => {
      const matches = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.classList.toggle('hidden', !matches);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});

const contactForms = document.querySelectorAll('form');
contactForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Message Sent!';
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        form.reset();
      }, 2000);
    }
  });
});
