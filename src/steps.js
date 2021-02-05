const Steps = [
    {
      id: 'ola',
      message: 'Olá!',
      trigger: 'apresentacao',
    },
    {
      id: 'apresentacao',
      message: 'Eu sou o chatbot da Qualis! No que posso lhe ajudar?',
      trigger: 'menuPrincipal',
    },
    {
      id: 'menuPrincipal',
      options: [
        { value: 1, label: 'Informações sobre a COVID-19', trigger: 'preMenuCovid19'},
        { value: 2, label: 'Informações sobre a Qualis', trigger: 'qualis'},
      ],
    },
    {
      id: 'preMenuCovid19',
      message: 'Por favor, selecione que tipo de informações você deseja saber sobre a COVID-19.',
      trigger: 'menuCovid19',
    },
    {
      id: 'menuCovid19',
      options: [
        { value: 1, label: 'Sobre a vacina', trigger: 'vacina'},
        { value: 2, label: 'Medidas preventivas', trigger: 'medidasPreventivas'},
        { value: 3, label: 'Higiene das mãos', trigger: 'higieneDasMaos'},
        { value: 4, label: 'Limpeza do ambiente', trigger: 'limpezaDoAmbiente'},
        { value: 5, label: 'Sintomas', trigger: 'sintomas'},
        { value: 6, label: 'Teste de COVID-19', trigger: 'teste'},
        { value: 7, label: 'Tempo de isolamento', trigger: 'tempoDeIsolamento'},
        { value: 8, label: 'Viagens durante a pandemia', trigger: 'viagens'},
        { value: 9, label: 'Informações gerais', trigger: 'geralCovid19'},
      ],
    },
    {
      id: 'vacina',
      message: 'Selecione o que você deseja saber sobre as vacinas.',
      trigger: 'menuVacinas',
    },
    {
      id: 'menuVacinas',
      options: [
        { value: 1, label: 'Qual a eficácia da vacina?', trigger: 'eficacia'},
        { value: 2, label: 'A vacina é segura?', trigger: 'seguranca'},
        { value: 3, label: 'Há alguma contra-indicação à vacina?', trigger: 'contraindicacao'},
        { value: 4, label: 'Pessoas com HIV ou imunossuprimidas podem receber a vacina?', trigger: 'hivImunossuprimidas'},
        { value: 5, label: 'Mulheres grávidas podem receber a vacina?', trigger: 'gravidas'},
        { value: 6, label: 'A vacina pode mudar o meu DNA?', trigger: 'alteracaoDoDNA'},
        { value: 7, label: 'A vacina pode me fazer ter a COVID-19?', trigger: 'infeccaoPelaVacina'},
        { value: 8, label: 'Quais reações posso ter com a vacina?', trigger: 'reacoes'},
        { value: 9, label: 'Quem tem indicação de se vacinar?', trigger: 'indicacao'},
        { value: 10, label: 'Grupos especiais e crianças possuem indicação de se vacinar?', trigger: 'gruposEspeciaisCriancas'},
        { value: 11, label: 'Qual vacina devo tomar?', trigger: 'qualVacina'},
        { value: 12, label: 'Quantas doses da vacina preciso tomar?', trigger: 'doses'},
        { value: 13, label: 'Qual o intervalo entre as doses da vacina?', trigger: 'intervaloDoses'},
        { value: 14, label: 'Quanto tempo dura a proteção da vacina?', trigger: 'tempoProtecao'},
        { value: 15, label: 'Eu preciso fazer algum teste para comprovar que a vacina atingiu a sua eficácia?', trigger: 'comprovaEficiencia'},
        { value: 16, label: 'Pessoas que tiveram COVID-19 podem receber a vacina?', trigger: 'infectadosRecebemVacina'},
        { value: 17, label: 'A vacina altera os testes diagnósticos da COVID-19?', trigger: 'alteraTestes'},
        { value: 18, label: 'Se receber a vacina vou posso abandonar o uso de máscara?', trigger: 'usoDaMascaraPosVacina'},
      ],
    },
    {
      id: 'eficacia',
      component: (
        <div className="Div">As vacinas têm eficácia variável. Dos estudos em fase 3, temos as vacinas de RNA com eficácia entre 90-95% (eficácia superior que as vacinas usuais). A vacina do laboratório Astra-Zeneca (Oxford) gira em torno de 70%. O mais importante é que todas as vacinas têm alta eficácia na proteção de infecções graves. A efetividade da vacina (na vida real), especialmente em populações específicas (idosos, imunossuprimidos) ainda deve ser avaliada.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'seguranca',
      component: (
        <div className="Div">Nenhuma vacina é 100% segura. Eventos raros vão ocorrer à medida que centenas de milhares de pessoas são vacinadas. Os eventos adversos mais comuns são dor no local da injeção, cansaço, mal estar, dores musculares dentro de alguns dias após a vacinação. Estes eventos podem ser controlados com uso de analgésicos como paracetamol. Geralmente os sintomas são mais comuns nos jovens.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'contraindicacao',
      component: (
        <div className="Div">A única contra-indicação absoluta é reações alérgicas a algum componente da vacina. Se o paciente apresentar uma reação alérgica grave à primeira dose da vacina, não deve receber a segunda dose. Pessoas que participaram de estudos com plasma convalescentes ou anticorpos monoclonais devem postergar o uso da vacina, devido a menor eficácia.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'hivImunossuprimidas',
      component: (
        <div className="Div">Estas pessoas apresentam um risco maior de apresentar complicações relacionadas a COVID-19. Portanto, recomenda-se que sejam vacinadas, embora, possa haver risco de menor eficácia da vacina. O número de participantes com alguma imunodeficiência foi pequeno nos estudos, o que impede conclusões definitivas neste grupo de pessoas.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'gravidas',
      component: (
        <div className="Div">Estudos observacionais demonstraram que as grávidas que adoecem têm piores desfechos. Os estudos de vacinas não incluíram mulheres grávidas. Por isso recomenda-se que seja oferecida a vacina para este grupo para que possam decidir sobre a vacinação ou não.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'alteracaoDoDNA',
      component: (
        <div className="Div">Não, esta é uma notícia falsa publicada nas mídias sociais. Nenhuma vacina aprovada para uso no Brasil ou no mundo irá alterar o DNA das pessoas vacinadas.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'infeccaoPelaVacina',
      component: (
        <div className="Div">Não. As vacinas atualmente liberadas ou em testes não são de vírus vivo ou vírus vivo atenuado, portanto, não há possibilidade de causar COVID-19.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'reacoes',
      component: (
        <div className="Div">Os eventos adversos mais comuns são dor no local da injeção, cansaço, mal estar, dores musculares dentro de alguns dias após a vacinação. Estes eventos podem ser controlados com uso de analgésicos como paracetamol. Geralmente os sintomas são mais comuns nos jovens. Os eventos adversos estão sendo monitorados e relatados pelas instituições que realizam a vacinação.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'indicacao',
      component: (
        <div className="Div">Qualquer pessoa com idade superior a 18 anos poderá se vacinar, quando a vacina estiver disponível e conforme cronograma estabelecido pelas autoridades sanitárias. Na fase 1 do plano de vacinação estão os grupos prioritários como os trabalhadores da área da saúde, pessoas de 60 anos ou mais que vivem em instituições de longa permanência, população indígena e idosos a partir dos 75 anos.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'gruposEspeciaisCriancas',
      component: (
        <div className="Div">Conforme definição do plano nacional de vacinação, grupos como gestantes, puérperas e lactantes, pacientes portadores de doenças reumáticas, oncológicos, transplantados e demais imunossuprimidos, não foram avaliados nos estudos quanto a segurança e eficácia da vacina, devendo a mesma ser realizada após avaliação cautelosa dos riscos e benefícios e com decisão compartilhada entre o indivíduo e seu médico prescritor. O plano também não engloba as crianças devido a falta de estudos e evidências que demonstrem a segurança neste grupo de pessoas.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'qualVacina',
      component: (
        <div className="Div">Você deve tomar a que estiver disponível para você, pois todas elas foram aprovadas e passaram por rígidos padrões científicos para serem liberadas. Além disso, todas oferecem ótima eficácia na proteção contra infecções moderadas e graves.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'doses',
      component: (
        <div className="Div">Até o momento, as vacinas estudadas têm utilizado duas doses. A primeira que estimula o sistema imunológico inicialmente e a segunda que serve como um segundo estímulo (booster) para aumentar a taxa de proteção e torná-la mais duradoura. A segunda dose deve ser da mesma vacina administrada previamente.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'intervaloDoses',
      component: (
        <div className="Div">A segunda dose da vacina deve obedecer a recomendação com relação ao tempo. Se esta é administrada mais precoce pode reduzir a eficácia da vacina. Caso seja atrasada a segunda dose, não há perda com relação à eficácia. Recomenda-se que se houver atraso a segunda dose seja feita o quanto antes. Além disso, deve-se respeitar o intervalo de dose recomendado pelo fabricante, visto que o tempo pode ser diferente conforme o laboratório.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'tempoProtecao',
      component: (
        <div className="Div">Não há uma informação precisa a este respeito. Alguns dados sugerem que a proteção se aproxima de 4 meses (Vacina Moderna estudo de fase 1).</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'comprovaEficiencia',
      component: (
        <div className="Div">Não há recomendação de se fazer nenhum teste para comprovação da presença de anticorpos contra o vírus após a vacinação. O sistema imunológico começa a demonstrar resposta dentro de 10-14 dias da vacinação. A ausência de anticorpos não significa falha na proteção, pois outras rotas do sistema imunológico podem ser ativadas para atuar contra o vírus, mesmo na ausência de resposta humoral (IgG).</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'infectadosRecebemVacina',
      component: (
        <div className="Div">Sim, estas pessoas devem receber a vacina. A pessoa deve ter se recuperado totalmente da infecção para realizar a vacina. Como, novas infecções são raras em pacientes com COVID-19 dentro de 90 dias da primeira infecção, recomenda-se aguardar este período para aplicação da vacina.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'alteraTestes',
      component: (
        <div className="Div">A vacina não altera os testes de RT-PCR ou os testes de antígeno para diagnóstico de infecção aguda. Elas geram anticorpos contra a proteína S (Spike) do SARS-CoV-2. Alguns testes sorológicos detectam estes anticorpos e outros não. Os fabricantes dos testes devem informar sobre esta particularidade do teste.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'usoDaMascaraPosVacina',
      component: (
        <div className="Div">As pessoas que receberam as duas doses da vacina e aguardaram o tempo para haver a resposta do sistema imunológico (2-4 semanas após a segunda dose) vão poder conviver com seus familiares próximos, fazer jantares, abraçar seus netos, coisas que um não-vacinado não pode. Apesar disso,  até que tenhamos um contingente grande de vacinados e redução das taxas de infecção, as medidas de uso de máscara e distanciamento permanecerão, especialmente em um cenário de novas variantes virais.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'medidasPreventivas',
      message: 'Selecione o que você deseja saber sobre as medidas preventivas.',
      trigger: 'menuMedidasPreventivas',
    },
    {
      id: 'menuMedidasPreventivas',
      options: [
        { value: 1, label: 'Como posso me prevenir da COVID-19?', trigger: 'prevencaoCovid'},
        { value: 2, label: 'Qual máscara devo usar?', trigger: 'qualMascara'},
        { value: 3, label: 'Com que frequência devo trocar a minha máscara?', trigger: 'frequenciaTrocaMascara'},
        { value: 4, label: 'Como devo lavar a minha máscara?', trigger: 'lavarMascara'},
        { value: 5, label: 'Qual a diferença entre a máscara cirúrgica e a N95?', trigger: 'diferencaCirurgiaN95'},
        { value: 6, label: 'Existe diferença entre a capacidade de filtro das máscaras de tecido?', trigger: 'capacidadeFiltro'},
      ],
    },
    {
      id: 'prevencaoCovid',
      component: (
        <div className="Div">O uso universal de máscara além das outras medidas de saúde pública recomendadas (distanciamento, higiene de mãos) devem ser prioridade enquanto não houver um número suficiente de pessoas vacinadas para conter a disseminação do vírus.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'qualMascara',
      component: (
        <div className="Div">Na comunidade o objetivo principal do mascaramento universal é o controle da fonte emissora de gotículas. Assim, máscaras de tecido (reutilizáveis) ou máscaras cirúrgicas (descartáveis) podem e devem ser utilizadas.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'frequenciaTrocaMascara',
      component: (
        <div className="Div">Em caso de uso prolongado o recomendado é trocar a máscara a cada 3 horas. Já em casos de saídas rápidas, como ir ao mercado ou farmácia, recomenda-se a troca diária. A máscara também deve ser trocada sempre que estiver molhada devido a tosse, espirro, fala ou respiração.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'lavarMascara',
      component: (
        <div className="Div">A máscara deve ser lavada com água e sabão em água corrente individualmente e após deve ser deixada de molho por 20 a 30 minutos em uma solução de água sanitária, contendo duas colheres de sopa do produto para 1L de água, ou, 1 colher de sopa para 500 ml. Enxaguar bem em água corrente e deixar secar ao ar livre.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'diferencaCirurgiaN95',
      component: (
        <div className="Div">As máscaras cirúrgicas são efetivas em 89% na filtragem de partículas de 0,2 micrômetros, enquanto que as máscaras N95 filtram partículas menores que 0,05 micrômetros em 95-99% das vezes. As máscaras N95 tem uma vedação melhor ao rosto. Ambas são indicadas para uso por profissionais de saúde nos seus locais de trabalho.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'capacidadeFiltro',
      component: (
        <div className="Div">Dependendo do tecido a capacidade de filtragem é diferente. A efetividade contra partículas de 0,02 micrômetros é: tecido de saco de aspirador de pó (86%), pano de prato (72%), camiseta (70%), fronha de travesseiro (57-68%), linho (62%), seda (54%), camiseta 100% algodão (51%), cachecol (57%).</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'higieneDasMaos',
      message: 'Selecione o que você deseja saber sobre higiene das mãos.',
      trigger: 'menuHigieneDasMaos',
    },
    {
      id: 'menuHigieneDasMaos',
    }
    {
      id: 'geralCovid19',
      options: [
        { value: 1, label: 'O que são as novas variantes/mutações do SARS-CoV-2?', trigger: 'variantes'},
        { value: 2, label: 'Qual a distância de uma pessoa para estar protegido?', trigger: 'distanciamento'},
        { value: 3, label: 'Quero saber notícias sobre a COVID-19', trigger: 'noticias'},
        { value: 4, label: 'Preciso conversar com um especialista', trigger: 'especialista'},
      ],
    },
    {
      id: 'variantes',
      component: (
        <div className="Div">Os vírus mudam constantemente através de mutações e novas variantes são esperadas ao longo do tempo. Até o momento, três novas variantes do SARS-CoV-2 são conhecidas: B.1.1.7 identificada no Reino Unido; B.1.352 identifica na África do Sul; e P.1 identificada no Brasil. Estas variantes parecem disseminar mais fácil e rapidamente de pessoa para pessoa. Entretanto, outras questões como a possibilidade de causar doença moderada ou severa ou mudar a efetividade das vacinas ainda estão sendo estudadas.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'distanciamento',
      component: (
        <div className="Div">A recomendação é que a distância segura seja de 6 pés, ou seja, 1,88 metros.  Apesar disso, há evidências de que partículas menores do vírus podem viajar por distâncias maiores (5 metros), a depender da força que são emitidas (tosse, gritos), do ambiente (ambientes fechados ou não) e de correntes de ar que possam impulsionar as partículas mais leves.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'noticias',
      component: (
        <div className="Div">Notícias sobre a COVID-19 podem ser encontradas no nosso site, basta clicar <a href="https://www.portalqualis.com.br/covid-19/" className="DivLink">aqui</a> para acessar.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'especialista',
      component: (
        <div className="Div">Para conversar com um de nossos especialistas, clique <a href="" className="DivLink">aqui</a>.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'qualis',
      message: 'Legal! O que você quer saber sobre a Qualis?',
      trigger: 'menuQualis',
    },
    {
      id: 'menuQualis',
      options: [
        { value: 1, label: 'Como entro em contato?', trigger: 'contato'},
        { value: 2, label: 'Quais são os serviços oferecidos?', trigger: 'servicos'},
        { value: 3, label: 'Quais são os produtos desenvolvidos?', trigger: 'produtos'},
        { value: 4, label: 'Quero saber outras informações', trigger: 'outrasInformacoes'},
      ],
    },
    {
      id: 'contato',
      component: (
        <div className="Div">Você pode entrar em contato conosco pelo número (51) 3028-4992, pelo <a href="https://api.whatsapp.com/send/?phone=+555197748691&text&app_absent=0" className="DivLink">WhatsApp</a> ou pelo nosso <a href="https://www.portalqualis.com.br/contato/" className="DivLink">site</a>.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'servicos',
      component: (
        <div className="Div">Os serviços ofertados pela Qualis são os seguintes: consultoria para ambientes seguros, teleinfectologia e televigilância das infecções hospitalares. Para saber mais sobre esses serviços, clique <a href="https://www.portalqualis.com.br/servicos/" className="DivLink">aqui</a>.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'produtos',
      component: (
        <div className="Div">Os produtos da Qualis são os seguintes: Vigilância Móvel (Mobilidade nos Pacotes de Prevenção de Infecção Hospitalar) e Robô ISA (Robô de Busca Ativa de Infecções Hospitalares). Para saber mais sobre esses produtos, clique <a href="https://www.portalqualis.com.br/produtos/" className="DivLink">aqui</a>.</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'outrasInformacoes',
      component: (
        <div className="Div">Você pode consultar outras informações diretamente no nosso site, basta clicar <a href="https://www.portalqualis.com.br/" className="DivLink">aqui</a>!</div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'ajuda',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjuda',
    },
    {
      id: 'verificaAjuda',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
      ],
    },
    {
      id: 'retornaMenu',
      message: 'Por favor, selecione a opção que representa no que posso lhe ajudar!',
      trigger: 'menuPrincipal',
    },
    {
      id: 'finaliza',
      component: (
        <div className="Div">Conversa finalizada.</div>
      ),
      end: true,
    },
  ];

  export default Steps;