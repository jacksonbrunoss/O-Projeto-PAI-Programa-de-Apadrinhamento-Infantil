// ============================================================
// CONTEÚDO DO SITE — PROJETO PAI
// Edite aqui textos, fotos e o número do WhatsApp.
// ============================================================

// TROQUE pelo número oficial, com código do país e DDD, só dígitos.
// Exemplo: "5585999999999"
export const WHATSAPP_NUMERO = "5500000000000";

export const linkWhatsApp = (mensagem) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

export const mensagens = {
  encontros: "Olá! Gostaria de saber as datas dos próximos encontros do Projeto PAI.",
  apoiador: "Olá! Gostaria de saber como posso apoiar o Projeto PAI.",
  financeira: "Olá! Gostaria de saber como posso fazer uma contribuição financeira para o Projeto PAI.",
  alimentos: "Olá! Gostaria de informações sobre doação de alimentos para o Projeto PAI.",
  materiais: "Olá! Gostaria de saber quais materiais o Projeto PAI está precisando.",
  contato: "Olá! Quero apoiar o Projeto PAI. Podemos conversar?",
};

export const site = {
  nome: "Projeto PAI",
  nomeCompleto: "Programa de Apadrinhamento Infantil",
  titulo: "Projeto PAI — Programa de Apadrinhamento Infantil",
  descricao:
    "Oficinas educativas, musicais, artísticas e recreativas, café da manhã e almoço para as crianças, dois sábados por mês. Conheça o Projeto PAI e saiba como apoiar.",
};

export const menu = [
  { rotulo: "Cultos", href: "#cultos" },
  { rotulo: "Atividades", href: "#oficinas" },
  { rotulo: "Locais", href: "#locais" },
  { rotulo: "Apoie", href: "#apoie" },
  { rotulo: "Transparência", href: "#transparencia" },
  { rotulo: "Contato", href: "#contato" },
];

export const hero = {
  titulo: "Aprendizagem, arte, música e convivência para as crianças.",
  texto:
    "O Projeto PAI — Programa de Apadrinhamento Infantil — desenvolve atividades voltadas à aprendizagem, à expressão artística, à musicalização, à convivência e ao desenvolvimento das crianças.",
  resumo: "Dois sábados por mês, das 8h às 11h, com café da manhã e almoço.",
  botaoPrincipal: "Seja um apoiador",
  botaoSecundario: "Conheça nossas atividades",
};

export const encontros = {
  titulo: "Nossos encontros",
  itens: [
    { icone: "calendario", rotulo: "Frequência", valor: "Dois sábados por mês" },
    { icone: "relogio", rotulo: "Horário", valor: "Das 8h às 11h" },
    { icone: "atividades", rotulo: "Atividades", valor: "Cultos temáticos, oficinas educativas, musicais, artísticas e recreativas" },
    { icone: "alimentacao", rotulo: "Acolhimento", valor: "Café da manhã e almoço" },
  ],
  nota: "Para saber as datas dos próximos encontros, fale com a equipe pelos canais oficiais.",
  botao: "Saiba mais pelo WhatsApp",
};

export const oficinas = {
  titulo: "Muito além de atividades: oportunidades para crescer.",
  texto:
    "No Projeto PAI, cada encontro é uma oportunidade de aprender, desenvolver talentos, fortalecer vínculos e viver novas experiências. Por meio de oficinas educativas, artísticas e recreativas, buscamos contribuir para o desenvolvimento integral das crianças.",
  // Para usar foto real e autorizada, preencha "foto" com o caminho em /public (ex.: "/fotos/musica.jpg").
  cards: [
    {
      icone: "livro",
      cor: "azul",
      titulo: "Reforço escolar",
      descricao:
        "Aprender com mais confiança, superar dificuldades e fortalecer os conhecimentos escolares. O reforço escolar busca apoiar a aprendizagem das crianças de maneira acolhedora e participativa.",
      foto: "",
    },
    {
      icone: "musica",
      cor: "amarelo",
      titulo: "Aula de música",
      descricao:
        "Um espaço para explorar sons, desenvolver a criatividade, descobrir talentos e aprender por meio da música, estimulando a expressão e a convivência.",
      foto: "",
    },
    {
      icone: "paleta",
      cor: "vermelho",
      titulo: "Arte e artesanato",
      descricao:
        "Atividades artísticas e manuais que incentivam a imaginação, a coordenação motora, a criatividade e a expressão individual de cada criança.",
      foto: "",
    },
    {
      icone: "puzzle",
      cor: "verde",
      titulo: "Recreação com propósito",
      descricao:
        "Brincadeiras, dinâmicas e atividades recreativas que promovem a socialização, a cooperação, o respeito e o aprendizado de valores importantes para a vida.",
      foto: "",
    },
  ],
};

export const chamada = {
  titulo: "O Projeto PAI precisa de você.",
  texto:
    "Com sua contribuição, podemos continuar promovendo aprendizagem, criatividade, convivência e cuidado com as crianças.",
  botaoPrincipal: "Seja um apoiador",
  botaoSecundario: "Conheça nossas atividades",
};

export const acolhimento = {
  titulo: "Cuidar também é alimentar.",
  texto:
    "Durante os encontros do Projeto PAI, as crianças contam com momentos de alimentação, incluindo café da manhã e almoço. Esse cuidado faz parte da acolhida e da organização das atividades, contribuindo para que cada encontro seja vivido com atenção, dignidade e carinho.",
  destaques: [
    {
      icone: "alimentacao",
      cor: "amarelo",
      titulo: "Café da manhã",
      descricao: "Um momento de acolhida e convivência durante o encontro.",
      foto: "",
    },
    {
      icone: "alimentacao",
      cor: "verde",
      titulo: "Almoço",
      descricao: "Uma refeição compartilhada, servida com atenção e carinho.",
      foto: "",
    },
  ],
};

