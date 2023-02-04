module.exports = {
  title: 't',
  description: '',
  dest: '.vuepress/dist',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: 'Docs',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress-reco',
            link: '/docs/theme-reco/',
          },
        ],
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/recoluan',
            icon: 'reco-github',
          },
        ],
      },
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: 'Category',
      },
      tag: {
        location: 3,
        text: 'Tag',
      },
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com',
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: '',
    authorAvatar: '/avatar.png',
    record: 'xxxx',
    startYear: '2017',
    // 密钥
    keyPage: {
      keys: ['43b90920409618f188bfc6923f16b9fa'], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983', // 登录页动画线的颜色
    },
  },
  markdown: {
    lineNumbers: true,
  },
}
