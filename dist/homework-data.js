const HOMEWORK = {
  title: 'Verbos de apoio',
  classes: [
    {
      id: 'classe-1',
      label: 'Classe 1',
      title: 'Gostar de, precisar, ter que e querer',
      warmup: [
        'O que você gosta de fazer no fim de semana?',
        'O que você precisa fazer hoje?',
        'O que você quer fazer este ano?'
      ],
      warmupAnswers: [
        'Eu gosto de descansar no fim de semana.',
        'Eu preciso trabalhar hoje.',
        'Eu quero aprender português este ano.'
      ],
      verbs: [
        {
          id: 'gostar', name: 'gostar de', translation: 'gustar',
          rule: 'Gostar sempre leva de: gostar de + verbo ou substantivo. Em português, a pessoa que gosta é o sujeito.',
          examples: [['Eu gosto de dançar.','Me gusta bailar.'],['Ela gosta de café com leite.','Le gusta el café con leche.'],['Nós gostamos de viajar.','Nos gusta viajar.']],
          complete: ['Eu ____ (gostar) de música brasileira.','Ela gosta ____ cozinhar.','Nós ____ (gostar) de viajar.','Eles gostam ____ café com leite.'],
          completeAnswers: [
            ['Eu gosto de música brasileira.','gosto'],
            ['Ela gosta de cozinhar.','de'],
            ['Nós gostamos de viajar.','gostamos'],
            ['Eles gostam de café com leite.','de']
          ],
          own: ['Algo de comer ou beber.','Algo que você faz no fim de semana.','Algo de que você não gosta (Eu não gosto de...).'],
          ownAnswers: ['Eu gosto de café.','Eu gosto de caminhar no fim de semana.','Eu não gosto de acordar cedo.']
        },
        {
          id: 'precisar', name: 'precisar', translation: 'necesitar',
          rule: 'Precisar + verbo: sem de. Precisar + substantivo: de. Aqui precisar significa necessitar.',
          examples: [['Eu preciso estudar.','Necesito estudiar.'],['Ela precisa de ajuda.','Necesita ayuda.'],['Nós precisamos de tempo.','Necesitamos tiempo.']],
          complete: ['Eu preciso ____ estudar.','Ela precisa ____ ajuda.','Nós ____ (precisar) de tempo.','Eles precisam ____ um caderno.'],
          completeAnswers: [
            ['Eu preciso estudar.','sem palavra','—'],
            ['Ela precisa de ajuda.','de'],
            ['Nós precisamos de tempo.','precisamos'],
            ['Eles precisam de um caderno.','de']
          ],
          own: ['Algo que você precisa fazer hoje (+ verbo).','Algo que você precisa comprar (+ de + substantivo).','Algo de que um amigo ou familiar precisa.'],
          ownAnswers: ['Eu preciso trabalhar hoje.','Eu preciso de um caderno.','Minha irmã precisa de ajuda.']
        },
        {
          id: 'ter-que', name: 'ter que', translation: 'tener que',
          rule: 'Ter + que + verbo equivale a tener que + infinitivo. Não leva de nem a. No plural: eles têm que.',
          examples: [['Eu tenho que trabalhar.','Tengo que trabajar.'],['Ela tem que acordar cedo.','Tiene que despertarse temprano.'],['Eles têm que estudar.','Tienen que estudiar.']],
          complete: ['Eu tenho ____ trabalhar.','Ela ____ (ter) que acordar cedo.','Eles ____ (ter) que estudar.','Nós temos ____ sair às oito.'],
          completeAnswers: [
            ['Eu tenho que trabalhar.','que'],
            ['Ela tem que acordar cedo.','tem'],
            ['Eles têm que estudar.','têm'],
            ['Nós temos que sair às oito.','que']
          ],
          own: ['Algo que você tem que fazer amanhã.','Algo que sua família tem que fazer.','Algo que você não tem que fazer (Eu não tenho que...).'],
          ownAnswers: ['Eu tenho que estudar amanhã.','Minha família tem que organizar a casa.','Eu não tenho que trabalhar no domingo.']
        },
        {
          id: 'querer', name: 'querer', translation: 'querer',
          rule: 'Querer + verbo: sem de e sem que. Antes de um substantivo também não leva de. Para pedir com cortesia, use queria.',
          examples: [['Eu quero viajar.','Quiero viajar.'],['Ela quer um café.','Quiere un café.'],['Nós queremos jantar fora.','Queremos cenar afuera.']],
          complete: ['Eu ____ (querer) viajar em dezembro.','Nós queremos ____ jantar fora.','Ela ____ (querer) um café.','Eles querem ____ viajar.'],
          completeAnswers: [
            ['Eu quero viajar em dezembro.','quero'],
            ['Nós queremos jantar fora.','sem palavra','—'],
            ['Ela quer um café.','quer'],
            ['Eles querem viajar.','sem palavra','—']
          ],
          own: ['Algo que você quer fazer este ano.','Algo que você quer comer ou beber.','Algo que você não quer fazer (Eu não quero...).'],
          ownAnswers: ['Eu quero aprender português este ano.','Eu quero tomar café.','Eu não quero chegar tarde.']
        }
      ],
      presentations: [
        {
          id: 'apresentacao-gostar-precisar', title: 'Mini apresentação 1 · O que gosto e o que preciso',
          notes: ['Eu gosto de...','Eu não gosto de...','Eu preciso de... (substantivo)','Eu preciso... (verbo)'],
          noteAnswers: ['Eu gosto de música.','Eu não gosto de acordar cedo.','Eu preciso de tempo.','Eu preciso estudar.'],
          companion: ['Ele / Ela gosta de...','Ele / Ela precisa de...'],
          companionAnswers: ['Ele gosta de viajar.','Ela precisa de ajuda.']
        },
        {
          id: 'apresentacao-ter-querer', title: 'Mini apresentação 2 · Minha semana e meus desejos',
          notes: ['Esta semana eu tenho que...','No fim de semana eu quero...','Eu quero aprender a...','Eu não quero...'],
          noteAnswers: ['Esta semana eu tenho que trabalhar.','No fim de semana eu quero descansar.','Eu quero aprender a falar português.','Eu não quero chegar tarde.'],
          companion: ['Ele / Ela tem que...','Ele / Ela quer...'],
          companionAnswers: ['Ele tem que estudar.','Ela quer viajar.']
        }
      ],
      roleplays: [
        {
          id: 'restaurante', title: 'No restaurante',
          modelAnswer: 'Eu quero jantar, mas não gosto de carne. Preciso de um prato sem carne. Do que você gosta?',
          roles: [
            ['Estudante A · cliente','Você quer jantar e não gosta de carne. Peça algo com querer, explique o que precisa e pergunte do que o garçom gosta.'],
            ['Estudante B · garçom','Pergunte o que o cliente quer e do que gosta. Ofereça dois pratos e diga que tem que levar a conta a outra mesa.']
          ]
        },
        {
          id: 'fim-semana', title: 'Plano para o fim de semana',
          modelAnswer: 'Eu quero ir ao cinema, mas tenho que estudar no sábado. Preciso descansar. Podemos ir no domingo?',
          roles: [
            ['Estudante A · quem convida','Convide um amigo para o cinema, a praia ou um jantar. Pergunte do que gosta e o que quer fazer.'],
            ['Estudante B · amigo ocupado','Você gosta do plano, mas tem que trabalhar ou estudar no sábado e precisa descansar. Proponha outro dia.']
          ]
        }
      ],
      exit: ['gostar de','precisar','ter que'],
      exitAnswers: ['Eu gosto de estudar português.','Eu preciso praticar todos os dias.','Eu tenho que fazer minha tarefa.'],
      checklist: ['Uso de com gostar e com precisar + substantivo.','Uso que com ter.','Com querer não coloco de nem que.','Escrevo têm com acento no plural.']
    },
    {
      id: 'classe-2',
      label: 'Classe 2',
      title: 'Poder, dever, ir e acabar de',
      warmup: [
        'O que você pode fazer no sábado?',
        'O que você vai fazer amanhã?',
        'O que você acabou de fazer?'
      ],
      warmupAnswers: [
        'Eu posso estudar no sábado.',
        'Eu vou trabalhar amanhã.',
        'Eu acabei de tomar café.'
      ],
      verbs: [
        {
          id: 'poder', name: 'poder', translation: 'poder',
          rule: 'Poder + verbo: sem de. Serve para capacidade, permissão e pedidos: Você pode me ajudar?',
          examples: [['Eu posso ajudar.','Puedo ayudar.'],['Você pode me ajudar?','¿Puedes ayudarme?'],['Eles podem vir amanhã.','Pueden venir mañana.']],
          complete: ['Eu ____ (poder) ajudar.','Você ____ (poder) me ajudar?','Nós ____ (poder) sair hoje.','Eles ____ (poder) vir amanhã.'],
          completeAnswers: [
            ['Eu posso ajudar.','posso'],
            ['Você pode me ajudar?','pode'],
            ['Nós podemos sair hoje.','podemos'],
            ['Eles podem vir amanhã.','podem']
          ],
          own: ['Algo que você pode fazer no sábado.','Uma pergunta para um colega (Você pode...?).','Algo que você não pode fazer (Eu não posso...).'],
          ownAnswers: ['Eu posso descansar no sábado.','Você pode me ajudar?','Eu não posso sair hoje.']
        },
        {
          id: 'dever', name: 'dever', translation: 'deber',
          rule: 'Dever + verbo: sem de. Expressa um conselho ou uma obrigação suave: Você deve descansar.',
          examples: [['Você deve descansar.','Debes descansar.'],['Eu devo estudar mais.','Debo estudiar más.'],['Eles devem chegar às oito.','Deben llegar a las ocho.']],
          complete: ['Você ____ (dever) descansar.','Eu ____ (dever) estudar mais.','Nós ____ (dever) chegar cedo.','Ela deve ____ sair agora.'],
          completeAnswers: [
            ['Você deve descansar.','deve'],
            ['Eu devo estudar mais.','devo'],
            ['Nós devemos chegar cedo.','devemos'],
            ['Ela deve sair agora.','sem palavra','—']
          ],
          own: ['Um conselho para um amigo cansado.','Algo que você deve fazer mais.','Algo que você não deve fazer (Eu não devo...).'],
          ownAnswers: ['Você deve descansar.','Eu devo praticar mais português.','Eu não devo dormir tarde.']
        },
        {
          id: 'ir-infinitivo', name: 'ir + infinitivo', translation: 'ir a + infinitivo',
          rule: 'Ir + verbo: sem a. Em português dizemos Eu vou comer. Para um lugar, sim: Vou ao mercado.',
          examples: [['Eu vou comer agora.','Voy a comer ahora.'],['Ela vai viajar amanhã.','Va a viajar mañana.'],['Nós vamos estudar hoje à noite.','Vamos a estudiar esta noche.']],
          complete: ['Eu vou ____ comer agora.','Ela ____ (ir) viajar amanhã.','Nós ____ (ir) estudar hoje.','Eles ____ (ir) trabalhar no sábado.'],
          completeAnswers: [
            ['Eu vou comer agora.','sem palavra','—'],
            ['Ela vai viajar amanhã.','vai'],
            ['Nós vamos estudar hoje.','vamos'],
            ['Eles vão trabalhar no sábado.','vão']
          ],
          own: ['Seu plano para esta noite.','Seu plano para amanhã.','Seu plano para o próximo ano.'],
          ownAnswers: ['Eu vou estudar esta noite.','Eu vou trabalhar amanhã.','Eu vou viajar no próximo ano.']
        },
        {
          id: 'acabar-de', name: 'acabar de', translation: 'acabar de',
          rule: 'Acabar + de + infinitivo indica algo recém-concluído. Em português usamos o passado: Eu acabei de chegar.',
          examples: [['Eu acabei de chegar.','Acabo de llegar.'],['Ela acabou de sair.','Acaba de salir.'],['Nós acabamos de comer.','Acabamos de comer.']],
          complete: ['Eu ____ (acabar) de chegar. (passado)','Ela acabou ____ sair.','Nós ____ (acabar) de comer. (passado)','Eles acabaram ____ chegar.'],
          completeAnswers: [
            ['Eu acabei de chegar.','acabei'],
            ['Ela acabou de sair.','de'],
            ['Nós acabamos de comer.','acabamos'],
            ['Eles acabaram de chegar.','de']
          ],
          own: ['Algo que você acabou de fazer.','Algo que um colega acabou de fazer.','Algo que você acabou de comprar ou ver.'],
          ownAnswers: ['Eu acabei de fazer a tarefa.','Meu colega acabou de chegar.','Eu acabei de comprar um livro.']
        }
      ],
      presentations: [
        {
          id: 'apresentacao-poder-dever', title: 'Mini apresentação 1 · O que posso e devo fazer',
          notes: ['Esta semana eu posso...','Eu não posso...','Eu devo... (mais ou menos)','Um conselho: você deve...'],
          noteAnswers: ['Esta semana eu posso estudar.','Eu não posso sair hoje.','Eu devo praticar mais.','Você deve descansar.'],
          companion: ['Ele / Ela pode...','Ele / Ela deve...'],
          companionAnswers: ['Ele pode ajudar.','Ela deve estudar.']
        },
        {
          id: 'apresentacao-ir-acabar', title: 'Mini apresentação 2 · Meus planos e o que acabei de fazer',
          notes: ['Amanhã eu vou...','Este ano eu vou...','Eu acabei de...','Acabei de ver / comprar...'],
          noteAnswers: ['Amanhã eu vou trabalhar.','Este ano eu vou aprender português.','Eu acabei de chegar.','Acabei de comprar um livro.'],
          companion: ['Ele / Ela vai...','Ele / Ela acabou de...'],
          companionAnswers: ['Ele vai viajar.','Ela acabou de sair.']
        }
      ],
      roleplays: [
        {
          id: 'convite', title: 'Um convite',
          modelAnswer: 'Você pode ir ao cinema comigo? Eu vou comprar os ingressos. Podemos ir no domingo.',
          roles: [
            ['Estudante A · quem convida','Convide um amigo ao cinema. Pergunte se pode e proponha um plano com vamos e vou.'],
            ['Estudante B · amigo','Você acabou de chegar do trabalho e está cansado. Explique por que não pode e o que deve fazer. Proponha outro dia.']
          ]
        },
        {
          id: 'ajuda', title: 'Um amigo precisa de ajuda',
          modelAnswer: 'Eu acabei de me mudar. Você pode me ajudar no sábado? Nós vamos levar as caixas.',
          roles: [
            ['Estudante A · quem se mudou','Você acabou de se mudar e precisa de ajuda. Pergunte quem pode vir e o que cada pessoa vai fazer.'],
            ['Estudante B · amigo que ajuda','Você quer ajudar, mas deve estudar. Diga em que dia pode e o que vai levar.']
          ]
        }
      ],
      exit: ['poder','ir + infinitivo','acabar de'],
      exitAnswers: ['Eu posso conversar em português.','Eu vou estudar amanhã.','Eu acabei de terminar a tarefa.'],
      checklist: ['Uso o infinitivo direto depois de poder e dever.','Não coloco a depois de ir: Eu vou comer.','Uso acabei de (passado) + infinitivo.','Conjugo bem: vamos, vão, podem, devem.']
    }
  ]
};
