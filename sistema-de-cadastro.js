const date1 = new Date();
const dataedoevento = new Date('2021-12-20 12:30:00');

if (date1.getTime() === dataedoevento.getTime()) {
  console.log('As datas são iguais');
}
else if (date1.getTime() > dataEvento.getTime()) {
  alert('Cadastro não permitido. Data inválida')
  console.log("Cadastro não permitido. Data inválida");
else {
  console.log("Evento Disponível");
}


let idade = 33
if(idade >=18) {
  console.log("Cadastro permitido")
} else {
  console.log("Idade não permitida")
}

let listadeparticipantes = ["Participante1", "Participante2", "Participante3", "Participante4"]

let listadepalestrantes = ["Palestrante1", "Palestrante2"]

console.log(`Relação de Participantes: ${listadeparticipantes} `)
    console.log(`Relação de Palestrantes: ${listadepalestrantes} `)
if (listaParticipantes.length > 100){
    console.log("Cadastro não permitido. Número de cadastro excedido.")
} else{
    console.log("Cadastro Permitido.")
}
