import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AlecaFrame - Docs",
  description: "The most advanced WarFrame companion app",
  head: [['link', { rel: 'icon', href: 'https://alecaframe.com/favicon.ico' }]],
  appearance: 'force-dark',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'FAQ', link: '/faq' },
      { text: 'About', link: '/about' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Welcome', link: '/welcome' },
          {
            text: 'Get Started',
            collapsed: false,
            items: [
              { text: 'Installing', link: '/get-started/install' },
              { text: 'Connecting to Warframe', link: '/get-started/connecting' },
            ]
          },
          {
            text: 'Features',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/features/overview' },
              { text: 'Foundry', link: '/features/foundry' },
              { text: 'Inventory', link: '/features/inventory' },
              { text: 'Mastery Helper', link: '/features/mastery-helper' },
              { text: 'Relic Planner', link: '/features/relic-planner' },
              { text: 'Riven Explorer', link: '/features/riven-explorer' },
              { text: 'Stats', link: '/features/stats' },
              { text: 'Trading Analytics 👑', link: '/features/trading-analytics' },
              { text: 'Warframe.market', link: '/features/wfm' },
            ]
          },
          {
            text: 'Overlays',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/overlays/overview' },
              { text: 'Relic Recommendation', link: '/overlays/relic-recommendation' },
              { text: 'Relic Rewards', link: '/overlays/relic-rewards' },
              { text: 'Chat Riven', link: '/overlays/riven-chat' },
              { text: 'Riven Reroll ', link: '/overlays/riven-reroll' },
            ]
          },
          {
            text: 'Misc',
            collapsed: false,
            items: [
              { text: 'Language Compatibility', link: '/language-compatibility' },
              { text: 'Linux Support', link: '/linux-support' },
			  { text: 'API', link: '/api' },
              { text: 'FAQ', link: '/faq' },
              { text: 'About', link: '/about' },
            ]
          },
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/alecamaracm/AlecaFrame-Docs/edit/main/docs/:path',
      text: 'Edit this page'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present <a href="https://alecaframe.com">Alecmar</a>,  <a href="https://zeyrox.de">ZeyroX</a>',
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/Bc7PNNnnEZ' },
      { icon: 'github', link: 'https://github.com/alecamaracm/AlecaFrame-Docs' },
      {
        icon: {
          svg: '<svg id="Capa_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.98 351.91"><g id="Capa_3"><path d="m212.16,308.52c1.3,2.91-1.79,5.82-4.63,4.37l-24.64-12.67h-76.66l-23.6,47.11c-1.14,2.19-3.41,3.56-5.88,3.56h-40.55c-29.71,0-36.03-1.58-36.2-4.58s19.3-11.81,21.64-14.48C26.07,326.76,165.98,45.16,187.98.85c.72-1.45,2.9-.93,2.9.68v95.24c0,20.22-9.66,40.44-9.66,40.44l-45.13,101.73c-.5,1.11.32,2.37,1.54,2.37h49.99c5.95,0,10.76,4.83,10.73,10.77-.04,8.92,1.1,21.31,3.34,30.17,3.37,13.36,7.23,19.03,10.46,26.28h0ZM497.98,75.93c-4.44,10.38-11.51,19.8-17.06,27.75,0,0-9.15,16.14-28.45,32.62-18.35,15.66-40.84,29.71-50.76,42.77-19.36,25.46-32.45,52.75-32.45,52.75-10.15,18.81-20.17,40.31-31.12,39.6-9.49-.61-9.78-23.76-18.3-29.29-4.5-2.92-13.65.67-25.46.5s-13.81-3.99-17.97-10.82-31.24-16.12-37.61-18.47c-4.08-1.51-9.24.59-9.07,6.58l-.59,34.12c2.62,40.19,18.1,47.67,32.82,52.42s29.33,10.99,29.33,10.99c-37.2-30.2-24.55-80.13-24.55-80.13,19.8,21.3,38.44,12.48,45.43,11.81s8.65,8.16,9.15,14.64,2.83,9.82,9.15,13.14,4.49,9.66,0,13.31-17.64,22.46-17.64,36.94v24.63c-10.15.99-15.81-4.91-24.3-12.15s-21.97-13.98-40.68-19.72c0,0-13.21-5.02-21.47-16.97-10.61-15.36-16.89-40.92-16.89-68.81V1.54s40.51,20.16,81.04,42.31c30.97,16.92,55.58,35.7,70.56,35.7,17.31,0,39.13-30.96,39.13-30.96,12.37,15.48,39.47,12.73,67.03,15.98,24.34,2.87,30.7,11.36,30.7,11.36h.03Zm-228.37,130.17c-6.7-35.55-36.72-63.7-46.71-72.22-.93-.8-2.33.12-1.96,1.3,7.71,24.74,10.63,52.96,11.34,60.96.12,1.34,1.06,2.46,2.35,2.82l32.79,9.14c1.24.35,2.42-.74,2.18-2.01h0Zm128.77-137.29c-5.78-1.37-19.35,22.21-36.44,22.21-8.82,0-24.21-7.65-41.69-19.47-13.28-8.97-28.37-16.97-28.37-16.97,0,0,50.84,47.93,72.31,81.38,0,0,5.8,4,20.34-15.73,14.35-19.47,18.59-50.3,13.85-51.42Z"/></g></svg>'
        },
        link: 'https://alecaframe.com/',
        ariaLabel: 'Website',
      }
    ]
  }
})
