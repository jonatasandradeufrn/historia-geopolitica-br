const series = {
    ideb: {
        label: 'IDEB (nota)',
        years: [2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023],
        values: [3.6, 4.0, 4.4, 4.7, 4.9, 5.3, 5.5, 5.7, 5.5, 5.7],
        higherIsBetter: true,
        unit: ''
    },
    feminicide: {
        label: 'Vítimas registradas',
        years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        values: [535, 929, 1133, 1206, 1330, 1350, 1341, 1437, 1467, 1492],
        higherIsBetter: false,
        unit: ''
    },
    illiteracy: {
        label: 'Analfabetismo (%)',
        years: [1995, 1999, 2004, 2009, 2012, 2015, 2018, 2019, 2022, 2023, 2024],
        values: [15.6, 13.3, 11.4, 9.7, 8.7, 8.0, 6.8, 6.6, 5.6, 5.4, 5.3],
        higherIsBetter: false,
        unit: '%'
    },
    food: {
        label: 'Algum grau de insegurança (%)',
        years: [2004, 2009, 2013, 2017, 2023],
        displayYears: ['2004', '2009', '2013', '2017-18', '2023'],
        values: [34.9, 30.2, 22.6, 36.7, 27.6],
        severe: [6.9, 5.0, 3.2, 4.6, 4.1],
        higherIsBetter: false,
        unit: '%'
    }
};

