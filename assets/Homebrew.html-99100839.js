const e=JSON.parse('{"key":"v-f219de16","path":"/develop/homebrew/Homebrew.html","title":"Homebrew","lang":"zh-CN","frontmatter":{"title":"Homebrew","category":"homebrew","order":1,"tag":["homebrew"],"description":"Homebrew 使用指南 对于习惯了使用命令来完成一切的程序员来说，安装软件这种小事，自然是能够用命令解决，就不用图形界面选择。但是在 Linux 中，我们有 yum、apt、dnf、pkg等命令来完成软件的安装，macOS 却并未为我们提供一个好用的包管理器，帮助我们更好的使用 macOS。 好在，虽然官方没有提供，我们却可以使用 Homebrew 这一神器，来完成类似的工作，就如同 Homebrew 的 Slogan ：“The missing package manager for macOS (or Linux)”","head":[["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/config/theme/layout.html/LearnData/develop/homebrew/Homebrew.html"}],["meta",{"property":"og:site_name","content":"有梦想的鱼-开源博客"}],["meta",{"property":"og:title","content":"Homebrew"}],["meta",{"property":"og:description","content":"Homebrew 使用指南 对于习惯了使用命令来完成一切的程序员来说，安装软件这种小事，自然是能够用命令解决，就不用图形界面选择。但是在 Linux 中，我们有 yum、apt、dnf、pkg等命令来完成软件的安装，macOS 却并未为我们提供一个好用的包管理器，帮助我们更好的使用 macOS。 好在，虽然官方没有提供，我们却可以使用 Homebrew 这一神器，来完成类似的工作，就如同 Homebrew 的 Slogan ：“The missing package manager for macOS (or Linux)”"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-26T09:35:15.000Z"}],["meta",{"property":"article:author","content":"有梦想的鱼🐟"}],["meta",{"property":"article:tag","content":"homebrew"}],["meta",{"property":"article:modified_time","content":"2023-09-26T09:35:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Homebrew\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-26T09:35:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"有梦想的鱼🐟\\"}]}"]]},"headers":[{"level":2,"title":"Homebrew介绍","slug":"homebrew介绍","link":"#homebrew介绍","children":[]},{"level":2,"title":"Homebrew 的几个核心概念","slug":"homebrew-的几个核心概念","link":"#homebrew-的几个核心概念","children":[]},{"level":2,"title":"Homebrew 常用操作","slug":"homebrew-常用操作","link":"#homebrew-常用操作","children":[{"level":3,"title":"安装 Homebrew","slug":"安装-homebrew","link":"#安装-homebrew","children":[]},{"level":3,"title":"安装软件","slug":"安装软件","link":"#安装软件","children":[]},{"level":3,"title":"搜索软件","slug":"搜索软件","link":"#搜索软件","children":[]},{"level":3,"title":"查看已经安装的包","slug":"查看已经安装的包","link":"#查看已经安装的包","children":[]},{"level":3,"title":"更新一个已经安装的包","slug":"更新一个已经安装的包","link":"#更新一个已经安装的包","children":[]},{"level":3,"title":"卸载某个已经安装的包","slug":"卸载某个已经安装的包","link":"#卸载某个已经安装的包","children":[]},{"level":3,"title":"查看包的信息","slug":"查看包的信息","link":"#查看包的信息","children":[]},{"level":3,"title":"清理软件的旧版","slug":"清理软件的旧版","link":"#清理软件的旧版","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":3,"title":"检查 Hombrew 环境","slug":"检查-hombrew-环境","link":"#检查-hombrew-环境","children":[]},{"level":3,"title":"更新 Homebrew","slug":"更新-homebrew","link":"#更新-homebrew","children":[]},{"level":3,"title":"添加一个新的 tap","slug":"添加一个新的-tap","link":"#添加一个新的-tap","children":[]}]},{"level":2,"title":"常用 tap","slug":"常用-tap","link":"#常用-tap","children":[{"level":3,"title":"1. Caskroom","slug":"_1-caskroom","link":"#_1-caskroom","children":[]},{"level":3,"title":"2. homebrew-cask-fonts","slug":"_2-homebrew-cask-fonts","link":"#_2-homebrew-cask-fonts","children":[]}]},{"level":2,"title":"使用技巧","slug":"使用技巧","link":"#使用技巧","children":[{"level":3,"title":"切换国内的镜像源","slug":"切换国内的镜像源","link":"#切换国内的镜像源","children":[]},{"level":3,"title":"使用 Brewfile 完成环境迁移","slug":"使用-brewfile-完成环境迁移","link":"#使用-brewfile-完成环境迁移","children":[]},{"level":3,"title":"使用网页搜索 Caskroom 的软件","slug":"使用网页搜索-caskroom-的软件","link":"#使用网页搜索-caskroom-的软件","children":[]}]},{"level":2,"title":"辅助软件","slug":"辅助软件","link":"#辅助软件","children":[{"level":3,"title":"Cakebrew","slug":"cakebrew","link":"#cakebrew","children":[]},{"level":3,"title":"launchrocket","slug":"launchrocket","link":"#launchrocket","children":[]}]},{"level":2,"title":"安装配置开发环境","slug":"安装配置开发环境","link":"#安装配置开发环境","children":[{"level":3,"title":"JDK的安装与环境变量的配置","slug":"jdk的安装与环境变量的配置","link":"#jdk的安装与环境变量的配置","children":[]},{"level":3,"title":"maven的安装","slug":"maven的安装","link":"#maven的安装","children":[]},{"level":3,"title":"git的安装","slug":"git的安装","link":"#git的安装","children":[]},{"level":3,"title":"node的安装","slug":"node的安装","link":"#node的安装","children":[]},{"level":3,"title":"mysql的安装","slug":"mysql的安装","link":"#mysql的安装","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1695720915000,"updatedTime":1695720915000,"contributors":[{"name":"wangfeng","email":"1290715192@qq.com","commits":1}]},"readingTime":{"minutes":13.37,"words":4012},"filePathRelative":"develop/homebrew/Homebrew.md","localizedDate":"2023年9月26日","excerpt":"<h1> Homebrew 使用指南</h1>\\n<p>对于习惯了使用命令来完成一切的程序员来说，安装软件这种小事，自然是能够用命令解决，就不用图形界面选择。但是在 Linux 中，我们有 <code>yum</code>、<code>apt</code>、<code>dnf</code>、<code>pkg</code>等命令来完成软件的安装，macOS 却并未为我们提供一个好用的包管理器，帮助我们更好的使用 macOS。</p>\\n<p>好在，虽然官方没有提供，我们却可以使用 <strong>Homebrew</strong> 这一神器，来完成类似的工作，就如同 Homebrew 的 Slogan ：“The missing package manager for macOS (or Linux)”</p>","autoDesc":true}');export{e as data};
