import React, { useEffect, useState } from 'react'

export default function vetor() {
  // Map Numbers
  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  var questoes = [
    {
      id: 1,
      pergunta: 'Quanto é 1 + 1?',
      resposta: 2,
      respostaUsuario: 2,
      alternativas: [
        { id: 1, texto: 2, select: true },
        { id: 2, texto: 3 },
        { id: 3, texto: 4 },
        { id: 4, texto: 5 },
      ],
    },
    {
      id: 2,
      pergunta: 'Quanto é 2 + 2?',
      resposta: 4,
      respostaUsuario: 4,
      alternativas: [
        { id: 1, texto: 2 },
        { id: 2, texto: 3 },
        { id: 3, texto: 4, select: true},
        { id: 4, texto: 5 },
      ],
    },
    {
      id: 3,
      pergunta: 'Quanto é 3 + 3?',
      resposta: 6,
      respostaUsuario: 2,
      alternativas: [
        { id: 1, texto: 2 },
        { id: 2, texto: 3, select: true},
        { id: 3, texto: 4 },
        { id: 4, texto: 6 },
      ],
    },
    {
      id: 4,
      pergunta: 'Quanto é 4 + 4?',
      resposta: 8,
      respostaUsuario: 4,
      alternativas: [
        { id: 1, texto: 2 },
        { id: 2, texto: 3 },
        { id: 3, texto: 4, select: true},
        { id: 4, texto: 5 },
      ],
    },
    {
      id: 5,
      pergunta: 'Quanto é 5 + 5?',
      resposta: 10,
      respostaUsuario: 4,
      alternativas: [
        { id: 1, texto: 2 },
        { id: 2, texto: 3 },
        { id: 3, texto: 4 },
        { id: 4, texto: 5, select: true},
      ],
    },
  ];


  function exemplo1() {
    let mapNumbers = numeros.map(e => e*2);
    console.log(mapNumbers);
  }

  // Retorna o número de quantos elementos tem o vetor
  function exemplo2() {
    let lengthNumbers = numeros.length;
    console.log(lengthNumbers);
  }

  // Retorna o indice do elemento e tbm o elemento, caso nao seja encontrado retorna undefined
   function exemplo3() {
    let index = -30;
    console.log(`Indice:${index} Retorna:${numeros.at(index)}`);
  }

   // Retorna um novo vetor contendo todos os valores passados como parametro
   function exemplo4() {
    let concat = numeros.concat(letras);
    console.log(concat);
  }

  // o metodo copywithin copia os elementos de um vetor para outro, a partir de um indice especifico // ver mais
  function exemplo5() {
    let teste = numeros.copyWithin(0, 3, 8);
    console.log(teste);
  }


  // o metodo entries retorna um objeto que pode ser usado para iterar sobre o vetor
  function exemplo6() {
    let teste = letras.entries();
    for (let e of teste) {
      console.log(e);
    }
  }


  // o metodo every verifica se todos os elementos do vetor passado como parametro atendem a uma condição
  function exemplo7() {
    let teste = numeros.every(e => e < 11);
    console.log(teste);
    
  }

  // o metodo fill preenche todos os elementos do vetor com um valor
  function exemplo8() {
    let teste = numeros.fill(0, 4, 8);
    let teste2 = numeros.fill(0, 4);
    console.log(teste);
    console.log(teste2);
  }


  // o metodo filter retorna um novo vetor com todos os elementos que atendem a uma condição
  function exemplo9() {
    let teste = numeros.filter(e => e > 5);
    let teste2 = numeros.filter(e => e < 5);
    console.log(teste);
    console.log(teste2);
    
  }


   // o metodo filter retorna um novo vetor com todos os elementos que atendem a uma condição
   function exemplo10() {
    let teste = numeros.find(e => e > 6);
    console.log(teste);
    
  }


   // o metodo findindex retorna o indice do primeiro elemento que atende a uma condição, caso não encontre retorna -1
   function exemplo11() {
    let teste = numeros.findIndex(e => e > 6);
    let teste2 = numeros.findIndex((e, i, a) => e > 6 && i < 3);
    console.log(teste);
    console.log(teste2);
  }


  // o metodo flat retorna um novo vetor com todos os elementos do vetor passado como parametro, mas como um vetor de vetores 
  function exemplo12() {
    let todasRespostas = questoes.map(e => e.pergunta + ' ' + e.alternativas.map(e => e.texto).join(', ') + ' ' + e.resposta);
    console.log(todasRespostas.flat());
  }


  // o metodo flatmap retorna um novo vetor com todos os elementos do vetor passado como parametro, mas como um vetor de vetores
  function exemplo13() {
    let todasRespostas = questoes.flatMap(e => e.alternativas);
    console.log(todasRespostas);
  }


  function exemplo14() {
    questoes.forEach(e => console.log(e));
  }

  // resposta sem select
  function respostas2() {
    var acertadas = questoes.filter(e => e.resposta === e.respostaUsuario);
    var erradas = questoes.filter(e => e.resposta !== e.respostaUsuario);

    var acertadas = acertadas.length;
    var erradas = erradas.length;
    var total = questoes.length;
    
    console.log(`Você acertou ${acertadas} questões`);
    console.log(`Você errou ${erradas} questões`);
    console.log(`Você fez ${total} questões`);
  }


  // resposta com select
  function respostas() {
    // var acertadas = questoes.filter(e => e.resposta === e.alternativas.find(i => i.select).texto);
    // var erradas = questoes.filter(e => e.resposta !== e.alternativas.select.find(i => i.select).texto);

    var acertadas = questoes.filter(function(e) {
      const alternativaSelecionada = e.alternativas.find(i => i.select);
      return e.resposta === alternativaSelecionada.texto;
    })

    var acertadas = acertadas.length;
    var total = questoes.length;
    var erradas = total - acertadas;
    
    console.log(`Você acertou ${acertadas} questões`);
    console.log(`Você errou ${erradas} questões`);
    console.log(`Você fez ${total} questões`);
  }

  // o metodo while retorna um novo vetor com todos os elementos do vetor passado como parametro, mas como um vetor de vetores
  function exemplo15() {
    var contador = 0;

    while (contador <= 100) {
     if (contador % 3 === 0 && contador % 5 === 0) {
       console.log(`${contador} é multiplo de 3 e 5`);
     } else if (contador % 5 === 0) {
       console.log(`${contador} é multiplo de 5`);
     } else if (contador % 3 === 0) {
      console.log(`${contador} é multiplo de 3`);
     }
     ++contador;
    }
  }

  function exemplo16() {
    for( var _dados = 0; _dados < questoes.length; _dados++) {
      console.log(questoes[_dados]);
    }
  }


  function exemplo17() {
    var contador = 0;
    for (contador = 0; contador <= 100; contador+=10) {
      console.log(contador);
    }
  }

  function exemplo18() {
    var numerosAleatorios = [ 1, 99, 36, 12, 55, 134, 1326, 9, 570, 945 ];

    for( var i = numerosAleatorios.length -1; i >= 0; i--) {
      console.log(`Posição ${i} com descremento:${numerosAleatorios[i]}`); 
    }
  }


  useEffect(() => {
    exemplo18();
  }, []);

  return (
    <div>
      
    </div>
  )
}
