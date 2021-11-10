const calcular = document.getElementById('calcular');

const set = () => {
  const nome = document.getElementById('nomeAtleta').value
  const peso = document.getElementById('pesoAtleta').value
  const distancia = document.getElementById('distanciaAtleta').value
  const tempo = document.getElementById('tempoAtleta').value

  const resultado = document.getElementById('resultado')
  const caloriavalor = 0.0175;

  var arrayTime = tempo.split(":").map(function (item) {
    return parseInt(item, 10);
  });

  const hora = arrayTime[0]
  const minuto = arrayTime[1] / 60
  const segundo = arrayTime[2] / 3600

  const totalHora = hora + minuto + segundo;
  const horapminuto = totalHora * 60;

  const pace = (horapminuto / distancia).toFixed(2)
  const velocidademedia = (distancia / totalHora).toFixed(2);
  const caloria = ((velocidademedia * peso * caloriavalor) * horapminuto).toFixed(0)

  if (nome !== '' && peso !== '' && distancia !== '') {
    resultado.textContent = `Olá ${nome}! Você percorreu ${distancia} km em ${hora}h, ${arrayTime[1]} min e ${arrayTime[2]}s. Isso quer dizer que a sua velocidade média foi de ${velocidademedia} km/h, o que o corresponde a um pace de ${pace}min/km. Com ${peso}kg, você gastou cerca de ${caloria} calorias”`;
  } else {
    alert('Para ter os resultados, preencha todos os campos.');
  }
}

calcular.addEventListener('click', set)

