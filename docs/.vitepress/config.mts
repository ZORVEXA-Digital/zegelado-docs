import { defineConfig } from 'vitepress'

const publicStart = '<!-- public:start -->'
const publicEnd = '<!-- public:end -->'

export default defineConfig({
  lang: 'pt-BR',
  title: 'ZéGelado',
  description: 'Central de conhecimento pública do ZéGelado',
  base: '/zegelado-docs/',
  cleanUrls: true,
  srcExclude: [
    'BACKUP_RESTORE.md',
    'DEPLOY_STAGING.md',
    'PORTAL.md',
    'auditoria/**',
    'homologacao/**',
    'publishing/**',
  ],
  rewrites: {
    'README.md': 'index.md',
    'portal/negocio.md': 'negocio.md',
    'portal/operacao.md': 'operacao.md',
    'portal/arquitetura.md': 'arquitetura.md',
    'portal/financeiro.md': 'financeiro.md',
    'portal/faq.md': 'faq.md',
    'portal/roadmap.md': 'roadmap.md',
  },
  transformPageData(pageData) {
    if (pageData.frontmatter.public !== true) {
      throw new Error(`Conteúdo não classificado como público: ${pageData.relativePath}`)
    }
  },
  markdown: {
    config(md) {
      md.core.ruler.before('normalize', 'public-content-only', (state) => {
        const start = state.src.indexOf(publicStart)
        const end = state.src.indexOf(publicEnd)

        if (start === -1 && end === -1) {
          return
        }

        if (start === -1 || end === -1 || end <= start) {
          throw new Error('A página pública precisa declarar os marcadores public:start e public:end.')
        }

        state.src = state.src.slice(start + publicStart.length, end).trim()
      })
    },
  },
  themeConfig: {
    logo: { src: '/brand-mark.svg', alt: 'ZéGelado' },
    nav: [
      { text: 'Negócio', link: '/negocio' },
      { text: 'Operação', link: '/operacao' },
      { text: 'Arquitetura', link: '/arquitetura' },
      { text: 'Financeiro', link: '/financeiro' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Roadmap', link: '/roadmap' },
    ],
    sidebar: [
      {
        text: 'Conhecimento',
        items: [
          { text: 'Visão geral', link: '/' },
          { text: 'Negócio e estratégia', link: '/negocio' },
          { text: 'Operação e logística', link: '/operacao' },
          { text: 'Arquitetura', link: '/arquitetura' },
          { text: 'Financeiro e repasses', link: '/financeiro' },
          { text: 'Perguntas frequentes', link: '/faq' },
          { text: 'Roadmap e homologação', link: '/roadmap' },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar na documentação' },
          modal: {
            noResultsText: 'Nenhum resultado encontrado',
            resetButtonTitle: 'Limpar busca',
            footer: { selectText: 'selecionar', navigateText: 'navegar', closeText: 'fechar' },
          },
        },
      },
    },
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: false, next: false },
    footer: {
      message: 'Informações públicas do MVP ZéGelado.',
      copyright: 'Conteúdo sujeito à homologação operacional.',
    },
  },
})
