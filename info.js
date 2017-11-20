	

	//todas as classes que estenderem Persistente poderão salvar no firebase (isso ta lá comentado no index.html)
class Persistente {
    constructor(ref, id= ''){
        this.ref = ref;
        this.id = id;
    }

    get dados(){
        throw new Error("Dados não disponíveis, necessário sobrescrever get dados()");
    }

    get adicionar(){
        let o = firebase.database().ref(this.ref + '/' + (this.id || '')).push(); //um push vazio gera uma chave (dá pra add as coisas lá), olha a linha de baixo
        this.id = firebaseRef.key; //lembrar o ID gerado!
        firebaseRef.push(this.dados);
    }

    get salvar(){
        firebase.database().ref(this.ref+ '/'  + (this.id || '')).set(this.dados);
        //"(this.id || '')" significa: se o ID da pessoa existir (nao der undefined ou null), vai dar o ID dela, se der undefined (vá q ela nn tenha digitado nada) aí vai dar o nada "". 
    }

    get excluir(){
        firebase.database().ref(this.ref + '/' + (this.id || '')).set(null);
    }
}

class Perfil extends Persistente{
    constructor(id,nome, idade){
        super('/perfil', id); //"alimentando" a superclasse
        this.nome = nome;
        this.idade = idade;
    }

    //sobrescrevendo o 'get dados'
    get dados(){
        return {
            nome: this.nome,
            idade:this.idade
        }
    }
}

class Post extends Persistente{
    constructor(texto){
        super('/posts');
        this.texto = texto;
    }

    get dados(){
        return {
            texto: this.texto
        }
    }
}