const governments = [
    {
        id: 'fhc',
        president: 'Fernando Henrique Cardoso',
        years: '1995–2002',
        inicio: '1º de janeiro de 1995',
        termino: '31 de dezembro de 2002',
        eleito: 'Eleito em 1994',
        stfNomeados: ['Nelson Jobim (1997)', 'Ellen Gracie (2000)', 'Gilmar Mendes (2002)'],
        stfSaidas: ['Paulo Brossard: aposentadoria compulsória ao completar 70 anos (1995).', 'Francisco Rezek: renúncia ao cargo (1997).', 'Octavio Gallotti: aposentadoria ao completar 70 anos (2000).', 'Néri da Silveira: aposentadoria compulsória (2002).'],
        ministerios: ['Casa Civil', 'Defesa', 'Educação', 'Fazenda', 'Saúde', 'Trabalho', 'Justiça', 'Meio Ambiente', 'Transportes', 'Comunicações', 'Planejamento', 'Desenvolvimento Social'],
        criados: ['Ministério da Defesa (Lei Complementar 97/1999)'],
        extintos: ['Antigas estruturas militares separadas e reorganizadas no Ministério da Defesa; não houve extinção das Forças Armadas, apenas a coordenação civil foi centralizada.'],
        funcoes: 'A estrutura ministerial foi reorganizada para fortalecer a coordenação civil da política de defesa, com a criação do Ministério da Defesa. O período também reforçou o ajuste fiscal e a modernização regulatória.',
        custo: 'R$ 90 bilhões a R$ 170 bilhões por ano (estimativa de despesa federal do Executivo em exercício)',
        custoMensal: 'R$ 7,5 bilhões a R$ 14,2 bilhões por mês',
        ministracoes: [
            ['Pedro Malan', 'Fazenda', 'Conduziu a política econômica do período; foi central no processo de consolidação do Plano Real.'],
            ['Paulo Renato Souza', 'Educação', 'Articulou o Fundef e a política de financiamento do ensino fundamental.'],
            ['José Serra', 'Saúde', 'Foi responsável pela expansão da política de genéricos e pela organização do setor.'],
            ['Clóvis Carvalho', 'Casa Civil', 'Coordenou a gestão do governo e a estrutura do Executivo.']
        ],
        resultados: ['Consolidou a estabilidade monetária após o Plano Real.', 'Aprovou a Lei de Responsabilidade Fiscal e o Fundef.', 'Houve o apagão de 2001, uma das maiores fricções do segundo mandato.'],
        fonte: 'Planejamento e orçamento do Executivo, leis institucionais e documentos do Portal da Transparência.'
    },
    {
        id: 'lula-2003',
        president: 'Luiz Inácio Lula da Silva',
        years: '2003–2010',
        inicio: '1º de janeiro de 2003',
        termino: '31 de dezembro de 2010',
        eleito: 'Eleito em 2002',
        stfNomeados: ['Cezar Peluso (2003)', 'Ayres Britto (2003)', 'Joaquim Barbosa (2003)', 'Eros Grau (2004)', 'Ricardo Lewandowski (2006)', 'Cármen Lúcia (2006)', 'Dias Toffoli (2009)'],
        stfSaidas: ['Ilmar Galvão: aposentadoria compulsória (2003).', 'Moreira Alves: aposentadoria compulsória (2003).', 'Maurício Corrêa: aposentadoria compulsória (2004).', 'Carlos Velloso: aposentadoria voluntária (2006).', 'Nelson Jobim: renúncia (2006).', 'Sepúlveda Pertence: aposentadoria voluntária (2007).', 'Menezes Direito: falecimento no exercício (2009).'],
        ministerios: ['Casa Civil', 'Cidades', 'Desenvolvimento Social', 'Educação', 'Fazenda', 'Saúde', 'Turismo', 'Trabalho', 'Justiça', 'Planejamento', 'Comunicações'],
        criados: ['Ministério das Cidades (2003)', 'Ministério do Turismo (2003)', 'Ministério do Desenvolvimento Social e Combate à Fome (2004)'],
        extintos: ['Estruturas anteriores de assistência social e de gestão urbana foram reorganizadas em pastas próprias e em unidades administrativas vinculadas ao Executivo federal.'],
        funcoes: 'A estrutura reforçou a política urbana, a assistência social e o turismo. Os programas de transferência de renda e de expansão do acesso ao ensino superior ganharam destaque no período.',
        custo: 'R$ 120 bilhões a R$ 230 bilhões por ano',
        custoMensal: 'R$ 10 bilhões a R$ 19 bilhões por mês',
        ministracoes: [
            ['José Dirceu', 'Casa Civil', 'Foi o político central no primeiro ciclo do governo e foi condenado pelo STF no Mensalão.'],
            ['Antonio Palocci', 'Fazenda', 'Conduziu a política fiscal do governo e foi alvo de investigações no processo do Mensalão.'],
            ['Fernando Haddad', 'Educação', 'Foi ministro da Educação durante a expansão do Prouni e da ampliação de vagas.'],
            ['Patrus Ananias', 'Desenvolvimento Social', 'Foi peça central na expansão do Bolsa Família e da política social do período.']
        ],
        resultados: ['Ampliação de programas sociais e crescimento do emprego formal.', 'Bolsa Família e expansão do Prouni como marcas do primeiro governo Lula.', 'Escândalo do Mensalão afetou a reputação do governo e gerou cassações de parlamentares.'],
        fonte: 'Leis de organização administrativa e registros do STF e do Portal da Transparência.'
    },
    {
        id: 'dilma',
        president: 'Dilma Rousseff',
        years: '2011–2016',
        inicio: '1º de janeiro de 2011',
        termino: '31 de agosto de 2016',
        eleito: 'Eleita em 2010',
        stfNomeados: ['Luiz Fux (2011)', 'Rosa Weber (2011)', 'Teori Zavascki (2012)', 'Roberto Barroso (2013)', 'Edson Fachin (2015)'],
        stfSaidas: ['Ellen Gracie: aposentadoria voluntária (2011).', 'Ayres Britto: aposentadoria compulsória ao completar 70 anos (2012).', 'Joaquim Barbosa: aposentadoria voluntária (2014).'],
        ministerios: ['Casa Civil', 'Saúde', 'Educação', 'Esporte', 'Cultura', 'Direitos Humanos', 'Mulheres', 'Igualdade Racial', 'Transportes', 'Defesa', 'Meio Ambiente'],
        criados: ['Ministério da Aviação Civil (2011)', 'Ministério das Mulheres (2015)', 'Ministério da Igualdade Racial (2015)'],
        extintos: ['A estrutura administrativa passou por reorganização em 2015-2016; não se deve tratar a mudança como extinção definitiva das políticas públicas.'],
        funcoes: 'O governo elevou a atenção a políticas de acesso à saúde, educação e assistência social, além de reorganizar a atuação de políticas de gênero e raça.',
        custo: 'R$ 170 bilhões a R$ 260 bilhões por ano',
        custoMensal: 'R$ 14 bilhões a R$ 22 bilhões por mês',
        ministracoes: [
            ['Antonio Palocci', 'Casa Civil', 'Foi central na estrutura administrativa e deixou o cargo em meio a discussões sobre patrimônio.'],
            ['Orlando Silva', 'Esporte', 'Renunciou após acusações e negou os fatos.'],
            ['Fernando Haddad', 'Educação', 'Foi ministro em um momento de expansão de políticas de acesso.'],
            ['Alexandre Padilha', 'Saúde', 'Comandou o Mais Médicos e a gestão da saúde no primeiro mandato.']
        ],
        resultados: ['Mais Médicos e expansão de programas de pobreza e assistência social.', 'Apoio à transparência com a Lei de Acesso à Informação.', 'Crise econômica e impeachment em 2016 fizeram o segundo mandato entrar em colapso institucional.'],
        fonte: 'Leis de organização administrativa, atos oficiais do Executivo e decisões do STF.'
    },
    {
        id: 'temer',
        president: 'Michel Temer',
        years: '2016–2018',
        inicio: '12 de maio de 2016',
        termino: '31 de dezembro de 2018',
        eleito: 'Vice-presidente que assumiu em 2016',
        stfNomeados: ['Alexandre de Moraes (2017)'],
        stfSaidas: ['Teori Zavascki: falecimento em acidente aéreo durante o exercício do cargo (2017).'],
        ministerios: ['Casa Civil', 'Fazenda', 'Educação', 'Saúde', 'Justiça', 'Desenvolvimento Agrário', 'Minas e Energia', 'Cultura', 'Direitos Humanos'],
        criados: ['A criação e recriação da pasta de Cultura foi objeto de reconfiguração em 2016 e 2017; a permanência do ministério foi restabelecida.'],
        extintos: ['A Cultura foi temporariamente retirada da estrutura ministerial, mas foi recriada em 2016.'],
        funcoes: 'O governo priorizou ajuste fiscal, reforma trabalhista e reestruturação econômica; houve alteração em vários ministérios e reordenação do ambiente administrativo.',
        custo: 'R$ 150 bilhões a R$ 210 bilhões por ano',
        custoMensal: 'R$ 12,5 bilhões a R$ 17,5 bilhões por mês',
        ministracoes: [
            ['Henrique Meirelles', 'Fazenda', 'Foi o principal nome da política econômica do governo interino.'],
            ['Mendonça Filho', 'Educação', 'Foi ministro durante os debates sobre a reforma do ensino médio.'],
            ['Geddel Vieira Lima', 'Secretaria de Governo', 'Condenado no caso dos R$ 51 milhões em espécie.'],
            ['Ricardo Barros', 'Saúde', 'Foi responsável pela gestão do setor em um período de ajustes permanentes.']
        ],
        resultados: ['Ajuste fiscal e reforma trabalhista; inflação menor em relação ao pico da crise.', 'Críticas ao processo de impeachment e a conflitos de gabinete marcaram o governo.', 'Estrutura ministerial instável por extensão de mudanças administrativas.'],
        fonte: 'Leis de reorganização administrativa e decisões do STF, além de registros do orçamento federal.'
    },
    {
        id: 'bolsonaro',
        president: 'Jair Bolsonaro',
        years: '2019–2022',
        inicio: '1º de janeiro de 2019',
        termino: '31 de dezembro de 2022',
        eleito: 'Eleito em 2018',
        stfNomeados: ['Nunes Marques (2020)', 'André Mendonça (2021)'],
        stfSaidas: ['Celso de Mello: aposentadoria antecipada (2020).', 'Marco Aurélio: aposentadoria compulsória ao completar 75 anos (2021).'],
        ministerios: ['Economia', 'Saúde', 'Justiça', 'Educação', 'Meio Ambiente', 'Defesa', 'Trabalho', 'Mulheres', 'Transportes', 'Infraestrutura'],
        criados: ['A estrutura do Ministério da Economia foi consolidada e a pasta do Trabalho foi reconfigurada em 2021.'],
        extintos: ['Pastas de Cultura e Desenvolvimento Social foram reconfiguradas e suas competências redistribuídas.'],
        funcoes: 'A estrutura concentrava a política econômica no Ministério da Economia e também reorganizou a gestão de saúde e do trabalho na pandemia.',
        custo: 'R$ 180 bilhões a R$ 280 bilhões por ano',
        custoMensal: 'R$ 15 bilhões a R$ 23 bilhões por mês',
        ministracoes: [
            ['Luiz Henrique Mandetta', 'Saúde', 'Foi ministro no início da pandemia e saiu após conflitos públicos com o governo.'],
            ['Eduardo Pazuello', 'Saúde', 'Comandou a gestão da saúde durante o auge da pandemia.'],
            ['Sergio Moro', 'Justiça e Segurança Pública', 'Renunciou em 2020 após alegações de interferência política.'],
            ['Abraham Weintraub', 'Educação', 'Foi nomeado para a Educação após forte disputa política com universidades e órgãos da rede.']
        ],
        resultados: ['Criação do Auxílio Emergencial em 2020.', 'Reforma da Previdência em 2019.', 'Pandemia e aumento dos índices de insegurança alimentar e de inflação afetaram a gestão.'],
        fonte: 'Ministério da Economia, atos oficiais da pandemia, leis da Previdência e orçamento federal.'
    },
    {
        id: 'lula-2023',
        president: 'Luiz Inácio Lula da Silva',
        years: '2023–atual',
        inicio: '1º de janeiro de 2023',
        termino: 'Em andamento',
        eleito: 'Eleito em 2022',
        stfNomeados: ['Cristiano Zanin (2023)', 'Flávio Dino (2024)'],
        stfSaidas: ['Ricardo Lewandowski: aposentadoria antecipada (2023).', 'Rosa Weber: aposentadoria compulsória ao completar 75 anos (2023).'],
        ministerios: ['Casa Civil', 'Fazenda', 'Educação', 'Saúde', 'Meio Ambiente', 'Direitos Humanos', 'Mulheres', 'Igualdade Racial', 'Povos Indígenas', 'Portos e Aeroportos', 'Cultura'],
        criados: ['Ministério dos Povos Indígenas (2023)', 'Ministério de Portos e Aeroportos (2023)', 'Ministério de Cultura foi recriado em estrutura própria.', 'Ministérios de Mulheres e Igualdade Racial foram reestabelecidos.'],
        extintos: ['A administração anterior tinha reconfigurado algumas pastas; no atual panorama, a criação de novas estruturas buscou ampliar a distribuição de competências por área.'],
        funcoes: 'O governo atual reconstituiu uma estrutura mais ampla voltada a direitos sociais, meio ambiente, povos indígenas e infraestrutura logística.',
        custo: 'R$ 200 bilhões a R$ 320 bilhões por ano (em andamento; variação conforme orçamento anual)',
        custoMensal: 'R$ 17 bilhões a R$ 27 bilhões por mês',
        ministracoes: [
            ['Fernando Haddad', 'Fazenda', 'Foi responsável por a articulação fiscal e pela reforma tributária.'],
            ['Camilo Santana', 'Educação', 'Comandou a pasta em um período de debate sobre acesso e formação.'],
            ['Nísia Trindade', 'Saúde', 'Primeira mulher a assumir o Ministério da Saúde na atual fase do governo.'],
            ['Marina Silva', 'Meio Ambiente', 'Foi indicada para fortalecer o tema ambiental e as políticas de desmatamento.']
        ],
        resultados: ['Reestruturação de ministérios e novas linhas de política social.', 'Retomada de ministérios de direito, cultura e direitos de grupos específicos.', 'O governo está em andamento e a avaliação final depende da consolidação do orçamento e das leis de execução.'],
        fonte: 'Lei de organização de ministérios e documentos oficiais do Executivo.'
    }
];

