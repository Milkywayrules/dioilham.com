const CONSTS = {
  SOSIAL: {
    IG: {
      NAME: 'Instagram',
      URL: 'https://instagram.com/dioilham',
      TEXT: '@dioilham',
    },
    LINKEDIN: {
      NAME: 'Linkedin',
      URL: 'https://linkedin.com/in/dioilham',
      TEXT: 'https://linkedin.com/in/dioilham',
    },
    WEB: {
      NAME: 'Website',
      URL: 'https://dioilham.com',
      TEXT: 'https://dioilham.com',
    },
    GITHUB: {
      NAME: 'Github',
      URL: 'https://github.com/milkywayrules',
      TEXT: '@milkywayrules',
    },
    YT: {
      NAME: 'Youtube',
      URL: 'https://www.youtube.com/channel/UC1uGJ95IylW2qOb5eeosZRQ',
      TEXT: '@mengoding',
    },
  },
  BIO: {
    NAME: 'Dio Ilham',
    WORK: {
      MAIN: {
        URL: 'https://caroline.id/',
        TEXT: 'Caroline.id',
      },
      SECONDARY: {
        URL: 'https://autopedia.id/',
        TEXT: 'Autopedia',
      },
    },
  },
  UTILS: {
    LQIP: 'data:image/png;base64,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',
    DEFAULT_COVER: '/static/hai.png',
  },
} as const

export default CONSTS
