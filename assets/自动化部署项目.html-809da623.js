import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-37a49dbd.js";const i={},l=e(`<h1 id="自动化部署git项目" tabindex="-1"><a class="header-anchor" href="#自动化部署git项目" aria-hidden="true">#</a> 自动化部署git项目</h1><h2 id="创建部署脚本" tabindex="-1"><a class="header-anchor" href="#创建部署脚本" aria-hidden="true">#</a> 创建部署脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>tip:</code> 如果不添加这个脚本，直接在控制台输入 <code>bash deploy.sh</code> 即可</p><h2 id="运行发布命令" tabindex="-1"><a class="header-anchor" href="#运行发布命令" aria-hidden="true">#</a> 运行发布命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">npm</span> run deploy

    or

 <span class="token function">yarn</span> deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[l];function c(d,r){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","自动化部署项目.html.vue"]]);export{u as default};
