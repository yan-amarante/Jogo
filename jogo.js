/*quando o jogador aperta uma das setinhas além de andar um quadrado para a direção apertada ele ativa uma variável booleana que ativa a movimentação infinita
quando a hitbox da cobrinha se encontra com a hibox da maçã a cobrinha cresce uma posiçao e ativa o math.random que posiciona uma nova maçã em um quadrado aleatorio do mapa
porem a primeira maçã sempre vai ser em uma posição fixa no mapa
para conferir se a cobrinha esta dentro dos limites do mapa eu usei uma estrutura condicional para comparar a posição x e y da cobrinha com a pocição x e y do mapa
para conferir se a cobrinha colidiu em si mesmo usei uma estrutura de repetição que fica checando se a posição x e y da cabeça e do corpo da cobrinha são iguais(a posição x e y estão dentro de um vetor),se forem ele joga um alert "infinito" na tela que força o jogador a dar f5*/

var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// Váriavel que define a posição do objeto.

var snakeX = 225;
var snakeY = 225;
var snake2Y = 225;
var snake2X = 225;

var snakeCorpo = [];

var widhtSnake = 25;
var heightSnake = 25;

var macaX = 153;
var macaY = 178; 

var widhtMaca = 25;
var heightMaca = 25;








// códigos do teclado

var esquerda = 37;
var cima = 38;
var direita = 39;
var baixo = 40;

// Quantidade de pixel que o objeto se movimenta.

var taxa = 2;

// função que cria o objeto.

function desenhaSnake() {
    pincel.fillStyle="white";
    pincel.fillRect(snake2X, snake2Y, widhtSnake, heightSnake);

    if (snakeX < macaX + widhtMaca &&
    snakeX + widhtSnake > macaX &&
    snakeY < macaY + heightMaca &&
    snakeY + heightSnake > macaY) {
        
            snakeCorpo.push([macaX,macaY]);

    }
    for (let i = snakeCorpo.length-1; i > 0; i-- ) {
        snakeCorpo[i] = snakeCorpo[i-1];
    }
    if (snakeCorpo.length) {
        snakeCorpo[0] = [snake2X, snake2Y];
    }
    
    pincel.fillStyle="white";
    pincel.fillRect(snakeX, snakeY, widhtSnake, heightSnake);

    
    for (let i = 0; i < snakeCorpo.length;i++) {
        pincel.fillRect(snakeCorpo[i][0], snakeCorpo[i][1], widhtSnake, heightSnake);
    }

    
    

 
}




function desenhaMaca (){

            
    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.rect(macaX, macaY, widhtMaca, heightMaca);
    pincel.fill();

    if(   snakeX < macaX + widhtMaca &&
        snakeX + widhtSnake > macaX &&
        snakeY < macaY + heightMaca &&
        snakeY + heightSnake > macaY){
            
            macaX = Math.floor(Math.random(0) * 480);
            macaY = Math.floor(Math.random(0) * 480);
}

}


// função que desenha o grid.

function limpaTela() {

    var descer = 0; 

    while(descer <=500){

        for(var imp= 0; imp<=500;imp=imp+25){

            pincel.fillStyle = "black";
            pincel.beginPath();
            pincel.rect(imp, descer, 25, 25);
            pincel.closePath();
            pincel.fill();
            pincel.stroke();     

        }

        descer = descer + 25; 

    }    

}

// função para atualizar a tela, desenhando o grid e o objeto.

function atualizaTela() {

    limpaTela();
    desenhaMaca();

}

setInterval(atualizaTela, 20); // função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.

// função que determina pra onde o objeto irá se movimentar.

var cimaInfinito = false;
var baixoInfinito = false;
var esquerdaInfinito = false;
var direitaInfinito = false;

function leDoTeclado(evento) {
    
    if(evento.keyCode == cima && snakeY - taxa > -50 && baixoInfinito === false) {
        snakeY = snakeY - taxa;
        
        snake2Y = snakeY; 
              
         cimaInfinito = true;
         baixoInfinito = false;
         esquerdaInfinito = false;
         direitaInfinito = false;
    
        } else if (evento.keyCode == baixo && snakeY + taxa < 525 && cimaInfinito === false) {
        snakeY = snakeY + taxa;
        snake2Y = snakeY;
        
        cimaInfinito = false;
        baixoInfinito = true;
        esquerdaInfinito = false;
        direitaInfinito = false;
    
    } else if (evento.keyCode == esquerda && snakeX - taxa > -50 && direitaInfinito === false) {
        snakeX = snakeX - taxa;
        snake2X = snakeX; 
        
        cimaInfinito = false;
        baixoInfinito = false;
        esquerdaInfinito = true;
        direitaInfinito = false;
    
    } else if (evento.keyCode == direita && snakeX + taxa < 525 && esquerdaInfinito === false) {
        snakeX = snakeX + taxa;
        snake2X = snakeX; 
        
        cimaInfinito = false;
        baixoInfinito = false;
        esquerdaInfinito = false;
        direitaInfinito = true;
    }


}


function movimentacaoInfinita(){
    if(cimaInfinito === true && snakeY - taxa > -15){
        snakeY = snakeY - taxa;
        snake2Y = snakeY + taxa;

    
    }else if(baixoInfinito === true && snakeY + taxa < 490){
        snakeY = snakeY + taxa;
        snake2Y = snakeY - taxa;
       
    
    }else if (esquerdaInfinito === true && snakeX - taxa > -15){
        snakeX = snakeX - taxa;
        snake2X = snakeX + taxa;
      
    
    }else if (direitaInfinito === true && snakeX + taxa < 490){
        snakeX = snakeX + taxa;
        snake2X = snakeX - taxa;

    }
    desenhaSnake();

    if(snakeX + taxa >= 490 || snakeX - taxa <= -15 || snakeY + taxa >= 490 || snakeY - taxa <= -15){
        alert("Você perdeu!");
    }
        
    for(let i = 0; i < snakeCorpo.length; i++) {
            if (snakeX == snakeCorpo[i][0] && snakeY == snakeCorpo[i][1]) {
                for(let i = 0; i < 100; i++){
                alert("Você perdeu!");
                }
            }
        }

} 


setInterval(movimentacaoInfinita, 4);

document.onkeydown = leDoTeclado;