const chartDefinitions = [
    { key: 'ideb', canvas: 'educationChart', color: '#176b48', decimals: 1 },
    { key: 'feminicide', canvas: 'womenChart', color: '#a63d35', decimals: 0 },
    { key: 'illiteracy', canvas: 'literacyChart', color: '#b28100', decimals: 1 },
    { key: 'food', canvas: 'hungerChart', color: '#23677a', decimals: 1 }
];

function renderGovernments() {
    const list = document.getElementById('mandateList');
    const filter = document.getElementById('mandateFilter');

    governments.forEach(governo => {
        const option = document.createElement('option');
        option.value = governo.id;
        option.textContent = `${governo.president} · ${governo.years}`;
        filter.appendChild(option);

        const card = document.createElement('article');
        card.className = 'mandate-card';
        card.dataset.government = governo.id;

        const ministerList = governo.ministracoes.map(([nome, pasta, detalhe]) =>
            `<li><strong>${nome}</strong> · ${pasta}: ${detalhe}</li>`
        ).join('');

        const stfNomeados = governo.stfNomeados.map(item => `<li>${item}</li>`).join('');
        const stfSaidas = governo.stfSaidas.map(item => `<li>${item}</li>`).join('');
        const ministeriosList = governo.ministerios.map(item => `<li>${item}</li>`).join('');
        const criadosList = governo.criados.map(item => `<li>${item}</li>`).join('');
        const extintosList = governo.extintos.map(item => `<li>${item}</li>`).join('');

        card.innerHTML = `
            <div class="mandate-top">
                <h3>${governo.president}</h3>
                <span class="mandate-years">${governo.eleito} · ${governo.years}</span>
            </div>

            <div class="mandate-meta">
                <div><span>Início</span><strong>${governo.inicio}</strong></div>
                <div><span>Término</span><strong>${governo.termino}</strong></div>
            </div>

            <section class="gov-section">
                <h4>Ministros em destaque</h4>
                <ul class="minister-list">${ministerList}</ul>
            </section>

            <section class="gov-section">
                <h4>STF</h4>
                <div class="data-grid">
                    <div class="data-panel">
                        <strong>Nomeados durante o governo</strong>
                        <ul>${stfNomeados}</ul>
                    </div>
                    <div class="data-panel">
                        <strong>Saídas e motivos</strong>
                        <ul>${stfSaidas}</ul>
                    </div>
                </div>
            </section>

            <section class="gov-section">
                <h4>Ministérios existentes</h4>
                <ul>${ministeriosList}</ul>
            </section>

            <section class="gov-section">
                <h4>Ministérios criados / extintos / reordenados</h4>
                <div class="data-grid">
                    <div class="data-panel">
                        <strong>Criados</strong>
                        <ul>${criadosList || '<li>Não houve criação formal de ministério novo no período.</li>'}</ul>
                    </div>
                    <div class="data-panel">
                        <strong>Extintos / reorganizados</strong>
                        <ul>${extintosList || '<li>Nenhuma extinção formal ou reestruturação relevante foi registrada.</li>'}</ul>
                    </div>
                </div>
            </section>

            <section class="gov-section">
                <h4>Funções legais e organização administrativa</h4>
                <p>${governo.funcoes}</p>
            </section>

            <section class="gov-section">
                <h4>Custo mensal / anual</h4>
                <span class="cost-pill">Orçamento estimado</span>
                <p><strong>Mensal:</strong> ${governo.custoMensal}</p>
                <p><strong>Anual:</strong> ${governo.custo}</p>
                <p><small>${governo.fonte}</small></p>
            </section>

            <section class="gov-section">
                <h4>Resultado geral</h4>
                <ul>${governo.resultados.map(item => `<li>${item}</li>`).join('')}</ul>
            </section>

            <details class="minister-block">
                <summary>Ver ministérios e cargos em detalhe</summary>
                <p>Lista de ministros em destaque e a função principal na gestão. Não substitui a composição integral do gabinete, mas organiza as peças centrais de cada governo.</p>
                <ul class="minister-list">${ministerList}</ul>
            </details>
        `;

        list.appendChild(card);
    });

    filter.addEventListener('change', () => {
        list.querySelectorAll('.mandate-card').forEach(card => {
            const shouldShow = filter.value === 'all' || card.dataset.government === filter.value;
            card.hidden = !shouldShow;
        });
    });
}

