alert('Esse Sistema Calcula sua média escolar.');

let notaBimestre1 = Number(prompt('Qual sua nota do Primeiro Bimestre: ' ));
let notaBimestre2 = Number(prompt('Qual sua nota do Segundo Bimestre: ' ));
let notaBimestre3 = Number(prompt('Qual sua nota do Terceiro Bimestre: ' ));
let notaBimestre4 = Number(prompt('Qual sua nota do Quarto Bimestre: '));

let soma = notaBimestre1 + notaBimestre2 + notaBimestre3 + notaBimestre4;
let media = soma /4;

if(media >= 7){
    alert('Parabens! Você foi aprovado! sua media foi de ' + media.toFixed(2))
} else{
    alert('Que pena! Você foi reprovado ' + media.toFixed(2));
}
