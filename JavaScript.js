/* T11 — Música com botão de tocar/pausar */

const rsMusica = document.getElementById('musica');
let rsTocando = false;
const rsBotao = document.createElement('button');
rsBotao.textContent = 'Tocar música';
rsBotao.style.position = 'fixed';
rsBotao.style.bottom = '20px';
rsBotao.style.right = '20px';
rsBotao.style.padding = '12px 24px';
rsBotao.style.borderRadius = '50px';
rsBotao.style.border = 'none';
rsBotao.style.background = '#4b2e1a';
rsBotao.style.color = '#fff8f0';
rsBotao.style.fontWeight = '600';
rsBotao.style.cursor = 'pointer';
rsBotao.style.boxShadow = '0 8px 18px rgba(75, 46, 26, 0.25)';
rsBotao.style.zIndex = '999';
document.body.appendChild(rsBotao);

/* T11 — Alterna entre tocar e pausar */
function rsAlternarMusica() {
  if (rsTocando) {
    rsMusica.pause();
    rsBotao.textContent = 'Tocar música';
    rsTocando = false;
  } else {
    rsMusica.play();
    rsBotao.textContent = 'Pausar música';
    rsTocando = true;
  }
}

/* T11 — Evento no botão */
rsBotao.addEventListener('click', rsAlternarMusica);

/* T8 — Envio do formulário */
function rsEnviar(evento) {
  evento.preventDefault();
  alert('Mensagem enviada! Obrigado pelo contato ☕');
  evento.target.reset();
}

const rsForm = document.getElementById('formContato');
rsForm.addEventListener('submit', rsEnviar);