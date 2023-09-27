import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as d,b as n,d as s,e,a as i}from"./app-494c268c.js";const o={},r=n("h1",{id:"自动化部署git项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自动化部署git项目","aria-hidden":"true"},"#"),s(" 自动化部署git项目")],-1),p={id:"创建部署脚本deploy-sh",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#创建部署脚本deploy-sh","aria-hidden":"true"},"#",-1),m={href:"http://xn--deploy-hn3jk46frlqoi1dj2df43d.sh",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.yourwebsite.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;message&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:wangfeng1996/wangfeng1996.github.io.git master

 <span class="token comment"># 如果发布到 https://USERNAME.github.io/&lt;REPO&gt;  REPO=github上的项目</span>
<span class="token comment"># git push -f git@github.com:USERNAME/&lt;REPO&gt;.git master:gh-pages</span>


<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/ <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加命令-package-josn" tabindex="-1"><a class="header-anchor" href="#添加命令-package-josn" aria-hidden="true">#</a> 添加命令(package.josn)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;deploy&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b=n("code",null,"tip:",-1),h={href:"http://deploy.sh",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="运行发布命令" tabindex="-1"><a class="header-anchor" href="#运行发布命令" aria-hidden="true">#</a> 运行发布命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">npm</span> run deploy

    or

 <span class="token function">yarn</span> deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(_,f){const a=l("ExternalLinkIcon");return c(),d("div",null,[r,n("h2",p,[u,s(),n("a",m,[s("创建部署脚本deploy.sh"),e(a)])]),v,n("p",null,[b,s(" 如果不添加这个脚本，直接在控制台输入 bash "),n("a",h,[s("deploy.sh"),e(a)]),s(" 即可")]),g])}const y=t(o,[["render",k],["__file","自动化部署项目.html.vue"]]);export{y as default};
