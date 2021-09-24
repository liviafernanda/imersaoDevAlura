var carta1 = {
  "nome": "Gato Rajado",
  "foto": "https://onlinequadros.com.br/static/acc/artist/ART-13038/gallery/43190/ART-13038_YEMp2wWXQcj8dhjy07ue.jpg",
  "atributos": {
    "ataque": 10,
    "defesa": 8,
    "magia": 5
  }
}

var carta2 = {
  "nome": "Vira Lata Caramelo",
  "foto": "https://static1.patasdacasa.com.br/articles/1/39/1/@/1318-vira-lata-caramelo-nao-importa-onde-voc-articles_media_mobile-4.jpg",
  "atributos": {
    "ataque": 9,
    "defesa": 9,
    "magia": 7
  }
}

var carta3 = {
  "nome": "Shih tzu",
  "foto": "https://www.rbsdirect.com.br/imagesrc/27464040.jpg?w=700",
  "atributos": {
    "ataque": 2,
    "defesa": 5,
    "magia": 10
  }
}

var carta4 = {
  "nome": "Gato Preto da Sorte",
  "foto": "https://static1.patasdacasa.com.br/articles/1/35/1/@/1093-gatos-pretos-sao-animais-fascinantes-co-opengraph_1200-4.jpg",
  "atributos": {
    "ataque": 7,
    "defesa": 3,
    "magia": 8
  }
}


var cartas = [carta1, carta2, carta3, carta4]
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
    var sorteioMaquina = parseInt(Math.random() * 4);
    var sorteioJogador = parseInt(Math.random() * 4);
    var opcoes = document.getElementById("opcoes");
     
    cartaMaquina = cartas[sorteioMaquina];
    cartaJogador = cartas[sorteioJogador];
    while(cartaMaquina == cartaJogador){
      cartaJogador = cartas[parseInt(Math.random() * 4)];
    }  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
       
    mostraCarta();
}


function atributoSelecionado(){
  var radioSelecionado = document.getElementsByName("opcao");
  for(var i = 0; i < radioSelecionado.length; i++){
    if(radioSelecionado[i].checked == true){
      return radioSelecionado[i].value;
    }
  }
  
  
  
}

function jogar(){
  var selecionado = atributoSelecionado();
  var nomeJogador = cartaJogador.nome;
  var nomeMaquina = cartaMaquina.nome;
  var atributoJogador = cartaJogador.atributos[selecionado];
  var atributoMaquina = cartaMaquina.atributos[selecionado];
  var resultado = document.getElementById("resultado");
  var explicacao = document.getElementById("explicacao"); 
  var textos = "";
  var tagResultado;
  
   textos += "<p> Você escolheu a carta de " + nomeJogador + " que possui " + selecionado + " de valor "+ atributoJogador + "</p>";
   textos += "<p> E você lutou contra a carta de " + nomeMaquina+ " que possui "+ selecionado +" de valor " +atributoMaquina + "</p>"
  
  
  if(atributoJogador > atributoMaquina){
    tagResultado = "<p class='resultado-final'>Venceu!</p>"
  } else if(atributoJogador < atributoMaquina){    
    tagResultado = "<p class='resultado-final'>Perdeu!</p>"
  } else {    
    tagResultado = "<p class='resultado-final'>Empate!</p>"  
  }
  
  resultado.innerHTML = tagResultado;
  explicacao.innerHTML = textos;
  
  document.getElementById("btnJogar").disabled = true;
  mostrarCartaMaquina();
  
  
}

function mostraCarta(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.foto})`;
  
  var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";

  var tagHTML = "<div id='opcoes' class='carta-status'>";
 
  var elementoJogador = "";
  for(var atributos in cartaJogador.atributos){
      elementoJogador += "<input type='radio' name='opcao' value='"+atributos+"'>"+atributos + ": " + cartaJogador.atributos[atributos] +"<br>";
    }
    
  var nomeJogador = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;
  
  divCartaJogador.innerHTML = moldura + nomeJogador + tagHTML + elementoJogador + "</div>";
 
}

function mostrarCartaMaquina (){
  
  var divCartaMaquina = document.getElementById("carta-maquina");
 divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`;
  var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";
  var nomeMaquina = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var elementoMaquina = "";
  
   for(var atributos in cartaMaquina.atributos){
      elementoMaquina += `<p>${atributos} : ${cartaMaquina.atributos[atributos]}</p>`
    }

  divCartaMaquina.innerHTML = moldura + nomeMaquina +tagHTML + elementoMaquina + "</div>";
  
}