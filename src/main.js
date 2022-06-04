import './assets/css/style.css';
import GenerateCpf from './modules/GenerateCpf';
import ValidateCpf from './modules/ValidateCpf';

const btnGenerateCpf = document.querySelector('.btn-generate')
const btnValidateCpf = document.querySelector('.btn-validate')
const cpfResult = document.querySelector('.cpf-input')

const removeCpfValidation = () => {
  cpfResult.classList.remove('valid', 'invalid')
  document.querySelector('.icon_check').style.display = 'none'
  document.querySelector('.icon_cancel').style.display = 'none'
}

const showCpfGenerated = () => {
  const cpf = new GenerateCpf()
  cpfResult.value = cpf.generate()
  
  removeCpfValidation()
}

const validateCpf = () => {
  const cpf = new ValidateCpf(cpfResult.value)

  if (cpf.validate()) {
    document.querySelector('.icon_check').style.display = 'block'
    cpfResult.classList.add('valid')
  }
  else {
    document.querySelector('.icon_cancel').style.display = 'block'
    cpfResult.classList.add('invalid')
  }
}

btnGenerateCpf.addEventListener('click', showCpfGenerated)
btnValidateCpf.addEventListener('click', validateCpf)
cpfResult.addEventListener('change', removeCpfValidation)
