let trigger = "infectoqualis";

const EnglishSteps = [
    {
      id: 'ola',
      message: 'Hello!',
      trigger: 'apresentacao',
    },
    {
      id: 'apresentacao',
      message: "I'm Qualis's chatbot! How can I help you?",
      trigger: 'menuPrincipal',
    },
    {
      id: 'menuPrincipal',
      options: [
        { value: 1, label: 'COVID-19 information', trigger: 'preMenuCovid19'},
        { value: 2, label: 'Qualis information', trigger: 'qualis'},
        { value: 3, label: 'I need to talk to an expert', trigger: 'especialista'},
      ],
    },
    {
      id: 'preMenuCovid19',
      message: 'Please select what kind of information you want to know about COVID-19.',
      trigger: 'menuCovid19',
    },
    {
      id: 'menuCovid19',
      options: [
        { value: 1, label: 'Vaccines', trigger: 'vacina'},
        { value: 2, label: 'Preventive measures', trigger: 'medidasPreventivas'},
        { value: 3, label: 'Hand hygiene', trigger: 'higieneDasMaos'},
        { value: 4, label: 'Cleaning of the ambient', trigger: 'limpezaDoAmbiente'},
        { value: 5, label: 'Symptoms', trigger: 'sintomas'},
        { value: 6, label: 'Contact during the pandemic', trigger: 'contatoDuranteAPandemia'},
        { value: 7, label: 'COVID-19 test', trigger: 'teste'},
        { value: 8, label: 'Insulation time', trigger: 'tempoDeIsolamento'},
        { value: 9, label: 'Travels during the pandemic', trigger: 'viagens'},
        { value: 10, label: 'General information', trigger: 'geralCovid19'},
        { value: 11, label: 'Return', trigger: 'menuPrincipal'},
      ],
    },
    {
      id: 'vacina',
      message: 'Select what you want to know about vaccines.',
      trigger: 'menuVacinas',
    },
    {
      id: 'menuVacinas',
      options: [
        { value: 1, label: 'Safety and effectiveness', trigger: 'menuSegurancaEEficacia'},
        { value: 2, label: 'Who can get the vaccine?', trigger: 'menuQuemPodeTomarAVacina'},
        { value: 3, label: 'Vaccine doses', trigger: 'menuDosesDaVacina'},
        { value: 4, label: 'Flu vaccine', trigger: 'menuVacinaDaGripe'},
        { value: 5, label: 'General questions', trigger: 'menuDuvidasGeraisVacina'},
        { value: 6, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'menuSegurancaEEficacia',
      options: [
        { value: 1, label: 'How effective is the vaccine?', trigger: 'eficacia'},
        { value: 2, label: 'Is the vaccine safe?', trigger: 'seguranca'},
        { value: 3, label: 'Are there any contraindications/specific reasons NOT to take the vaccine?', trigger: 'contraindicacao'},
        { value: 4, label: 'Can the vaccine change my DNA?', trigger: 'alteracaoDoDNA'},
        { value: 5, label: 'Can the vaccine make me get sick with the COVID-19?', trigger: 'infeccaoPelaVacina'},
        { value: 6, label: 'What reactions can I have with the vaccine?', trigger: 'reacoes'},
        { value: 7, label: 'Do I need to have any test done to prove that the vaccine has reached its effectiveness?', trigger: 'comprovaEficiencia'},
        { value: 8, label: 'Return', trigger: 'menuVacinas'},
      ],
    },
    {
      id: 'menuQuemPodeTomarAVacina',
      options: [
        { value: 1, label: 'Who should get vaccinated?', trigger: 'indicacao'},
        { value: 2, label: 'Can people with HIV or who are immunocompromised receive the vaccine?', trigger: 'hivImunossuprimidas'},
        { value: 3, label: 'Can pregnant women receive the vaccine?', trigger: 'gravidas'},
        { value: 4, label: 'Is it recommended for special groups and children to get vaccinated?', trigger: 'gruposEspeciaisCriancas'},
        { value: 5, label: 'Can people who have had COVID-19 get the vaccine?', trigger: 'infectadosRecebemVacina'},
        { value: 6, label: 'Return', trigger: 'menuVacinas'},
      ],
    },
    {
      id: 'menuDosesDaVacina',
      options: [
        { value: 1, label: 'How many doses of the vaccine do I need to take?', trigger: 'doses'},
        { value: 2, label: 'What is the interval between the vaccine’s doses?', trigger: 'intervaloDoses'},
        { value: 3, label: 'Return', trigger: 'menuVacinas'},
      ],
    },
    {
      id: 'menuVacinaDaGripe',
      options: [
        { value: 1, label: 'Why is it important to get the flu vaccine during the pandemic?', trigger: 'vacinaDaGripeNaPandemia'},
        { value: 2, label: 'Who should get the flu vaccine?', trigger: 'quemTomaVacinaDaGripe'},
        { value: 3, label: 'Should the flu vaccine be given to someone suspected or confirmed of COVID-19?', trigger: 'vacinaDaGripeComSuspeitaOuCasoDeCOVID'},
        { value: 4, label: 'I am a priority group to receive the COVID-19 and flu vaccine, which one should I get first?', trigger: 'qualVacinaTomarPrimeiro'},
        { value: 5, label: 'Can COVID-19 and flu vaccine be co-administered?', trigger: 'vacinasConcomitantes'},
        { value: 6, label: 'Return', trigger: 'menuVacinas'},
      ],
    },
    {
      id: 'menuDuvidasGeraisVacina',
      options: [
        { value: 1, label: 'Which vaccine should I get?', trigger: 'qualVacina'},
        { value: 2, label: 'How long does the vaccine protection last?', trigger: 'tempoProtecao'},
        { value: 3, label: 'If I get the vaccine, can I stop wearing a  mask?', trigger: 'usoDaMascaraPosVacina'},
        { value: 4, label: 'Does the vaccine change the diagnostic tests for COVID-19?', trigger: 'alteraTestes'},
        { value: 5, label: 'Return', trigger: 'menuVacinas'},
      ],
    },
    {
      id: 'eficacia',
      component: (
        <div className="Div">
          Vaccines have variable rates of effectiveness. From phase 3 studies, RNA vaccines are between 90-95% effective. The vaccine from Astra-Zeneca laboratory (Oxford) is around 70% effective. Most importantly, all vaccines are highly effective in protecting against severe and critical infections. The effectiveness of the vaccine (in real life), especially in specific populations (elderly, immunosuppressed) has yet to be determined.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'seguranca',
      component: (
        <div className="Div">
          No vaccine is 100% safe. Rare events will occur as hundreds of thousands of people are vaccinated. The most common adverse events related to vaccination are pain and swelling at the injection site, and tiredness, headache, and muscle pain, within a few days after vaccination. These events can be controlled with the use of analgesics such as Tylenol.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'contraindicacao',
      component: (
        <div className="Div">
          The only absolute contraindication is allergic reactions to any component of the vaccine. If the patient has a severe allergic reaction to the first dose of the vaccine, s/he should not receive the second dose. People who participated in studies with convalescent plasma or monoclonal antibodies should postpone the vaccination due to the possible lesser effectiveness of the vaccine related to these procedures.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'hivImunossuprimidas',
      component: (
        <div className="Div">
          These people are at a higher risk of having complications related to COVID-19. Therefore, it is recommended that they should be vaccinated, although there may be a risk that the vaccine is less effective. The number of participants with some immunodeficiency was small in the studies, which prevents definitive conclusions in this group of people.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'gravidas',
      component: (
        <div className="Div">
          Observational studies have shown that pregnant women who get sick with the virus have worse symptoms than others. However, the vaccine studies did not include pregnant women. It is recommended that the vaccine be offered to this group so that they can decide whether to get vaccinated or not. In Brazil, pregnant women are not listed as a risk group and, therefore, they are not part of the priority vaccination groups.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'alteracaoDoDNA',
      component: (
        <div className="Div">
          No, this is ‘fake news’ published on social media. No vaccine approved for use in Brazil or worldwide will alter the DNA of vaccinated people.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'infeccaoPelaVacina',
      component: (
        <div className="Div">
          No. Vaccines currently released or being tested are not live viruses or live attenuated viruses, so there is no possibility of causing the COVID-19.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'reacoes',
      component: (
        <div className="Div">
          The most common adverse events are pain and swelling at the injection site, tiredness, headache, muscle pain, within a few days after vaccination. These events can be controlled with the use of analgesics such as Tylenol. Symptoms are generally more common in young people.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'indicacao',
      component: (
        <div className="Div">
          Anyone over 18 will be able to get vaccinated when the vaccine is available and according to the schedule established by health authorities. In phase 1 of the vaccination plan there are priority groups such as health care workers, people 60 or older who live in long-term care facilities, indigenous people and the elderly, 75 and older.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'gruposEspeciaisCriancas',
      component: (
        <div className="Div">
          According to the definition of the national vaccination plan, special groups such as pregnant women, postpartum women and lactating women, patients with rheumatic diseases, oncology, transplantation and other immunosuppressed people were not evaluated in the studies regarding the safety and efficacy of the vaccine, and it must be performed after careful evaluation of risks and benefits and with a decision shared between the individual and his/her attending physician. The plan also does not include children due to a lack of studies and evidence to demonstrate safety in this group of people.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'qualVacina',
      component: (
        <div className="Div">
          You should take whatever is available for you, as they have all been approved after strict scientific standards. In addition, they all offer excellent effectiveness in protecting against moderate and severe infections.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'doses',
      component: (
        <div className="Div">
          So far, the vaccines studied have used two doses. The first one that stimulates the immune system and the second dose that serves as a second stimulus (booster) to increase the protection rate and make it more lasting. The second dose should be the same vaccine as previously administered.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'intervaloDoses',
      component: (
        <div className="Div">
          The second dose of the vaccine must comply with the recommendation regarding time. If it is given earlier it may reduce the effectiveness of the vaccine. If the second dose is delayed, there is no loss in efficacy. It is recommended that if there is a delay the second dose should be taken as soon as possible. In addition, the dose range recommended by the manufacturer must be respected, as the time may differ depending on the laboratory.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'vacinaDaGripeNaPandemia',
      component: (
        <div className="Div">
          The flu vaccination is very important to reduce flu because it can help reduce the overall impact of respiratory illnesses on the population and thus lessen the resulting burden on the healthcare system during the COVID-19 pandemic. The flu vaccine may also provide several individual health benefits reducing the severity of your illness if you do get the flu and reducing your risk of a flu-associated hospitalization.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'quemTomaVacinaDaGripe',
      component: (
        <div className="Div">
          Anyone older than 6 months of age can have the flu vaccine (with the exception of people with some medical conditions). However, for the government's vaccination schedule, priority groups are considered: children from 6 months to under 6 years of age, pregnant women, puerperal women, indigenous peoples, health workers, people aged 60 and over, school teachers from public and private schools of basic and higher education, people with chronic noncommunicable diseases and other special clinical conditions, people with permanent disabilities, security and rescue forces, armed forces, truck drivers, urban and long-distance public passenger transport workers, port workers, prison staff, adolescents and young people from 12 to 21 years of age under socio-educational measures and a population deprived of liberty, indigenous peoples.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'vacinaDaGripeComSuspeitaOuCasoDeCOVID',
      component: (
        <div className="Div">
          No. Vaccination should be postponed for people with suspected or confirmed COVID-19, regardless of whether they have symptoms, until they have met the criteria to discontinue their isolation. Since clinical worsening can occur up to two weeks after infection, ideally vaccination should be delayed until full clinical recovery and at least four weeks after the onset of symptoms or four weeks from the first positive RT-PCR sample in asymptomatic people. While mild illness is not a contraindication to flu vaccination, vaccination visits for these people should be postponed to avoid exposing healthcare personnel and other patients to the virus that causes COVID-19. Additionally, a prior infection with suspected or confirmed COVID-19 or flu does not protect someone from future flu infections. The best way to prevent seasonal flu is to get vaccinated every year.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'qualVacinaTomarPrimeiro',
      component: (
        <div className="Div">
          It is important to prioritize the administration of the COVID-19 vaccine for people included in the priority group and who have not yet been vaccinated. The minimum interval of 14 days between vaccines for COVID-19 and influenza must be respected.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'vacinasConcomitantes',
      component: (
        <div className="Div">
          No. The COVID-19 vaccines should be administered alone, with a minimum interval of 14 days before or after administration of any other vaccines, including influenza vaccines. This is because of a lack of data on safety and effectiveness of COVID-19 vaccine administered simultaneously with other vaccines. If COVID-19 vaccine is inadvertently administered within 14 days of another vaccine, doses do not need to be repeated for either vaccine. This recommendation may be updated as more safety and efficacy data become available.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'tempoProtecao',
      component: (
        <div className="Div">
          There is no precise information in this regard. Experts are working to learn more about natural immunity and vaccine-induced immunity.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'comprovaEficiencia',
      component: (
        <div className="Div">
          There is no recommendation to carry out any tests to prove the presence of antibodies against the virus after vaccination. The immune system begins to show a response within 10-14 days after the vaccination. The absence of antibodies does not mean a failure in protection, as other routes of the immune system can be activated to act against the virus, even in the absence of an antibody response (IgG).
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'infectadosRecebemVacina',
      component: (
        <div className="Div">
          Yes, these people must receive the vaccine. The person must have fully recovered from the infection to get the vaccine. As new infections are rare in patients with COVID-19 within 90 days of the first infection, it is recommended to wait this period before receiving the vaccine.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'alteraTestes',
      component: (
        <div className="Div">
          The vaccine does not alter RT-PCR tests or antigen tests for the diagnosis of acute infection. It generates antibodies against the SARS-CoV-2 S protein. Some serological tests detect these antibodies and others do not. The test manufacturers must inform you about this particularities of the test.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'usoDaMascaraPosVacina',
      component: (
        <div className="Div">
          People who received both doses of the vaccine and waited for the immune system to respond (2-4 weeks after the second dose) will be able to live with their close family, have dinner, hug their grandchildren; things that a non-vaccinated person cannot do. Despite this, until we have a large contingent of people vaccinated and reduced rates of infection, the measures of wearing masks and social distancing will remain, especially considering the new viral variants.
        </div>
      ),
      trigger: 'ajudaVacina',
    },
    {
      id: 'medidasPreventivas',
      message: 'Select what you want to know about preventive measures.',
      trigger: 'menuMedidasPreventivas',
    },
    {
      id: 'menuMedidasPreventivas',
      options: [
        { value: 1, label: 'How can I protect myself from COVID-19?', trigger: 'prevencaoCovid'},
        { value: 2, label: 'Which mask should I wear?', trigger: 'qualMascara'},
        { value: 3, label: 'How often should I change my mask?', trigger: 'frequenciaTrocaMascara'},
        { value: 4, label: 'How should I wash my mask?', trigger: 'lavarMascara'},
        { value: 5, label: 'What is the difference between the surgical mask and the N95?', trigger: 'diferencaCirurgiaN95'},
        { value: 6, label: 'Is there a difference between the filter capacity of fabric masks?', trigger: 'capacidadeFiltro'},
        { value: 7, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'prevencaoCovid',
      component: (
        <div className="Div">
          The universal use of masks in addition to the other recommended public health measures, such as social distancing and hand washing should be a priority as long as there are not enough people vaccinated to contain the spread of the virus.
        </div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'qualMascara',
      component: (
        <div className="Div">
          In the community, the main objective of universal masking is to control the spread of droplets. Thus, fabric masks (reusable) or surgical masks (disposable) can and should be used.
        </div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'frequenciaTrocaMascara',
      component: (
        <div className="Div">
          In case of prolonged use, it is recommended to change your mask every 3 hours. In the case of quick departures, such as going to the market or pharmacy, daily change is recommended. The mask should also be changed whenever it is wet due to coughing, sneezing, speech, or breathing.
        </div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'lavarMascara',
      component: (
        <div className="Div">
          The mask should be washed individually with soap and water under running water and then soaked for 20 to 30 minutes in a bleach solution:  2 tablespoons of bleach to 1L of water, or, 1 tablespoon to 500 ml. Rinse well under running water and allow it to air dry.
        </div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'diferencaCirurgiaN95',
      component: (
        <div className="Div">
          Surgical masks are 89% effective in filtering particles of 0.2 micrometers, while N95 masks filter particles smaller than 0.05 micrometers 95-99% of the time. N95 masks have a better seal to the face. Both are recommended for use by healthcare professionals in their workplaces.
        </div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'capacidadeFiltro',
      component: (
        <div className="Div">
          Depending on the fabric, the filtering capacity is different. For example, the effectiveness against 0.02 micrometer particles is: vacuum cleaner bag fabric (86%), dish towel (72%), T-shirt (70%), pillowcase (57-68%), linen (62%), silk (54%), 100% cotton T-shirt (51%), scarf (57%).
        </div>
      ),
      trigger: 'ajudaMedidasPreventivas',
    },
    {
      id: 'higieneDasMaos',
      message: 'Select what you want to know about hand hygiene.',
      trigger: 'menuHigieneDasMaos',
    },
    {
      id: 'menuHigieneDasMaos',
      options: [
        { value: 1, label: 'What products should I sanitize my hands with?', trigger: 'produtosHigienizacaoMaos'},
        { value: 2, label: 'Is soap and water more effective than alcohol gel?', trigger: 'aguaSabonete'},
        { value: 3, label: 'What is the correct hand hygiene technique with alcohol gel or solution?', trigger: 'higieneAlcool'},
        { value: 4, label: 'What is the correct hand hygiene technique with soap and water?', trigger: 'higieneAguaSabonete'},
        { value: 5, label: 'When should I sanitize my hands?', trigger: 'momentosHigiene'},
        { value: 6, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'produtosHigienizacaoMaos',
      component: (
        <div className="Div">
          You can wash your hands using water and soap or alcohol gel. The choice of one product or another will depend on the situation and availability. Soap and water are always recommended when hands are visibly dirty. The alcohol gel can be used in all other situations, since it is often readily available in most places.
        </div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'aguaSabonete',
      component: (
        <div className="Div">
          Both hand hygiene practices of using alcohol gel or soap and water are effective, however some studies show that alcohol based hand gel can be more effective than just washing your hands with water and soap, as it has a bactericidal and virucidal action that ordinary soaps do not have.
        </div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'higieneAlcool',
      component: (
        <div className="Div">
          Apply a sufficient amount of alcohol gel or solution to one hand. Rub the palms, the back, between the fingers,tips of fingers, thumbs, nails and wrists. When they are dry, your hands are safe.
        </div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'higieneAguaSabonete',
      component: (
        <div className="Div">
          Open the tap and get your hands wet. Apply a sufficient amount of liquid soap to the palm. Rub or lather the palms, the back, between the fingers, tips of fingers, thumbs, nails and wrists. Rinse hands removing residues from fingers to wrists. Avoid direct contact of the soapy hands with the tap. Wipe hands with a paper towel. Close the tap with the paper towels. Never use hands to close the taps.
        </div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'momentosHigiene',
      component: (
        <div className="Div">
          When they are visibly dirty; After using public transport; After going to the bathroom; After coughing or sneezing; Before preparing meals; Before eating; Before and after caring for someone who is sick; Upon arriving home; When arriving at a public place, such as a restaurant, pharmacy or supermarket; When leaving a public place; Before touching eyes, nose or mouth; In practice it should be carried out whenever it is considered that the hands may be contaminated.
        </div>
      ),
      trigger: 'ajudaHigieneDasMaos',
    },
    {
      id: 'limpezaDoAmbiente',
      message: 'Select what you want to know about cleaning the environment.',
      trigger: 'menuLimpezaDoAmbiente',
    },
    {
      id: 'menuLimpezaDoAmbiente',
      options: [
        { value: 1, label: 'Can the SARS-CoV-2 virus be transmitted via surfaces?', trigger: 'impactoAmbienteTransmissao'},
        { value: 2, label: 'Do clothes transmit the virus?', trigger: 'roupasTransmitem'},
        { value: 3, label: 'Should I sanitize purchases from the grocery store?', trigger: 'higienizarComprasMercado'},
        { value: 4, label: 'Are the use of sanitizing mats (for shoes) effective in containing transmission?', trigger: 'tapetesSanitizantes'},
        { value: 5, label: 'What places have a higher risk of acquiring the infection?', trigger: 'locaisMaiorRisco'},
        { value: 6, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'impactoAmbienteTransmissao',
      component: (
        <div className="Div">
          So far, it is known that SARS-CoV-2 can remain viable on different surfaces for varying periods of time. However, this is not the main route of transmission for COVID-19. The most common route of transmission is through respiratory droplets. This does not eliminate the need for care and cleaning of surfaces, as indirect transmission can occur, however it is less likely.
        </div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'roupasTransmitem',
      component: (
        <div className="Div">
          No, since the clothes do not come in direct contact with our mucous membranes (mouth, nose and eyes). Studies have shown that the clothes of healthcare professionals who cared for patients with COVID-19 in hospitals did not pose any risks in transmission because they did not contain viral particles.
        </div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'higienizarComprasMercado',
      component: (
        <div className="Div">
          There is no evidence of transmission via the infection by food. Physical surfaces are a minor factor in transmission. Also, household cleaning products may not be suitable for disinfecting packaging. It is recommended to wash your hands after touching packaging and before preparing food, and to keep household surfaces clean.
        </div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'tapetesSanitizantes',
      component: (
        <div className="Div">
          No. There is no scientific evidence that sanitizing mats are effective in reducing the transmission of COVID-19. In addition, the shoes are not associated with the transmission of the COVID-19. After touching shoes, or picking up any object that has fallen, though, you should wash your hands.
        </div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'locaisMaiorRisco',
      component: (
        <div className="Div">
          Places with a large number of people where social distance cannot be maintained. Places where there is little air circulation. Indoor environments, such as restaurants, where there is a need to remove the masks. In addition, health institutions or long-term care facilities also pose a greater risk of acquiring the infection.
        </div>
      ),
      trigger: 'ajudaLimpezaDoAmbiente',
    },
    {
      id: 'sintomas',
      message: 'Select what you want to know about the symptoms of COVID-19.',
      trigger: 'menuSintomas',
    },
    {
      id: 'menuSintomas',
      options: [
        { value: 1, label: 'What are COVID-19 symptoms?', trigger: 'sintomasCovid'},
        { value: 2, label: 'I have COVID-19 symptoms; should I seek medical attention?', trigger: 'pessoaComSintomas'},
        { value: 3, label: 'Where should I seek medical care?', trigger: 'ondeProcurarAtendimento'},
        { value: 4, label: 'I have COVID-19 symptoms, should I stay away from my normal activities?', trigger: 'afastamentoPorSintomas'},
        { value: 5, label: 'How long does it take for symptoms to develop?', trigger: 'tempoDesenvolvimentoSintomas'},
        { value: 6, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'sintomasCovid',
      component: (
        <div className="Div">
          You can have mild or severe symptoms. The most common symptoms are fever (44-94%), cough (68-83%), body pain (11-63%), upper airway symptoms (sore throat, nasal congestion, runny nose - 5-61%), shortness of breath (11-40%), tiredness (23-38%), headache (8-14%), nausea, vomiting or diarrhea (3-17%), mental confusion (9%). Loss of smell and taste (70%) is more associated with COVID-19 than with other viruses. 17-20% of people have no symptoms despite being infected.
        </div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'pessoaComSintomas',
      component: (
        <div className="Div">
          Whenever you have a lot of symptoms, you should seek medical help. The symptoms that mean greater severity are difficulty in breathing, difficulty speaking, tiredness with minimal efforts, persistent chest pain, difficulty in staying awake, skin pallor, or mental confusion.
        </div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'ondeProcurarAtendimento',
      component: (
        <div className="Div">
          Contact your trusted doctor, or search the places where your health insurance service works, or seek the public health center in your region. The public health centers are equipped with supplies for the proper diagnosis of COVID-19.
        </div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'afastamentoPorSintomas',
      component: (
        <div className="Div">
          Yes, it is important to remain isolated at home until it is determined if you are infected. If you are confirmed with a positive diagnosis, you should remain in isolation for approximately 10 days from the onset of symptoms, if you are improving.
        </div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'tempoDesenvolvimentoSintomas',
      component: (
        <div className="Div">
          On average, symptoms develop between the second and seventh day of contact. Around 95% of patients develop symptoms within 12 days of contact. Fourteen days is the deadline for developing symptoms from the day of contact.
        </div>
      ),
      trigger: 'ajudaSintomas',
    },
    {
      id: 'contatoDuranteAPandemia',
      message: 'Select what you want to know about contacts during the pandemic.',
      trigger: 'menuContato',
    },
    {
      id: 'menuContato',
      options: [
        { value: 1, label: 'What do I consider ‘coming into contact with a positive case’?', trigger: 'consideraContatoPositivo'},
        { value: 2, label: 'What do I do if I am in contact with a positive case?', trigger: 'casoPositivo'},
        { value: 3, label: 'My child has COVID-19, can I go to work?', trigger: 'filhoComCovid'},
        { value: 4, label: 'My partner has symptoms, can I go to work?', trigger: 'companheiroComSintomas'},
        { value: 5, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'consideraContatoPositivo',
      component: (
        <div className="Div">
          If you live in the same house as someone who is positive for the virus, you are considered ‘in contact.’ Or, if you have been in close proximity (2 meters or less AND for at least 15 minutes ) to someone who is positive for the virus.
        </div>
      ),
      trigger: 'ajudaContato',
    },
    {
      id: 'casoPositivo',
      component: (
        <div className="Div">
          You should be alert for the presence of symptoms. Between two and seven days, half of the people show signs and symptoms. As there is a possibility of transmission of the virus in the pre-symptomatic phase (48 hours before the onset of symptoms) it is important to be alert for any signs. RT-PCR testing can be performed, preferably, on the fifth day of contact, if the person is asymptomatic.
        </div>
      ),
      trigger: 'ajudaContato',
    },
    {
      id: 'filhoComCovid',
      component: (
        <div className="Div">
          Family life is the situation with the highest risk of transmission, with a rate of around 30%. Therefore, if someone in your household is ill, you should take precautions at home for up to 14 days from the onset of the sick person's symptoms. If you experience any symptoms, perform the RT-PCR test.
        </div>
      ),
      trigger: 'ajudaContato',
    },
    {
      id: 'companheiroComSintomas',
      component: (
        <div className="Div">
          Family life is the situation with the highest risk of transmission, with a rate of around 30%. Therefore, if someone in your household is ill, you should take precautions at home for up to 14 days from the onset of the sick person's symptoms. If you experience any symptoms, perform the RT-PCR test.
        </div>
      ),
      trigger: 'ajudaContato',
    },
    {
      id: 'teste',
      message: 'Select what you want to know about the tests for COVID-19.',
      trigger: 'menuTestes',
    },
    {
      id: 'menuTestes',
      options: [
        { value: 1, label: 'What  COVID-19 tests are available?', trigger: 'testesDisponiveis'},
        { value: 2, label: 'Which test should I get?', trigger: 'qualTeste'},
        { value: 3, label: 'What are the test indications for the detection of COVID-19?', trigger: 'indicacoesDosTestes'},
        { value: 4, label: 'What is the difference between antigen and RT-PCR tests?', trigger: 'diferencaDosTestes'},
        { value: 5, label: 'Can I trust the COVID-19 test available at pharmacies?', trigger: 'confiancaTestes'},
        { value: 6, label: "I don't know if I need to take the test", trigger: 'menuQuandoTestar'},
        { value: 7, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'testesDisponiveis',
      component: (
        <div className="Div">
          In general, for the detection of infection, we have serum tests that measure antibodies; the tests for antigens (particles or substances of the virus that stimulate the immune system) and the molecular tests (RT-PCR), which also detect the RNA of the virus and are considered the gold standard for diagnosis.
        </div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'qualTeste',
      component: (
        <div className="Div">
          You should seek a healthcare professional to assess the best testing option. The presence or absence of symptoms and the time of infection can influence the test result, and therefore the best choice of test. Molecular tests (RT-PCR), which also detect the virus's RNA, are considered the gold standard for the diagnosis of acute infection.
        </div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'indicacoesDosTestes',
      component: (
        <div className="Div">
          Tests of a body’s serum can detect antibodies, so they mainly identify past infection. These are usually positive after the first week (IgM), but especially after the third and fourth week (IgM and IgG) after the onset of symptoms. Antigen and RT-PCR tests detect current infection.
        </div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'diferencaDosTestes',
      component: (
        <div className="Div">
          Both detect acute (the rapid onset of) infection. RT-PCR is the gold standard, as it is more sensitive and specific. Antigen tests (‘rapid tests’) are quicker to get the result and they are cheaper, but they lose some sensitivity. For example, a positive antigen test in an asymptomatic patient, or a negative test in a symptomatic patient, must be confirmed by an RT-PCR.
        </div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'confiancaTestes',
      component: (
        <div className="Div">
          It depends on the test performed. Depending on the time of infection, serum based tests can have high rates of false negatives. Antigen tests are quicker to get the result, are cheaper, but they lose some sensitivity. For example, a positive antigen test in an asymptomatic patient, or a negative test in a symptomatic patient, must be confirmed by an RT-PCR
        </div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'menuQuandoTestar',
      options: [
        { value: 1, label: 'When should I perform the test if I have symptoms?', trigger: 'testeComSintomas'},
        { value: 2, label: "I'm asymptomatic, should I take the test?", trigger: 'assintomaticoTeste'},
        { value: 3, label: "I don't have symptoms, but I want to visit my parents;  can I get tested?", trigger: 'visitaPaisTeste'},
        { value: 4, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'testeComSintomas',
      component: (
        <div className="Div">
          If you have flu-like symptoms you should get the test. The test is more accurate between the second and fifth day of symptoms.
        </div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'assintomaticoTeste',
      component: (
        <div className="Div">
          If you are in contact with a positive case, you can perform the RT-PCR test for diagnosis. Some cases of infection run without symptoms or with minimal symptoms. It is then recommended to perform the test after the fifth day of contact.
        </div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'visitaPaisTeste',
      component: (
        <div className="Div">
          If you are asymptomatic, or have had contact with someone who is positive, the test may give false results. In an asymptomatic - but infected - person, the result of RT-PCR can be a false negative 60% of the time. So, be very careful when interpreting this result, in this situation.
        </div>
      ),
      trigger: 'ajudaTestes',
    },
    {
      id: 'tempoDeIsolamento',
      message: 'Select what you want to know about the isolation time.',
      trigger: 'menuTempoDeIsolamento',
    },
    {
      id: 'menuTempoDeIsolamento',
      options: [
        { value: 1, label: 'I was positive for COVID-19, how long should I be isolated?', trigger: 'tempoParaPositivado'},
        { value: 2, label: 'My test was negative, can I get out of isolation?', trigger: 'sairDoIsolamentoPosNegativo'},
        { value: 3, label: 'I have been diagnosed with  COVID-19;  should I test again to get out of isolation?', trigger: 'testeAntesDeSairDoIsolamento'},
        { value: 4, label: 'Can I have a second SARS-COV-2 infection?', trigger: 'segundaInfeccao'},
        { value: 5, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'tempoParaPositivado',
      component: (
        <div className="Div">
          The transmission of the virus correlates with viral replication in the upper airways. Thus, transmission can occur mainly from two days before the presentation of symptoms, up to 10 days from the onset of symptoms. Studies have not demonstrated viable viruses after the ninth day of infection. Therefore, a patient's isolation time is ten days after the onset of symptoms.
        </div>
      ),
      trigger: 'ajudaTempoDeIsolamento',
    },
    {
      id: 'sairDoIsolamentoPosNegativo',
      component: (
        <div className="Div">
          If you suspect COVID-19 and your test is negative, we must analyze which test was performed and when it was performed. If you had a RT-PCR test during the second and fifth days of showing symptoms and it was negative, your symptoms are probably not due to COVID-19, but perhaps another virus. If you have had an antigen or serology test and it was negative, it must be confirmed with an RT-PCR.
        </div>
      ),
      trigger: 'ajudaTempoDeIsolamento',
    },
    {
      id: 'testeAntesDeSairDoIsolamento',
      component: (
        <div className="Div">
          Patient testing is not recommended as a criterion for leaving isolation. Many patients remain with detection of viral RNA in the upper airways for weeks or months. Studies have not demonstrated viable viruses after the ninth day of infection.
        </div>
      ),
      trigger: 'ajudaTempoDeIsolamento',
    },
    {
      id: 'segundaInfeccao',
      component: (
        <div className="Div">
          It is possible for an individual to be reinfected. According to current data, most people who have had SARS-CoV-2 infection are  immune for a period of three to four months. Individuals who test  positive with a second  RT-PCR test 90 days after the first infection are suspected to be reinfected.
        </div>
      ),
      trigger: 'ajudaTempoDeIsolamento',
    },
    {
      id: 'viagens',
      message: 'Select what you want to know about travel during the pandemic.',
      trigger: 'menuViagens',
    },
    {
      id: 'menuViagens',
      options: [
        { value: 1, label: 'Can I travel during the pandemic?', trigger: 'podeViajar'},
        { value: 2, label: "I'm going to travel, what precautions should I take?", trigger: 'cuidadosViagem'},
        { value: 3, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'podeViajar',
      component: (
        <div className="Div">
          Yes, although traveling during a pandemic is not recommended, unless necessary. With regard to air travel, basic precautionary guidelines should be followed, such as keeping a minimum distance of 1.5 m when boarding and disembarking, using a fabric or surgical mask which adequately covers the mouth and nose during the entire trip, avoiding moving inside the aircraft, and washing your hands  whenever possible.
        </div>
      ),
      trigger: 'ajudaViagens',
    },
    {
      id: 'cuidadosViagem',
      component: (
        <div className="Div">
          If you have had contact with a suspected or confirmed person, postpone the trip until your quarantine period has passed. Do not travel if you have tested positive for COVID-19 in the last 10 days, even if you are asymptomatic. Assess the pandemic situation at your destination. Avoid traveling if the healthcare system is full at your destination. Wear a mask everywhere, and bring extra masks. Avoid crowds. Maintain social distance. Wash hands frequently.
        </div>
      ),
      trigger: 'ajudaViagens',
    },
    {
      id: 'geralCovid19',
      options: [
        { value: 1, label: 'What are the new variants/mutations of SARS-CoV-2?', trigger: 'variantes'},
        { value: 2, label: 'What is social distancing, and how far do I need to be from another person to be protected?', trigger: 'distanciamento'},
        { value: 3, label: 'I want to know news about COVID-19', trigger: 'noticias'},
        { value: 4, label: 'Return', trigger: 'menuCovid19'},
      ],
    },
    {
      id: 'variantes',
      component: (
        <div className="Div">
          Viruses constantly change through mutations and new variants are expected over time. To date, three new variants of SARS-CoV-2 are known: B.1.1.7 identified in the United Kingdom; B.1.352 identified in South Africa; and P.1 identified in Brazil. These variants seem to spread more easily and more quickly from person to person. Other issues such as the possibility of causing moderate or severe reactions,  or their impact on changing the effectiveness of vaccines are still being studied.
        </div>
      ),
      trigger: 'ajudaGeral',
    },
    {
      id: 'distanciamento',
      component: (
        <div className="Div">
          Social distancing means keeping a safe space between yourself and other people who are not from your household.The recommendation is that the safe distance is 6 feet, which is, 1.88 meters. Despite this, there is evidence that smaller particles of the virus can travel for greater distances (5 meters), depending on the force that is emitted (coughing, screaming), the environment (closed or not) and air circulation that can propel the lighter particles.
        </div>
      ),
      trigger: 'ajudaGeral',
    },
    {
      id: 'noticias',
      component: (
        <div className="Div">
          News about COVID-19 can be found on our website, just click <a href="https://www.portalqualis.com.br/covid-19/" className="DivLink">here</a> to access.
        </div>
      ),
      trigger: 'ajudaGeral',
    },
    {
      id: 'qualis',
      message: 'Cool! What do you want to know about Qualis?',
      trigger: 'menuQualis',
    },
    {
      id: 'menuQualis',
      options: [
        { value: 1, label: 'How do I get in touch?', trigger: 'contato'},
        { value: 2, label: 'What services are offered?', trigger: 'servicos'},
        { value: 3, label: 'What products are developed?', trigger: 'produtos'},
        { value: 4, label: 'I want to know more information', trigger: 'outrasInformacoes'},
        { value: 5, label: 'Return', trigger: 'menuPrincipal'},
      ],
    },
    {
      id: 'contato',
      component: (
        <div className="Div">
          You can contact us at +55 51 3028-4992, by <a href="https://api.whatsapp.com/send/?phone=+555197748691&text&app_absent=0" className="DivLink">WhatsApp</a> or by our <a href="https://www.portalqualis.com.br/contato/" className="DivLink">website</a>.
        </div>
      ),
      trigger: 'ajudaQualis',
    },
    {
      id: 'servicos',
      component: (
        <div className="Div">
          The services offered by Qualis are the following: consulting for safe environments, teleinfectology and telesurveillance of hospital illnesses. To learn more about these services, click  <a href="https://www.portalqualis.com.br/servicos/" className="DivLink">here</a>.
        </div>
      ),
      trigger: 'ajudaQualis',
    },
    {
      id: 'produtos',
      component: (
        <div className="Div">
          Qualis' products are as follows: Mobile Surveillance (Mobility in Hospital Infection Prevention Packages) and ISA Robot (Robot for Active Search for Hospital Infections). To learn more about these products, click <a href="https://www.portalqualis.com.br/produtos/" className="DivLink">here</a>.
        </div>
      ),
      trigger: 'ajudaQualis',
    },
    {
      id: 'outrasInformacoes',
      component: (
        <div className="Div">
          You can consult other information directly on our website, just click <a href="https://www.portalqualis.com.br/" className="DivLink">here</a>!
        </div>
      ),
      trigger: 'ajudaQualis',
    },
    {
      id: 'especialista',
      message: 'Please enter the access code.',
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
          return 'Invalid code';
        }
      },
      trigger: 'contatoEspecialista',
    },
    {
      id: 'contatoEspecialista',
      component: (
        <div className="Div">
          If I couldn't answer your question, you can chat with one of our experts by clicking <a href="https://tawk.to/chat/6061fab4f7ce182709351588/1f1vbn5hg" className="DivLink">here</ a>.
        </div>
      ),
      trigger: 'ajuda',
    },
    {
      id: 'ajuda',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjuda',
    },
    {
      id: 'verificaAjuda',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
      ],
    },
    {
      id: 'ajudaVacina',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaVacina',
    },
    {
      id: 'verificaAjudaVacina',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'vacina'},
      ],
    },
    {
      id: 'ajudaMedidasPreventivas',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaMedidasPreventivas',
    },
    {
      id: 'verificaAjudaMedidasPreventivas',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'medidasPreventivas'},
      ],
    },
    {
      id: 'ajudaHigieneDasMaos',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaHigieneDasMaos',
    },
    {
      id: 'verificaAjudaHigieneDasMaos',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'higieneDasMaos'},
      ],
    },
    {
      id: 'ajudaLimpezaDoAmbiente',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaLimpezaDoAmbiente',
    },
    {
      id: 'verificaAjudaLimpezaDoAmbiente',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'limpezaDoAmbiente'},
      ],
    },
    {
      id: 'ajudaSintomas',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaSintomas',
    },
    {
      id: 'verificaAjudaSintomas',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'sintomas'},
      ],
    },
    {
      id: 'ajudaContato',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaContato',
    },
    {
      id: 'verificaAjudaContato',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'contato'},
      ],
    },
    {
      id: 'ajudaTeste',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaTeste',
    },
    {
      id: 'verificaAjudaTeste',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'teste'},
      ],
    },
    {
      id: 'ajudaTestes',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaTestes',
    },
    {
      id: 'verificaAjudaTestes',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'teste'},
      ],
    },
    {
      id: 'ajudaTempoDeIsolamento',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaTempoDeIsolamento',
    },
    {
      id: 'verificaAjudaTempoDeIsolamento',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'tempoDeIsolamento'},
      ],
    },
    {
      id: 'ajudaViagens',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaViagens',
    },
    {
      id: 'verificaAjudaViagens',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'viagens'},
      ],
    },
    {
      id: 'ajudaGeral',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaGeral',
    },
    {
      id: 'verificaAjudaGeral',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'geralCovid19'},
      ],
    },
    {
      id: 'ajudaGeral',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaGeral',
    },
    {
      id: 'verificaAjudaGeral',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'geralCovid19'},
      ],
    },
    {
      id: 'ajudaQualis',
      message: 'Can I help you with anything else?',
      trigger: 'verificaAjudaQualis',
    },
    {
      id: 'verificaAjudaQualis',
      options: [
        { value: 1, label: 'Yes', trigger: 'retornaMenu'},
        { value: 2, label: 'No', trigger: 'finaliza'},
        { value: 3, label: 'Return', trigger: 'qualis'},
      ],
    },
    {
      id: 'retornaMenu',
      message: 'Please select the option that represents what I can help you with!',
      trigger: 'menuPrincipal',
    },
    {
      id: 'finaliza',
      component: (
        <div className="Div">
          Conversation ended.
        </div>
      ),
      end: true,
    },
  ];

  export default EnglishSteps;