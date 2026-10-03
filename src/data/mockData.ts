import { NewsArticle, HighlightItem } from '../types';
import mateoSilvaImg from '../assets/images/player_mateo_silva_1786822810612.webp';
import fcAtlanticoImg from '../assets/images/fc_atlantico_team_1786822829934.webp';
import transferLucasImg from '../assets/images/transfer_lucas_1786822841622.webp';
import newsChampionsImg from '../assets/images/news_champions_1786822853777.webp';
import newsTransferImg from '../assets/images/news_transfer_contract_1786822866316.webp';
import newsClassic10Img from '../assets/images/news_classic_number10_1786822880230.webp';
import newsTelstarImg from '../assets/images/news_telstar_ball_1786822893957.webp';
import newsNationalImg from '../assets/images/news_national_team_1786822908513.webp';
import newsCaptainImg from '../assets/images/news_captain_leader_1786822921122.webp';

export const HERO_ARTICLE: NewsArticle = {
  id: 'hero-1',
  title: 'O futebol que todos estão a comentar está aqui: A revolução tática que redefine as noites europeias',
  subtitle: 'Análise profunda sobre a evolução da pressão alta, a versatilidade posicional e o impacto dos jovens talentos nos maiores palcos.',
  summary: 'Das transições fulgurantes aos novos esquemas de marcação dinâmica, descubra como os principais treinadores estão a reinventar a forma como o jogo moderno é disputado e sentido pelos adeptos.',
  content: [
    'O futebol contemporâneo atravessa uma das suas fases mais fascinantes de reinvenção. Já lá vai o tempo em que as posições no relvado eram estáticas e rígidas. Hoje, o jogo exige polivalência extrema, capacidade de decisão em frações de segundo e uma inteligência espacial que desafia as convenções tradicionais.',
    'Nas principais ligas europeias e na Liga dos Campeões, assistimos a laterais que constroem por dentro como médios organizadores, avançados centros que recuam para criar superioridade numérica no corredor central e defesas centrais com qualidade técnica suficiente para quebrar linhas de pressão com passes de 40 metros.',
    'Esta nova dinâmica não afeta apenas os sistemas táticos: transforma também a preparação física e a exigência mental dos atletas. As equipas que dominam a posse de bola já não o fazem de forma contemplativa, mas sim com uma intensidade vertiginosa que procura atrair a pressão adversária para explorar o espaço vazio nas costas.',
    'Para os adeptos, o espetáculo ganhou uma nova dimensão estética e analítica. No Bola em Foco, continuamos a acompanhar de perto cada movimento, cada duelo estratégico e os momentos que marcam a história do desporto rei.'
  ],
  category: 'Notícias',
  imageUrl: newsChampionsImg,
  imageCaption: 'Intensidade e rigor tático marcam os grandes palcos do futebol europeu.',
  date: '15 de Agosto, 2026',
  author: 'Redação Bola em Foco',
  readTime: '4 min de leitura',
  isHeroFeatured: true,
};

