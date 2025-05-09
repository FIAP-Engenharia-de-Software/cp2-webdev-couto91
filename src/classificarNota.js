// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  let calculo = nota
  if (calculo >= 6 && calculo <= 10) {
    return "Aprovado"
  }
  else if (calculo < 6 && calculo > 0) {
    return "Reprovado"
  }
  else if (calculo > 10 || calculo < 0){
    return "Nota inválida"
  }
  else {
    return "Nota inválida"
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };