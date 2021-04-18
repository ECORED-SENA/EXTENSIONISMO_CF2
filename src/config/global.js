export const global = {
  componenteFormativo:
    'El diagnóstico empresarial, formación y plan de mejora.',
  descripcionCurso:
    'El programa de extensionismo tecnológico del SENA busca que los profesionales consultores que trabajan la metodología desde los roles de gestor consultor y extensionista tecnológico adquieran las competencias propicias y desarrolladas en el marco de la implementación de la estrategia y, al mismo tiempo, fortalezcan sus saberes, conocimientos y competencias relacionados con la gestión empresarial y gestión informática requerida para el cambio de la transformación digital en las empresas en Colombia.</br>    Para este componente es importante que el aprendiz apropie las generalidades del autodiagnóstico en el cual se validan 15 variables y las necesidades de cada empresa en función de una relación entre alcance, tiempos y recursos de cada organización.</br>En esta etapa de la metodología de extensionismo tecnológico se determina un listado de necesidades, con la finalidad de desarrollar un match (cruce de datos), con el autodiagnóstico, con relación a la información suministrada por el empresario en el autodiagnóstico y las necesidades actuales de la empresa, se procede a elegir estratégicamente, sobre qué dimensión, nivel y/o variables se espera trabajar de cara al proceso de extensionismo tecnológico; posteriormente, se realiza un acuerdo con el empresario en relación a los tiempos y estrategias para la coordinación efectiva entre las partes que faciliten el cumplimiento de objetivos del plan de mejora y de sus necesidades.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Fundamentos del extensionismo, tipos y consultoría empresarial',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Fundamentos de diagnóstico empresarial',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo:
            'Aplicación de herramienta de autodiagnóstico de entrada y de salida',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Análisis e interpretación de información',
          hash: 't_1_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.4',
          titulo: 'Planteamiento de indicadores',
          hash: 't_1_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.5',
          titulo:
            'Identifica necesidades de formación de acuerdo con el análisis de la información',
          hash: 't_1_5',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.6',
          titulo: 'Plan de mejora de acuerdo con el análisis de la información',
          hash: 't_1_6',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Luis Guillermo Alvarez García',
      cargo: 'Experta temática',
      centro: 'Centro De Servicios y Gestión Empresarial',
      regional: 'Regional Antioquia',
    },
    {
      nombre: 'Alejandro Moncada Betancur',
      cargo: 'Experta temática',
      centro: 'Centro De Procesos Industriales y Construcción',
      regional: 'Regional Caldas',
    },
    {
      nombre: 'Leidy Yohana Ortiz Diaz',
      cargo: 'Experto temático',
      centro: 'Centro de la Industria, la Empresa y los Servicios',
      regional: 'Regional Norte de Santander',
    },
    {
      nombre: 'Gimena Santacruz Benítez',
      cargo: 'Experto temático',
      centro: 'Centro de la Industria, la Empresa y los Servicios Regional,',
      regional: 'Regional Huila',
    },
    {
      nombre: 'Sergio Arturo Medina Castillo',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'José Gabriel Ortiz Abella',
      cargo: 'Evaluador instruccional',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: [
        'Camilo Andrés Villamizar Lizcano',
        'Eulises Orduz Amezquita',
        'José Jaime Luis Tang Pinzón',
        'Lady Adriana Ariza Luque',
        'Oleg Litvin',
        'Victor Raúl Cárdenas Cáceres',
        'Zuleidy Maria Ruiz Torres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: 'Validación de recursos',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Academia de Extensionismo Tecnológico. (25 septiembre de 2020). Parte 1. Semana de transferencia de conocimientos nuevos colaboradores. [Video]. YouTube. https://www.youtube.com/watch?v=shhELBfknBs&t=1361s',
    link: 'https://www.youtube.com/watch?v=shhELBfknBs&t=1361s',
  },
  {
    referencia:
      'Academia de Extensionismo Tecnológico. (25 septiembre de 2020). Parte 2. Semana de transferencia de conocimientos nuevos colaboradores. [Video]. YouTube.',
    link: 'https://www.youtube.com/watch?v=Q1NywhRPbqQ&t=875s',
  },
  {
    referencia:
      'Agencia Nacional de Evaluación de la Calidad y Acreditación. (s. f). Plan de mejora. Agencia Nacional de Evaluación de la Calidad y Acreditación',
  },
  {
    referencia:
      'Colombia Productiva. (2019). Diagnóstico de madurez tecnológica de las empresas. Ministerio de Industria y Comercio de Colombia. SoftWhere.',
  },
  {
    referencia: 'Deconceptos.com. (s. f). Concepto de indicador.',
    link: 'https://deconceptos.com/general/indicador',
  },
  {
    referencia:
      'Diagnóstico empresarial IGP. (s. f). Definición de diagnóstico empresarial.',
    link:
      'https://sites.google.com/site/uttgesemp/definicion-de-diagnostico-empresarial',
  },
  {
    referencia: 'Porter, M. (1985). La cadena de valor de Porter. MKD.',
    link:
      'https://marketingdigitalconsulting.com/la-cadena-de-valor-de-porter/#:~:text=La%20Cadena%20de%20Valor%20de%20Porter%20es%20un%20modelo%20de,cu%C3%A1les%20son%20las%20que%2C%20sin',
  },
  {
    referencia:
      'Porto, J., y Merino, M. (2008). Definición de modelo de negocio.',
    link: 'https://definicion.de/modelo-de-negocio/',
  },
]

