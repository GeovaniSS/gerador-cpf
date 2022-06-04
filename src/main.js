import './assets/css/style.css';
import GenerateCpf from './modules/GenerateCpf';
import ValidateCpf from './modules/ValidateCpf';

const btnGenerateCpf = document.querySelector('.btn-generate')
const btnValidateCpf = document.querySelector('.btn-validate')
const cpfInput = document.querySelector('.cpf-input')

const iconCheck = document.querySelector('.icon_check')
const iconCancel = document.querySelector('.icon_cancel')

const showCpfGenerated = () => {
  const cpf = new GenerateCpf()
  cpfInput.value = cpf.generate()

  removeCpfValidation()
}

const validateCpf = () => {
  const cpf = new ValidateCpf(cpfInput.value)

  if (!cpf.validate()) {
    iconCancel.style.display = 'block'
    return cpfInput.classList.add('invalid')
  }

  iconCheck.style.display = 'block'
  cpfInput.classList.add('valid')
}

const removeCpfValidation = () => {
  cpfInput.classList.remove('valid', 'invalid')
  iconCheck.style.display = 'none'
  iconCancel.style.display = 'none'
}

btnGenerateCpf.addEventListener('click', showCpfGenerated)
btnValidateCpf.addEventListener('click', validateCpf)
cpfInput.addEventListener('change', removeCpfValidation)
