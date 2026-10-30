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

const mandates = [
    {
        id: 'fhc', president: 'Fernando Henrique Cardoso', elected: 1994, years: '1995–2002', start: 1995, end: 2002,
        positives: [
            'Consolidou a estabilidade monetária iniciada pelo Plano Real, lançado durante o governo Itamar Franco, quando FHC era ministro da Fazenda.',
            'Aprovou a Lei de Responsabilidade Fiscal (2000) e o Fundef (1996), marco do financiamento do ensino fundamental.'
        ],
        negatives: [
            'O racionamento de energia de 2001, conhecido como apagão, expôs falhas de planejamento e exigiu redução compulsória do consumo.',
            'A desvalorização cambial de 1999 e crises externas vieram acompanhadas de aumento do desemprego e baixo crescimento em parte do segundo mandato.'
        ],
        ministers: [
            ['Pedro Malan', 'Fazenda', 'Conduziu a política econômica durante os dois mandatos; associado à consolidação do Real.'],
            ['Paulo Renato Souza', 'Educação', 'À frente do MEC durante a implantação do Fundef e da expansão da avaliação educacional.'],
            ['José Serra', 'Saúde', 'O ministério aprovou a política de medicamentos genéricos (Lei 9.787/1999).'],
            ['Clóvis Carvalho', 'Casa Civil', 'Ministro durante o primeiro mandato; participou da coordenação do governo.']
        ]
    },
    {
        id: 'lula1', president: 'Luiz Inácio Lula da Silva', elected: 2002, years: '2003–2010', start: 2003, end: 2010,
        positives: [
            'Unificou programas de transferência de renda no Bolsa Família e ampliou o acesso ao ensino superior com Prouni e expansão de universidades federais.',
            'O salário mínimo teve ganho real no período; emprego formal e renda cresceram durante boa parte dos mandatos.'
        ],
        negatives: [
            'O escândalo do Mensalão levou a investigações, renúncias e condenações no STF; José Dirceu, então ministro da Casa Civil, foi condenado na Ação Penal 470.',
            'A política de alianças e financiamento político do período foi alvo de críticas e investigações; fatos devem ser distinguidos de acusações individuais.'
        ],
        ministers: [
            ['José Dirceu', 'Casa Civil', 'Condenado pelo STF na Ação Penal 470 (Mensalão); decisão judicial, não mera acusação.'],
            ['Antonio Palocci', 'Fazenda', 'Deixou o cargo em 2006 após o caso Francenildo; controvérsias e decisões judiciais devem ser consideradas separadamente.'],
            ['Fernando Haddad', 'Educação', 'Ministro de 2005 a 2012; o Prouni e a expansão da rede federal ocorreram sob sua gestão no MEC.'],
            ['Patrus Ananias', 'Desenvolvimento Social', 'Ministro durante a implantação e expansão do Bolsa Família.']
        ]
    },
    {
        id: 'dilma', president: 'Dilma Rousseff', elected: 2010, years: '2011–2016 (afastada em maio; destituída em agosto)', start: 2011, end: 2016,
        positives: [
            'O Brasil sem Miséria e o Mais Médicos ampliaram políticas de combate à pobreza e acesso à atenção básica, respectivamente.',
            'A Lei de Acesso à Informação entrou em vigor em 2012, ampliando regras de transparência pública.'
        ],
        negatives: [
            'O país entrou em recessão em 2015 e 2016, com forte deterioração do emprego e das contas públicas.',
            'Dilma foi destituída pelo Senado em 2016 por crime de responsabilidade fiscal; o processo e sua interpretação política permanecem objeto de controvérsia pública.'
        ],
        ministers: [
            ['Antonio Palocci', 'Casa Civil', 'Deixou o cargo em 2011 após reportagens sobre evolução patrimonial; alegações não devem ser tratadas como condenação.'],
            ['Orlando Silva', 'Esporte', 'Renunciou em 2011 após acusações de irregularidades que negou; renúncia não é prova de culpa.'],
            ['Fernando Haddad', 'Educação', 'Ministro até 2012; o período incluiu expansão de vagas e implementação de políticas de acesso.'],
            ['Alexandre Padilha', 'Saúde', 'Ministro de 2011 a 2014; coordenou a implantação do Mais Médicos.']
        ]
    },
    {
        id: 'temer', president: 'Michel Temer', elected: null, years: '2016–2018 (vice-presidente que assumiu após o impeachment)', start: 2016, end: 2018,
        positives: [
            'Aprovou o Novo Regime Fiscal (Emenda Constitucional 95/2016) e a reforma trabalhista (Lei 13.467/2017); os efeitos e custos dessas medidas são debatidos.',
            'A inflação recuou após o pico de 2015–2016, em contexto de retomada econômica lenta.'
        ],
        negatives: [
            'Em 2017, a Procuradoria-Geral da República denunciou Temer; a Câmara barrou o prosseguimento das denúncias durante o mandato.',
            'O ministro Geddel Vieira Lima foi condenado no caso dos R$ 51 milhões encontrados em apartamento em Salvador.'
        ],
        ministers: [
            ['Henrique Meirelles', 'Fazenda', 'Conduziu a política econômica durante o governo e apoiou o teto de gastos; os resultados econômicos foram mistos.'],
            ['Mendonça Filho', 'Educação', 'Ministro durante a aprovação da reforma do ensino médio, alvo de debate sobre implementação e participação.'],
            ['Geddel Vieira Lima', 'Secretaria de Governo', 'Condenado no caso dos R$ 51 milhões em espécie; registro de condenação judicial.'],
            ['Ricardo Barros', 'Saúde', 'Ministro de 2016 a 2018; gestão e propostas foram alvo de controvérsia política.']
        ]
    },
    {
        id: 'bolsonaro', president: 'Jair Bolsonaro', elected: 2018, years: '2019–2022', start: 2019, end: 2022,
        positives: [
            'O Auxílio Emergencial foi criado em 2020 para responder à perda de renda durante a pandemia de Covid-19.',
            'A reforma da Previdência (Emenda Constitucional 103/2019) alterou regras de aposentadoria e pensões.'
        ],
        negatives: [
            'A resposta federal à pandemia foi alvo de críticas de organismos de saúde, da CPI da Pandemia e de decisões judiciais; centenas de milhares de mortes foram registradas no país.',
            'A inflação e a insegurança alimentar cresceram em 2021–2022; a pandemia e fatores externos também influenciaram esses indicadores.'
        ],
        ministers: [
            ['Luiz Henrique Mandetta', 'Saúde', 'Deixou o ministério em abril de 2020 após divergências públicas sobre a resposta à Covid-19.'],
            ['Eduardo Pazuello', 'Saúde', 'Comandou a pasta durante a pandemia; sua gestão foi questionada na CPI da Pandemia, sem que questionamento seja sinônimo de condenação.'],
            ['Sergio Moro', 'Justiça e Segurança Pública', 'Pediu demissão em 2020 e alegou interferência política na Polícia Federal; Bolsonaro contestou as acusações.'],
            ['Abraham Weintraub', 'Educação', 'Ministro de 2019 a 2020; sua gestão foi marcada por conflitos públicos com universidades e órgãos educacionais.']
        ]
    },
    {
        id: 'lula3', president: 'Luiz Inácio Lula da Silva', elected: 2022, years: '2023–2026 (mandato em curso em 30/10/2026)', start: 2023, end: 2026,
        positives: [
            'O Bolsa Família foi reformulado em 2023 e a reforma tributária sobre o consumo foi promulgada pela Emenda Constitucional 132/2023.',
            'A PNAD Contínua 2023 registrou redução da insegurança alimentar em relação à edição de 2017–2018; a comparação depende da metodologia e do contexto econômico.'
        ],
        negatives: [
            'O ministro dos Direitos Humanos Silvio Almeida foi demitido em 2024 após denúncias de assédio sexual; ele negou as acusações, que devem ser descritas como denúncias, não como condenação.',
            'O mandato ainda está em curso; resultados finais não podem ser atribuídos antes da divulgação dos dados consolidados.'
        ],
        ministers: [
            ['Fernando Haddad', 'Fazenda', 'Conduziu a proposta de reforma tributária promulgada em 2023 e o novo arcabouço fiscal.'],
            ['Camilo Santana', 'Educação', 'Ministro da Educação desde 2023; resultados de aprendizagem dependem de séries posteriores e de múltiplos fatores.'],
            ['Nísia Trindade', 'Saúde', 'Ministra de 2023 a 2025; primeira mulher a chefiar o Ministério da Saúde.'],
            ['Alexandre Padilha', 'Saúde', 'Assumiu o Ministério da Saúde em 2025.'],
            ['Silvio Almeida', 'Direitos Humanos', 'Demitido após denúncias de assédio sexual em 2024; negou as acusações. Denúncia não equivale a condenação.'],
            ['Marina Silva', 'Meio Ambiente', 'Ministra do Meio Ambiente no período; políticas de combate ao desmatamento são avaliadas por dados do INPE.']
        ]
    }
];

