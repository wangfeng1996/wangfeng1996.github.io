import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,e as i}from"./app-fd36e35f.js";const n="/LearnData/images/idea/idea-set-new-projects-run-configuration-templates.png",o="/LearnData/images/idea/idea-set-new-projects-run-configuration-templates-springboot.png",r="/LearnData/images/idea/idea-set-new-projects-run-configuration-templates-springboot-jar.png",s={},c=i('<h3 id="java新运行项目配置" tabindex="-1"><a class="header-anchor" href="#java新运行项目配置" aria-hidden="true">#</a> java新运行项目配置</h3><p><code>File</code> -&gt; <code>New Projects Setup</code> -&gt; <code>Run Configuration Templates...</code></p><figure><img src="'+n+`" alt="idea-set-new-projects-run-configuration-templates.png" tabindex="0" loading="lazy"><figcaption>idea-set-new-projects-run-configuration-templates.png</figcaption></figure><p>idea每次打开新项目时，设置jvm启动默认参数 =&gt; 调优节省本地内存空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xmx100M -Xms100M -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+HeapDumpOnOutOfMemoryError
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="idea-set-new-projects-run-configuration-templates-springboot.png" tabindex="0" loading="lazy"><figcaption>idea-set-new-projects-run-configuration-templates-springboot.png</figcaption></figure><figure><img src="'+r+'" alt="idea-set-new-projects-run-configuration-templates-springboot-jar.png" tabindex="0" loading="lazy"><figcaption>idea-set-new-projects-run-configuration-templates-springboot-jar.png</figcaption></figure>',7),p=[c];function g(d,u){return t(),a("div",null,p)}const f=e(s,[["render",g],["__file","10-java新运行项目模板配置.html.vue"]]);export{f as default};
