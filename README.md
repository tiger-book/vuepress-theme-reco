---
home: true
heroText: vuepress-theme-reco
tagline: A simple and beautiful vuepress blog theme.
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
bgImageStyle: { height: '450px' }
isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
  - title: Yesterday
    details: 开发一款看着开心、写着顺手的 vuepress 博客主题
  - title: Today
    details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
  - title: Tomorrow
    details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---

## 安装

npx @vuepress-reco/theme-cli init my-blog

## 加密

## 部署

### github page + github action

部署使用的是`jenkey2011/vuepress-deploy@master`
需要配置 ACCESS_TOKEN

- 创建 token(点击你的头像 > Settings > Developer settings > Personal access tokens > Generate new token)
- 创建 secrets(你的 vuepress 项目源码仓库下 > Settings > Secrets， 创建 ACCESS_TOKEN， 值就填写你刚才创建的 token)
- 但是这个值现在是有时效的，
  最新的 github action 一般是使用自带的`GITHUB_TOKEN`, 可以优化下自己写个部署脚本 TODO
