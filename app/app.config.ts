export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/108626426?v=4',
      light: 'https://avatars.githubusercontent.com/u/108626426?v=4',
      alt: 'My profile picture'
    },
    meetingLink: 'https://wa.me/5584986460846?text=Olá Welen, gostaria de saber mais sobre seus serviços!',
    email: 'welenalmeida2210@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Construído com Nuxt e Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-whatsapp',
      'to': 'https://wa.me/5584986460846?text=Olá Welen, gostaria de saber mais sobre seus serviços!',
      'target': '_blank',
      'aria-label': 'Welen on WhatsApp'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://linkedin.com/in/welen-almeida',
      'target': '_blank',
      'aria-label': 'Welen on LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Welen1911',
      'target': '_blank',
      'aria-label': 'Welen on GitHub'
    }]
  }
})
