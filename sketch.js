let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}
Jumanji
function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Star Wars";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "O Hobbit e O Senhor dos Anéis";          
        } else{
         return "Percy Jackson e o Ladrão de Raios";
        }
      } else {
        if (gostaDeFantasia) {
          return "A Caminho De Eldorado";
        } else {
          return "jumanji";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Minecraft:o Filme";
    } else {
      return "Hotel Transylvania";
    }
  }
}
