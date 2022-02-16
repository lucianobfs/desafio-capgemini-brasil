// função:
function securePassword(password) {
  
    // condições a serem atendidas, para isso foi utilizado variáveis booleanas:

    // a senha deve ter 6 caracteres
    let atLeastSix = false

    // a senha deve ter pelo menos um número
    let hasNumber = false

    // a senha deve ter pelo menos uma letra minúscula
    let hasLowerCase = false
  
    // a senha deve ter pelo menos uma letra maiúscula
    let hasUpperCase = false

    // a senha deve ter pelo menos um dos caracteres especiais: !@#$%^&*()-+
    let hasSpecialChar = false
  
    // quantos caracteres devem ser adicionados:
    let result = 0
  
    // variável auxiliar
    let teste = 0
  
    
  
    // array auxiliar para analisar os casos de teste
    let aux = Array.from(password)

    // é verificado inicialmente se a senha tem length maior ou igual a 6
    if (aux.length >= 6) {
      atLeastSix = true
    }
  
    // loop que se repetirá a depender do tamanho da senha
    for(let i = 0; i < aux.length; i++) {

    // condicionais a serem atendidas:
    
    // verificar se o caractere da iteração corresponde a uma senha, aqui foi utilizado códigos da tabela ascii
      if (aux[i].charCodeAt() >= 48 && aux[i].charCodeAt() <= 57) {
        
        hasNumber = true

      }
  
    // verificar se o caractere da iteração corresponde a uma letra minúscula, aqui foi utilizado códigos da tabela ascii
      if (aux[i].charCodeAt() >= 97 && aux[i].charCodeAt() <= 122) {
        
        hasLowerCase = true

      }
  
    // verificar se o caractere da iteração corresponde a uma letra maiúscula, aqui foi utilizado códigos da tabela ascii
      if (aux[i].charCodeAt() >= 65 && aux[i].charCodeAt() <= 90) {
        
        hasUpperCase = true

      }
  
    // verificar se o caractere da iteração corresponde a um caractere especial dentre os listados
      if (aux[i] === "!" || aux[i] === "@" || aux[i] === "#" || aux[i] === "$" || aux[i] === "%" || aux[i] === "^" || aux[i] === "&" || aux[i] === "*" || aux[i] === "(" || aux[i] === ")" || aux[i] === "-" || aux[i] === "+") {
        
        hasSpecialChar = true

      }
  
      
    }

    // após o loop, é necessário mais condicionais para analisar se os requisitos foram correspondidos e calcular o número de caracteres a serem adicionados
  
    // no caso de não ter 6 caracteres, e além disso se as variáveis de verificação tiverem valor falso, o resultado é incrementado em 1
    if (atLeastSix === false) {
      
      if (hasNumber === false) {
        
        result++

      }
  
      if (hasLowerCase === false) {
        
        result++

      }
  
      if (hasUpperCase === false) {
        
        result++

      }
  
      if (hasSpecialChar === false) {
        
        result++

      }

    // se ainda assim a quantidade de caracteres nao atingir 6, usamos a variável de teste para complementar e gerar o valor correto
      if (result + aux.length < 6) {
        teste = result + aux.length
        result = result + 6 - teste
      }
      
    // o resultado é printado no console
      console.log(result)
    }


    // no caso de somente a condição de no mínimo 6 caracteres nao ter sido atendida
    if (atLeastSix === false && hasNumber === true && hasLowerCase === true && hasUpperCase === true && hasSpecialChar === true) {
      result = 6 - aux.length
  
    // o resultado é printado no console  
      console.log(result)
    }
    
    // se todas as condições são atendidas, não é necessário adicionar mais caracteres, logo a saída é zero
    if (atLeastSix === true && hasNumber === true && hasLowerCase === true && hasUpperCase === true && hasSpecialChar === true) {
      result = 0
     
    // o resultado é printado no console   
      console.log(result)
  
    }
  

    // no caso de ter 6 caracteres e pelo menos uma condição ser falsa 
    if (atLeastSix === true && (hasNumber === false || hasLowerCase === false || hasUpperCase === false || hasSpecialChar === false) ) {

    // se alguma condição a seguir for falsa, o resultado é incrementado em 1
  
      if (hasNumber === false) {
        
        result++
      }
  
      if (hasLowerCase === false) {
        
        result++
      }
  
      if (hasUpperCase === false) {
        
        result++
      }
  
      if (hasSpecialChar === false) {
        
        result++
      }
  
  
    // o resultado é printado no console     
      console.log(result)
    }
  
  }
  
    // invocação da função
    securePassword("Ya3")