function makeChart({ key, canvas, color, decimals }) {
    if (!window.Chart) {
        const fallback = document.createElement('p');
        fallback.className = 'chart-fallback';
        fallback.textContent = 'Gráfico indisponível: não foi possível carregar a biblioteca de visualização.';
        const target = document.getElementById(canvas);
        if (target) target.replaceWith(fallback);
        return;
    }

    const data = series[key];
    const labels = data.displayYears || data.years;
    const datasets = [{
        label: data.label,
        data: data.values,
        borderColor: color,
        backgroundColor: `${color}22`,
        pointBackgroundColor: color,
        pointRadius: 4,
        pointHoverRadius: 7,
        borderWidth: 2,
        tension: 0.22,
        spanGaps: false
    }];

    if (data.severe) {
        datasets.push({
            label: 'Insegurança alimentar grave (%)',
            data: data.severe,
            borderColor: '#b28100',
            backgroundColor: '#b2810022',
            pointBackgroundColor: '#b28100',
            pointRadius: 4,
            pointHoverRadius: 7,
            borderWidth: 2,
            tension: 0.22
        });
    }

    new Chart(document.getElementById(canvas), {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
                legend: { display: datasets.length > 1, labels: { usePointStyle: true, boxWidth: 8, color: '#38443d', font: { size: 11 } } },
                tooltip: { callbacks: { label: context => `${context.dataset.label}: ${Number(context.raw).toFixed(decimals)}${data.unit}` } }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#59665f', maxRotation: 0, autoSkip: true, maxTicksLimit: 7 } },
                y: { beginAtZero: key !== 'ideb', grid: { color: '#e8ede8' }, ticks: { color: '#59665f' }, title: { display: true, text: data.unit || 'Índice / pessoas', color: '#59665f', font: { size: 10 } } }
            }
        }
    });
}

renderGovernments();
chartDefinitions.forEach(makeChart);