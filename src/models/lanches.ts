import { PassThrough } from "stream";
import { Cliente } from "./cliente";

class Lanches extends Cliente{
    pipoca: boolean = false;
    refrigerante: boolean = false;
    chocolate : boolean = false;
    valor : number = 0;
    
    mostrando_lanches(){
        let lanches = new Map();
            lanches.set("chocolate",5);
            lanches.set("pipoca", 18);
            lanches.set("refrigerante",12)
        if(this.comprar_lanche == true){
            lanches.forEach((value: Number, key:string)=> {
                console.log(key,value);
            }
        )};
    /*function escolher_e_pagar(pipoca:boolean, chocolate:boolean, refrigerante:boolean){
            let valor : number;
            if(pipoca == true){
                this.valor+= lanches.get('pipoca');
            }
            if(chocolate == true){
                this.valor+= lanches.get('chocolate');
            }
            if(refrigerante == true){
                this.valor+=lanches.get('refrigerante');
            }
            return this.valor;
    }*/
}
}


