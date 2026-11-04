const escena = document.getElementById('escena');

// ===== Generar pétalos =====
for (let i = 0; i < 45; i++) {
  const petalo = document.createElement('div');
  petalo.classList.add('petalo');
  
  petalo.style.left = Math.random() * 100 + 'vw';
  petalo.style.animationDuration = (6 + Math.random() * 9) + 's';
  petalo.style.animationDelay = (Math.random() * 8) + 's';
  petalo.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
  
  const hue = 25 + Math.random() * 25;
  petalo.style.background = `hsl(${hue}, 95%, 55%)`;
  
  escena.appendChild(petalo);
}

// ===== Generar calaveras =====
const posicionesCalaveras = [
  { left: '12%', top: '25%', delay: '0s', size: '2.6rem' },
  { left: '78%', top: '18%', delay: '1.5s', size: '3.2rem' },
  { left: '25%', top: '55%', delay: '0.8s', size: '2.4rem' },
  { left: '68%', top: '48%', delay: '2.2s', size: '2.9rem' },
  { left: '45%', top: '30%', delay: '1.1s', size: '2.2rem' },
  { left: '85%', top: '60%', delay: '0.4s', size: '2.7rem' },
  { left: '8%',  top: '65%', delay: '1.8s', size: '2.5rem' },
];

posicionesCalaveras.forEach(pos => {
  const calavera = document.createElement('div');
  calavera.classList.add('calavera');
  calavera.textContent = '💀';
  calavera.style.left = pos.left;
  calavera.style.top = pos.top;
  calavera.style.animationDelay = pos.delay;
  calavera.style.fontSize = pos.size;
  escena.appendChild(calavera);
});

// ===== Generar velas =====
const posicionesVelas = ['18%', '32%', '48%', '63%', '78%'];

posicionesVelas.forEach((left, i) => {
  const vela = document.createElement('div');
  vela.classList.add('vela');
  vela.style.left = left;
  vela.style.animationDelay = (i * 0.3) + 's';
  escena.appendChild(vela);
});

// ===== Flores en el altar =====
const flores = ['🌼', '🌺', '🌸', '🌼', '🌺', '🌸', '🌼'];
flores.forEach((emoji, i) => {
  const flor = document.createElement('div');
  flor.classList.add('flor-altar');
  flor.textContent = emoji;
  flor.style.left = (10 + i * 12) + '%';
  flor.style.animationDelay = (i * 0.4) + 's';
  document.body.appendChild(flor);
});