export const LATEST_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Liga dos Campeões: Sorteio define grupos e promete clássicos eletrizantes logo na fase inicial',
    summary: 'Os gigantes do continente europeu já conhecem o seu caminho na prova rainha. Confrontos diretos entre candidatos prometem espetáculo desde a primeira jornada.',
    content: [
      'O sorteio oficial da fase de grupos da Liga dos Campeões ditou emparelhamentos de alto calibre, colocando frente a frente campeões nacionais e eternos rivais continentais.',
      'Os treinadores reagiram com cautela mas com entusiasmo, sublinhando que a margem de erro nesta fase é praticamente nula. O formato renovado tem proporcionado duelos mais imprevisíveis e com maior equilíbrio competitivo.',
      'A primeira jornada arranca já no próximo mês e todos os detalhes, resumos e análises táticas estarão disponíveis aqui no Bola em Foco.'
    ],
    category: 'Notícias',
    imageUrl: newsChampionsImg,
    date: '14 de Agosto, 2026',
    author: 'Miguel Santos',
    readTime: '3 min de leitura',
  },
  {
    id: 'news-2',
    title: 'Mercado em Ebulição: Avançado prodígio assina contrato recorde antes do fecho da janela',
    summary: 'A transferência mais aguardada do verão foi finalmente oficializada após semanas de negociações intensas entre os dois clubes.',
    content: [
      'Após longas semanas de especulação e avanços nas negociações, o jovem internacional fechou contrato de cinco temporadas com o novo clube, num negócio que movimenta valores históricos.',
      'A chegada do reforço visa suprir as carências no setor ofensivo e dar maior profundidade ao plantel para atacar as competições internas e internacionais.',
      'O jogador já realizou os testes médicos com sucesso e deverá ser apresentado oficialmente aos adeptos e aos sócios ainda esta semana no estádio principal.'
    ],
    category: 'Transferências',
    imageUrl: newsTransferImg,
    date: '13 de Agosto, 2026',
    author: 'André Carvalho',
    readTime: '2 min de leitura',
  },
  {
    id: 'news-3',
    title: 'Análise de Opinião: O regresso do número 10 clássico ou apenas uma ilusão nostálgica?',
    summary: 'Num futebol cada vez mais físico e robotizado, será que os médios criativos de toque refinado ainda encontram o seu espaço?',
    content: [
      'Durante mais de uma década ouvimos dizer que o clássico camisola 10, o maestro que dita o tempo do jogo com o pé em cima da bola, estava extinto. A pressão asfixiante e a cobertura em bloco pareciam não deixar margem para a pausa.',
      'No entanto, a última temporada revelou uma tendência refrescante: equipas que valorizam a inteligência de posicionamento antes mesmo da aceleração pura.',
      'O número 10 não morreu; ele apenas reinventou-se. Hoje, joga em espaços mais reduzidos, pressiona sem bola e decide com um ou dois toques de pura genialidade.'
    ],
    category: 'Opinião',
    imageUrl: newsClassic10Img,
    date: '12 de Agosto, 2026',
    author: 'Rui Fernandes',
    readTime: '5 min de leitura',
  },
  {
    id: 'news-4',
    title: 'Curiosidades: Porque é que as bolas de futebol tinham 32 gomos pretos e brancos?',
    summary: 'A fascinante história do design clássico Telstar de 1970 e como a televisão a preto e branco mudou o desporto para sempre.',
    content: [
      'Quando imaginamos uma bola de futebol tradicional, o padrão de 12 pentágonos pretos e 20 hexágonos brancos surge de imediato na nossa mente. Mas sabia que este formato teve uma razão puramente tecnológica?',
      'Criada para o Campeonato do Mundo de 1970 no México, a bola foi concebida especificamente para facilitar a visualização dos telespectadores através dos ecrãs de televisão a preto e branco da época.',
      'A combinação de cores contrastantes ajudava o olho humano e as câmaras a acompanhar a trajetória e o efeito da bola em pleno voo. Um ícone de design que perdura até aos dias de hoje!'
    ],
    category: 'Curiosidades',
    imageUrl: newsTelstarImg,
    date: '11 de Agosto, 2026',
    author: 'Beatriz Lima',
    readTime: '3 min de leitura',
  },
  {
    id: 'news-5',
    title: 'Seleções Nacionais: Novos talentos ganham espaço nas convocatórias para a qualificação',
    summary: 'A renovação das equipas nacionais ganha força com a chamada de jovens promessas que têm brilhado nos campeonatos locais.',
    content: [
      'O selecionador nacional divulgou a lista de convocados para a próxima ronda dupla de qualificação, com três estreias absolutas que captaram a atenção da imprensa.',
      'O desempenho consistente destes atletas nas suas respetivas equipas foi recompensado com a oportunidade de representar as cores do país no mais alto nível.',
      'Os treinos começam já na próxima segunda-feira no centro de estágios, com foco total na conquista dos seis pontos em disputa.'
    ],
    category: 'Notícias',
    imageUrl: newsNationalImg,
    date: '10 de Agosto, 2026',
    author: 'Miguel Santos',
    readTime: '2 min de leitura',
  },
  {
    id: 'news-6',
    title: 'Contrato Blindado: Capitão renova ligação ao clube do coração por mais três temporadas',
    summary: 'Apesar de propostas milionárias do estrangeiro, a liderança e o amor à camisola falaram mais alto na decisão final.',
    content: [
      'Numa conferência de imprensa emotiva, o capitão de equipa confirmou a extensão do seu vínculo contratual, garantindo a sua continuidade no clube onde fez toda a formação.',
      'A direção destacou a importância de manter referências no balneário para guiar a integração dos jovens formados na academia.',
      'Os adeptos celebraram a notícia com entusiasmo, reconhecendo a dedicação de um jogador que personifica os valores e a mística da instituição.'
    ],
    category: 'Transferências',
    imageUrl: newsCaptainImg,
    date: '09 de Agosto, 2026',
    author: 'André Carvalho',
    readTime: '3 min de leitura',
  }
];

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: 'hl-jogador',
    type: 'jogador',
    badgeTitle: 'Jogador em Destaque',
    title: 'Mateo Silva',
    subtitle: 'O novo maestro do meio-campo',
    description: 'Com 14 assistências e 8 golos nesta temporada, o jovem médio tem sido o motor criativo indiscutível da sua equipa.',
    fullStory: [
      'Mateo Silva tem sido uma das figuras mais dominantes do futebol recente. Com uma visão periférica invulgar e uma capacidade ímpar de ditar o ritmo da partida, o internacional tem colecionado elogios dos maiores especialistas.',
      'O seu mapa de ações no relvado demonstra uma omnipresença assinalável: recupera bolas no terço defensivo, organiza a primeira fase de construção e surge na área com remates venenosos de média distância.',
      'Com apenas 21 anos, o seu futuro afigura-se brilhante e os principais clubes do continente já monitorizam de perto cada exibição.'
    ],
    imageUrl: mateoSilvaImg,
    metricLabel: 'Participações em Golos',
    metricValue: '22',
    date: 'Semana 32'
  },
  {
    id: 'hl-equipa',
    type: 'equipa',
    badgeTitle: 'Equipa em Destaque',
    title: 'FC Atlântico',
    subtitle: 'A melhor defesa e o ataque mais demolidor',
    description: 'Invictos há 16 jogos consecutivos, a equipa liderada por Vasco Mendes surpreende pelo futebol atrativo e solidariedade coletiva.',
    fullStory: [
      'O FC Atlântico é a sensação indiscutível do campeonato. Com um bloco médio-alto compacto e transições verticais estonteantes, a equipa conseguiu desarmar todos os adversários que encontrou nas últimas dezasseis jornadas.',
      'O segredo reside na harmonia tática: os extremos recuam para apoiar os laterais e a linha defensiva joga coordenada ao milímetro para provocar foras de jogo.',
      'A comunhão com os adeptos no seu estádio tem criado um ambiente inexpugnável, transformando a época numa caminhada memorável rumo ao título.'
    ],
    imageUrl: fcAtlanticoImg,
    metricLabel: 'Jogos de Invencibilidade',
    metricValue: '16 Jogos',
    date: 'Época 2025/26'
  },
  {
    id: 'hl-transferencia',
    type: 'transferencia',
    badgeTitle: 'Transferência em Destaque',
    title: 'Lucas Rocha no Valência',
    subtitle: 'Negócio de 45 Milhões de Euros',
    description: 'A mudança do extremo veloz promete transformar a frente de ataque e agitar a disputa pelos lugares cimeiros da tabela.',
    fullStory: [
      'A transferência de Lucas Rocha foi o negócio mais comentado do mercado de transferências. Após negociações que duraram várias semanas, o acordo foi selado por uma verba fixada em 45 milhões de euros mais objetivos por rendimento.',
      'A versatilidade do jogador, capaz de atuar em ambos os flancos ou no apoio ao ponta de lança, confere um leque de soluções táticas de enorme valor para o treinador.',
      'A camisola número 7 já é uma das mais vendidas nas lojas oficiais, antecipando uma estreia com grande expectativa por parte dos adeptos.'
    ],
    imageUrl: transferLucasImg,
    metricLabel: 'Valor da Transferência',
    metricValue: '€45M',
    date: 'Mercado de Verão'
  }
];
