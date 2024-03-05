const e=JSON.parse('{"key":"v-6495e9b0","path":"/java/new-features/java20.html","title":"Java 20 新特性概览","lang":"zh-CN","frontmatter":{"title":"Java 20 新特性概览","category":"Java","tag":["Java新特性"],"description":"JDK 20 于 2023 年 3 月 21 日发布，非长期支持版本。 根据开发计划，下一个 LTS 版本就是将于 2023 年 9 月发布的 JDK 21。 JDK 20 只有 7 个新特性： JEP 429：Scoped Values（作用域值）（第一次孵化） JEP 432：Record Patterns（记录模式）（第二次预览） JEP 433：switch 模式匹配（第四次预览） JEP 434: Foreign Function &amp; Memory API（外部函数和内存 API）（第二次预览） JEP 436: Virtual Threads（虚拟线程）（第二次预览） JEP 437: Structured Concurrency（结构化并发）(第二次孵化) JEP 432：向量 API（第五次孵化）","head":[["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/config/theme/layout.html/java/new-features/java20.html"}],["meta",{"property":"og:site_name","content":"有梦想的鱼-开源博客"}],["meta",{"property":"og:title","content":"Java 20 新特性概览"}],["meta",{"property":"og:description","content":"JDK 20 于 2023 年 3 月 21 日发布，非长期支持版本。 根据开发计划，下一个 LTS 版本就是将于 2023 年 9 月发布的 JDK 21。 JDK 20 只有 7 个新特性： JEP 429：Scoped Values（作用域值）（第一次孵化） JEP 432：Record Patterns（记录模式）（第二次预览） JEP 433：switch 模式匹配（第四次预览） JEP 434: Foreign Function &amp; Memory API（外部函数和内存 API）（第二次预览） JEP 436: Virtual Threads（虚拟线程）（第二次预览） JEP 437: Structured Concurrency（结构化并发）(第二次孵化) JEP 432：向量 API（第五次孵化）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-28T09:16:36.000Z"}],["meta",{"property":"article:author","content":"有梦想的鱼🐟"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:modified_time","content":"2023-09-28T09:16:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 20 新特性概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-28T09:16:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"有梦想的鱼🐟\\"}]}"]]},"headers":[{"level":2,"title":"JEP 429：作用域值（第一次孵化）","slug":"jep-429-作用域值-第一次孵化","link":"#jep-429-作用域值-第一次孵化","children":[]},{"level":2,"title":"JEP 432：记录模式（第二次预览）","slug":"jep-432-记录模式-第二次预览","link":"#jep-432-记录模式-第二次预览","children":[]},{"level":2,"title":"JEP 433：switch 模式匹配（第四次预览）","slug":"jep-433-switch-模式匹配-第四次预览","link":"#jep-433-switch-模式匹配-第四次预览","children":[]},{"level":2,"title":"JEP 434: 外部函数和内存 API（第二次预览）","slug":"jep-434-外部函数和内存-api-第二次预览","link":"#jep-434-外部函数和内存-api-第二次预览","children":[]},{"level":2,"title":"JEP 436: 虚拟线程（第二次预览）","slug":"jep-436-虚拟线程-第二次预览","link":"#jep-436-虚拟线程-第二次预览","children":[]},{"level":2,"title":"JEP 437: 结构化并发(第二次孵化)","slug":"jep-437-结构化并发-第二次孵化","link":"#jep-437-结构化并发-第二次孵化","children":[]},{"level":2,"title":"JEP 432：向量 API（第五次孵化）","slug":"jep-432-向量-api-第五次孵化","link":"#jep-432-向量-api-第五次孵化","children":[]}],"git":{"createdTime":1695720915000,"updatedTime":1695892596000,"contributors":[{"name":"wangfeng","email":"1290715192@qq.com","commits":2}]},"readingTime":{"minutes":6.44,"words":1931},"filePathRelative":"java/new-features/java20.md","localizedDate":"2023年9月26日","excerpt":"<p>JDK 20 于 2023 年 3 月 21 日发布，非长期支持版本。</p>\\n<p>根据开发计划，下一个 LTS 版本就是将于 2023 年 9 月发布的 JDK 21。</p>\\n<figure><img src=\\"https://oss.javaguide.cn/github/javaguide/java/new-features/640.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>JDK 20 只有 7 个新特性：</p>\\n<ul>\\n<li><a href=\\"https://openjdk.org/jeps/429\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 429：Scoped Values（作用域值）</a>（第一次孵化）</li>\\n<li><a href=\\"https://openjdk.org/jeps/432\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 432：Record Patterns（记录模式）</a>（第二次预览）</li>\\n<li><a href=\\"https://openjdk.org/jeps/433\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 433：switch 模式匹配</a>（第四次预览）</li>\\n<li><a href=\\"https://openjdk.org/jeps/434\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 434: Foreign Function &amp; Memory API（外部函数和内存 API）</a>（第二次预览）</li>\\n<li><a href=\\"https://openjdk.org/jeps/436\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 436: Virtual Threads（虚拟线程）</a>（第二次预览）</li>\\n<li><a href=\\"https://openjdk.org/jeps/437\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 437: Structured Concurrency（结构化并发）</a>(第二次孵化)</li>\\n<li><a href=\\"https://openjdk.org/jeps/438\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 432：向量 API（</a>第五次孵化）</li>\\n</ul>","autoDesc":true}');export{e as data};