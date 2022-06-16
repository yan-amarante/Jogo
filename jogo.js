var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// Váriavel que define a posição do objeto.

var posiObjetox = 237;
var posiObjetoy = 237;

var posiMacax = 237;
var posiMacay = 237; 

var widhtMaca = 10;
var heightMaca = 10;

var widhtObjeto = 30;
var heightObejeto = 30;




// códigos do teclado

var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40

// Quantidade de pixel que o objeto se movimenta.

var taxa = 1;


// função que cria o objeto.

function desenhaCirculo() {

    pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.rect(posiObjetox, posiObjetoy, widhtObjeto, heightObejeto);
    pincel.fill();

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

function desenhaMaca (){
    if(!(    posiObjetox < posiMacax + widhtMaca &&
        posiObjetox + widhtObjeto > posiMacax &&
        posiObjetoy < posiMacay + heightMaca &&
        posiObjetoy + heightObejeto > posiMacay)){
            
    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.rect(posiMacax, posiMacay, widhtMaca, heightMaca);
    pincel.fill();
    
    }
}
function objeto(){
    if(posiObjetox < posiMacax + widhtMaca &&
        posiObjetox + widhtObjeto > posiMacax &&
        posiObjetoy < posiMacay + heightMaca &&
        posiObjetoy + heightObejeto > posiMacay){
            
            pincel.fillStyle = 'white';
            pincel.beginPath();
            pincel.rect(50, 50, widhtObjeto, heightObejeto);
            pincel.fill();

        }
}


// função para atualizar a tela, desenhando o grid e o objeto.

function atualizaTela() {

    limpaTela();
    desenhaCirculo();
    desenhaMaca();
    objeto();
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
        
         cimaInfinito = true;
         baixoInfinito = false;
         esquerdaInfinito = false;
         direitaInfinito = false;
    
        } else if (evento.keyCode == baixo && posiObjetoy + taxa < 500) {
        posiObjetoy = posiObjetoy + taxa;
        
        cimaInfinito = false;
        baixoInfinito = true;
        esquerdaInfinito = false;
        direitaInfinito = false;
    
    } else if (evento.keyCode == esquerda && posiObjetox - taxa > 0) {
        posiObjetox = posiObjetox - taxa;
        
        cimaInfinito = false;
        baixoInfinito = false;
        esquerdaInfinito = true;
        direitaInfinito = false;
    
    } else if (evento.keyCode == direita && posiObjetox + taxa < 500) {
        posiObjetox = posiObjetox + taxa;
        
        cimaInfinito = false;
        baixoInfinito = false;
        esquerdaInfinito = false;
        direitaInfinito = true;
    }
    
}

function movimentacaoInfinita(){
    if(cimaInfinito === true && posiObjetoy - taxa > 0){
        posiObjetoy = posiObjetoy - taxa;
    
    }else if(baixoInfinito === true && posiObjetoy + taxa < 500){
        posiObjetoy = posiObjetoy + taxa;
    
    }else if (esquerdaInfinito === true && posiObjetox - taxa > 0){
        posiObjetox = posiObjetox - taxa
    
    }else if (direitaInfinito === true && posiObjetox + taxa < 500){
        posiObjetox = posiObjetox + taxa
    }
    if(    posiObjetox < posiMacax + widhtMaca &&
        posiObjetox + widhtObjeto > posiMacax &&
        posiObjetoy < posiMacay + heightMaca &&
        posiObjetoy + heightObejeto > posiMacay){

        posiMacax = Math.floor(Math.random(0) * 499);
        posiMacay = Math.floor(Math.random(0) * 499);
    }

}

setInterval(movimentacaoInfinita, 1)

document.onkeydown = leDoTeclado

