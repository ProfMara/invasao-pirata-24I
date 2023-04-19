class Bala{
    constructor(x,y, raio){
        var parado = {isStatic:true}
        //atribui um corpo ao objeto da classe CANHAO
        this.body = Bodies.circle(x,y,raio, parado);
        World.add(world, this.body);
        this.imagem = loadImage("bala.png");
        this.raio = raio;
        this.trajetoria = [];
    }

    shoot(){
    }
    show(){
        push ();
        //posiciona a imagem pelo centro
        imageMode (CENTER);
        //guarda a posição do corpo em pos
        var pos = this.body.position;
        //coloca a imagem
        image (this.imagem, pos.x, pos.y, this.raio, this.raio);
        //volta para as configurações antigas
        pop ()
    }
}