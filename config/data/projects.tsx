import { ReactNode } from 'react'

interface Tech {
  text: string
  icon: string
}

interface Image {
  src: string
  alt: string
}

export interface Project {
  title: string
  slug: string
  gradient: string
  urlDemo: string
  urlRepo: string
  createdAt: string
  updatedAt: string
  image: {
    hero: Image
    covers: Image[]
    collections: Image[]
  }
  techs: Tech[]
  brief: ReactNode
}

type U =
  | 'verasicCollaborativeKanbanBoard'
  | 'verasicAdmin'
  | 'femioTodoApp'
  | 'hackernewsClone'
  | 'pokedex'
  | 'openAttendance'
  | 'verasicStory'
  | 'rakbuku'
  | 'animeFinder'
  | 'vipYukBisnis'
  | 'croppie'
  | 'akmIndonesiaWeb'
  | 'agenVX'
  | 'jsDrillMovieSearch'
  | 'jsDrillVBTodoApp'
  | 'takyoAdmin'

type ProjectMap = { [key in U]: Project }

const dio = <T extends string>(subdomain: T) => `https://${subdomain}.dioilham.com` as const

const projectMap: ProjectMap = {
  takyoAdmin: {
    title: 'Takyo Admin Dashboard',
    slug: 'takyo-admin-dashboard',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('takyo-admin-dashboard'),
    urlRepo: 'https://github.com/Milkywayrules/takyo-admin',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Takyo Admin Dashboard', src: '' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>
          Takyo Admin is a simple, elegant, yet powerful admin dashboard for your very simple app to
          the complex one.
        </p>
        <p>
          Mainly focused to help you bootstrap our application fast, so you don't have to hustle
          with the little things. Focous on what matter the most--deliver value to your user.
        </p>
        <p>Still on going~</p>
      </>
    ),
  },
  verasicCollaborativeKanbanBoard: {
    title: 'Verasic Collaborative Kanban Board',
    slug: 'verasic-collaborative-kanban-board',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('verasic-board'),
    urlRepo: 'https://github.com/Milkywayrules/verasic-collaborative-kanban-board',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Verasic Collaborative Kanban Board', src: '' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>
          Collaboratively manage your kanban or scrum board with your team without hassle. Use it to
          build your non-profit projects to your $10M companies.
        </p>
        <p>
          Your feedbacks will really help me to build more on this side-project. Really appreaciate
          it 😉
        </p>
        <p>Still coming soon~</p>
      </>
    ),
  },
  verasicAdmin: {
    title: 'Verasic Admin UI',
    slug: 'verasic-admin-ui',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('verasic-admin'),
    urlRepo: 'https://github.com/Milkywayrules/verasic-admin',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [
        { alt: 'Verasic Admin UI', src: '/static/images/projects/covers/verasic-admin-1.png' },
      ],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>
          Very Basic Admin or simplified as Verasic Admin is a simple, elegant, yet powerful UI
          library for your complex usage.
        </p>
        <p>
          Mainly focused to help you build an Admin Dashboard, but it's up to you. It gives us
          Bitbucket's vibes.
        </p>
        <p>Still on going~</p>
      </>
    ),
  },
  femioTodoApp: {
    title: 'Femio Todo App',
    slug: 'femio-todo-app',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('femio-todo-app'),
    urlRepo: 'https://github.com/Milkywayrules/femio-todo-app',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [
        { alt: 'Femio Todo App', src: '/static/images/projects/covers/femio-todo-app-1.png' },
      ],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>
          To the point to-do app with dark & light mode, draggable to-dos, and very lightweight so
          it's very fast.
        </p>
        <p>
          It's responsive, so you can use on your favorite devices such as phones, tablets, and
          PC/laptop.
        </p>
      </>
    ),
  },
  hackernewsClone: {
    title: 'Hackernews clone',
    slug: 'hackernews-clone',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('hackernews-clone'),
    urlRepo: 'https://github.com/Milkywayrules/hackernews-clone',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [
        { alt: 'Hackernews clone', src: '/static/images/projects/covers/hackernews-clone-1.png' },
      ],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>
          Hacker News is a social news website focusing on computer science and entrepreneurship.
        </p>
        <p>This application is built to complete my job application test.</p>
        <p>Data provided by pokeapi.</p>
      </>
    ),
  },
  pokedex: {
    title: 'Pokedex',
    slug: 'pokedex',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('pokedex'),
    urlRepo: 'https://github.com/Milkywayrules/pokedex',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Pokedex', src: '/static/images/projects/covers/pokedex-1.png' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>Pokedex is a platform where you can explore Pokemon world.</p>
        <p>This application is built to complete my job application test.</p>
        <p>Data provided by hackernews api.</p>
      </>
    ),
  },
  // ------------------------------------------------------------------
  openAttendance: {
    title: 'Open Attendace',
    slug: 'open-attendance',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('open-attendance'),
    urlRepo: 'https://github.com/galaxx-dev/speedrun-open-attendace',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Open Attendace', src: '' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>
          Open Attendace is attendance information system. We provide this app on web & anroid
          version.
        </p>
        <p>We speedrun this application, from 0 to hero.</p>
      </>
    ),
  },
  verasicStory: {
    title: 'Verasic Story',
    slug: 'verasic-story',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('verasic-story'),
    urlRepo:
      'https://github.com/Milkywayrules/dicoding_fe_courses/tree/1-belajar_dasar_pemrograman_web',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Verasic Story', src: '/static/images/projects/covers/verasic-story-1.png' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>Verasic Story is my prototype personal blog website v0.0.2.</p>
        <p>This application is built at my early stage of becoming a Software Engineer.</p>
        <p>Data provided by web.dev.</p>
      </>
    ),
  },
  rakbuku: {
    title: 'Rakbuku',
    slug: 'rakbuku',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('rakbuku'),
    urlRepo:
      'https://github.com/Milkywayrules/dicoding_fe_courses/tree/2-belajar_membuat_frontend_web_untuk_pemula',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Rakbuku', src: '/static/images/projects/covers/rakbuku-1.png' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>Rakbuku is a book manager to track what you want to read and what you've done read.</p>
        <p>This application is built to complete my dicoding assessment test.</p>
        <p>This application is built at my early stage of becoming a Software Engineer.</p>
      </>
    ),
  },
  animeFinder: {
    title: 'Anime Finder',
    slug: 'anime-finder',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('anime-finder'),
    urlRepo:
      'https://github.com/Milkywayrules/dicoding_fe_courses/tree/3-belajar_fundamental_front_end_web_development',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Anime Finder', src: '/static/images/projects/covers/anime-finder-1.png' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>Anime Finder is a platform where you can explore anime world for free.</p>
        <p>This application is built to complete my dicoding assessment test.</p>
        <p>Data provided by anilist api.</p>
      </>
    ),
  },
  vipYukBisnis: {
    title: 'VIP Infinite Scroll',
    slug: 'vip-infinite-scroll',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('vip-infinite-scroll'),
    urlRepo: 'https://github.com/Milkywayrules/assessment-yukbisnis',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [
        {
          alt: 'VIP Infinite Scroll',
          src: '/static/images/projects/covers/vip-infinite-scroll-1.png',
        },
      ],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>VIP Infinite Scroll is my sandbox to play around with infinite scroll technique.</p>
        <p>This application is built to complete my job application test.</p>
        <p>Data provided by jsonplaceholder api.</p>
      </>
    ),
  },
  croppie: {
    title: 'Croppie',
    slug: 'croppie',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('croppie'),
    urlRepo: '#',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Croppie', src: '/static/images/projects/covers/croppie-1.png' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>
          Want to crop your photo or image on the fly? It means resizing and display your cropped
          image before you actually download it.
        </p>
        <p>Easy, right?.</p>
        <p>This application is built at my early stage of becoming a Software Engineer.</p>
      </>
    ),
  },
  akmIndonesiaWeb: {
    title: 'Payment & Process Status Information System',
    slug: 'payment-process-status-information-system',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('payment-process-status-information-system'),
    urlRepo: 'https://github.com/BushidoDev/akmindonesia-payment-web',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [
        {
          alt: 'Payment & Process Status Information System',
          src: '/static/images/projects/covers/payment-process-status-information-system-1.png',
        },
      ],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: (
      <>
        <p>Internal system for Payment & Process Status Information System for AKM Indonesia.</p>
      </>
    ),
  },
  agenVX: {
    title: 'Astra Green Energy Virtual Exhibition 2021 - Admin Dashboard',
    slug: 'agen-vx',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('agen-vx'),
    urlRepo: 'https://github.com/Milkywayrules/Agen-Virtual-X---CMS',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [{ alt: 'Astra Green Energy Virtual Exhibition 2021 - Admin Dashboard', src: '' }],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: <></>,
  },
  // ------------------------------------------------------------------
  jsDrillMovieSearch: {
    title: 'Movie Search - JS Drill',
    slug: 'js-drill-movie-search',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('js-drill-movie-search'),
    urlRepo: 'https://github.com/Milkywayrules/JS-Drill/tree/master/2-omdb-search',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [
        {
          alt: 'Movie Search - JS Drill',
          src: '/static/images/projects/covers/js-drill-movie-search-1.png',
        },
      ],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: <></>,
  },
  jsDrillVBTodoApp: {
    title: 'Very Basic To-do App - JS Drill',
    slug: 'js-drill-very-basic-todo-app',
    gradient: 'from-[#FDE68A] via-[#9333EA] to-[#6EE7B7]',
    urlDemo: dio('js-drill-very-basic-todo-app'),
    urlRepo: 'https://github.com/Milkywayrules/JS-Drill/tree/master/3-vb-todo-list',
    createdAt: '',
    updatedAt: '',
    image: {
      collections: [{ alt: '', src: '' }],
      covers: [
        {
          alt: 'Very Basic To-do App - JS Drill',
          src: '/static/images/projects/covers/js-drill-very-basic-todo-app-1.png',
        },
      ],
      hero: { alt: '', src: '' },
    },
    techs: [
      {
        text: '',
        icon: '',
      },
    ],
    brief: <></>,
  },
}

export default projectMap
