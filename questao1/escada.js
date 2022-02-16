//função:
function ladder(n) {

    //a saída que será modificada a cada iteração
    let output = ''
  
    
    for(let i = 1; i <= n; i++) {
  
      //loop para os espaços:
      for(let j = 0; j < n - i; j++) {
        output += ' '
      }
  
      //loop para os asteriscos:
      for(let k = 0; k < i; k++) {
        output += "*"
      }
  
      //para quebrar a linha
      output += "\n"
    }
    console.log(output)
}
  
  // invocação da função
  ladder(6)