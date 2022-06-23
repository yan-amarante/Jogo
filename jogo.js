var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// Váriavel que define a posição do objeto.

var snake1x = 225;
var snake1y = 225;

var widhtObjeto = 25;
var heightObjeto = 25;

var snake2x = 200;
var snake2y = 225;

var snake3x = 175;
var snake3y = 225;

var snake4x = snake3x
var snake4y = snake3y

var snake5x = snake4x
var snake5y = snake4y

var snake6x = snake5x
var snake6y = snake5y

var snake7x = snake6x
var snake7y = snake6y





var posiMacax = 153;
var posiMacay = 178; 
var widhtMaca = 20;
var heightMaca = 20;








// códigos do teclado

var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40

// Quantidade de pixel que o objeto se movimenta.

var taxa = 25;
var tamanho = 0;


// função que cria o objeto.

function desenhaCirculo() {
    pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.rect(snake1x, snake1y, widhtObjeto, heightObjeto);
    pincel.fill();

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.rect(snake2x, snake2y, widhtObjeto, heightObjeto);
    pincel.fill();

    pincel.fillStyle = 'green';
    pincel.beginPath();
    pincel.rect(snake3x, snake3y, widhtObjeto, heightObjeto);
    pincel.fill();

    if(tamanho >= 1) {
            
        pincel.fillStyle = 'red';
        pincel.beginPath();
        pincel.rect(snake4x, snake4y, widhtObjeto, heightObjeto);
        pincel.fill();
    }
    if(tamanho >= 2) {
            
        pincel.fillStyle = 'white';
        pincel.beginPath();
        pincel.rect(snake5x, snake5y, widhtObjeto, heightObjeto);
        pincel.fill();
    }
    if(tamanho >= 3) {
            
        pincel.fillStyle = 'red';
        pincel.beginPath();
        pincel.rect(snake6x, snake6y, widhtObjeto, heightObjeto);
        pincel.fill();
    }
    if(tamanho >= 4) {
            
        pincel.fillStyle = 'white';
        pincel.beginPath();
        pincel.rect(snake7x, snake7y, widhtObjeto, heightObjeto);
        pincel.fill();
    }
    
    
}


function desenhaMaca (){
    if(!(    snake1x < posiMacax + widhtMaca &&
        snake1x + widhtObjeto > posiMacax &&
        snake1y < posiMacay + heightMaca &&
        snake1y + heightObjeto > posiMacay)){
            
    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.rect(posiMacax, posiMacay, widhtMaca, heightMaca);
    pincel.fill();
        }
}

// função que desenha o grid.

function limpaTela() {

    var descer = 0; 

    while(descer <=500){

        for(var imp= 0; imp<=500;imp=imp+25){

            pincel.fillStyle = "black";
            //pincel.strokeStyle = "white";
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
    desenhaCirculo();
    desenhaMaca();
}

setInterval(atualizaTela, 20); // função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.

// função que determina pra onde o objeto irá se movimentar.

var cimaInfinito = false;
var baixoInfinito = false;
var esquerdaInfinito = false;
var direitaInfinito = false;

function leDoTeclado(evento) {
    //y = altura
    
    if(evento.keyCode == cima && snake1y - taxa > -50) {
        snake1y = snake1y - taxa;
        
        snake2x = snake1x 
        snake3x = snake2x
        snake4x = snake3x
        snake5x = snake4x
        snake6x = snake5x
        snake7x = snake6x
        
         cimaInfinito = true;
         baixoInfinito = false;
         esquerdaInfinito = false;
         direitaInfinito = false;
    
        } else if (evento.keyCode == baixo && snake1y + taxa < 525) {
        snake1y = snake1y + taxa;
        
        snake2x = snake1x
        snake3x = snake2x
        snake4x = snake3x
        snake5x = snake4x
        snake6x = snake5x
        snake7x = snake6x
        
        cimaInfinito = false;
        baixoInfinito = true;
        esquerdaInfinito = false;
        direitaInfinito = false;
    
    } else if (evento.keyCode == esquerda && snake1x - taxa > -50) {
        snake1x = snake1x - taxa;
        
        snake2y = snake1y
        snake3y = snake2y 
        snake4y = snake3y 
        snake5y = snake4y 
        snake6y = snake5y 
        snake7y = snake6y 
        
        cimaInfinito = false;
        baixoInfinito = false;
        esquerdaInfinito = true;
        direitaInfinito = false;
    
    } else if (evento.keyCode == direita && snake1x + taxa < 525) {
        snake1x = snake1x + taxa;
        
        snake2y = snake1y
        snake3y = snake2y
        snake4y = snake3y
        snake5y = snake4y
        snake6y = snake5y
        snake7y = snake6y
        
        cimaInfinito = false;
        baixoInfinito = false;
        esquerdaInfinito = false;
        direitaInfinito = true;
    }
    
    
}

function movimentacaoInfinita(){
    if(cimaInfinito === true && snake1y - taxa > -50){
        snake1y = snake1y- taxa;
        
        snake2y = snake1y + taxa
        snake3y = snake2y + taxa
        snake4y = snake3y + taxa
        snake5y = snake4y + taxa
        snake6y = snake5y + taxa
        snake7y = snake6y + taxa
    
    }else if(baixoInfinito === true && snake1y + taxa < 525){
        snake1y = snake1y + taxa;
       
        snake2y = snake1y - taxa
        snake3y = snake2y - taxa
        snake4y = snake3y - taxa
        snake5y = snake4y - taxa
        snake6y = snake5y - taxa
        snake7y = snake6y - taxa
    
    }else if (esquerdaInfinito === true && snake1x - taxa > -50){
        snake1x = snake1x - taxa
      
        snake2x = snake1x + taxa
        snake3x = snake2x + taxa
        snake4x = snake3x + taxa
        snake5x = snake4x + taxa
        snake6x = snake5x + taxa
        snake7x = snake6x + taxa
    
    }else if (direitaInfinito === true && snake1x + taxa < 525){
        snake1x = snake1x + taxa
      
        snake2x = snake1x - taxa
        snake3x = snake2x - taxa
        snake4x = snake3x - taxa
        snake5x = snake4x - taxa
        snake6x = snake5x - taxa
        snake7x = snake6x - taxa
    }
    if(    snake1x < posiMacax + widhtMaca &&
        snake1x + widhtObjeto > posiMacax &&
        snake1y < posiMacay + heightMaca &&
        snake1y + heightObjeto > posiMacay){
            
        posiMacax = Math.floor(Math.random(0) * 425);
        posiMacay = Math.floor(Math.random(0) * 425);

        tamanho += 1;
        }
  } 

setInterval(movimentacaoInfinita, 75)

document.onkeydown = leDoTeclado

