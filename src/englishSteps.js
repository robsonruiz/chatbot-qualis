let trigger = "#chat#bot@qualis2021";

const EnglishSteps = [
    {
      id: 'hello',
      message: 'Hello!',
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
        { value: 3, label: 'Preciso conversar com um especialista', trigger: 'especialista'},
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
        { value: 1, label: 'Vacina', trigger: 'vacina'},
        { value: 2, label: 'Medidas preventivas', trigger: 'medidasPreventivas'},
        { value: 3, label: 'Higiene das mãos', trigger: 'higieneDasMaos'},
        { value: 4, label: 'Limpeza do ambiente', trigger: 'limpezaDoAmbiente'},
        { value: 5, label: 'Sintomas', trigger: 'sintomas'},
        { value: 6, label: 'Contato durante a pandemia', trigger: 'contatoDuranteAPandemia'},
        { value: 7, label: 'Teste de COVID-19', trigger: 'teste'},
        { value: 8, label: 'Tempo de isolamento', trigger: 'tempoDeIsolamento'},
        { value: 9, label: 'Viagens durante a pandemia', trigger: 'viagens'},
        { value: 10, label: 'Informações gerais', trigger: 'geralCovid19'},
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
        { value: 1, label: 'Segurança e eficácia', trigger: 'menuSegurancaEEficacia'},
        { value: 2, label: 'Quem pode tomar a vacina?', trigger: 'menuQuemPodeTomarAVacina'},
        { value: 3, label: 'Doses da vacina', trigger: 'menuDosesDaVacina'},
        { value: 4, label: 'Dúvidas gerais', trigger: 'menuDuvidasGeraisVacina'},
      ],
    },
    {
      id: 'menuSegurancaEEficacia',
      options: [
        { value: 1, label: 'Qual a eficácia da vacina?', trigger: 'eficacia'},
        { value: 2, label: 'A vacina é segura?', trigger: 'seguranca'},
        { value: 3, label: 'Há alguma contra-indicação à vacina?', trigger: 'contraindicacao'},
        { value: 4, label: 'A vacina pode mudar o meu DNA?', trigger: 'alteracaoDoDNA'},
        { value: 5, label: 'A vacina pode me fazer ter a COVID-19?', trigger: 'infeccaoPelaVacina'},
        { value: 6, label: 'Quais reações posso ter com a vacina?', trigger: 'reacoes'},
        { value: 7, label: 'Eu preciso fazer algum teste para comprovar que a vacina atingiu a sua eficácia?', trigger: 'comprovaEficiencia'},
      ],
    },
    {
      id: 'menuQuemPodeTomarAVacina',
      options: [
        { value: 1, label: 'Quem tem indicação de se vacinar?', trigger: 'indicacao'},
        { value: 2, label: 'Pessoas com HIV ou imunossuprimidas podem receber a vacina?', trigger: 'hivImunossuprimidas'},
        { value: 3, label: 'A vacina pode mudar o meu DNA?', trigger: 'alteracaoDoDNA'},
        { value: 4, label: 'Grupos especiais e crianças possuem indicação de se vacinar?', trigger: 'gruposEspeciaisCriancas'},
        { value: 5, label: 'Pessoas que tiveram COVID-19 podem receber a vacina?', trigger: 'infectadosRecebemVacina'},
      ],
    },
    {
      id: 'menuDosesDaVacina',
      options: [
        { value: 1, label: 'Quantas doses da vacina preciso tomar?', trigger: 'doses'},
        { value: 2, label: 'Qual o intervalo entre as doses da vacina?', trigger: 'intervaloDoses'},
      ],
    },
    {
      id: 'menuDuvidasGeraisVacina',
      options: [
        { value: 1, label: 'Qual vacina devo tomar?', trigger: 'qualVacina'},
        { value: 2, label: 'Quanto tempo dura a proteção da vacina?', trigger: 'tempoProtecao'},
        { value: 3, label: 'Se receber a vacina posso abandonar o uso de máscara?', trigger: 'usoDaMascaraPosVacina'},
        { value: 4, label: 'A vacina altera os testes diagnósticos da COVID-19?', trigger: 'alteraTestes'},
      ],
    },
    {
      id: 'eficacia',
      component: (
        <div className="Div">As vacinas têm eficácia variável. Dos estudos em fase 3, temos as vacinas de RNA com eficácia entre 90-95% (eficácia superior que as vacinas usuais). A vacina do laboratório Astra-Zeneca (Oxford) gira em torno de 70%. O mais importante é que todas as vacinas têm alta eficácia na proteção de infecções graves. A efetividade da vacina (na vida real), especialmente em populações específicas (idosos, imunossuprimidos) ainda deve ser avaliada.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'seguranca',
      component: (
        <div className="Div">Nenhuma vacina é 100% segura. Eventos raros vão ocorrer à medida que centenas de milhares de pessoas são vacinadas. Os eventos adversos mais comuns são dor no local da injeção, cansaço, mal estar, dores musculares, dentro de alguns dias após a vacinação. Estes eventos podem ser controlados com uso de analgésicos como paracetamol.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'contraindicacao',
      component: (
        <div className="Div">A única contra-indicação absoluta é reações alérgicas a algum componente da vacina. Se o paciente apresentar uma reação alérgica grave à primeira dose da vacina, não deve receber a segunda dose. Pessoas que participaram de estudos com plasma convalescentes ou anticorpos monoclonais devem postergar o uso da vacina, devido a possível menor eficácia da vacina relacionada a estes procedimentos.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'hivImunossuprimidas',
      component: (
        <div className="Div">Estas pessoas apresentam um risco maior de apresentar complicações relacionadas a COVID-19. Portanto, recomenda-se que sejam vacinadas, embora, possa haver risco de menor eficácia da vacina. O número de participantes com alguma imunodeficiência foi pequeno nos estudos, o que impede conclusões definitivas neste grupo de pessoas.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'gravidas',
      component: (
        <div className="Div">Estudos observacionais demonstraram que as grávidas que adoecem têm piores desfechos. Os estudos de vacinas não incluíram mulheres grávidas. Por isso recomenda-se que seja oferecida a vacina para este grupo para que possam decidir sobre a vacinação ou não. No Brasil, as gestantes não estão relacionadas como grupo de risco, portanto, não fazem parte dos grupos prioritários de vacinação.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'alteracaoDoDNA',
      component: (
        <div className="Div">Não, esta é uma notícia falsa publicada nas mídias sociais. Nenhuma vacina aprovada para uso no Brasil ou no mundo irá alterar o DNA das pessoas vacinadas.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'infeccaoPelaVacina',
      component: (
        <div className="Div">Não. As vacinas atualmente liberadas ou em testes não são de vírus vivo ou vírus vivo atenuado, portanto, não há possibilidade de causar COVID-19.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'reacoes',
      component: (
        <div className="Div">Os eventos adversos mais comuns são dor no local da injeção, cansaço, mal estar, dores musculares, dentro de alguns dias após a vacinação. Estes eventos podem ser controlados com uso de analgésicos como paracetamol. Geralmente os sintomas são mais comuns nos jovens.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'indicacao',
      component: (
        <div className="Div">Qualquer pessoa com idade superior a 18 anos poderá se vacinar, quando a vacina estiver disponível e conforme cronograma estabelecido pelas autoridades sanitárias. Na fase 1 do plano de vacinação estão os grupos prioritários como os trabalhadores da área da saúde, pessoas de 60 anos ou mais que vivem em instituições de longa permanência, população indígena e idosos a partir dos 75 anos.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'gruposEspeciaisCriancas',
      component: (
        <div className="Div">Conforme definição do plano nacional de vacinação, grupos como gestantes, puérperas e lactantes, pacientes portadores de doenças reumáticas, oncológicos, transplantados e demais imunossuprimidos, não foram avaliados nos estudos quanto a segurança e eficácia da vacina, devendo a mesma ser realizada após avaliação cautelosa dos riscos e benefícios e com decisão compartilhada entre o indivíduo e seu médico assistente. O plano também não engloba as crianças devido a falta de estudos e evidências que demonstrem a segurança neste grupo de pessoas.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'qualVacina',
      component: (
        <div className="Div">Você deve tomar a que estiver disponível para você, pois todas elas foram aprovadas e passaram por rígidos padrões científicos para serem liberadas. Além disso, todas oferecem ótima eficácia na proteção contra infecções moderadas e graves.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'doses',
      component: (
        <div className="Div">Até o momento, as vacinas estudadas têm utilizado duas doses. A primeira que estimula o sistema imunológico inicialmente e a segunda que serve como um segundo estímulo (booster) para aumentar a taxa de proteção e torná-la mais duradoura. A segunda dose deve ser da mesma vacina administrada previamente.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'intervaloDoses',
      component: (
        <div className="Div">A segunda dose da vacina deve obedecer a recomendação com relação ao tempo. Se esta é administrada mais precoce pode reduzir a eficácia da vacina. Caso seja atrasada a segunda dose, não há perda com relação à eficácia. Recomenda-se que se houver atraso a segunda dose seja feita o quanto antes. Além disso, deve-se respeitar o intervalo de dose recomendado pelo fabricante, visto que o tempo pode ser diferente conforme o laboratório.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'tempoProtecao',
      component: (
        <div className="Div">Não há uma informação precisa a este respeito. Alguns dados sugerem que a proteção se aproxima de 4 meses (Vacina Moderna estudo de fase 1).</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'comprovaEficiencia',
      component: (
        <div className="Div">Não há recomendação de se fazer nenhum teste para comprovação da presença de anticorpos contra o vírus após a vacinação. O sistema imunológico começa a demonstrar resposta dentro de 10-14 dias da vacinação. A ausência de anticorpos não significa falha na proteção, pois outras rotas do sistema imunológico podem ser ativadas para atuar contra o vírus, mesmo na ausência de resposta humoral (IgG).</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'infectadosRecebemVacina',
      component: (
        <div className="Div">Sim, estas pessoas devem receber a vacina. A pessoa deve ter se recuperado totalmente da infecção para realizar a vacina. Como, novas infecções são raras em pacientes com COVID-19 dentro de 90 dias da primeira infecção, recomenda-se aguardar este período para aplicação da vacina.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'alteraTestes',
      component: (
        <div className="Div">A vacina não altera os testes de RT-PCR ou os testes de antígeno para diagnóstico de infecção aguda. Elas geram anticorpos contra a proteína S (Spike) do SARS-CoV-2. Alguns testes sorológicos detectam estes anticorpos e outros não. Os fabricantes dos testes devem informar sobre esta particularidade do teste.</div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'usoDaMascaraPosVacina',
      component: (
        <div className="Div">As pessoas que receberam as duas doses da vacina e aguardaram o tempo para haver a resposta do sistema imunológico (2-4 semanas após a segunda dose) vão poder conviver com seus familiares próximos, fazer jantares, abraçar seus netos, coisas que um não-vacinado não pode. Apesar disso,  até que tenhamos um contingente grande de vacinados e redução das taxas de infecção, as medidas de uso de máscara e distanciamento permanecerão, especialmente em um cenário de novas variantes virais.</div>
      ),
      trigger: 'ajudaVacina',
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
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'qualMascara',
      component: (
        <div className="Div">Na comunidade o objetivo principal do mascaramento universal é o controle da fonte emissora de gotículas. Assim, máscaras de tecido (reutilizáveis) ou máscaras cirúrgicas (descartáveis) podem e devem ser utilizadas.</div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'frequenciaTrocaMascara',
      component: (
        <div className="Div">Em caso de uso prolongado o recomendado é trocar a máscara a cada 3 horas. Já em casos de saídas rápidas, como ir ao mercado ou farmácia, recomenda-se a troca diária. A máscara também deve ser trocada sempre que estiver molhada devido a tosse, espirro, fala ou respiração.</div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'lavarMascara',
      component: (
        <div className="Div">A máscara deve ser lavada com água e sabão em água corrente individualmente e após deve ser deixada de molho por 20 a 30 minutos em uma solução de água sanitária, contendo duas colheres de sopa do produto para 1L de água, ou, 1 colher de sopa para 500 ml. Enxaguar bem em água corrente e deixar secar ao ar livre.</div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'diferencaCirurgiaN95',
      component: (
        <div className="Div">As máscaras cirúrgicas são efetivas em 89% na filtragem de partículas de 0,2 micrômetros, enquanto que as máscaras N95 filtram partículas menores que 0,05 micrômetros em 95-99% das vezes. As máscaras N95 tem uma vedação melhor ao rosto. Ambas são indicadas para uso por profissionais de saúde nos seus locais de trabalho.</div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'capacidadeFiltro',
      component: (
        <div className="Div">Dependendo do tecido a capacidade de filtragem é diferente. A efetividade contra partículas de 0,02 micrômetros é: tecido de saco de aspirador de pó (86%), pano de prato (72%), camiseta (70%), fronha de travesseiro (57-68%), linho (62%), seda (54%), camiseta 100% algodão (51%), cachecol (57%).</div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'higieneDasMaos',
      message: 'Selecione o que você deseja saber sobre higiene das mãos.',
      trigger: 'menuHigieneDasMaos',
    },
    {
      id: 'menuHigieneDasMaos',
      options: [
        { value: 1, label: 'Com que produtos devo higienizar as mãos?', trigger: 'produtosHigienizacaoMaos'},
        { value: 2, label: 'Água e sabonete são mais eficazes que o álcool gel?', trigger: 'aguaSabonete'},
        { value: 3, label: 'Qual a técnica correta da higiene de mãos com preparações alcoólicas (gel ou solução)?', trigger: 'higieneAlcool'},
        { value: 4, label: 'Qual a técnica correta da higiene de mãos com água e sabonete?', trigger: 'higieneAguaSabonete'},
        { value: 5, label: 'Quais são os momentos que devo higienizar as mãos?', trigger: 'momentosHigiene'},
      ],
    },
    {
      id: 'produtosHigienizacaoMaos',
      component: (
        <div className="Div">A higienização das mãos pode ser realizada utilizando água e sabonete ou álcool gel. A escolha de um produto ou outro dependerá da situação e disponibilidade. A água e sabonete são sempre recomendados quando as mãos estiverem visivelmente sujas. Já o álcool gel poderá ser utilizado em todas as outras situações, já que é mais fácil de estar prontamente disponível em qualquer lugar.</div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'aguaSabonete',
      component: (
        <div className="Div">A higienização das mãos com preparações alcoólicas e com água e sabão são eficazes, entretanto alguns estudos mostram que o álcool gel pode ser mais efetivo que a higienização com água e sabonete, por ter uma ação bactericida e virucida que o sabonete comum não tem.</div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'higieneAlcool',
      component: (
        <div className="Div">A​plique uma quantidade suficiente de preparação alcoólica em uma das mãos. Friccione as palmas, o dorso, entre os dedos, polpas digitais, polegares, unhas e punhos. Quando estiverem secas, suas mãos estarão seguras.</div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'higieneAguaSabonete',
      component: (
        <div className="Div">Abrir a torneira e molhar as mãos. Aplicar na palma da mão quantidade suficiente de sabonete líquido. Friccione ou ensaboe as palmas, o dorso, entre os dedos, polpas digitais, polegares, unhas e punhos. Enxaguar as mãos, retirando os resíduos dos dedos para os punhos. Evitar contato direto das mãos ensaboadas com a torneira. Enxugar as mãos com papel toalha. Fechar a torneira com papel toalha. Nunca use as mãos para fechar as torneiras.</div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'momentosHigiene',
      component: (
        <div className="Div">Quando estiverem visivelmente sujas. Após usar transporte público. Após ir ao banheiro. Após tossir ou espirrar. Antes de preparar refeições. Antes de se alimentar. Antes e após cuidar de alguém doente. Ao chegar em casa. Ao chegar em algum lugar público, como restaurante, farmácia ou supermercado. Ao sair de algum lugar público. Antes de tocar olhos, nariz ou boca. Na prática deve ser realizada sempre que se considerar que as mãos possam estar contaminadas.</div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'limpezaDoAmbiente',
      message: 'Selecione o que você deseja saber sobre limpeza do ambiente.',
      trigger: 'menuLimpezaDoAmbiente',
    },
    {
      id: 'menuLimpezaDoAmbiente',
      options: [
        { value: 1, label: 'Qual o impacto do ambiente na transmissão do SARS-CoV-2?', trigger: 'impactoAmbienteTransmissao'},
        { value: 2, label: 'As roupas transmitem o vírus?', trigger: 'roupasTransmitem'},
        { value: 3, label: 'Devo higienizar as compras do supermercado?', trigger: 'higienizarComprasMercado'},
        { value: 4, label: 'O uso de tapetes sanitizantes são efetivos na contenção da transmissão?', trigger: 'tapetesSanitizantes'},
        { value: 5, label: 'Quais são os locais de maior risco de adquirir a infecção?', trigger: 'locaisMaiorRisco'},
      ],
    },
    {
      id: 'impactoAmbienteTransmissao',
      component: (
        <div className="Div">Até o momento sabe-se que o SARS-CoV-2 pode permanecer viável em diversas superfícies por períodos de tempo variáveis. Entretanto, esta não é a principal via de transmissão da COVID-19. A forma mais comum de transmissão é através das gotículas respiratórias. Isto não elimina a necessidade de cuidados e limpeza do ambiente, já que a transmissão indireta pode ocorrer, porém é menos provável.</div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'roupasTransmitem',
      component: (
        <div className="Div">Não, uma vez que as roupas não entram em contato direto com as nossas mucosas (boca, nariz e olhos). Estudos demonstraram que  as roupas de profissionais de saúde que cuidavam de pacientes com COVID-19 em hospitais, não ofereciam riscos na transmissão por não conter partículas virais.</div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'higienizarComprasMercado',
      component: (
        <div className="Div">Não há comprovação de transmissão da infecção por alimentos. O ambiente também tem menor importância na transmissão. Ainda,  produtos utilizados no ambiente doméstico podem não ser adequados para a desinfecção de embalagens. Reforça-se a necessidade de higienizar as mãos sempre após tocas embalagens e antes de preparar os alimentos e manter as superfícies domésticas limpas.</div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'tapetesSanitizantes',
      component: (
        <div className="Div">Não. Não há comprovação científica de que os tapetes sanitizantes sejam efetivos na redução da transmissão da COVID-19. Além disso, os sapatos não estão associados à transmissão da COVID-19. Após tocar sapatos, ou pegar qualquer objeto que tenha caído, devemos higienizar as nossas mãos.</div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'locaisMaiorRisco',
      component: (
        <div className="Div">Locais com maior número de pessoas em que o distanciamento não possa ser mantido. Locais onde haja uma menor renovação de ar. Ambientes fechados, como restaurantes onde haja a necessidade de retirada das máscaras. Além das instituições de saúde ou instituições de longa permanência.</div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'sintomas',
      message: 'Selecione o que você deseja saber sobre os sintomas da COVID-19.',
      trigger: 'menuSintomas',
    },
    {
      id: 'menuSintomas',
      options: [
        { value: 1, label: 'Quais os sintomas da COVID-19?', trigger: 'sintomasCovid'},
        { value: 2, label: 'Estou com sintomas da COVID-19, devo procurar atendimento médico?', trigger: 'pessoaComSintomas'},
        { value: 3, label: 'Onde devo procurar atendimento médico?', trigger: 'ondeProcurarAtendimento'},
        { value: 4, label: 'Estou com sintomas da COVID-19, devo me afastar das minhas atividades?', trigger: 'afastamentoPorSintomas'},
        { value: 5, label: 'Quanto tempo é necessário para o desenvolvimento dos sintomas?', trigger: 'tempoDesenvolvimentoSintomas'},
      ],
    },
    {
      id: 'sintomasCovid',
      component: (
        <div className="Div">Qualquer pessoa pode ter sintomas leves ou graves. As manifestações mais comuns são tosse, dor de garganta, dores do corpo, dor de cabeça, cansaço, congestão nasal, náusea ou vômitos, diarréia, febre e falta de ar. A perda do olfato e do paladar estão mais associados com a COVID-19 do que com outros vírus. Dezessete a 20% das pessoas não apresentam sintomas apesar de serem infectadas.</div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'pessoaComSintomas',
      component: (
        <div className="Div">Sempre que você estiver com muitos sintomas, seria ideal buscar auxílio médico. Os sintomas que significam maior gravidade são, dificuldade para respirar, fala entrecortada, cansaço aos esforços mínimos, dor no peito persistente, dificuldade de permanecer acordado, palidez, ou confusão mental.</div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'ondeProcurarAtendimento',
      component: (
        <div className="Div">Contate seu médico de confiança; ou busque os locais de atendimento de seu convênio; ou busque o posto de saúde de sua região. Os postos de saúde estão equipados com insumos para o diagnóstico adequado da COVID-19.</div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'afastamentoPorSintomas',
      component: (
        <div className="Div">Sim, é importante permanecer em isolamento domiciliar até a definição se você está infectado. Caso confirme o diagnóstico você deve permanecer em isolamento por aproximadamente 10 dias do começo dos sintomas se estiver com melhora clínica.</div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'tempoDesenvolvimentoSintomas',
      component: (
        <div className="Div">Em média, os sintomas se desenvolvem entre o segundo e o sétimo dia do contato. Em torno de 95% dos pacientes já desenvolveram sintomas com 12 dias de contato. Catorze dias é o prazo final para desenvolvimento de sintomas a partir do dia de contato.</div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'contatoDuranteAPandemia',
      message: 'Selecione o que você deseja saber sobre contatos durante a pandemia.',
      trigger: 'menuContato',
    },
    {
      id: 'menuContato',
      options: [
        { value: 1, label: 'O que considero contato de um caso positivo?', trigger: 'consideraContatoPositivo'},
        { value: 2, label: 'Sou contato de um caso positivo?', trigger: 'casoPositivo'},
        { value: 3, label: 'Meu filho (a) está com COVID-19, posso ir trabalhar?', trigger: 'filhoComCovid'},
        { value: 4, label: 'Meu companheiro (a) está com sintomas, posso ir trabalhar?', trigger: 'companheiroComSintomas'},
      ],
    },
    {
      id: 'consideraContatoPositivo',
      component: (
        <div className="Div">Se você convive na mesma casa de um caso positivo, você é considerado contato. Ou se você estiver próximo de um caso positivo,  a distância de 2 metros ou menos, por pelo menos 15 minutos.</div>
      ),
      trigger: 'ajudaContato',
    },
    {
      id: 'casoPositivo',
      component: (
        <div className="Div">Você deve ficar alerta para a presença de sintomas. Entre dois e sete dias metade das pessoas manifestam sinais e sintomas. Como há a possibilidade de transmissão do vírus na fase pré-sintomática (48h antes do início dos sintomas) é importante ficar alerta a qualquer indício. A testagem de RT-PCR pode ser realizada, preferentemente, no quinto dia do contato se a pessoa estiver assintomática.</div>
      ),
      trigger: 'ajudaContato',
    },
    {
      id: 'filhoComCovid',
      component: (
        <div className="Div">O convívio familiar é a situação de maior risco de transmissão, com taxa de transmissão em torno de 30%. Portanto, se alguém da sua casa estiver doente, você deve ficar em precaução em casa por até 14 dias do início dos sintomas da pessoa doente. Caso você manifeste algum sintoma, realize o teste de RT-PCR.</div>
      ),
      trigger: 'ajudaContato',
    },
    {
      id: 'companheiroComSintomas',
      component: (
        <div className="Div">O convívio familiar é a situação de maior risco de transmissão, com taxa de transmissão em torno de 30%. Portanto, se alguém da sua casa estiver doente, você deve ficar em precaução em casa por até 14 dias do início dos sintomas da pessoa doente. Caso você manifeste algum sintoma, realize o teste de RT-PCR.</div>
      ),
      trigger: 'ajudaContato',
    },
    {
      id: 'teste',
      message: 'Selecione o que você deseja saber sobre os testes para COVID-19.',
      trigger: 'menuTestes',
    },
    {
      id: 'menuTestes',
      options: [
        { value: 1, label: 'Quais são os testes para COVID-19 disponíveis no mercado?', trigger: 'testesDisponiveis'},
        { value: 2, label: 'Qual teste devo realizar?', trigger: 'qualTeste'},
        { value: 3, label: 'Quais são as indicações dos testes para a detecção da COVID-19?', trigger: 'indicacoesDosTestes'},
        { value: 4, label: 'Qual a diferença dos testes de antígeno e de RT-PCR?', trigger: 'diferencaDosTestes'},
        { value: 5, label: 'Posso confiar no teste de COVID-19 disponível nas farmácias?', trigger: 'confiancaTestes'},
        { value: 6, label: 'Não sei se preciso realizar o teste', trigger: 'menuQuandoTestar'},
      ],
    },
    {
      id: 'testesDisponiveis',
      component: (
        <div className="Div">De uma forma geral, para detecção da infecção temos os testes sorológicos que medem anticorpos; os testes de antígenos que são partículas ou substâncias do vírus que estimulam o sistema imunológico e os testes moleculares (RT-PCR), que também detectam o RNA  do vírus e são considerados o padrão-ouro para o diagnóstico.</div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'qualTeste',
      component: (
        <div className="Div">Consulte um profissional para ver a melhor opção de testagem. A presença ou ausência de sintomas, o tempo de infecção influenciam  o resultado do teste e portanto a melhor escolha do teste. Os testes moleculares (RT-PCR), que também detectam o RNA  do vírus e são considerados o padrão-ouro para o diagnóstico de infecção aguda.</div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'indicacoesDosTestes',
      component: (
        <div className="Div">Os testes sorológicos detectam anticorpos, portanto servem principalmente para identificação de infecção passada. Estes geralmente positivam após a primeira semana (IgM), mas especialmente, após a terceira e quarta semana (IgM e IgG) a partir do início dos sintomas. Os testes de antígenos e RT-PCR fazem a detecção da infecção aguda.</div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'diferencaDosTestes',
      component: (
        <div className="Div">Ambos servem para detecção de infecção aguda. O RT-PCR é o padrão ouro, por ser mais sensível e específico. Os testes de antígeno são mais rápidos para se ter o resultado, são mais baratos, mas perdem um pouco de sensibilidade. Por exemplo, um teste de antígeno positivo em um paciente assintomático, ou  um teste negativo em um paciente sintomático, devem ser confirmados por um RT-PCR.</div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'confiancaTestes',
      component: (
        <div className="Div">Depende muito do teste realizado. Os testes sorológicos conforme o tempo de infecção podem ter altos índices de falso negativos. Os testes de antígeno são mais rápidos para se ter o resultado, são mais baratos, mas perdem um pouco de sensibilidade. Por exemplo, um teste de antígeno positivo em um paciente assintomático, ou  um teste negativo em um paciente sintomático, devem ser confirmados por um RT-PCR.</div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'menuQuandoTestar',
      options: [
        { value: 1, label: 'Quando devo realizar o teste na presença de sintomas?', trigger: 'testeComSintomas'},
        { value: 2, label: 'Estou assintomático, devo realizar o teste?', trigger: 'assintomaticoTeste'},
        { value: 3, label: 'Não tenho doença, mas quero visitar meus pais, posso fazer o teste?', trigger: 'visitaPaisTeste'},
      ],
    },
    {
      id: 'testeComSintomas',
      component: (
        <div className="Div">Caso você esteja com sintomas gripais deve realizar o teste. O teste é mais preciso  a partir do segundo ao quinto dia de sintomas.</div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'assintomaticoTeste',
      component: (
        <div className="Div">Se você é contactante de um caso positivo, você pode realizar o teste de RT-PCR de secreção nasal e orofaringe para diagnóstico. Alguns casos de infecção cursam sem sintomas ou com sintomas mínimos. Recomenda-se então a realização do teste a partir do quinto dia de contato.</div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'visitaPaisTeste',
      component: (
        <div className="Div">Se você está assintomático, nem teve contato com alguém positivo, o teste pode trazer resultados falsos. Em uma pessoa assintomática, o resultado de RT-PCR pode ser falso-negativo em 100 a 60% das vezes em um paciente infectado. Assim, muito cuidado ao interpretar este resultado, nessa situação.</div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'tempoDeIsolamento',
      message: 'Selecione o que você deseja saber sobre o tempo de isolamento.',
      trigger: 'menuTempoDeIsolamento',
    },
    {
      id: 'menuTempoDeIsolamento',
      options: [
        { value: 1, label: 'Fui positivo para COVID-19, quanto tempo devo ficar isolado?', trigger: 'tempoParaPositivado'},
        { value: 2, label: 'Meu teste deu negativo, posso sair do isolamento?', trigger: 'sairDoIsolamentoPosNegativo'},
        { value: 3, label: 'Tive o diagnóstico de COVID-19 devo testar novamente para sair do isolamento?', trigger: 'testeAntesDeSairDoIsolamento'},
        { value: 4, label: 'Posso ter uma segunda infecção pelo SARS-COV-2?', trigger: 'segundaInfeccao'},
      ],
    },
    {
      id: 'tempoParaPositivado',
      component: (
        <div className="Div">A transmissão do vírus se correlaciona com a replicação viral nas vias aéreas superiores. Assim a transmissão pode ocorrer principalmente de dois dias antes da apresentação dos sintomas, até 10 dias do início destes. Estudos não demonstraram vírus viáveis após o nono dia de infecção. Portanto o tempo de isolamento de um paciente é de dez dias após o início dos sintomas.</div>
      ),
      trigger: 'ajudaTempoDeIsolamento',
    },
    {
      id: 'sairDoIsolamentoPosNegativo',
      component: (
        <div className="Div">Caso você tenha suspeita de COVID-19 e seu teste deu negativo. Devemos analisar qual teste foi realizado e em que momento foi realizado. Se você fez um teste de RT-PCR na vigência dos sintomas, entre o segundo e o quinto dia e este foi negativo, provavelmente seus sintomas não são devidos a COVID-19, mas talvez outro vírus.  Caso você tenha feito teste de antígeno ou sorologia e este foi negativo, ele deve ser confirmado com um RT-PCR.</div>
      ),
      trigger: 'ajudaTempoDeIsolamento',
    },
    {
      id: 'testeAntesDeSairDoIsolamento',
      component: (
        <div className="Div">Não recomenda-se a testagem do paciente como critério para sair do isolamento. Muitos pacientes permanecem com detecção de RNA viral nas vias aéreas superiores por semanas ou meses.  Estudos não demonstraram vírus viáveis após o nono dia de infecção.</div>
      ),
      trigger: 'ajudaTempoDeIsolamento',
    },
    {
      id: 'segundaInfeccao',
      component: (
        <div className="Div">É possível um indivíduo ser reinfectado. De acordo com dados atuais da literatura, a maioria das pessoas que tiveram infecção pelo SARS-CoV-2 ficaram imunes por um período de três, até quatro meses. Indivíduos com um segundo teste de RT-PCR positivo em um intervalo igual ou superior a 90 dias entre os episódios, são suspeitos de reinfecção.</div>
      ),
      trigger: 'ajudaTempoDeIsolamento',
    },
    {
      id: 'viagens',
      message: 'Selecione o que você deseja saber sobre viagens durante a pandemia.',
      trigger: 'menuViagens',
    },
    {
      id: 'menuViagens',
      options: [
        { value: 1, label: 'Posso viajar durante a pandemia?', trigger: 'podeViajar'},
        { value: 2, label: 'Vou viajar, quais cuidados devo ter?', trigger: 'cuidadosViagem'},
      ],
    },
    {
      id: 'podeViajar',
      component: (
        <div className="Div">Sim, embora não seja recomendado viajar durante a pandemia, a não ser que sejam situações necessárias. Com relação às viagens aéreas, deve-se seguir orientações básicas de precaução como manter um distanciamento mínimo de 1,5 m no embarque e desembarque, utilizar máscara de tecido ou cirúrgica durante toda a viagem, cobrindo adequadamente a boca e o nariz, evitar a circulação dentro da aeronave, higienizar as mãos sempre que possível.</div>
      ),
      trigger: 'ajudaViagens',
    },
    {
      id: 'cuidadosViagem',
      component: (
        <div className="Div">Se teve contato com alguém suspeito ou confirmado, adie a viagem até ter passado seu período de quarentena. Não viaje se você teve um teste positivo para a COVID-19 nos últimos 10 dias,  mesmo que seja assintomático. Avalie a situação da pandemia no seu destino. Evite viajar se o sistema de saúde estiver lotado. Utilize máscara em todos os locais e leve máscaras extras. Evite aglomerações. Mantenha o distanciamento. Higienize as mãos frequentemente.</div>
      ),
      trigger: 'ajudaViagens',
    },
    {
      id: 'geralCovid19',
      options: [
        { value: 1, label: 'O que são as novas variantes/mutações do SARS-CoV-2?', trigger: 'variantes'},
        { value: 2, label: 'Qual a distância de uma pessoa para estar protegido?', trigger: 'distanciamento'},
        { value: 3, label: 'Quero saber notícias sobre a COVID-19', trigger: 'noticias'},
      ],
    },
    {
      id: 'variantes',
      component: (
        <div className="Div">Os vírus mudam constantemente através de mutações e novas variantes são esperadas ao longo do tempo. Até o momento, três novas variantes do SARS-CoV-2 são conhecidas: B.1.1.7 identificada no Reino Unido; B.1.352 identifica na África do Sul; e P.1 identificada no Brasil. Estas variantes parecem disseminar mais fácil e rapidamente de pessoa para pessoa. Entretanto, outras questões como a possibilidade de causar doença moderada ou severa ou mudar a efetividade das vacinas ainda estão sendo estudadas.</div>
      ),
      trigger: 'ajudaGeral',
    },
    {
      id: 'distanciamento',
      component: (
        <div className="Div">A recomendação é que a distância segura seja de 6 pés, ou seja, 1,88 metros.  Apesar disso, há evidências de que partículas menores do vírus podem viajar por distâncias maiores (5 metros), a depender da força que são emitidas (tosse, gritos), do ambiente (ambientes fechados ou não) e de correntes de ar que possam impulsionar as partículas mais leves.</div>
      ),
      trigger: 'ajudaGeral',
    },
    {
      id: 'noticias',
      component: (
        <div className="Div">Notícias sobre a COVID-19 podem ser encontradas no nosso site, basta clicar <a href="https://www.portalqualis.com.br/covid-19/" className="DivLink">aqui</a> para acessar.</div>
      ),
      trigger: 'ajudaGeral',
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
      trigger: 'ajudaQualis',
    },
    {
      id: 'servicos',
      component: (
        <div className="Div">Os serviços ofertados pela Qualis são os seguintes: consultoria para ambientes seguros, teleinfectologia e televigilância das infecções hospitalares. Para saber mais sobre esses serviços, clique <a href="https://www.portalqualis.com.br/servicos/" className="DivLink">aqui</a>.</div>
      ),
      trigger: 'ajudaQualis',
    },
    {
      id: 'produtos',
      component: (
        <div className="Div">Os produtos da Qualis são os seguintes: Vigilância Móvel (Mobilidade nos Pacotes de Prevenção de Infecção Hospitalar) e Robô ISA (Robô de Busca Ativa de Infecções Hospitalares). Para saber mais sobre esses produtos, clique <a href="https://www.portalqualis.com.br/produtos/" className="DivLink">aqui</a>.</div>
      ),
      trigger: 'ajudaQualis',
    },
    {
      id: 'outrasInformacoes',
      component: (
        <div className="Div">Você pode consultar outras informações diretamente no nosso site, basta clicar <a href="https://www.portalqualis.com.br/" className="DivLink">aqui</a>!</div>
      ),
      trigger: 'ajudaQualis',
    },
    {
      id: 'especialista',
      message: 'Por favor, digite o código de acesso.',
      trigger: 'codigo',
    },
    {
      id: 'codigo',
      user: true,
      validator: (value) => {
        if(value == trigger){
          return true;
        }
        else{
          return 'Código inválido';
        }
      },
      trigger: 'contatoEspecialista',
    },
    {
      id: 'contatoEspecialista',
      component: (
        <div className="Div">Se não consegui responder sua dúvida, você pode conversar com um de nossos especialistas clicando <a href="https://api.whatsapp.com/send/?phone=%2B555199420722&text&app_absent=0" className="DivLink">aqui</a>.</div>
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
      id: 'ajudaVacina',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaVacina',
    },
    {
      id: 'verificaAjudaVacina',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'vacina'},
      ],
    },
    {
      id: 'ajudaMedidasPreventivas',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaMedidasPreventivas',
    },
    {
      id: 'verificaAjudaMedidasPreventivas',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'medidasPreventivas'},
      ],
    },
    {
      id: 'ajudaHigieneDasMaos',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaHigieneDasMaos',
    },
    {
      id: 'verificaAjudaHigieneDasMaos',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'higieneDasMaos'},
      ],
    },
    {
      id: 'ajudaLimpezaDoAmbiente',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaLimpezaDoAmbiente',
    },
    {
      id: 'verificaAjudaLimpezaDoAmbiente',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'limpezaDoAmbiente'},
      ],
    },
    {
      id: 'ajudaSintomas',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaSintomas',
    },
    {
      id: 'verificaAjudaSintomas',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'sintomas'},
      ],
    },
    {
      id: 'ajudaContato',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaContato',
    },
    {
      id: 'verificaAjudaContato',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'contato'},
      ],
    },
    {
      id: 'ajudaTeste',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaTeste',
    },
    {
      id: 'verificaAjudaTeste',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'teste'},
      ],
    },
    {
      id: 'ajudaTestes',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaTestes',
    },
    {
      id: 'verificaAjudaTestes',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'teste'},
      ],
    },
    {
      id: 'ajudaTempoDeIsolamento',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaTempoDeIsolamento',
    },
    {
      id: 'verificaAjudaTempoDeIsolamento',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'tempoDeIsolamento'},
      ],
    },
    {
      id: 'ajudaViagens',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaViagens',
    },
    {
      id: 'verificaAjudaViagens',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'viagens'},
      ],
    },
    {
      id: 'ajudaGeral',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaGeral',
    },
    {
      id: 'verificaAjudaGeral',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'geralCovid19'},
      ],
    },
    {
      id: 'ajudaGeral',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaGeral',
    },
    {
      id: 'verificaAjudaGeral',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'geralCovid19'},
      ],
    },
    {
      id: 'ajudaQualis',
      message: 'Posso lhe ajudar em mais alguma coisa?',
      trigger: 'verificaAjudaQualis',
    },
    {
      id: 'verificaAjudaQualis',
      options: [
        { value: 1, label: 'Sim', trigger: 'retornaMenu'},
        { value: 2, label: 'Não', trigger: 'finaliza'},
        { value: 3, label: 'Voltar', trigger: 'qualis'},
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

  export default EnglishSteps;