import { PassThrough } from "stream";
import { Cliente } from "./cliente"
/*import{Lanche} from "./lanches"*/

class Pagamento extends Cliente{
    valortotal: number = 0;
   
    criar_mapa_de_descontos(){
        let descontos = new Map();
        descontos.set("segunda", 0.5);
        descontos.set("terça", 0.5);
        descontos.set("quarta",0.5);
        descontos.set("quinta",0.5);
        descontos.set("sexta",0.5);
    }
    /*
    valor_total(){
        this.valortotal = this.valorl + this.valorb;
    }*/
    
}
class PagamentoCartao extends Pagamento{


}
class PagamentoAvista extends Pagamento{

}
export {Pagamento}
