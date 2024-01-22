const express = require("express") /* require significa que vai receber */
const server = express() /* esse será o servidor, e receberá o express com todas as dependencias*/
const filmes = require("./src/data/filmes.json")

/*  aqui irei usar a requisição do tipo get(Pegar)
  Ela é usada principalmente para recuperar informações e exibir conteúdo ao usuário
  localhost: O pc funciona como se fosse um servidor virtual.
  3000 é a porta que o nosso servidor está escutando.
  Tudo que fica depois da / "barra", será nossas rotas
*/

server.get("/filmes",(req,res) =>{
    return res.json(filmes)
})

// O método listen irá escultar a porta 3000, e no console irá mostrar a messagem
server.listen(3000, () =>{
    console.log("Servidor Funcionando")
})