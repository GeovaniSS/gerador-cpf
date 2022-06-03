import './assets/css/style.css';
import GenerateCpf from './modules/GenerateCpf.js';

(() => {
  const cpf = new GenerateCpf()
  const cpfResult = document.querySelector('.cpf-gerado')
  cpfResult.innerText = cpf.generate()
})()