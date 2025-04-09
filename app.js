alert('Esse Sistema Calcula sua média escolar.');

let notaBimestre1 = Number(prompt('Qual sua nota do Primeiro Bimestre: ' ));
let notaBimestre2 = Number(prompt('Qual sua nota do Segundo Bimestre: ' ));
let notaBimestre3 = Number(prompt('Qual sua nota do Terceiro Bimestre: ' ));
let notaBimestre4 = Number(prompt('Qual sua nota do Quarto Bimestre: '));

let media = (parseFloat(notaBimestre1) + parseFloat(notaBimestre2) + parseFloat(notaBimestre3) + parseFloat(notaBimestre4) /4)

if(media >= 6){
    alert('Parabens! Você foi aprovado! sua media foi de ' + media)
} else{
    alert('Que pena! Você foi reprovado')
}