export const glosario = [
  {
    termino: 'Cadena de valor',
    significado:
      'es un modelo de análisis de las actividades internas que se realizan en las empresas y de las interrelaciones que existen entre ellas, de manera que es posible detectar cuáles son las que proporcionan valor de forma directa al cliente (actividades primarias) y cuáles son las que, sin proporcionar valor directamente (actividades de apoyo), ayudan a que las primarias se puedan realizar. ',
  },
  {
    termino: 'Diagnóstico empresarial',
    significado:
      'constituye una herramienta sencilla y de gran utilidad a los fines de conocer la situación actual de una organización y los problemas que impiden su crecimiento, sobrevivencia o desarrollo. ',
  },
  {
    termino: 'Indicadores',
    significado:
      'son puntos de referencia que brindan información, cualitativa o cuantitativa, conformada por uno o varios datos, constituidos por percepciones, números, hechos, opiniones o medidas, que permiten seguir el desenvolvimiento de un proceso y su evaluación, y que deben guardar relación con el mismo.',
  },
  {
    termino: 'Modelo de negocio',
    significado:
      'también conocido como diseño de negocio, es la planificación que realiza una empresa respecto a los ingresos y beneficios que intenta obtener. En un modelo de negocio, se establecen las pautas a seguir para atraer clientes, definir ofertas de producto e implementar estrategias publicitarias, entre muchas otras cuestiones vinculadas a la configuración de los recursos de la compañía.',
  },
  {
    termino: 'Plan de mejora',
    significado:
      'el plan de mejora integra la decisión estratégica sobre cuáles son los cambios que deben incorporarse a los diferentes procesos de la organización, para que sean traducidos en un mejor servicio percibido. Dicho plan, además de servir de base para la detección de mejoras, debe permitir el control y seguimiento de las diferentes acciones a desarrollar, así como la incorporación de acciones correctoras ante posibles contingencias no previstas (Agencia Nacional de Evaluación de la Calidad y Acreditación, s. f.).',
  },
]

export const complementario = [
  {
    texto: 'Colombia Productiva - Fedesoft - Softwhere',
    tipo: 'Sitio web',
    link: 'https://www.softwhere.com.co ',
  },
  {
    texto:
      'Ministerio del Interior, Ministerio Hacienda y Crédito, MAcademia de extensionismo tecnológico, (25 de septiembre de 2020). Parte 1. Semana de transferencia de conocimientos nuevos colaboradores. YouTube.',
    tipo: 'Video',
    link: 'https://www.youtube.com/watch?v=shhELBfknBs&t=1361s',
  },
  {
    texto:
      'Academia de extensionismo tecnológico, (25 de septiembre de 2020). Parte 2. Semana de transferencia de conocimientos nuevos colaboradores. YouTube.',
    tipo: 'Video',
    link: 'https://www.youtube.com/watch?v=Q1NywhRPbqQ&t=875s',
  },
]
