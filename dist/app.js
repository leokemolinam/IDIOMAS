const DATA = {
  pt: {
    locale: 'pt-BR', badge: 'PT', region: 'BR',
    nav: [['class-review','Minhas Aulas'],['homework','Fazer tarefa'],['timeline','Linha do Tempo'],['cheat-sheet','Guia Rápido'],['verbs','Verbos'],['conversations','Conversas'],['essentials','Resumo'],['quiz','Quiz']],
    hero: {
      eyebrow: "LINHA DO TEMPO DE PORTUGUÊS DO OSCAR",
      title: 'Entenda o tempo.<br><span class="accent-past">Conte</span> <span class="accent-now">sua</span> <span class="accent-future">história.</span>',
      copy: 'Um guia visual e prático do português brasileiro, construído para quem fala espanhol e quer usar a língua com segurança em viagens, trabalho, entrevistas e conversas reais.',
      primary: 'Revisar minhas aulas →', secondary: 'Praticar com o quiz',
      benefits: [['◎','Veja o panorama','Entenda como os tempos se conectam ao longo do tempo.'],['◉','Memorize mais rápido','Cores, padrões e exemplos que grudam na cabeça.'],['ϟ','Use com confiança','De conversas reais a entrevistas e ao dia a dia.']],
      quote: 'A língua é o mapa, a prática é a viagem, a consistência é a chave.<cite>— Oscar</cite>'
    },
    classReview: {
      kicker:'CONTEÚDO DAS MINHAS AULAS',
      title:'O que preciso revisar agora.',
      copy:'O conteúdo da planilha foi organizado em sete blocos curtos. Revise as frases, leia os exemplos em voz alta e marque cada tema quando terminar.',
      lessons:[
        {
          id:'conversa', label:'Conversação', kicker:'AULA 1', title:'Saudações e apresentação',
          description:'Frases para iniciar uma conversa, perguntar como alguém está e falar sobre você.',
          blocks:[
            {title:'Saudações e respostas',type:'pairs',items:[
              ['Oi','Hola','informal'],['Bom dia','Buenos días','formal'],['Boa tarde','Buenas tardes','formal'],['Boa noite','Buenas noches','pronúncia aproximada: boa noitchi'],
              ['Tudo bem?','¿Todo bien?','pergunta'],['Tudo bem. E você?','Todo bien. ¿Y tú?','resposta'],['Como você está? / Como vai?','¿Cómo estás?','duas formas naturais'],['O que você está fazendo?','¿Qué estás haciendo?','ação do momento'],
              ['Eu estou bem.','Estoy bien.','resposta positiva'],['Eu não estou bem.','No estoy bien.','resposta negativa']
            ]},
            {title:'Apresentação e posse',type:'pairs',items:[
              ['Meu nome é Oscar.','Me llamo Oscar.','meu + substantivo masculino'],['Sou engenheiro e músico.','Soy ingeniero y músico.','ser + profissão'],['Como é o seu nome?','¿Cómo te llamas?','seu + substantivo masculino'],['Essa garrafa é minha.','Esa botella es mía.','minha concorda com garrafa']
            ]}
          ]
        },
        {
          id:'sala', label:'Na aula', kicker:'AULA 2', title:'Perguntas e frases de sobrevivência',
          description:'Use estas frases para controlar o ritmo da aula e pedir explicações em português.',
          blocks:[
            {title:'Palavras interrogativas',type:'lists',items:[
              ['Por quê?',['¿Por qué?']],['Onde?',['¿Dónde?']],['O que? / Que?',['¿Qué?']],['Como?',['¿Cómo?']],['Quando?',['¿Cuándo?']]
            ]},
            {title:'Controle da conversa',type:'pairs',items:[
              ['Como se diz…?','¿Cómo se dice…?','para pedir uma palavra'],['Pode repetir mais devagar?','¿Puede repetir más despacio?','para controlar a velocidade'],['O que significa?','¿Qué significa?','para pedir o significado'],['O que você gosta de estudar?','¿Qué te gusta estudiar?','pergunta da aula']
            ]}
          ]
        },
        {
          id:'vocabulario', label:'Vocabulário', kicker:'AULA 3', title:'Palavras do seu caderno',
          description:'Vocabulário de ações, clima, lazer, tecnologia e expressões frequentes.',
          blocks:[
            {title:'Vocabulário por categoria',type:'lists',items:[
              ['Verbos',['falar · estudar · trabalhar · aprender · viver','tocar · mixar · fazer música · sair · brigar']],
              ['Substantivos',['português · mentira · roda de samba · aula · cidade','festa · inveja · cachorro · jardinagem · tecnologia · patinete']],
              ['Clima e estações',['frio · calor · chuva · ventos','primavera · verão · outono · inverno']],
              ['Adjetivos e quantidade',['primeira · quente · empolgante · festeiro','pouquinho · tranquilo · muito']],
              ['Conectores e tempo',['e · mas · antes · depois · com','agora · também · ontem · hoje · amanhã']],
              ['Expressões',['muito bem · obrigado · prazer','isso é bom · meu Deus · depende · sim · não']]
            ]},
            {title:'Gostar',type:'pairs',items:[
              ['Eu gosto de estudar.','Me gusta estudiar.','gostar de + verbo no infinitivo'],['Eu gosto do calor.','Me gusta el calor.','de + o = do'],['O que você gosta de fazer?','¿Qué te gusta hacer?','pergunta com gostar']
            ]}
          ]
        },
        {
          id:'gramatica', label:'Gramática', kicker:'AULA 4', title:'Possessivos, artigos e contrações',
          description:'As concordâncias e combinações que aparecem repetidamente nas suas anotações.',
          blocks:[
            {title:'Possessivos',type:'table',headers:['Pessoa','Masculino','Feminino'],rows:[['eu','meu','minha'],['você / ele / ela','seu','sua']]},
            {title:'Artigos',type:'table',headers:['Número','Definidos','Indefinidos'],rows:[['singular masculino','o','um'],['singular feminino','a','uma'],['plural masculino','os','uns'],['plural feminino','as','umas']]},
            {title:'Contrações com EM e DE',type:'table',headers:['Base','Masculino','Feminino'],rows:[['em + singular','no','na'],['em + plural','nos','nas'],['de + singular','do','da'],['de + plural','dos','das']]},
            {title:'Regras de lugar',type:'pairs',items:[
              ['Eu sou da Colômbia.','Soy de Colombia.','país feminino: da / na'],['Eu sou do Brasil.','Soy de Brasil.','país masculino: do / no'],['Estou em Bogotá.','Estoy en Bogotá.','para cidades, use em']
            ],note:'A terminação em “a” ajuda em muitos países femininos, mas há exceções. Aprenda o artigo junto com o nome do país.'}
          ]
        },
        {
          id:'regulares', label:'Verbos regulares', kicker:'AULA 5', title:'Presente e futuro com IR',
          description:'Compare as terminações de -ar, -er e -ir e forme o futuro com ir + infinitivo.',
          blocks:[
            {title:'Falar · verbo em -AR',type:'table',headers:['Pessoa','Presente','Futuro com IR'],rows:[['eu','falo','vou falar'],['você / ele / ela / a gente','fala','vai falar'],['nós','falamos','vamos falar'],['vocês / eles / elas','falam','vão falar']]},
            {title:'Comer · verbo em -ER',type:'table',headers:['Pessoa','Presente','Futuro com IR'],rows:[['eu','como','vou comer'],['você / ele / ela / a gente','come','vai comer'],['nós','comemos','vamos comer'],['vocês / eles / elas','comem','vão comer']]},
            {title:'Assistir · verbo em -IR',type:'table',headers:['Pessoa','Presente','Futuro com IR'],rows:[['eu','assisto','vou assistir'],['você / ele / ela / a gente','assiste','vai assistir'],['nós','assistimos','vamos assistir'],['vocês / eles / elas','assistem','vão assistir']]},
            {title:'Modelo para praticar',type:'pairs',items:[['O que você vai fazer na próxima semana?','¿Qué vas a hacer la próxima semana?','vou + infinitivo'],['Vou trabalhar e organizar meu calendário.','Voy a trabajar y organizar mi calendario.','duas ações no infinitivo']]}
          ]
        },
        {
          id:'irregulares', label:'Irregulares', kicker:'AULA 6', title:'ESTAR, SER, IR, TER e FAZER',
          description:'As formas essenciais no presente e no pretérito perfeito. As lacunas da planilha foram completadas para permitir o estudo.',
          blocks:[
            {title:'Presente',type:'table',headers:['Pessoa','ESTAR','SER','IR','TER','FAZER'],rows:[['eu','estou','sou','vou','tenho','faço'],['você / ele / ela / a gente','está','é','vai','tem','faz'],['nós','estamos','somos','vamos','temos','fazemos'],['vocês / eles / elas','estão','são','vão','têm','fazem']]},
            {title:'Pretérito perfeito',type:'table',headers:['Pessoa','ESTAR','SER','IR','TER','FAZER'],rows:[['eu','estive','fui','fui','tive','fiz'],['você / ele / ela / a gente','esteve','foi','foi','teve','fez'],['nós','estivemos','fomos','fomos','tivemos','fizemos'],['vocês / eles / elas','estiveram','foram','foram','tiveram','fizeram']]},
            {title:'Lembrete importante',type:'pairs',items:[['Tem uma aula hoje.','Hay una clase hoy.','na fala cotidiana, “tem” pode equivaler a “hay”'],['A gente vai estudar.','Vamos a estudiar.','a gente usa verbo na 3ª pessoa do singular']]}
          ]
        },
        {
          id:'pronuncia', label:'Pronúncia', kicker:'AULA 7', title:'Sons anotados na planilha',
          description:'Pronúncia brasileira aproximada para facilitar a escuta. Os sons podem variar conforme a região.',
          blocks:[
            {title:'Padrões principais',type:'table',headers:['Padrão','Exemplo','Som aproximado'],rows:[['TI diante de vogal','tio · tia','tchio · tchia'],['TE no fim da palavra','boa noite','boa noitchi'],['S entre duas vogais','músico · casa · casado','múzico · caza · cazado'],['DE no fim da palavra','de','dji']]},
            {title:'Prática em voz alta',type:'pairs',items:[['Boa noite!','Buenas noches.','boa noitchi'],['Meu nome é Oscar e sou músico.','Me llamo Oscar y soy músico.','o “s” de músico pode soar como z'],['Pode repetir mais devagar?','¿Puede repetir más despacio?','atenção ao “de” final']]}
          ]
        }
      ],
      flashcards:[
        ['¿Todo bien?','Tudo bem?','Saudação'],['¿Y tú?','E você?','Resposta'],['¿Cómo te llamas?','Como é o seu nome?','Apresentação'],['Me llamo Oscar.','Meu nome é Oscar.','Apresentação'],['¿Qué vas a hacer la próxima semana?','O que você vai fazer na próxima semana?','Futuro com IR'],['Me gusta estudiar.','Eu gosto de estudar.','gostar de + infinitivo'],['Me gusta el calor.','Eu gosto do calor.','de + o = do'],['¿Puede repetir más despacio?','Pode repetir mais devagar?','Na aula'],['¿Qué significa?','O que significa?','Na aula'],['en el / en la','no / na','Contrações'],['del / de la','do / da','Contrações'],['Yo voy a hablar.','Eu vou falar.','Futuro com IR'],['Nosotros comemos.','Nós comemos.','Presente regular'],['Ellos van a ver.','Eles vão assistir.','Futuro com IR'],['Hay una clase hoy.','Tem uma aula hoje.','Uso cotidiano de TER'],['Yo hice.','Eu fiz.','Pretérito de FAZER'],['Nosotros fuimos.','Nós fomos.','Pretérito de SER / IR'],['Buenas noches.','Boa noite.','Pronúncia: boa noitchi']
      ]
    },
    timeline: { kicker:'PASSADO · AGORA · FUTURO', title:'Nove tempos para organizar sua história.', axis:['← PASSADO','AGORA','FUTURO →'] },
    tenses: [
      ['past','Pretérito Perfeito','S + verbo (-ei / -aste / -ou / -amos / -aram)','Ação concluída em um momento específico do passado.','ontem · em 2024 · no ano passado','Entre 2018 e 2020, trabalhei com saneamento cadastral e validei levantamentos topográficos.'],
      ['past','Pretérito Imperfeito','S + verbo (-ava / -ia)','Hábito, descrição ou ação contínua no passado.','enquanto · todos os dias · naquela época','Enquanto administrava a base predial, a equipe migrava o sistema de gestão.'],
      ['past','Mais-que-perfeito Composto','S + tinha / tinham + particípio','Ação concluída antes de outra ação passada.','antes de · quando · já · depois de','Quando entrei no novo projeto, já tinha migrado o módulo cadastral.'],
      ['past','Imperfeito Contínuo','S + estava / estavam + gerúndio','Ação em andamento no passado, muitas vezes interrompida.','quando · enquanto · naquele momento','Eu estava processando dados quando a equipe publicou a nova base.'],
      ['now','Pretérito Perfeito Composto','S + tenho / temos + particípio','Ação repetida ou contínua do passado até o presente.','ultimamente · nos últimos meses · desde','Tenho construído painéis que integram variáveis cadastrais e territoriais.'],
      ['now','Presente Contínuo','S + estou / estamos + gerúndio','Ação acontecendo agora ou durante o período atual.','agora · atualmente · neste momento','Atualmente estou cursando o mestrado enquanto lidero análises geoespaciais.'],
      ['future','Futuro do Presente','S + verbo + -ei / -á / -emos / -ão','Plano, previsão ou promessa sobre o futuro.','amanhã · em breve · no próximo semestre','No próximo semestre entregarei um modelo preditivo em Python.'],
      ['future','Futuro Perfeito','S + terei / terão + particípio','Ação concluída antes de um marco futuro.','até · quando · antes de · até lá','Até dezembro, terei consolidado a base geográfica do projeto.'],
      ['future','Futuro Contínuo','S + estarei / estarão + gerúndio','Ação em andamento em um momento futuro.','em 2027 · no próximo mês · por dez anos','Em 2027, estarei trabalhando com dados geoespaciais há mais de uma década.']
    ],
    cheat: {
      kicker:'GUIA RÁPIDO DE SUJEITOS', title:'Conheça os sujeitos, use a forma certa.', copy:'Os menores blocos de todo tempo verbal — acerte estes e o resto se encaixa.',
      cards:[['TER · PRESENTE','Eu → tenho\nTu → tens\nVocê / Ele / Ela → tem\nNós → temos\nVocês / Eles / Elas → têm'],['ESTAR · PRESENTE','Eu → estou\nTu → estás\nVocê / Ele / Ela → está\nNós → estamos\nVocês / Eles / Elas → estão'],['AUXILIARES-CHAVE','tinha · pretérito anterior\nirei · futuro\nterei · futuro perfeito\nestarei · futuro contínuo']],
      tips:[['Pretérito Perfeito','ação concluída num momento específico.'],['Pretérito Imperfeito','hábito ou pano de fundo no passado.'],['Mais-que-perfeito','tinha + particípio; antes de outra ação.'],['Presente Contínuo','estou + gerúndio; acontece agora.'],['Perfeito Composto','tenho + particípio; repetição até agora.'],['Futuro Perfeito','terei + particípio; pronto antes de um marco.']]
    },
    daily: { title:'EXEMPLOS DO MEU DIA A DIA', items:['Tenho administrado dados geoespaciais para projetos de infraestrutura.','Eu já tinha migrado o módulo cadastral antes da entrada em produção.','No próximo semestre entregarei um modelo preditivo em Python.','Estou liderando análises de SIG enquanto curso Ciência de Dados.'] },
    trainer: { kicker:'VERBOS ESSENCIAIS · TREINADOR', title:'Domine o passado, conquiste o particípio.', copy:'Digite o pretérito perfeito na primeira pessoa e o particípio. Duas respostas corretas seguidas marcam o verbo como dominado.', labels:['PRETÉRITO · EU','PARTICÍPIO'], hint:'Mostrar dica', skip:'Pular', check:'Verificar', reset:'Reiniciar', filters:['Todos','Para dominar','Revisar erros'], messages:{hint:'Dica', correct:'Muito bem! Sequência atual', mastered:'Dominado! O verbo entrou na sua coleção.', wrong:'Quase. A resposta é', empty:'Preencha as duas formas antes de verificar.'} },
    verbs: [
      ['ser','ser / estar','fui','sido'],['estar','estar','estive','estado'],['ter','tener','tive','tido'],['ir','ir','fui','ido'],['vir','venir','vim','vindo'],['fazer','hacer','fiz','feito'],['dizer','decir','disse','dito'],['ver','ver','vi','visto'],['pôr','poner','pus','posto'],['poder','poder','pude','podido'],['saber','saber','soube','sabido'],['querer','querer','quis','querido'],['trazer','traer','trouxe','trazido'],['dar','dar','dei','dado'],['ler','leer','li','lido'],['escrever','escribir','escrevi','escrito'],['abrir','abrir','abri','aberto'],['cobrir','cubrir','cobri','coberto'],['descobrir','descubrir','descobri','descoberto'],['pedir','pedir','pedi','pedido'],['ouvir','oír','ouvi','ouvido'],['sentir','sentir','senti','sentido'],['dormir','dormir','dormi','dormido'],['subir','subir','subi','subido'],['cair','caer','caí','caído'],['sair','salir','saí','saído'],['rir','reír','ri','rido'],['perder','perder','perdi','perdido'],['ganhar','ganar','ganhei','ganhado'],['chegar','llegar','cheguei','chegado'],['começar','comenzar','comecei','começado'],['conhecer','conocer','conheci','conhecido'],['conduzir','conducir','conduzi','conduzido'],['medir','medir','medi','medido'],['manter','mantener','mantive','mantido'],['obter','obtener','obtive','obtido'],['propor','proponer','propus','proposto'],['resolver','resolver','resolvi','resolvido'],['imprimir','imprimir','imprimi','impresso|imprimido'],['pagar','pagar','paguei','pago|pagado'],['eleger','elegir','elegi','eleito|elegido'],['entregar','entregar','entreguei','entregue|entregado'],['aceitar','aceptar','aceitei','aceito|aceitado'],['morrer','morir','morri','morto'],['nascer','nacer','nasci','nascido'],['ficar','quedarse','fiquei','ficado'],['receber','recibir','recebi','recebido'],['ler','leer','li','lido']
    ],
    conversations: {
      kicker:'CONVERSAS BÁSICAS · PRÁTICA', title:'Fale como um brasileiro no dia a dia.', copy:'Sete situações reais com pronúncia aproximada para hispanofalantes, tradução e um mini-diálogo.',
      reveal:'Toque para ver em espanhol',
      scenes:[
        {name:'Cumprimentos',icon:'👋',tag:'DIGA OI COMO UM LOCAL',desc:'Chegue com naturalidade e responda sem travar.',phrases:[['Oi, tudo bem?','oy, tudu bem','Hola, ¿todo bien?'],['Bom dia, como vai?','bom djia, komu vay','Buenos días, ¿cómo estás?'],['Tudo tranquilo, e você?','tudu trankílu, i vosê','Todo tranquilo, ¿y tú?'],['Prazer em te conhecer.','prazêr em tchi conhesêr','Un placer conocerte.']],dialogue:[['A','E aí, Oscar! Tudo bem?'],['B','Tudo ótimo, e você?'],['A','Também. Que bom te ver!']]},
        {name:'Me apresentando',icon:'🙋',tag:'FALE SOBRE VOCÊ',desc:'Nome, origem, profissão e interesses.',phrases:[['Meu nome é Oscar.','meu nomi é Oscar','Me llamo Oscar.'],['Sou da Colômbia.','sou da Colômbia','Soy de Colombia.'],['Trabalho com dados geoespaciais.','trabálhu com dadus','Trabajo con datos geoespaciales.'],['Estou aprendendo português.','estou aprendendu português','Estoy aprendiendo portugués.']],dialogue:[['A','De onde você é?'],['B','Sou de Bogotá. E você?'],['A','Sou de São Paulo.']]},
        {name:'Entrevista',icon:'💼',tag:'MOSTRE SEU VALOR',desc:'Apresente experiência e resultados profissionais.',phrases:[['Tenho experiência em análise de dados.','tenhu esperiénsia','Tengo experiencia en análisis de datos.'],['Liderei projetos multidisciplinares.','liderei projetus','Lideré proyectos multidisciplinarios.'],['Posso começar imediatamente.','possu comesár','Puedo comenzar inmediatamente.'],['Quais são os próximos passos?','kuais são us próximus passus','¿Cuáles son los próximos pasos?']],dialogue:[['A','Conte um pouco sobre sua experiência.'],['B','Trabalho com SIG há mais de dez anos.'],['A','Ótimo. Vamos falar do projeto.']]},
        {name:'No café',icon:'☕',tag:'PEÇA COMO UM BRASILEIRO',desc:'Faça seu pedido e entenda as perguntas comuns.',phrases:[['Eu queria um café, por favor.','eu keria um café','Quisiera un café, por favor.'],['Pode ser sem açúcar.','pódji ser sem asúcar','Puede ser sin azúcar.'],['Vai consumir aqui ou levar?','vai consumír akí ou levár','¿Para tomar aquí o llevar?'],['A conta, por favor.','a conta, por favor','La cuenta, por favor.']],dialogue:[['A','Bom dia! O que vai querer?'],['B','Um café com leite e um pão de queijo.'],['A','Mais alguma coisa?']]},
        {name:'Direções',icon:'🧭',tag:'ENCONTRE O CAMINHO',desc:'Pergunte, confirme e agradeça.',phrases:[['Onde fica o metrô?','ondji fica u metrô','¿Dónde queda el metro?'],['É longe daqui?','é lonji dakí','¿Está lejos de aquí?'],['Vire à direita.','viri a djireita','Gire a la derecha.'],['Muito obrigado pela ajuda.','muintu obrigadu','Muchas gracias por la ayuda.']],dialogue:[['A','Com licença, onde fica a estação?'],['B','Siga reto e vire à esquerda.'],['A','Perfeito, obrigado!']]},
        {name:'Encontro tech',icon:'⌁',tag:'PORTUGUÊS PARA TECNOLOGIA',desc:'Participe de reuniões e alinhe entregas.',phrases:[['Vou compartilhar minha tela.','vou compartiliár','Voy a compartir mi pantalla.'],['A base está atualizada.','a bazzi está atualizada','La base está actualizada.'],['Precisamos validar os dados.','precizamus validár','Necesitamos validar los datos.'],['Posso enviar até amanhã.','possu enviár até amanhã','Puedo enviarlo hasta mañana.']],dialogue:[['A','A integração já está pronta?'],['B','Ainda não. Falta validar a API.'],['A','Tudo bem, me avise quando terminar.']]},
        {name:'Bate-papo',icon:'💬',tag:'CONVERSA INFORMAL',desc:'Sons e expressões que aparecem todo dia.',phrases:[['E aí, beleza?','i aí, beleza','¿Qué tal, todo bien?'],['Pois é.','poizé','Así es / pues sí.'],['Que legal!','ki legau','¡Qué chévere!'],['A gente combina.','a djente combina','Nos ponemos de acuerdo.']],dialogue:[['A','Vai fazer o quê no fim de semana?'],['B','Acho que vou descansar. E você?'],['A','Vou encontrar uns amigos.']]}
      ]
    },
    essentials: { kicker:'PORTUGUÊS SEM ARMADILHAS', title:'O resumo que o espanhol não conta.', copy:'Atalhos práticos de português brasileiro para evitar os erros mais comuns.', cards:[['🔊','Pronúncia-chave',['ão é nasal: não, pão, coração','lh soa parecido a “lli”: filho','nh soa como “ñ”: manhã','r inicial é forte: Rio']],['↔','Contrações essenciais',['de + o = do · de + a = da','em + o = no · em + a = na','a + o = ao','para = pra (fala informal)']],['⚠','Falsos cognatos',['esquisito = raro, no exquisito','embaraçada = avergonzada','oficina = taller','apelido = sobrenombre']],['🇧🇷','Expressões brasileiras',['beleza? = ¿todo bien?','ficar à vontade = sentirse cómodo','dar um jeito = buscar solución','tomara! = ¡ojalá!']],['👥','Você e a gente',['você usa verbo na 3ª pessoa','a gente = nós, mas verbo singular','vocês substitui “vós” no Brasil','tu varia por região']],['✍','Gerúndio e particípio',['-ar → -ando: falar/falando','-er → -endo: fazer/fazendo','-ir → -indo: partir/partindo','feito, dito, visto, posto']]] },
    quiz: { kicker:'PRATIQUE EM 10 SEGUNDOS', title:'Escolha a forma certa.', copy:'Dez perguntas com situações de trabalho e vida real. Cada resposta vem com uma explicação clara.', score:'PONTUAÇÃO', restart:'Reiniciar', next:'Próxima', questions:[
      ['Entre 2018 e 2020, eu ___ em projetos de saneamento cadastral.',['trabalho','trabalhei','trabalhava','tinha trabalhado'],1,'Pretérito Perfeito','Um período concluído e delimitado pede o pretérito perfeito.'],
      ['Quando a reunião começou, eu já ___ o relatório.',['terminei','terminava','tinha terminado','terminarei'],2,'Mais-que-perfeito','A conclusão aconteceu antes de outra ação passada.'],
      ['Atualmente, nós ___ uma nova base de dados.',['estávamos construindo','estamos construindo','teremos construído','construímos ontem'],1,'Presente Contínuo','“Atualmente” indica uma ação em andamento no período presente.'],
      ['Até dezembro, a equipe ___ toda a documentação.',['consolidava','consolidou','terá consolidado','está consolidando ontem'],2,'Futuro Perfeito','A ação estará pronta antes do marco “até dezembro”.'],
      ['Naquela época, eu ___ de ônibus todos os dias.',['fui','ia','irei','tenho ido ontem'],1,'Pretérito Imperfeito','Hábito repetido no passado pede imperfeito.'],
      ['Ultimamente, eu ___ mais em português.',['tenho falado','falei ontem','falava em 2010','falarei amanhã'],0,'Perfeito Composto','“Ultimamente” expressa repetição que chega ao presente.'],
      ['Amanhã eu ___ os resultados para a equipe.',['apresentei','apresentava','apresentarei','tinha apresentado'],2,'Futuro do Presente','“Amanhã” situa claramente a ação no futuro.'],
      ['Eu ___ os dados quando o sistema caiu.',['processarei','estava processando','tenho processado','tinha processado sempre'],1,'Imperfeito Contínuo','Uma ação estava em andamento quando outra a interrompeu.'],
      ['Em 2027, ela ___ no projeto há cinco anos.',['trabalhou','estará trabalhando','tinha trabalhado','trabalha ontem'],1,'Futuro Contínuo','A ação estará em progresso em um ponto futuro.'],
      ['Você já ___ este arquivo?',['viu','verá ontem','via amanhã','estava ver'],0,'Pretérito Perfeito','“Já” pergunta por uma experiência concluída relevante agora.']
    ]},
    footer:['LINHA DO TEMPO DE PORTUGUÊS DO OSCAR','Feito para lembrar estrutura, uso e exemplos em menos de 10 segundos. Aprender. Praticar. Comunicar. Repetir.']
  },

  en: {
    locale:'en', badge:'EN', region:'US', nav:[['timeline','Timeline'],['cheat-sheet','Cheat Sheet'],['daily-life','Daily Life'],['verbs','Verbs'],['conversations','Conversations'],['essentials','Essentials'],['quiz','Quiz']],
    hero:{eyebrow:"OSCAR'S ENGLISH TIMELINE",title:'Understand time.<br><span class="accent-past">Express</span> <span class="accent-now">your</span> <span class="accent-future">story.</span>',copy:'A visual guide to English tenses with practical examples for work, interviews and daily life.',primary:'Explore the timeline →',secondary:'Practice with the quiz',benefits:[['◎','See the big picture','Understand how tenses connect across time.'],['◉','Remember faster','Patterns and examples that stick.'],['ϟ','Use with confidence','From real conversations to interviews.']],quote:'Language is the map, practice is the journey, consistency is the key.<cite>— Oscar</cite>'},
    timeline:{kicker:'PAST · NOW · FUTURE',title:'Nine tenses to tell your story.',axis:['← PAST','NOW','FUTURE →']},
    tenses:[['past','Past Simple','S + V2','Completed action at a specific past moment.','yesterday · in 2024 · ago','I worked on cadastral data between 2018 and 2020.'],['past','Past Continuous','S + was/were + V-ing','Action in progress at a past moment.','while · when · at that time','I was processing data when the system stopped.'],['past','Past Perfect','S + had + V3','Completed before another past action.','before · already · by the time','I had migrated the module before the launch.'],['past','Past Perfect Continuous','S + had been + V-ing','Duration before another past action.','for · since · until','I had been working there for five years.'],['now','Present Perfect','S + have/has + V3','Experience or result connected to now.','already · yet · ever','I have built several geospatial dashboards.'],['now','Present Perfect Continuous','S + have/has been + V-ing','Started in the past and still happening.','for · since · lately','I have been studying Data Science since 2025.'],['future','Future Simple','S + will + V1','Predictions, decisions and promises.','tomorrow · soon · next','I will deliver the model next semester.'],['future','Future Perfect','S + will have + V3','Completed before a future point.','by · before · by next year','I will have completed the database by December.'],['future','Future Perfect Continuous','S + will have been + V-ing','Duration up to a future point.','for · by the time','By 2027, I will have been using GIS for a decade.']],
    cheat:{kicker:'SUBJECT CHEAT SHEET',title:'Know your subjects, use the right form.',copy:'Get the building blocks right and everything else clicks.',cards:[['HAVE / HAS','I / You / We / They → have\nHe / She / It → has'],['WAS / WERE','I / He / She / It → was\nYou / We / They → were'],['KEY AUXILIARIES','had · past before past\nwill · future\nwill have · future perfect']],tips:[['Past Simple','one finished past moment.'],['Past Continuous','was/were + ing; in progress.'],['Past Perfect','had + V3; before another past action.'],['Present Perfect','have/has + V3; connected to now.']]},
    daily:{title:'EXAMPLES FROM DAILY LIFE',items:['I have been managing geospatial data.','I had migrated the module before launch.','I will deliver a predictive model next semester.','I am leading analysis while studying Data Science.']},
    trainer:{kicker:'IRREGULAR VERBS · TRAINER',title:'Master the past, own the participle.',copy:'Type the past simple and past participle. Two correct answers in a row master a verb.',labels:['PAST SIMPLE','PAST PARTICIPLE'],hint:'Show hint',skip:'Skip',check:'Check',reset:'Reset',filters:['All','To master','Review mistakes'],messages:{hint:'Hint',correct:'Great! Current streak',mastered:'Mastered! Added to your collection.',wrong:'Almost. The answer is',empty:'Complete both forms first.'}},
    verbs:[['be','ser / estar','was|were','been'],['begin','comenzar','began','begun'],['break','romper','broke','broken'],['bring','traer','brought','brought'],['build','construir','built','built'],['choose','elegir','chose','chosen'],['come','venir','came','come'],['do','hacer','did','done'],['drink','beber','drank','drunk'],['drive','conducir','drove','driven'],['eat','comer','ate','eaten'],['feel','sentir','felt','felt'],['find','encontrar','found','found'],['get','obtener','got','got|gotten'],['give','dar','gave','given'],['go','ir','went','gone'],['know','saber','knew','known'],['make','hacer','made','made'],['read','leer','read','read'],['see','ver','saw','seen'],['speak','hablar','spoke','spoken'],['take','tomar','took','taken'],['write','escribir','wrote','written']],
    conversations:{kicker:'REAL CONVERSATIONS',title:'Speak with confidence.',copy:'Short scenes for work and daily life.',reveal:'Tap to reveal Spanish',scenes:[{name:'Introductions',icon:'👋',tag:'MEET SOMEONE',desc:'Start a natural conversation.',phrases:[['Hi, how are you?','jai, jau ar yu','Hola, ¿cómo estás?'],['Nice to meet you.','nais tu mit yu','Mucho gusto.'],['What do you do?','juat du yu du','¿A qué te dedicas?']],dialogue:[['A','Hi, I’m Oscar.'],['B','Nice to meet you!'],['A','Nice to meet you too.']]},{name:'At work',icon:'💼',tag:'WORK ENGLISH',desc:'Align tasks and deadlines.',phrases:[['I will share my screen.','ai wil sher mai scrin','Compartiré mi pantalla.'],['The data is up to date.','de deita is ap tu deit','Los datos están actualizados.'],['Can we review this?','can wi riviú dis','¿Podemos revisar esto?']],dialogue:[['A','Is the report ready?'],['B','Almost. I am checking the results.']]}]},
    essentials:{kicker:'ENGLISH ESSENTIALS',title:'Small details, big difference.',copy:'High-value reminders for Spanish speakers.',cards:[['🔊','Pronunciation',['-ed has three sounds','th needs air between the teeth','h is pronounced','v and b are different']],['⚠','False friends',['actually = en realidad','library = biblioteca','assist = ayudar','sensible = sensato']],['↔','Useful contractions',["I am = I’m","do not = don’t","I will = I’ll","we have = we’ve"]]]},
    quiz:{kicker:'PRACTICE IN 10 SECONDS',title:'Pick the right tense.',copy:'Ten concise questions with instant explanations.',score:'SCORE',restart:'Restart',next:'Next',questions:[['Between 2018 and 2020, I ___ at SAE.',['work','worked','have worked','had work'],1,'Past Simple','A completed, dated period uses Past Simple.'],['When I joined, I ___ the module already.',['migrate','had migrated','will migrate','am migrating'],1,'Past Perfect','The migration happened before another past event.'],['I ___ Data Science since 2025.',['studied yesterday','have been studying','will studied','had study'],1,'Present Perfect Continuous','Since marks an action continuing into now.'],['By December, we ___ the database.',['complete','completed yesterday','will have completed','are complete'],2,'Future Perfect','It will be complete before a future deadline.'],['At 3 p.m., I ___ the results.',['was reviewing','will reviewed','have review','review yesterday'],0,'Past Continuous','The action was in progress at a specific past time.']]},
    footer:["OSCAR'S ENGLISH TIMELINE",'Learn. Practice. Communicate. Repeat.']
  },

  de: {
    locale:'de', badge:'DE', region:'DE', nav:[['timeline','Zeitlinie'],['cheat-sheet','Spickzettel'],['daily-life','Alltag'],['verbs','Verben'],['conversations','Gespräche'],['essentials','Kurzguide'],['quiz','Quiz']],
    hero:{eyebrow:'OSCARS DEUTSCHE ZEITLINIE',title:'Verstehe die Zeit.<br><span class="accent-past">Erzähle</span> <span class="accent-now">deine</span> <span class="accent-future">Geschichte.</span>',copy:'Ein visueller Wegweiser durch die wichtigsten deutschen Zeitformen mit Beispielen aus Arbeit und Alltag.',primary:'Zeitlinie entdecken →',secondary:'Quiz starten',benefits:[['◎','Überblick sehen','Verstehe die Verbindung zwischen den Zeiten.'],['◉','Schneller merken','Muster und Beispiele bleiben im Kopf.'],['ϟ','Sicher sprechen','Vom Alltag bis zum Gespräch.']],quote:'Sprache ist die Karte, Übung ist die Reise.<cite>— Oscar</cite>'},
    timeline:{kicker:'VERGANGENHEIT · JETZT · ZUKUNFT',title:'Sechs Zeiten für deine Geschichte.',axis:['← VERGANGEN','JETZT','ZUKUNFT →']},
    tenses:[['past','Präteritum','S + Verb im Präteritum','Schriftliche Erzählungen und abgeschlossene Vergangenheit.','damals · gestern · früher','Ich arbeitete an einer geografischen Datenbank.'],['past','Perfekt','haben/sein + Partizip II','Gesprochene Vergangenheit.','schon · gestern · noch nie','Ich habe das Datenmodell entwickelt.'],['past','Plusquamperfekt','hatte/war + Partizip II','Vorvergangenheit vor einer anderen Aktion.','bevor · nachdem · bereits','Ich hatte den Bericht schon fertiggestellt.'],['now','Präsens','S + Verb','Gegenwart, Gewohnheit und nahe Zukunft.','jetzt · immer · heute','Ich studiere Data Science und arbeite mit GIS.'],['future','Futur I','werden + Infinitiv','Absicht, Vermutung oder Zukunft.','morgen · bald · später','Ich werde das Modell morgen vorstellen.'],['future','Futur II','werden + Partizip II + haben/sein','Abschluss vor einem zukünftigen Zeitpunkt.','bis · in einem Jahr','Bis Dezember werde ich die Datenbank aufgebaut haben.']],
    cheat:{kicker:'SUBJEKT-SPICKZETTEL',title:'Die richtige Form auf einen Blick.',copy:'Hilfsverben sind der Schlüssel.',cards:[['HABEN','ich habe\ndu hast\ner/sie/es hat\nwir haben\nihr habt\nsie haben'],['SEIN','ich bin\ndu bist\ner/sie/es ist\nwir sind\nihr seid\nsie sind'],['WERDEN','ich werde\ndu wirst\ner/sie/es wird\nwir werden']],tips:[['Perfekt','haben/sein + Partizip II.'],['Plusquamperfekt','hatte/war + Partizip II.'],['Futur I','werden + Infinitiv.'],['Futur II','werden + Partizip + haben/sein.']]},
    daily:{title:'BEISPIELE AUS DEM ALLTAG',items:['Ich habe Geodaten verwaltet.','Ich studiere Data Science.','Ich werde das Modell vorstellen.','Bis Dezember werde ich alles abgeschlossen haben.']},
    trainer:{kicker:'STARKE VERBEN · TRAINER',title:'Beherrsche Präteritum und Partizip.',copy:'Gib Präteritum und Partizip II ein. Zwei richtige Runden meistern ein Verb.',labels:['PRÄTERITUM','PARTIZIP II'],hint:'Hinweis',skip:'Weiter',check:'Prüfen',reset:'Zurücksetzen',filters:['Alle','Zu lernen','Fehler'],messages:{hint:'Hinweis',correct:'Richtig! Serie',mastered:'Gemeistert!',wrong:'Fast. Die Antwort ist',empty:'Bitte beide Formen ausfüllen.'}},
    verbs:[['sein','ser / estar','war','gewesen'],['haben','tener','hatte','gehabt'],['werden','convertirse','wurde','geworden'],['gehen','ir','ging','gegangen'],['kommen','venir','kam','gekommen'],['sehen','ver','sah','gesehen'],['sprechen','hablar','sprach','gesprochen'],['schreiben','escribir','schrieb','geschrieben'],['lesen','leer','las','gelesen'],['finden','encontrar','fand','gefunden'],['geben','dar','gab','gegeben'],['nehmen','tomar','nahm','genommen'],['wissen','saber','wusste','gewusst'],['bringen','traer','brachte','gebracht']],
    conversations:{kicker:'ALLTAGSGESPRÄCHE',title:'Sprich Schritt für Schritt.',copy:'Kurze Szenen mit spanischer Übersetzung.',reveal:'Spanisch anzeigen',scenes:[{name:'Begrüßung',icon:'👋',tag:'HALLO SAGEN',desc:'Ein Gespräch natürlich beginnen.',phrases:[['Hallo, wie geht es dir?','jalo, vi geit es dir','Hola, ¿cómo estás?'],['Freut mich.','froit mij','Mucho gusto.'],['Woher kommst du?','vojer komst du','¿De dónde eres?']],dialogue:[['A','Guten Morgen!'],['B','Guten Morgen, wie geht’s?'],['A','Sehr gut, danke!']]},{name:'Bei der Arbeit',icon:'💼',tag:'IM BÜRO',desc:'Aufgaben und Termine abstimmen.',phrases:[['Ich teile meinen Bildschirm.','ij taile mainen bildshirm','Comparto mi pantalla.'],['Die Daten sind aktuell.','di daten sint aktuel','Los datos están actualizados.']],dialogue:[['A','Ist der Bericht fertig?'],['B','Fast. Ich prüfe die Zahlen.']]}]},
    essentials:{kicker:'DEUTSCH KOMPAKT',title:'Das Wichtigste zuerst.',copy:'Praktische Muster für den Alltag.',cards:[['🔊','Aussprache',['w klingt wie v','z klingt wie ts','ch hat zwei Hauptlaute','eu klingt wie oi']],['↔','Wortstellung',['Verb meist an Position 2','Frage: Verb zuerst','Nebensatz: Verb am Ende','Zeit vor Ort']],['⚠','Artikel',['der · maskulin','die · feminin','das · neutral','Plural immer die']]]},
    quiz:{kicker:'SCHNELL ÜBEN',title:'Wähle die richtige Form.',copy:'Kurze Fragen mit sofortiger Erklärung.',score:'PUNKTE',restart:'Neu starten',next:'Weiter',questions:[['Gestern ___ ich den Bericht geschrieben.',['habe','werde','bin gehen','hatte morgen'],0,'Perfekt','Gesprochene Vergangenheit mit haben + Partizip.'],['Bevor das Meeting begann, ___ ich alles vorbereitet.',['werde','hatte','bin','habe morgen'],1,'Plusquamperfekt','Die Vorbereitung geschah vor einer anderen Vergangenheit.'],['Morgen ___ ich das Modell präsentieren.',['werde','hatte','war','habe gestern'],0,'Futur I','werden + Infinitiv drückt Zukunft aus.'],['Jetzt ___ ich an der Datenbank.',['arbeitete gestern','arbeite','werde gearbeitet','hatte arbeiten'],1,'Präsens','Jetzt verlangt das Präsens.']]},
    footer:['OSCARS DEUTSCHE ZEITLINIE','Lernen. Üben. Sprechen. Wiederholen.']
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const normalize = (value) => value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g,' ').trim();
const accepts = (answer, expected) => expected.split('|').some(value => normalize(value) === normalize(answer));
const shuffle = (values) => values.map(value => ({value, sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(item=>item.value);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));

let language = localStorage.getItem('olt-language') || 'pt';
let verbFilter = 'all';
let verbOrder = [];
let verbCursor = 0;
let currentScene = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let currentLesson = 0;
let classCardIndex = 0;
let classCardRevealed = false;
let activeSpeechButton = null;
let activePortugueseAudio = null;
let currentHomeworkClass = 0;
let homeworkStatusTimer = null;

function progressKey() { return `olt-progress-${language}`; }
function getProgress() {
  try { return JSON.parse(localStorage.getItem(progressKey())) || {verbs:{}, quizBest:0}; }
  catch { return {verbs:{}, quizBest:0}; }
}
function saveProgress(progress) { localStorage.setItem(progressKey(), JSON.stringify(progress)); }

function render() {
  const data = DATA[language];
  document.documentElement.lang = data.locale;
  document.title = `${data.footer[0]} — ${data.hero.title.replace(/<[^>]+>/g,' ')}`;
  $('#languageBadge').textContent = data.badge;
  $('.language-switch small').textContent = data.region;
  $('#navLinks').innerHTML = data.nav.map(([id,label]) => `<a href="#${id}">${label}</a>`).join('');

  $('#heroEyebrow').textContent = data.hero.eyebrow;
  $('#heroTitle').innerHTML = data.hero.title;
  $('#heroCopy').textContent = data.hero.copy;
  $('#primaryCta').textContent = data.hero.primary;
  $('#primaryCta').setAttribute('href', data.classReview ? '#class-review' : '#timeline');
  $('#secondaryCta').textContent = data.hero.secondary;
  $('#benefitGrid').innerHTML = data.hero.benefits.map(([icon,title,copy]) => `<article class="benefit-card"><span class="benefit-icon">${icon}</span><strong>${title}</strong><p>${copy}</p></article>`).join('');
  $('#heroQuote').innerHTML = data.hero.quote;

  renderClassReview();
  renderHomework();

  $('#timelineKicker').textContent = data.timeline.kicker;
  $('#timelineTitle').textContent = data.timeline.title;
  $('#timeAxis').innerHTML = data.timeline.axis.map(text => `<span>${text}</span>`).join('');
  $('#timelineTrack').innerHTML = data.tenses.map((tense,index) => {
    const [era,name,structure,use,triggers,example] = tense;
    return `<article class="tense-card" data-era="${era}"><div class="tense-number"><span>${String(index+1).padStart(2,'0')} / ${String(data.tenses.length).padStart(2,'0')}</span><span class="tense-era">${era.toUpperCase()}</span></div><h3>${name}</h3><div class="grammar-block"><small>ESTRUTURA</small><p>${structure}</p></div><div class="grammar-block"><small>USO</small><p>${use}</p></div><div class="grammar-block"><small>GATILHOS</small><p>${triggers}</p></div><p class="example-box">“${example}”</p></article>`;
  }).join('');

  $('#cheatKicker').textContent = data.cheat.kicker;
  $('#cheatTitle').textContent = data.cheat.title;
  $('#cheatCopy').textContent = data.cheat.copy;
  $('#conjugationGrid').innerHTML = data.cheat.cards.map(([title,copy])=>`<article class="conjugation-card"><h3>${title}</h3><p>${copy}</p></article>`).join('');
  $('#quickTips').innerHTML = data.cheat.tips.map(([title,copy])=>`<div class="tip"><strong>${title}</strong> <span>— ${copy}</span></div>`).join('');

  $('#dailyTitle').textContent = data.daily.title;
  const tickerItems = [...data.daily.items,...data.daily.items];
  $('#dailyTicker').innerHTML = `<div class="ticker-track">${tickerItems.map(item=>`<span>${item}</span>`).join('')}</div>`;

  $('#trainerKicker').textContent = `${data.verbs.length} · ${data.trainer.kicker}`;
  $('#trainerTitle').textContent = data.trainer.title;
  $('#trainerCopy').textContent = data.trainer.copy;
  $('#verbLabelOne').textContent = data.trainer.labels[0];
  $('#verbLabelTwo').textContent = data.trainer.labels[1];
  $('#showHint').textContent = data.trainer.hint;
  $('#skipVerb').textContent = data.trainer.skip;
  $('#checkVerb').textContent = data.trainer.check;
  $('#resetVerbs').textContent = data.trainer.reset;
  $('#verbFilters').innerHTML = data.trainer.filters.map((label,index)=>`<button data-filter="${['all','master','review'][index]}" class="${index===0?'active':''}">${label}</button>`).join('');
  verbFilter = 'all';
  verbOrder = shuffle(data.verbs.map((_,index)=>index));
  verbCursor = 0;
  renderVerb();

  $('#conversationKicker').textContent = data.conversations.kicker;
  $('#conversationTitle').textContent = data.conversations.title;
  $('#conversationCopy').textContent = data.conversations.copy;
  $('#sceneTabs').innerHTML = data.conversations.scenes.map((scene,index)=>`<button data-scene="${index}" class="${index===0?'active':''}">${scene.name}</button>`).join('');
  currentScene = 0;
  renderScene();

  $('#essentialsKicker').textContent = data.essentials.kicker;
  $('#essentialsTitle').textContent = data.essentials.title;
  $('#essentialsCopy').textContent = data.essentials.copy;
  $('#essentialsGrid').innerHTML = data.essentials.cards.map(([icon,title,items])=>`<article class="essential-card"><span class="card-icon">${icon}</span><h3>${title}</h3><ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul></article>`).join('');

  $('#quizKicker').textContent = data.quiz.kicker;
  $('#quizTitle').textContent = data.quiz.title;
  $('#quizCopy').textContent = data.quiz.copy;
  $('#scoreLabel').textContent = data.quiz.score;
  $('#restartQuiz').textContent = data.quiz.restart;
  $('#nextQuestion').textContent = data.quiz.next;
  quizIndex = 0; quizScore = 0; quizAnswered = false;
  renderQuiz();

  $('#footerBrand').textContent = data.footer[0];
  $('#footerCopy').textContent = data.footer[1];
}

function getHomeworkAnswers() {
  try { return JSON.parse(localStorage.getItem('olt-homework-support-verbs')) || {}; }
  catch { return {}; }
}

function saveHomeworkAnswers(answers) {
  localStorage.setItem('olt-homework-support-verbs', JSON.stringify(answers));
}

function getHomeworkFields() {
  const fields = [];
  HOMEWORK.classes.forEach(homeworkClass => {
    homeworkClass.warmup.forEach((prompt,index) => fields.push({classId:homeworkClass.id,key:`${homeworkClass.id}.warmup.${index}`,label:`Resposta oral · ${prompt}`}));
    homeworkClass.verbs.forEach(verb => {
      verb.complete.forEach((prompt,index) => fields.push({classId:homeworkClass.id,key:`${homeworkClass.id}.${verb.id}.complete.${index}`,label:`${verb.name} · Completa · ${prompt}`}));
      verb.own.forEach((prompt,index) => fields.push({classId:homeworkClass.id,key:`${homeworkClass.id}.${verb.id}.own.${index}`,label:`${verb.name} · Sua frase · ${prompt}`}));
    });
    homeworkClass.presentations.forEach(presentation => {
      presentation.notes.forEach((prompt,index) => fields.push({classId:homeworkClass.id,key:`${homeworkClass.id}.${presentation.id}.notes.${index}`,label:`${presentation.title} · ${prompt}`}));
      presentation.companion.forEach((prompt,index) => fields.push({classId:homeworkClass.id,key:`${homeworkClass.id}.${presentation.id}.companion.${index}`,label:`${presentation.title} · Sobre seu colega · ${prompt}`}));
    });
    homeworkClass.roleplays.forEach(roleplay => fields.push({classId:homeworkClass.id,key:`${homeworkClass.id}.roleplay.${roleplay.id}`,label:`Roleplay · ${roleplay.title} · Minhas frases`}));
    homeworkClass.exit.forEach((verb,index) => fields.push({classId:homeworkClass.id,key:`${homeworkClass.id}.exit.${index}`,label:`Exit ticket · ${verb}`}));
    homeworkClass.checklist.forEach((item,index) => fields.push({classId:homeworkClass.id,key:`${homeworkClass.id}.checklist.${index}`,label:`Revisão · ${item}`,type:'checkbox'}));
  });
  return fields;
}

function homeworkField(key, label, multiline = true) {
  const value = getHomeworkAnswers()[key] || '';
  const id = `homework-${key.replace(/[^a-z0-9]+/gi,'-')}`;
  const control = multiline
    ? `<textarea id="${id}" data-homework-key="${key}" rows="2" placeholder="Escreva sua resposta em português">${escapeHtml(value)}</textarea>`
    : `<input id="${id}" data-homework-key="${key}" value="${escapeHtml(value)}" autocomplete="off" placeholder="Resposta">`;
  return `<label class="homework-field" for="${id}"><span>${label}</span>${control}</label>`;
}

function homeworkPlayButton(text) {
  return `<button class="homework-play" type="button" data-speak="${encodeURIComponent(text)}" aria-label="Ouvir em português" title="Ouvir em português"></button>`;
}

function renderHomeworkVerb(homeworkClass, verb, index) {
  const complete = verb.complete.map((prompt,itemIndex)=>homeworkField(`${homeworkClass.id}.${verb.id}.complete.${itemIndex}`,prompt,false)).join('');
  const own = verb.own.map((prompt,itemIndex)=>homeworkField(`${homeworkClass.id}.${verb.id}.own.${itemIndex}`,prompt,true)).join('');
  const examples = verb.examples.map(([portuguese,spanish])=>`<div class="homework-example"><div><strong>${portuguese}</strong><span>${spanish}</span></div>${homeworkPlayButton(portuguese)}</div>`).join('');
  return `<section class="homework-verb-card"><div class="homework-card-heading"><span>${String(index+1).padStart(2,'0')}</span><div><small>VERBO DE APOIO</small><h3>${verb.name} <em>(${verb.translation})</em></h3></div></div><p class="homework-rule">${verb.rule}</p><div class="homework-examples">${examples}</div><div class="homework-exercise-grid"><article><p class="homework-label">EXERCÍCIO A · COMPLETA</p><div class="homework-fields">${complete}</div></article><article><p class="homework-label">EXERCÍCIO B · SUA VEZ</p><div class="homework-fields">${own}</div></article></div></section>`;
}

function renderHomeworkPresentation(homeworkClass, presentation) {
  const notes = presentation.notes.map((prompt,index)=>homeworkField(`${homeworkClass.id}.${presentation.id}.notes.${index}`,prompt)).join('');
  const companion = presentation.companion.map((prompt,index)=>homeworkField(`${homeworkClass.id}.${presentation.id}.companion.${index}`,prompt)).join('');
  return `<section class="homework-subsection"><p class="homework-label">PREPARAR · FALAR · ESCUTAR</p><h3>${presentation.title}</h3><p>Escreva palavras-chave, fale sem ler e depois registre duas frases sobre seu colega.</p><div class="homework-exercise-grid"><article><h4>Minhas notas</h4><div class="homework-fields">${notes}</div></article><article><h4>Sobre meu colega</h4><div class="homework-fields">${companion}</div></article></div></section>`;
}

function renderHomeworkRoleplay(homeworkClass, roleplay) {
  const roles = roleplay.roles.map(([title,copy])=>`<article class="roleplay-role"><strong>${title}</strong><p>${copy}</p></article>`).join('');
  return `<section class="homework-roleplay"><h4>${roleplay.title}</h4><div class="roleplay-grid">${roles}</div>${homeworkField(`${homeworkClass.id}.roleplay.${roleplay.id}`,'Minhas frases para usar no roleplay')}</section>`;
}

function renderHomework() {
  const section = $('#homework');
  if (language !== 'pt') {
    section.hidden = true;
    return;
  }

  section.hidden = false;
  stopPortugueseSpeech();
  currentHomeworkClass = Math.min(currentHomeworkClass, HOMEWORK.classes.length-1);
  $('#homeworkTabs').innerHTML = HOMEWORK.classes.map((homeworkClass,index)=>`<button type="button" data-homework-class="${index}" class="${index===currentHomeworkClass?'active':''}">${homeworkClass.label}</button>`).join('');

  const homeworkClass = HOMEWORK.classes[currentHomeworkClass];
  const warmup = homeworkClass.warmup.map((prompt,index)=>`<div class="homework-spoken"><div><span>RESPONDA EM VOZ ALTA</span><strong>${prompt}</strong></div>${homeworkPlayButton(prompt)}${homeworkField(`${homeworkClass.id}.warmup.${index}`,'Depois, escreva sua resposta')}</div>`).join('');
  const verbs = homeworkClass.verbs.map((verb,index)=>renderHomeworkVerb(homeworkClass,verb,index)).join('');
  const presentations = homeworkClass.presentations.map(item=>renderHomeworkPresentation(homeworkClass,item)).join('');
  const roleplays = homeworkClass.roleplays.map(item=>renderHomeworkRoleplay(homeworkClass,item)).join('');
  const exit = homeworkClass.exit.map((verb,index)=>homeworkField(`${homeworkClass.id}.exit.${index}`,verb)).join('');
  const answers = getHomeworkAnswers();
  const checklist = homeworkClass.checklist.map((item,index)=>{
    const key = `${homeworkClass.id}.checklist.${index}`;
    return `<label class="homework-check"><input type="checkbox" data-homework-key="${key}" ${answers[key]?'checked':''}><span>${item}</span></label>`;
  }).join('');

  $('#homeworkPanel').innerHTML = `<div class="homework-class-head"><p class="eyebrow">${homeworkClass.label.toUpperCase()} DE 2</p><h3>${homeworkClass.title}</h3><p>Fale primeiro e escreva depois. Use os botões de áudio para ouvir cada frase com voz em português brasileiro.</p></div><section class="homework-subsection"><p class="homework-label">01 · DI PRIMEIRO</p><h3>Responda em voz alta</h3><div class="homework-warmup">${warmup}</div></section>${verbs}${presentations}<section class="homework-subsection"><p class="homework-label">ROLEPLAYS</p><h3>Pratique as situações</h3><p>Troque de papel e repita. Use uma situação de cada vez, sem ler.</p><div class="homework-roleplays">${roleplays}</div></section><section class="homework-subsection"><p class="homework-label">EXIT TICKET</p><h3>Escreva três frases verdadeiras</h3><div class="homework-fields homework-exit">${exit}</div><div class="homework-checklist"><h4>Revisão final</h4>${checklist}</div></section>`;
  updateHomeworkProgress();
}

function updateHomeworkProgress() {
  const answers = getHomeworkAnswers();
  const fields = getHomeworkFields();
  const completed = fields.filter(field => field.type === 'checkbox' ? answers[field.key] === true : String(answers[field.key] || '').trim()).length;
  $('#homeworkProgressValue').textContent = `${Math.round((completed / fields.length) * 100)}%`;
}

function showHomeworkSaved() {
  const status = $('#homeworkSaveStatus');
  status.textContent = 'Guardado agora';
  window.clearTimeout(homeworkStatusTimer);
  homeworkStatusTimer = window.setTimeout(()=>{ status.textContent = 'Respostas guardadas automaticamente'; },1800);
}

function exportHomework() {
  const answers = getHomeworkAnswers();
  const fields = getHomeworkFields();
  const lines = [HOMEWORK.title.toUpperCase(),'Respostas da tarefa',`Exportado em: ${new Date().toLocaleString('pt-BR')}`,''];
  HOMEWORK.classes.forEach(homeworkClass => {
    lines.push(homeworkClass.label.toUpperCase(),homeworkClass.title,'');
    fields.filter(field=>field.classId===homeworkClass.id).forEach(field => {
      const value = field.type === 'checkbox' ? (answers[field.key] ? '[X] Sim' : '[ ] Não marcado') : (String(answers[field.key] || '').trim() || '—');
      lines.push(field.label,value,'');
    });
  });
  const blob = new Blob([lines.join('\r\n')],{type:'text/plain;charset=utf-8'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `tarefa-verbos-de-apoio-${new Date().toISOString().slice(0,10)}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(()=>URL.revokeObjectURL(link.href),1000);
}

function getClassProgress() {
  try { return JSON.parse(localStorage.getItem('olt-class-review')) || []; }
  catch { return []; }
}

function saveClassProgress(progress) {
  localStorage.setItem('olt-class-review', JSON.stringify(progress));
}

function renderClassReview() {
  const section = $('#class-review');
  const review = DATA[language].classReview;
  if (!review) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  $('#classReviewKicker').textContent = review.kicker;
  $('#classReviewTitle').textContent = review.title;
  $('#classReviewCopy').textContent = review.copy;
  currentLesson = 0;
  classCardIndex = 0;
  classCardRevealed = false;
  $('#lessonTabs').innerHTML = review.lessons.map((lesson,index)=>`<button data-lesson="${index}" class="${index===0?'active':''}">${lesson.label}</button>`).join('');
  updateClassProgress();
  renderLesson();
  renderClassCard();
}

function updateClassProgress() {
  const review = DATA[language].classReview;
  if (!review) return;
  const completed = getClassProgress().filter(id => review.lessons.some(lesson=>lesson.id===id)).length;
  $('#classProgressValue').textContent = `${completed} / ${review.lessons.length}`;
}

function renderLessonBlock(block) {
  let content = '';
  if (block.type === 'pairs') {
    content = `<div class="review-pairs">${block.items.map(([primary,translation,note])=>`<div class="review-pair"><strong>${primary}</strong><span>${translation}</span>${note?`<small>${note}</small>`:''}<button class="speak-button" type="button" data-speak="${encodeURIComponent(primary)}" aria-label="Ouvir pronúncia" title="Ouvir pronúncia"></button></div>`).join('')}</div>`;
  } else if (block.type === 'lists') {
    content = `<div class="lesson-list-grid">${block.items.map(([title,lines])=>`<div class="lesson-list-card"><strong>${title}</strong><p>${lines.join('<br>')}</p></div>`).join('')}</div>`;
  } else if (block.type === 'table') {
    content = `<div class="review-table-wrap"><table class="review-table"><thead><tr>${block.headers.map(header=>`<th>${header}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  return `<section class="lesson-block"><h4>${block.title}</h4>${content}${block.note?`<p class="lesson-note">${block.note}</p>`:''}</section>`;
}

function renderLesson() {
  const review = DATA[language].classReview;
  if (!review) return;
  stopPortugueseSpeech();
  const lesson = review.lessons[currentLesson];
  const reviewed = getClassProgress().includes(lesson.id);
  $('#lessonPanel').innerHTML = `<div class="lesson-panel-head"><div><p class="eyebrow">${lesson.kicker}</p><h3>${lesson.title}</h3><p>${lesson.description}</p></div><button class="button button-ghost ${reviewed?'reviewed':''}" id="markLessonReviewed" data-lesson-id="${lesson.id}">${reviewed?'✓ Revisado':'Marcar como revisado'}</button></div>${lesson.blocks.map(renderLessonBlock).join('')}`;
}

function resetSpeechButton(button) {
  if (!button) return;
  const label = button.classList.contains('homework-play') ? 'Ouvir em português' : 'Ouvir pronúncia';
  button.classList.remove('is-playing','speech-unavailable');
  button.setAttribute('aria-label', label);
  button.title = label;
}

function stopPortugueseSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (activePortugueseAudio) {
    activePortugueseAudio.pause();
    activePortugueseAudio.currentTime = 0;
    activePortugueseAudio = null;
  }
  resetSpeechButton(activeSpeechButton);
  activeSpeechButton = null;
}

function speakPortuguese(text, button) {
  const recordedAudio = PORTUGUESE_AUDIO[text];
  if (recordedAudio) {
    stopPortugueseSpeech();
    const audio = new Audio(recordedAudio);
    activePortugueseAudio = audio;
    activeSpeechButton = button;
    button.classList.add('is-playing');
    button.setAttribute('aria-label', `Reproduzindo em português: ${text}`);
    button.title = `Reproduzindo em português: ${text}`;
    const finishRecording = () => {
      if (activePortugueseAudio !== audio) return;
      resetSpeechButton(button);
      activePortugueseAudio = null;
      activeSpeechButton = null;
    };
    audio.onended = finishRecording;
    audio.onerror = finishRecording;
    audio.play().catch(finishRecording);
    return;
  }

  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    button.setAttribute('aria-label', 'Áudio não disponível neste navegador');
    button.title = 'Áudio não disponível neste navegador';
    return;
  }

  stopPortugueseSpeech();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.84;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const portugueseVoice = voices.find(voice => voice.lang.toLowerCase() === 'pt-br')
    || voices.find(voice => voice.lang.toLowerCase().startsWith('pt'));
  if (!portugueseVoice) {
    button.classList.add('speech-unavailable');
    button.setAttribute('aria-label', 'Voz portuguesa não encontrada neste dispositivo');
    button.title = 'Voz portuguesa não encontrada neste dispositivo';
    return;
  }
  utterance.voice = portugueseVoice;

  activeSpeechButton = button;
  button.classList.add('is-playing');
  button.setAttribute('aria-label', `Reproduzindo: ${text}`);
  button.title = `Reproduzindo: ${text}`;

  const finish = () => {
    if (activeSpeechButton !== button) return;
    resetSpeechButton(button);
    activeSpeechButton = null;
  };
  utterance.onend = finish;
  utterance.onerror = finish;
  window.speechSynthesis.speak(utterance);
}

function toggleLessonReviewed() {
  const review = DATA[language].classReview;
  if (!review) return;
  const id = review.lessons[currentLesson].id;
  const progress = getClassProgress();
  const next = progress.includes(id) ? progress.filter(item=>item!==id) : [...progress,id];
  saveClassProgress(next);
  updateClassProgress();
  renderLesson();
}

function renderClassCard() {
  const review = DATA[language].classReview;
  if (!review) return;
  classCardIndex %= review.flashcards.length;
  const [prompt,answer,note] = review.flashcards[classCardIndex];
  $('#classCardNumber').textContent = `${classCardIndex+1} / ${review.flashcards.length}`;
  $('#classCardPrompt').textContent = prompt;
  $('#classCardAnswer').textContent = answer;
  $('#classCardAnswer').hidden = !classCardRevealed;
  $('#classCardNote').textContent = classCardRevealed ? note : '';
  $('#revealClassCard').textContent = classCardRevealed ? 'Ocultar resposta' : 'Revelar resposta';
}

function filteredVerbOrder() {
  const progress = getProgress();
  if (verbFilter === 'master') return verbOrder.filter(index => !progress.verbs[DATA[language].verbs[index][0]]?.mastered);
  if (verbFilter === 'review') return verbOrder.filter(index => (progress.verbs[DATA[language].verbs[index][0]]?.mistakes || 0) > 0);
  return verbOrder;
}

function updateVerbProgress() {
  const data = DATA[language];
  const progress = getProgress();
  const mastered = data.verbs.filter(verb => progress.verbs[verb[0]]?.mastered).length;
  $('#masteryCount').textContent = mastered;
  $('#masteryTotal').textContent = `/ ${data.verbs.length}`;
  $('#progressFill').style.width = `${(mastered/data.verbs.length)*100}%`;
}

function renderVerb() {
  const data = DATA[language];
  const order = filteredVerbOrder();
  updateVerbProgress();
  $('#verbAnswerOne').value = '';
  $('#verbAnswerTwo').value = '';
  $('#verbFeedback').textContent = '';
  $('#verbFeedback').className = 'feedback';
  if (!order.length) {
    $('#verbIndex').textContent = '✓';
    $('#verbTranslation').textContent = '';
    $('#verbInfinitive').textContent = verbFilter === 'review' ? 'Sem erros para revisar' : 'Tudo dominado!';
    $('#checkVerb').disabled = true;
    return;
  }
  verbCursor %= order.length;
  const index = order[verbCursor];
  const verb = data.verbs[index];
  $('#verbIndex').textContent = `${verbCursor+1} / ${order.length}`;
  $('#verbTranslation').textContent = verb[1];
  $('#verbInfinitive').textContent = verb[0];
  $('#checkVerb').disabled = false;
  $('#verbAnswerOne').focus({preventScroll:true});
}

function currentVerb() {
  const order = filteredVerbOrder();
  if (!order.length) return null;
  return DATA[language].verbs[order[verbCursor % order.length]];
}

function checkVerb() {
  const verb = currentVerb();
  if (!verb) return;
  const a = $('#verbAnswerOne').value;
  const b = $('#verbAnswerTwo').value;
  const messages = DATA[language].trainer.messages;
  if (!a.trim() || !b.trim()) { $('#verbFeedback').textContent = messages.empty; $('#verbFeedback').className='feedback error'; return; }
  const record = getProgress();
  const stats = record.verbs[verb[0]] || {streak:0, mastered:false, attempted:0, mistakes:0};
  stats.attempted += 1;
  if (accepts(a,verb[2]) && accepts(b,verb[3])) {
    stats.streak += 1;
    if (stats.streak >= 2) stats.mastered = true;
    $('#verbFeedback').textContent = stats.mastered ? messages.mastered : `${messages.correct}: ${stats.streak}/2`;
    $('#verbFeedback').className = 'feedback success';
    record.verbs[verb[0]] = stats; saveProgress(record); updateVerbProgress();
    window.setTimeout(()=>{ verbCursor += 1; renderVerb(); }, 850);
  } else {
    stats.streak = 0; stats.mistakes += 1;
    record.verbs[verb[0]] = stats; saveProgress(record);
    $('#verbFeedback').textContent = `${messages.wrong}: ${verb[2].replace('|',' / ')} · ${verb[3].replace('|',' / ')}`;
    $('#verbFeedback').className = 'feedback error';
  }
}

function renderScene() {
  const data = DATA[language];
  const scene = data.conversations.scenes[currentScene];
  $('#conversationCard').innerHTML = `<div class="scene-summary"><span class="scene-icon">${scene.icon}</span><p class="eyebrow">${scene.tag}</p><h3>${scene.name}</h3><p>${scene.desc}</p></div><div class="phrase-list"><p class="eyebrow">FRASES-CHAVE</p>${scene.phrases.map(([phrase,sound,translation])=>`<button class="phrase-button"><span><strong>${phrase}</strong><small> / ${sound} /</small></span><small>${data.conversations.reveal}</small><em>ES · ${translation}</em></button>`).join('')}<div class="dialogue"><p class="eyebrow">MINI-DIÁLOGO</p>${scene.dialogue.map(([speaker,line])=>`<p><b>${speaker}</b>${line}</p>`).join('')}</div></div>`;
}

function renderQuiz() {
  const data = DATA[language];
  const questions = data.quiz.questions;
  const question = questions[quizIndex];
  quizAnswered = false;
  $('#scoreValue').textContent = `${quizScore} / ${questions.length}`;
  $('#questionIndex').textContent = `${quizIndex+1} / ${questions.length}`;
  $('#questionTense').textContent = '';
  $('#questionText').textContent = question[0];
  $('#quizOptions').innerHTML = question[1].map((option,index)=>`<button class="quiz-option" data-option="${index}"><span>${String.fromCharCode(65+index)}</span>${option}</button>`).join('');
  $('#quizFeedback').textContent = '';
  $('#quizFeedback').className = 'quiz-feedback';
  $('#nextQuestion').disabled = true;
}

function chooseQuiz(optionIndex) {
  if (quizAnswered) return;
  quizAnswered = true;
  const data = DATA[language];
  const question = data.quiz.questions[quizIndex];
  const correct = question[2];
  if (optionIndex === correct) quizScore += 1;
  $$('.quiz-option').forEach((button,index)=>{
    button.disabled = true;
    if (index === correct) button.classList.add('correct');
    else if (index === optionIndex) button.classList.add('wrong');
  });
  $('#questionTense').textContent = question[3];
  $('#quizFeedback').textContent = `${optionIndex===correct?'✓':'→'} ${question[4]}`;
  $('#quizFeedback').className = `quiz-feedback ${optionIndex===correct?'success':'error'}`;
  $('#scoreValue').textContent = `${quizScore} / ${data.quiz.questions.length}`;
  $('#nextQuestion').disabled = false;
  if (quizIndex === data.quiz.questions.length-1) {
    const progress = getProgress();
    progress.quizBest = Math.max(progress.quizBest || 0, quizScore);
    saveProgress(progress);
    $('#nextQuestion').textContent = data.quiz.restart;
  }
}

function nextQuiz() {
  const data = DATA[language];
  if (quizIndex === data.quiz.questions.length-1) { quizIndex=0; quizScore=0; $('#nextQuestion').textContent=data.quiz.next; }
  else quizIndex += 1;
  renderQuiz();
}

function setLanguage(next) {
  stopPortugueseSpeech();
  language = next;
  localStorage.setItem('olt-language', language);
  $('#languageModal').hidden = true;
  document.body.classList.remove('modal-open');
  render();
}

$('#languageSwitch').addEventListener('click',()=>{ $('#languageModal').hidden=false; document.body.classList.add('modal-open'); });
$('#closeLanguageModal').addEventListener('click',()=>{ $('#languageModal').hidden=true; document.body.classList.remove('modal-open'); });
$('.modal-backdrop').addEventListener('click',()=>{ $('#languageModal').hidden=true; document.body.classList.remove('modal-open'); });
$$('.language-card').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
$('#timelinePrev').addEventListener('click',()=>$('#timelineTrack').scrollBy({left:-440,behavior:'smooth'}));
$('#timelineNext').addEventListener('click',()=>$('#timelineTrack').scrollBy({left:440,behavior:'smooth'}));
$('#verbFilters').addEventListener('click',(event)=>{
  const button = event.target.closest('button[data-filter]'); if (!button) return;
  verbFilter = button.dataset.filter; verbCursor=0;
  $$('#verbFilters button').forEach(item=>item.classList.toggle('active',item===button)); renderVerb();
});
$('#resetVerbs').addEventListener('click',()=>{ const progress=getProgress(); progress.verbs={}; saveProgress(progress); renderVerb(); });
$('#showHint').addEventListener('click',()=>{ const verb=currentVerb(); if (!verb) return; $('#verbFeedback').textContent=`${DATA[language].trainer.messages.hint}: ${verb[2][0]}… · ${verb[3][0]}…`; $('#verbFeedback').className='feedback'; });
$('#skipVerb').addEventListener('click',()=>{ verbCursor+=1; renderVerb(); });
$('#checkVerb').addEventListener('click',checkVerb);
$('#verbAnswerOne').addEventListener('keydown',(event)=>{ if(event.key==='Enter') $('#verbAnswerTwo').focus(); });
$('#verbAnswerTwo').addEventListener('keydown',(event)=>{ if(event.key==='Enter') checkVerb(); });
$('#lessonTabs').addEventListener('click',(event)=>{ const button=event.target.closest('button[data-lesson]'); if(!button)return; currentLesson=Number(button.dataset.lesson); $$('#lessonTabs button').forEach(item=>item.classList.toggle('active',item===button)); renderLesson(); });
$('#lessonPanel').addEventListener('click',(event)=>{
  const speakButton = event.target.closest('button[data-speak]');
  if (speakButton) {
    speakPortuguese(decodeURIComponent(speakButton.dataset.speak), speakButton);
    return;
  }
  if (event.target.closest('#markLessonReviewed')) toggleLessonReviewed();
});
$('#homeworkTabs').addEventListener('click',(event)=>{
  const button = event.target.closest('button[data-homework-class]');
  if (!button) return;
  currentHomeworkClass = Number(button.dataset.homeworkClass);
  renderHomework();
});
$('#homeworkPanel').addEventListener('click',(event)=>{
  const speakButton = event.target.closest('button[data-speak]');
  if (!speakButton) return;
  speakPortuguese(decodeURIComponent(speakButton.dataset.speak), speakButton);
});
$('#homeworkPanel').addEventListener('input',(event)=>{
  const field = event.target.closest('[data-homework-key]');
  if (!field) return;
  const answers = getHomeworkAnswers();
  answers[field.dataset.homeworkKey] = field.type === 'checkbox' ? field.checked : field.value;
  saveHomeworkAnswers(answers);
  updateHomeworkProgress();
  showHomeworkSaved();
});
$('#exportHomework').addEventListener('click',exportHomework);
$('#printHomework').addEventListener('click',()=>window.print());
$('#revealClassCard').addEventListener('click',()=>{ classCardRevealed=!classCardRevealed; renderClassCard(); });
$('#nextClassCard').addEventListener('click',()=>{ classCardIndex+=1; classCardRevealed=false; renderClassCard(); });
$('#sceneTabs').addEventListener('click',(event)=>{ const button=event.target.closest('button[data-scene]'); if(!button)return; currentScene=Number(button.dataset.scene); $$('#sceneTabs button').forEach(item=>item.classList.toggle('active',item===button)); renderScene(); });
$('#conversationCard').addEventListener('click',(event)=>{ const button=event.target.closest('.phrase-button'); if(button) button.classList.toggle('revealed'); });
$('#quizOptions').addEventListener('click',(event)=>{ const button=event.target.closest('button[data-option]'); if(button) chooseQuiz(Number(button.dataset.option)); });
$('#nextQuestion').addEventListener('click',nextQuiz);
$('#restartQuiz').addEventListener('click',()=>{ quizIndex=0; quizScore=0; $('#nextQuestion').textContent=DATA[language].quiz.next; renderQuiz(); });

render();
if (!localStorage.getItem('olt-seen-language')) {
  $('#languageModal').hidden = false;
  document.body.classList.add('modal-open');
  localStorage.setItem('olt-seen-language','1');
}
