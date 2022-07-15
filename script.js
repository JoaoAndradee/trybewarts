const loginCadastrado = 'tryber@teste.com';
const senhaCadastrada = '123456';
const loginInformado = document.getElementById('email');
const senhaInformada = document.getElementById('senha');
const buttonLogin = document.getElementById('button');

function verificaLogin() {
  if (loginInformado.value === loginCadastrado && senhaInformada.value === senhaCadastrada) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', verificaLogin);

const button = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
checkbox.addEventListener('click', (e) => {
  if (e.target.checked) {
    button.removeAttribute('disabled');
  } else {
    button.disabled = true;
  }
});
