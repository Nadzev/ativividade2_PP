/*import mostrando_lanches 
/*interface cliente{
    qtde : number;
    pagamento : number;
    tipo_de_pagamento : string;
    tipo_de_cliente : string;

}*/

class Cliente {
    pagamento : number;
    tipo_de_cliente: string;
    dia : string = '';
    qtde : number;
    comprar_lanche : boolean;
    tipo_de_pagamento : string;
     constructor(pagamento: number,filme: string,qtde:number,tipo:string,tipo_cliente:string, comprar_lanches: boolean){
         this.pagamento = pagamento;
         this.qtde = qtde;
         this.tipo_de_pagamento = tipo;
         this.tipo_de_cliente = tipo_cliente;
         this.comprar_lanche = comprar_lanches;
     }
     mostrando_filmes(){

     }
     verificando_escolhas(acompanhamentos:boolean){
        if(acompanhamentos){
            /*mostrando_lanches();*/
        }
     }
    }

class Cliente_normal extends Cliente{

}

class Cliente_estudante extends Cliente{ 

}



export {Cliente};