function paresAnagramas(palavra) {
  
    let arrayExclusao = []
  
      console.log(palavra.split('').reduce((acc, letra, i) => {
        if (!arrayExclusao.includes(letra)) {
          if (palavra.substring(i+1).includes(letra)) {
            acc++
            arrayExclusao.push(letra)
          }
          if(palavra.includes(letra+palavra.split("")[i+1])) {
            acc++
            arrayExclusao.push(letra)
          }
        }
        return acc
      }, 0))
    
  }
  
  paresAnagramas("ovo")