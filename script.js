const toggleBtn = document.getElementById("mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  toggleBtn.textContent = isLight ? "💡" : "🌙";
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  // Cria e adiciona camada de brilho
  const glare = document.createElement('div');
  glare.classList.add('glare');
  card.appendChild(glare);

  // Cria sombra interna
  const shadowInner = document.createElement('div');
  shadowInner.classList.add('shadow-inner');
  card.appendChild(shadowInner);

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 3;
    const centerY = rect.height / 3;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * 20;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;

    // Movimento do brilho
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    glare.style.transform = `translate(${glareX - 100}%, ${glareY - 100}%) rotate(25deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    glare.style.transform = 'translateX(-100%) translateY(-100%) rotate(25deg)';
  });
});


const ovni = document.getElementById("ovni");

ovni.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  ovni.style.left = `${x}px`;
  ovni.style.top = `${y}px`;
});


