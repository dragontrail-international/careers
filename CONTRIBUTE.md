# 如何修改

- `yarn install` 安装一个叫 `showdown` 的依赖
- `node markdown_to_html.js | pbcopy` 会将 `README.md` 生成的 html 拷贝到系统剪贴板
- 然后手动粘到 index.html 里看看效果, 没有问题后添加到微讲堂仓库里，仓库在 SVN 上，跟同事要一下地址，就不放这里了
- 在仓库的 `docs/html/dragontrail-2019-spring-recruitment` 位置, 将准备好的 html 粘进 index.html， 提交修改
- 运维更新到线上后，尝试访问 `https://m.chinatravelacademy.com/html/dragontrail-2019-spring-recruitment/index.html`
