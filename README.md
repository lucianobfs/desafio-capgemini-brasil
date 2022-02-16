# Desafio Capgemini Brasil - Luciano Santana

Olá, sou Luciano Santana, participante da Academia Técnica Capgemini 2022. Segue minhas soluções para o Desafio de Programação:



# Instruções:

As questões foram feitas usando VSCode, cada questão possui um arquivo HTML e JavaScript associado, o index.html contém apenas o enunciado da questão. Associado a extensão Live Server do VSCode, é só abrir o index.html e ver o console do desenvolvedor, que lá está a saída esperada para a questão.

Também está disponível no index.html e no README.md os links das questões no REPLIT.

A solução também pode ser verificada colando o código em JavaScript em alguma IDE de preferencia do examinador.

## O que foi utilizado:

![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![vscode](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)



# Questões:

## Questão 1

Link do REPLIT: https://replit.com/@lucianobfs/senha

A questão 1 é bem similar a algumas questões de lógica de programação e processamento de dados, matérias ministradas em faculdades de tecnologia. Entretanto, tem diferenças quanto ao formato da escada/pirâmide. Para resolver a questão é necessário conhecimento em loops. Nesse caso, foram necessários 3 loops, um deles mais externo e os outros para modificar os espaços e os asteriscos.

## Questão 2

Link do REPLIT: https://replit.com/@lucianobfs/escada

A questão 2 se trata de um algorítmo para validação de senha, algo importante e bem comum nas aplicações web. Para isso, já que estamos tratando de condições para uma senha ser válida, é necessário bom entendimento de estruturas condicionais. Além disso, foi necessário o uso de estruturas de repetição e variáveis booleanas para verificar se as condições foram atendidas e assim analisar a quantidade de caracteres que devem ser adicionados para tornar a senha válida.

Em aplicações Web, é mais utilizado um Regex seja no front-end ou no back-end para validação de senha. O Regex ocupa menos linhas de código e utilizado no back-end torna a criação e login de usuário mais segura por exemplo.

Segue um Regex semelhante a questão 2 no Front-end:

![image](https://user-images.githubusercontent.com/91087085/154313694-6bc811f2-a5db-449f-9fb0-d24a52187d33.png)
^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$

No back-end ainda seria possível utilizar um passwordHash para armazenar de forma segura a senha de usuários no banco de dados. O que evitaria transtornos em possíveis vazamentos de banco de dados.

## Questão 3:

A questão 3 solicita a identificação de pares de anagramas. Apesar de não ter ficado claro em até quantas letras isso era válido, é possível solucionar essa questão por uma abordagem com métodos de Array e string.

É necessário usar o String.prototype.split() e uma array auxiliar de exclusão. A partir disso, utilizar o Array.prototype.reduce() e fazer verificações condicionais associado ao método String.prototype.substring(), usar Array.prototype.push() na array de exclusão Array.prototype.includes() para analisar as letras vizinhas e incrementar o acumulador do reduce(), e assim retornar o valor do acumulador.

A questão é desafiadora, pois é necessário a utilização de vários métodos de array e string e os limites não são bem determinados.

Pela matemática, anagramas de palavras são resultados da permutação da quantidade de letras. Ou seja: $P = (n)!\quad -  1$ 

Porém, a questão é desafiadora e exige mais do que análise matemática de anagramas.


