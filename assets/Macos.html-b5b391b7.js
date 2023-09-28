import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,a as e}from"./app-7daefdb5.js";const i={},l=e(`<h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> Macos</h2><h3 id="macos鼠标卡顿问题" tabindex="-1"><a class="header-anchor" href="#macos鼠标卡顿问题" aria-hidden="true">#</a> macos鼠标卡顿问题</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这个命令会查看当前鼠标移动速度</span>
defaults <span class="token builtin class-name">read</span> <span class="token parameter variable">-g</span> com.apple.mouse.scaling 

<span class="token comment"># 这个命令是设置默认鼠标移动速度我设置的是5</span>
defaults <span class="token function">write</span> <span class="token parameter variable">-g</span> com.apple.mouse.scaling <span class="token number">5</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="刷新缓存" tabindex="-1"><a class="header-anchor" href="#刷新缓存" aria-hidden="true">#</a> 刷新缓存</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一步</span>
<span class="token function">sudo</span> dscacheutil <span class="token parameter variable">-flushcache</span>
<span class="token comment"># 第二步</span>
<span class="token function">sudo</span> <span class="token function">killall</span> <span class="token parameter variable">-HUP</span> mDNSResponder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看环境变量</span>
<span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
<span class="token comment"># 添加环境变量</span>
/Users/wangfeng/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看端口</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span> tcp:port

<span class="token comment"># 杀死摸个进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[l];function d(r,t){return s(),n("div",null,c)}const m=a(i,[["render",d],["__file","Macos.html.vue"]]);export{m as default};
