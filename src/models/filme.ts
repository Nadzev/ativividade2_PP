interface filmes_disponiveis{
    nome_filme : string;
    genero : string;
    faixa_etaria : string;
}
class Filme {
    nome_filme : string;
    faixa_etaria : string;
    genero : string;
    filmes = new Map();
    constructor(nome_filme: string, faixa_etaria:string, genero: string){
        this.faixa_etaria = faixa_etaria;
        this.nome_filme = nome_filme;
        this.genero = genero;
    }
    escolher_filme(tabela: Map<string,string>){
        
    }
}  
class Filmes_3d extends Filme{
    filmes_3d = new Map();
    montando_filmes3d(){
        this.filmes_3d.set("Avatar 2","20:00");
        this.filmes_3d.set("Thor:Love and Thunder","15:00");
        this.filmes_3d.set("1","14:30");
        this.filmes_3d.set("2","13:30");
    }
    /*
    exibir(){
        this.filmes_3d.forEach((value:string, key:string)=> {
            console.log(key,value);
        }
    }*/
}
class Filmes_normais extends Filme{
    filmes_normais = new Map();
    montando_filmes(){
        this.filmes_normais.set("titanic","20:20");
        this.filmes_normais.set("cinderela baiana","21:00");
        this.filmes_normais.set("O Conde de Monte Cristo","22:00");
        this.filmes_normais.set("O diario de Bridget Jonnes","19:30");
    }
    /*exibir2(){
        this.filmes_normais.forEach((value:string,key:string)=> {
            console.log(key,value);
        }
    }*/
}