export const apoio = {
  titulo: "Ajude-nos a continuar transformando vidas!",
  texto: [
    "Para que o Projeto PAI continue oferecendo oficinas, atividades educativas, momentos de convivência, café da manhã e almoço às crianças, precisamos da ajuda de pessoas que acreditam nessa missão.",
    "Sua oferta, contribuição ou doação pode fazer a diferença. Cada gesto de generosidade ajuda a fortalecer esse trabalho e a criar novas oportunidades para nossas crianças.",
  ],
  foto: "",
  formas: [
    {
      icone: "coracao",
      titulo: "Ofertas e contribuições financeiras",
      descricao:
        "Contribua financeiramente para ajudar na manutenção das atividades, na aquisição de materiais e na realização dos encontros do Projeto PAI.",
      botao: "Quero contribuir",
      mensagem: "financeira",
      extra: { rotulo: "Contribuir por Pix", href: "#pix" },
    },
    {
      icone: "alimentacao",
      titulo: "Doação de alimentos",
      descricao:
        "Ajude a fortalecer os momentos de alimentação do projeto por meio de doações de alimentos, conforme as necessidades e orientações da organização.",
      botao: "Quero doar alimentos",
      mensagem: "alimentos",
    },
    {
      icone: "paleta",
      titulo: "Doação de materiais",
      descricao:
        "Materiais escolares, instrumentos musicais, itens para artesanato e outros materiais adequados às oficinas podem contribuir para as experiências de aprendizagem e criatividade das crianças.",
      botao: "Quero ajudar com materiais",
      mensagem: "materiais",
    },
  ],
};

export const transparencia = {
  titulo: "Cada contribuição merece responsabilidade.",
  texto:
    "O Projeto PAI valoriza a confiança de cada pessoa que apoia sua missão. As contribuições são importantes para ajudar a manter as atividades e atender às necessidades do projeto.",
  itens: [
    "Relatórios de atividades",
    "Prestação de contas",
    "Relatórios anuais",
    "Principais necessidades do projeto",
    "Informações sobre a aplicação dos recursos",
    "Formas oficiais de contribuição",
  ],
  aviso: "Os documentos serão publicados aqui assim que estiverem disponíveis.",
};

export const contato = {
  titulo: "Quer apoiar o Projeto PAI?",
  texto:
    "Seja por meio de ofertas, contribuições financeiras, alimentos ou materiais para nossas oficinas, toda ajuda deve ser combinada com a equipe do Projeto PAI para atender às necessidades reais das atividades.",
  intro: "Pelo WhatsApp oficial você pode:",
  itens: [
    "Conhecer as necessidades atuais",
    "Consultar as formas de contribuição",
    "Combinar a entrega de doações",
    "Solicitar informações sobre apoio recorrente",
    "Conversar sobre possíveis parcerias",
  ],
  botao: "Falar pelo WhatsApp",
};

export const rodape = {
  texto: "Projeto PAI — Programa de Apadrinhamento Infantil",
};

// ------------------------------------------------------------
// CULTOS TEMÁTICOS (texto editorial: ajuste para a realidade do projeto)
// ------------------------------------------------------------
export const cultos = {
  titulo: "Antes das oficinas, um culto temático.",
  texto:
    "Cada encontro começa com um culto temático: um momento para reunir as crianças, refletir sobre valores importantes e iniciar o dia com atenção e carinho, em linguagem pensada para elas.",
  foto: "",
  // Opcional: liste os temas, ex.: ["Amizade", "Gratidão", "Respeito"]. Se ficar vazio, não aparece.
  temas: [],
};

// ------------------------------------------------------------
// LOCAIS — os 4 projetos. Preencha "endereco" para o mapa aparecer.
// Dica: use endereço completo (rua, número, bairro, cidade, UF).
// ------------------------------------------------------------
export const locais = {
  titulo: "Onde estamos",
  texto:
    "O Projeto PAI funciona em quatro locais diferentes. Encontre o mais próximo de você e fale com a equipe para confirmar as datas dos encontros.",
  unidades: [
    { nome: "Projeto PAI — Local 1", endereco: "", cor: "azul" },
    { nome: "Projeto PAI — Local 2", endereco: "", cor: "amarelo" },
    { nome: "Projeto PAI — Local 3", endereco: "", cor: "vermelho" },
    { nome: "Projeto PAI — Local 4", endereco: "", cor: "verde" },
  ],
  semEndereco: "Endereço será informado em breve.",
  botaoRota: "Como chegar",
};

// ------------------------------------------------------------
// PIX E DADOS BANCÁRIOS — preencha somente com dados oficiais
// e autorizados pela organização. Campos vazios não aparecem.
// ------------------------------------------------------------
export const pix = {
  titulo: "Contribua por Pix",
  texto:
    "Se preferir, você pode contribuir diretamente por Pix ou transferência bancária. Sua ajuda fortalece as oficinas, os cultos e as refeições dos encontros.",
  chave: "",
  tipoChave: "", // ex.: "CNPJ", "E-mail", "Telefone" ou "Chave aleatória"
  beneficiario: "",
  dadosBancarios: [
    { rotulo: "Banco", valor: "" },
    { rotulo: "Agência", valor: "" },
    { rotulo: "Conta", valor: "" },
    { rotulo: "Tipo de conta", valor: "" },
    { rotulo: "Titular", valor: "" },
    { rotulo: "CNPJ", valor: "" },
  ],
  pendente: "Os dados para contribuição serão divulgados em breve. Enquanto isso, fale com a equipe pelo WhatsApp.",
  aviso: "Confira sempre o nome do beneficiário antes de confirmar a contribuição.",
};
