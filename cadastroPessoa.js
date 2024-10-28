function enviarFormulario() {
    
    //Capturar os valores e criar a variavel para o obj JSOn

    var contaCliente = new Object();

    contaCliente.nome = document.getElementById('nome').value;
    contaCliente.sobrenome = document.getElementById('sobrenome').value;
    contaCliente.telefone = document.getElementById('telefone').value;
    contaCliente.email = document.getElementById('email').value;
    contaCliente.senha = document.getElementById('senha').value;
    

    //converter para STRING JSON

    var myJSON = JSON.stringify(contaCliente)

    console.log(myJSON)
    console.log(contaCliente.valueOf())

    document.getElementById('ValorNome').innerHTML = contaCliente.nome
    
}



const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    //Faz o hí 
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }