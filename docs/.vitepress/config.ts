import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '@ileostar/utils',
  description: 'Some common tool functions',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lastUpdated: true,
  ignoreDeadLinks: 'localhostLinks',

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '快手上手', link: '/guide/introduction', activeMatch: '/guide/' },
      {
        text: '参与开源',
        items: [
          {
            text: '贡献',
            items: [
              { text: 'Depazer 开发指南', link: '/contribution/' },
              { text: '@depazer/cli', link: '/contribution/cli' },
              { text: '@depazer/core', link: '/contribution/core' },
              { text: '@depazer/server', link: '/contribution/server' },
              { text: '@depazer/web', link: '/contribution/web' }
            ]
          },
          {
            text: '关于',
            items: [{ text: 'Depazer 开发团队', link: '/about/team' }]
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '进阶手册',
          base: '/guide',
          items: [
            { text: 'WEB 可视化操作', link: '/web' },
            { text: 'CLI 命令详情', link: '/cli' },
            { text: 'json文件说明', link: '/json' }
          ]
        }
      ]
    },

    outline: [2, 3],

    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/ileostar/ileostar-utils">ileostar-utils</a>'
    },

    editLink: {
      pattern: 'https://github.com/depazer/depazer/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '本页更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/ileostar/ileostar-utils' }]
  }
})
