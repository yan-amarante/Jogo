var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// Váriavel que define a posição do objeto.

var posiObjetox = 237;
var posiObjetoy = 237;
var widhtObjeto = 25;
var heightObjeto = 25;

var snake2x = 212;
var snake2y = 237;

var snake3x = 187;
var snake3y = 237;





var posiMacax = 150;
var posiMacay = 200; 
var widhtMaca = 10;
var heightMaca = 10;








// códigos do teclado

var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40

// Quantidade de pixel que o objeto se movimenta.

var taxa = 17;
var tamanho = false;


// função que cria o objeto.

function desenhaCirculo() {
    pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.rect(posiObjetox, posiObjetoy, widhtObjeto, heightObjeto);
    pincel.fill();

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.rect(snake2x, snake2y, widhtObjeto, heightObjeto);
    pincel.fill();

    pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.rect(snake3x, snake3y, widhtObjeto, heightObjeto);
    pincel.fill();

    if(tamanho === true) {
            
        pincel.fillStyle = 'red';
        pincel.beginPath();
        pincel.rect(posiObjetox - 90, posiObjetoy, widhtObjeto, heightObjeto);
        pincel.fill();
    }
    
    
}


function desenhaMaca (){
    if(!(    posiObjetox < posiMacax + widhtMaca &&
        posiObjetox + widhtObjeto > posiMacax &&
        posiObjetoy < posiMacay + heightMaca &&
        posiObjetoy + heightObjeto > posiMacay)){
            
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
    pontuacao();
}

setInterval(atualizaTela, 20); // função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.

// função que determina pra onde o objeto irá se movimentar.

var cimaInfinito = false;
var baixoInfinito = false;
var esquerdaInfinito = false;
var direitaInfinito = false;

function leDoTeclado(evento) {
    
    if(evento.keyCode == cima && posiObjetoy - taxa > 0) {
        posiObjetoy = posiObjetoy - taxa;
        snake2x = posiObjetox
        snake3x = snake2x
        
         cimaInfinito = true;
         baixoInfinito = false;
         esquerdaInfinito = false;
         direitaInfinito = false;
    
        } else if (evento.keyCode == baixo && posiObjetoy + taxa < 500) {
        posiObjetoy = posiObjetoy + taxa;
        snake2x = posiObjetox
        snake3x = snake2x
        
        cimaInfinito = false;
        baixoInfinito = true;
        esquerdaInfinito = false;
        direitaInfinito = false;
    
    } else if (evento.keyCode == esquerda && posiObjetox - taxa > 0) {
        posiObjetox = posiObjetox - taxa;
        snake2y = posiObjetoy
        snake3y = snake2y
        
        cimaInfinito = false;
        baixoInfinito = false;
        esquerdaInfinito = true;
        direitaInfinito = false;
    
    } else if (evento.keyCode == direita && posiObjetox + taxa < 500) {
        posiObjetox = posiObjetox + taxa;
        snake2y = posiObjetoy
        snake3y = snake2y
        
        cimaInfinito = false;
        baixoInfinito = false;
        esquerdaInfinito = false;
        direitaInfinito = true;
    }
    
    
}

function movimentacaoInfinita(){
    if(cimaInfinito === true && posiObjetoy - taxa > 0){
        posiObjetoy = posiObjetoy - taxa;
        snake2y = posiObjetoy + taxa
        snake3y = snake2y + taxa
    
    }else if(baixoInfinito === true && posiObjetoy + taxa < 500){
        posiObjetoy = posiObjetoy + taxa;
        snake2y = posiObjetoy - taxa
        snake3y = snake2y - taxa
    
    }else if (esquerdaInfinito === true && posiObjetox - taxa > 0){
        posiObjetox = posiObjetox - taxa
        snake2x = posiObjetox + taxa
        snake3x = snake2x + taxa
    
    }else if (direitaInfinito === true && posiObjetox + taxa < 500){
        posiObjetox = posiObjetox + taxa
        snake2x = posiObjetox - taxa
        snake3x = snake2x - taxa
    }
    if(    posiObjetox < posiMacax + widhtMaca &&
        posiObjetox + widhtObjeto > posiMacax &&
        posiObjetoy < posiMacay + heightMaca &&
        posiObjetoy + heightObjeto > posiMacay){
            
        posiMacax = Math.floor(Math.random(0) * 450);
        posiMacay = Math.floor(Math.random(0) * 450);

        tamanho = true;
        }

  }    



setInterval(movimentacaoInfinita, 75)

document.onkeydown = leDoTeclado

