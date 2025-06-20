document.addEventListener('DOMContentLoaded', () => {
  // Theme switch
  document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('dark');

  // Language switcher
  window.setLang = lang => {
    const data = JSON.parse(document.getElementById('lang-'+lang).textContent);
    document.getElementById('about').innerHTML = `<h2>🌱 About Me</h2><p>${data.about}</p>`;
    document.getElementById('ml-transition').innerHTML = `<h2>${data.mlHeading}</h2><ul>` +
      data.mlList.map(it=>`<li>${it}</li>`).join('') + `</ul>`;
    document.getElementById('projects').innerHTML = `<h2>${data.projectsHeading}</h2><ul>` +
      `<li><strong>${data.proj1Title}</strong><br><p>${data.proj1Text}</p></li>` +
      `<li><strong>${data.proj2Title}</strong><br><p>${data.proj2Text}</p></li></ul>`;
    document.getElementById('career').innerHTML = `<h2>${data.careerHeading}</h2><p>${data.careerText}</p>` +
      `<button class="toggle-btn" onclick="toggleFinland()">${data.careerHeading.replace('🎯','')} Details</button>` +
      `<div id="finland-block" class="hidden"><p>${data.careerText}</p></div>`;
    document.getElementById('resume').innerHTML = `<h2>${data.resumeHeading}</h2><a href="resume.pdf" class="button">${data.resumeButton}</a><p>${data.resumeSummary}</p>`;
    document.getElementById('contact').innerHTML = `<h2>${data.contactHeading}</h2><div class="icons">
      <a href="https://github.com/Nofflll" target="_blank"><img src="assets/icons/github.svg" alt="GitHub"></a>
      <a href="https://linkedin.com/in/nikitapuchkov" target="_blank"><img src="assets/icons/linkedin.svg" alt="LinkedIn"></a>
      <a href="mailto:your_email@example.com"><img src="assets/icons/email.svg" alt="Email"></a>
    </div><footer><p>${data.footer}</p></footer>`;
  };

  setLang('en');
});

function toggleFinland() {
  document.getElementById('finland-block').classList.toggle('hidden');
}
