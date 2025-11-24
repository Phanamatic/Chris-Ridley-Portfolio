const toggle = document.querySelector('.theme-toggle');
const body = document.body;
const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

const applyTheme = (mode) => {
  body.classList.toggle('light', mode === 'light');
  toggle.textContent = mode === 'light' ? '☀' : '☾';
};

const stored = localStorage.getItem('cr-theme');
const initial = stored || (prefersLight.matches ? 'light' : 'dark');
applyTheme(initial);

prefersLight.addEventListener('change', (e) => {
  const mode = e.matches ? 'light' : 'dark';
  applyTheme(mode);
  localStorage.setItem('cr-theme', mode);
});

toggle.addEventListener('click', () => {
  const next = body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('cr-theme', next);
});

const navLinks = document.querySelectorAll('.nav a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav a[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach((l) => l.classList.remove('active'));
      link?.classList.add('active');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('section').forEach((section) => observer.observe(section));
