class Assento{
    
    coluna : number;
    linha : string;
    
    constructor(coluna : number, linha: string){
        this.coluna = coluna;
        this.linha = linha;
    }
    matriz: Array<Array<number>> = [];
    definindo_matriz(){
        for(let i = 0;i<10;i++){
            for(let j = 0;j<10;j++){
                this.matriz[i][j]=0;
            }
        }
    }
    escolher_assento(this: any, l:number,  c:number) {
        if(this.matriz[l][c] == 0){
            console.log("Assento disponível");
            this.matriz == 1;
        }
        else{

        }
    }
}