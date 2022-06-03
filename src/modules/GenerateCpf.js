import ValidateCpf from './ValidateCpf';

export default class GenerateCpf {
  get9RandomDigits(min = 100000000, max = 999999999) {
    return String(Math.round(Math.random() * (max - min) + min))
  }

  formatCpf(cpf) {
    return (
      cpf.slice(0, 3) + '.' + 
      cpf.slice(3, 6) + '.' + 
      cpf.slice(6, 9) + '-' + 
      cpf.slice(9, 11)
    )
  }
  
  generate() {
    const cpfPartial = this.get9RandomDigits()
    const firstDigit = ValidateCpf.generateDigits(cpfPartial)
    const secondDigit = ValidateCpf.generateDigits(cpfPartial + firstDigit)
    
    const cpfGenerated = cpfPartial + firstDigit + secondDigit

    return this.formatCpf(cpfGenerated)
  }
}