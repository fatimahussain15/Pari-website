// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));

  // Countdown
  function updateCountdown() {
    const launch = new Date(window.pariLaunchDate || '2026-02-25T00:00:00');
    const now = new Date();
    const diff = launch - now;
    if (diff <= 0) {
      document.getElementById('countdown').innerHTML = '<p style="color:var(--gold);font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-style:italic;position:relative;">We\'re live! Shop now at pari-co.com ✦</p>';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('days').textContent = String(d).padStart(2, '0');
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('mins').textContent = String(m).padStart(2, '0');
    document.getElementById('secs').textContent = String(s).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
