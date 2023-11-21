//A classe depesa gerencia os atributos referenciados no HTML
class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    //Validação dos dados para casos em que os campos não sejam preenchidos
    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == null || this[i] == "") {
                return false
            }
        }

        return true
    }
}

//A classe banco de dados é responsável pelo gerenciamento do local storage (BD)
//Se não houver id cadastrado, ele será igual a 0, porém, se houver, +1 será adicionado ao cadastrar um novo item
//O valor do objeto gravado será convertido para string
class BancoDeDados {
    constructor() {
        let id = localStorage.getItem("id")

        if(id === null) {
            localStorage.setItem("id", 0)
        }
    }

    //Procura por um id cadastrado
    getProximoId() {
        let proximoId = localStorage.getItem("id")
        return parseInt(proximoId) + 1
    }

    //Grava um conteúdo após converte-lo em JSON
    gravar(d) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem("id", id)
    }

    //Recupera os registros que foram cadastrados com sucesso e adiciona em despesa[]
    recuperarRegistros() {
        let id = localStorage.getItem("id")
        let despesas = []

        for(let i = 1; i <= id; i++) {
            let despesa = JSON.parse(localStorage.getItem(i))

            if(despesa === null) {
                continue
            }

            despesa.id = i
            despesas.push(despesa)
        }

        return despesas
    }

    //Pesquisa as despesas cadastradas
    pesquisar(despesa) {
        let despesasFiltradas = []
        despesasFiltradas = this.recuperarRegistros()

        if(despesa.ano != "") {
            despesasFiltradas = despesasFiltradas.filter(item => item.ano === despesa.ano)
        }

        if(despesa.mes != "") {
            despesasFiltradas = despesasFiltradas.filter(item => item.mes === despesa.mes)
        }

        if(despesa.dia != "") {
            despesasFiltradas = despesasFiltradas.filter(item => item.dia === despesa.dia)
        }

        if(despesa.tipo != "") {
            despesasFiltradas = despesasFiltradas.filter(item => item.tipo === despesa.tipo)
        }

        if(despesa.descricao != "") {
            despesasFiltradas = despesasFiltradas.filter(item => item.descricao === despesa.descricao)
        }

        if(despesa.valor != "") {
            despesasFiltradas = despesasFiltradas.filter(item => item.valor === despesa.valor)
        }

        return despesasFiltradas
    }

    //Exclui uma despesa com base no id
    excluir(id) {
        localStorage.removeItem(id)
    }
}

let bancoDeDados = new BancoDeDados()

//Após verificar se os campos utilizados estão com seus respectivos ids, podemos criar funções que recuperam os valores de cada um
//Utilizar o método getElementById("id")
//Armazenar o dado numa variável 
//Recuperar o valor atribuído a ela
//Gravar as informações no local storage (BD)
function cadastrarDespesa() {
    let ano = document.getElementById("ano")
    let mes = document.getElementById("mes")
    let dia = document.getElementById("dia")
    let tipo = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")
    let valor = document.getElementById("valor")

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    //Se os dados não forem validados (estiverem vazios) eles não serão gravados
    if(despesa.validarDados()) {
        bancoDeDados.gravar(despesa)

        //Manipulação do modal para quando a resposta for de sucesso
        let tituloModalSucesso = document.getElementById("titulo_modal")
        tituloModalSucesso.innerHTML = "REGISTRO INSERIDO COM SUCESSO"

        let statusSucesso = document.getElementById("modal_status")
        statusSucesso.className = "modal-header text-success"

        let descricaoModalSucesso = document.getElementById("descricao_modal")
        descricaoModalSucesso.innerHTML = "Despesa cadastrada com sucesso !"

        let botaoSucesso = document.getElementById("modal_btn")
        botaoSucesso.innerHTML = "Fechar"
        botaoSucesso.className = "btn btn-success"

        $("#cadastroDespesa").modal("show")

        //Após o cadastro todos os campos serão limpos
        ano.value = ""
        mes.value = ""
        dia.value = ""
        tipo.value = ""
        descricao.value = ""
        valor.value = ""
    } 
    else {
        //Manipulação do modal para quando a resposta for de erro
        let tituloModalErro = document.getElementById("titulo_modal")
        tituloModalErro.innerHTML = "REGISTRO INVÁLIDO"

        let statusErro = document.getElementById("modal_status")
        statusErro.className = "modal-header text-danger"

        let descricaoModalErro = document.getElementById("descricao_modal")
        descricaoModalErro.innerHTML = "Erro ao cadastrar despesa. Verifique se todos os campos foram preenchidos."

        let botaoErro = document.getElementById("modal_btn")
        botaoErro.innerHTML = "Corrigir"
        botaoErro.className = "btn btn-danger"

        $("#cadastroDespesa").modal("show")
    }
    
}

//Lista as despesa que foram cadastradas e retorna nas respectivas linhas e colunas
//Tratar o tipo para number ou string
function listaDespesas(despesas = [], filtro = false) {
    if(despesas.length == 0 && filtro == false) {
        despesas = bancoDeDados.recuperarRegistros()
    }
    
    let lista = document.getElementById("lista_despesas")
    lista.innerHTML = ""
    
    //Troca os valores de cada tipo para uma descrição
    despesas.forEach(item => {
        let linha = lista.insertRow()
        linha.insertCell(0).innerHTML = `${item.dia}/${item.mes}/${item.ano}`

        switch(item.tipo) {
            case "1":
                item.tipo ="Alimentação"
                break;

            case "2":
                item.tipo = "Educação"
                break;

            case "3":
                item.tipo = "Lazer"
                break;

            case "4":
                item.tipo = "Saúde"
                break;

            case "5":
                item.tipo = "Transporte"
                break;

        }

        linha.insertCell(1).innerHTML = item.tipo
        linha.insertCell(2).innerHTML = item.descricao
        linha.insertCell(3).innerHTML = item.valor

        let botao = document.createElement("button")
        botao.className = "btn btn-danger"
        botao.innerHTML = "<i class='fas fa-times'></i>"
        botao.id = `id_despesa_${item.id}`

        //O botão exclui cada registro com base no id
        botao.addEventListener("click", function() {
            let id = this.id.replace("id_despesa_", "")

            bancoDeDados.excluir(id)

            //Atualiza a página após uma exclusão
            window.location.reload()
        })

        linha.insertCell(4).append(botao)
    })

    //Notificação para quando não houver registros
    if(despesas.length == 0) {
        let msgPerigo = document.getElementById("mensagem")
        msgPerigo.innerHTML = "Não há informações cadastradas"

        let ntfPerigo = document.getElementById("notificacao")
        ntfPerigo.className = " toast bg-danger"

        $("#notificacao").toast("show")
    } 
}

//Consulta as despesas com base nos atributos do objeto
function consultarDespesas() {
    let ano  = document.getElementById("ano").value
	let mes = document.getElementById("mes").value
	let dia = document.getElementById("dia").value
	let tipo = document.getElementById("tipo").value
	let descricao = document.getElementById("descricao").value
	let valor = document.getElementById("valor").value
	let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
	let despesas = bancoDeDados.pesquisar(despesa)
	 
	listaDespesas(despesas, true)

    //Notificação para quando não forem encontrados registros pelo filtro
    if(despesas.length == 0) {
        let msgAviso = document.getElementById("mensagem")
        msgAviso.innerHTML = "O registro não foi encontrado"

        let ntfAviso = document.getElementById("notificacao")
        ntfAviso.className = " toast bg-warning"
        $("#notificacao").toast("show")
    }
}