const chartDefinitions = [
    { key: 'ideb', canvas: 'educationChart', color: '#176b48', decimals: 1 },
    { key: 'feminicide', canvas: 'womenChart', color: '#a63d35', decimals: 0 },
    { key: 'illiteracy', canvas: 'literacyChart', color: '#b28100', decimals: 1 },
    { key: 'food', canvas: 'hungerChart', color: '#23677a', decimals: 1 }
];

function renderMandates() {
    const list = document.getElementById('mandateList');
    const filter = document.getElementById('mandateFilter');
    const trendNames = { ideb: 'IDEB', feminicide: 'feminicídios', illiteracy: 'analfabetismo', food: 'insegurança alimentar' };
    const getTrend = (key, start, end) => {
        const data = series[key];
        const points = data.years.map((year, index) => ({ year, value: data.values[index] })).filter(point => point.year >= start && point.year <= end);
        if (points.length < 2) return `${trendNames[key]}: sem comparação disponível`;
        const first = points[0];
        const last = points[points.length - 1];
        const improved = data.higherIsBetter ? last.value > first.value : last.value < first.value;
        const worsened = data.higherIsBetter ? last.value < first.value : last.value > first.value;
        const status = improved ? 'Avanço' : worsened ? 'Recuo' : 'Estável';
        const direction = improved ? 'up' : worsened ? 'down' : 'neutral';
        return `<span class="trend-chip ${direction}">${status}: ${trendNames[key]} ${first.value}${data.unit} (${first.year}) → ${last.value}${data.unit} (${last.year})</span>`;
    };

    mandates.forEach(mandate => {
        const option = document.createElement('option');
        option.value = mandate.id;
        option.textContent = `${mandate.president} · ${mandate.years}`;
        filter.append(option);

        const card = document.createElement('article');
        card.className = 'mandate-card';
        card.dataset.mandate = mandate.id;
        const ministerItems = mandate.ministers.map(([name, role, fact]) => `<li><strong>${name}</strong> · ${role}: ${fact}</li>`).join('');
        card.innerHTML = `
            <div class="mandate-top"><h3>${mandate.president}</h3><span class="mandate-years">${mandate.elected ? `Eleito em ${mandate.elected} · ` : 'Não eleito diretamente para a Presidência · '}${mandate.years}</span></div>
            <div class="mandate-facts">
                <div class="fact-column"><h4>Realizações e medidas</h4><ul>${mandate.positives.map(fact => `<li>${fact}</li>`).join('')}</ul></div>
                <div class="fact-column negative"><h4>Críticas, crises e controvérsias</h4><ul>${mandate.negatives.map(fact => `<li>${fact}</li>`).join('')}</ul></div>
            </div>
            <div class="trend-row">${chartDefinitions.map(chart => getTrend(chart.key, mandate.start, mandate.end)).map((item, index) => index < 4 ? item : '').join('')}</div>
            <details class="minister-block"><summary>Ministros em destaque (${mandate.ministers.length})</summary><p>Seleção de nomes e fatos associados ao período; não é a composição completa do gabinete. Acusações são identificadas como tais e não equivalem a condenações.</p><ul class="minister-list">${ministerItems}</ul></details>`;
        list.append(card);
    });

    filter.addEventListener('change', () => {
        list.querySelectorAll('.mandate-card').forEach(card => {
            card.hidden = filter.value !== 'all' && card.dataset.mandate !== filter.value;
        });
    });
}

function makeChart({ key, canvas, color, decimals }) {
    if (!window.Chart) {
        const fallback = document.createElement('p');
        fallback.className = 'chart-fallback';
        fallback.textContent = 'Gráfico indisponível: não foi possível carregar a biblioteca de visualização.';
        document.getElementById(canvas).replaceWith(fallback);
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
    if (data.severe) datasets.push({
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

renderMandates();
chartDefinitions.forEach(makeChart);