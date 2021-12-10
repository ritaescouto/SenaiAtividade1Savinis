// Data do Evento deve ser menor ou igual da Data de Hoje

let DataEvento = 10/12/2021
let DataAtual  = 08/12/2021

if (DataEvento > DataAtual) {
    console.log("Data permitida para cadastro")
}
else {
    console.log("cadastro não será permitido por data inválida!")
}

// Idade, verifica se tem mais de 18 anos

let Idade = 18

if (Idade >= 18) {
    console.log("Idade permitida para cadastro.")
}
else {
    console.log("Cadastro não é permitido pela idade!")
}

// Participantes, não deve ultrapassar a 100
let listasDeParticipantes=["rita","silvia","alice","paulo","fernanda"];
if(listasDeParticipantes.length >100){
    console.log("Numero de participantes excedeu o limite.")
    if (listasDeParticipantes.length==0) {
        console.log("Numero de participantes não pode ficar vazia!")
    } 
}else{
    console.log("Cadastro realizado com sucesso!!")
} 