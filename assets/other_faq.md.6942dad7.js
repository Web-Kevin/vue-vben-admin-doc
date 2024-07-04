import{o as a,c as n,a as s}from"./app.6092a699.js";const e='{"title":"常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"关于缓存更新问题","slug":"关于缓存更新问题"},{"level":2,"title":"关于修改配置文件的问题","slug":"关于修改配置文件的问题"},{"level":2,"title":"esbuild 模式下开启 LEGACY 打包失败","slug":"esbuild-模式下开启-legacy-打包失败"},{"level":2,"title":"ant-design-vue 控制台警告","slug":"ant-design-vue-控制台警告"},{"level":2,"title":"添加菜单后没显示","slug":"添加菜单后没显示"},{"level":2,"title":"本地运行报错","slug":"本地运行报错"},{"level":2,"title":"tab 页切换后页面空白","slug":"tab-页切换后页面空白"},{"level":2,"title":"组件命名问题","slug":"组件命名问题"},{"level":2,"title":"我的代码本地开发可以，打包就不行了","slug":"我的代码本地开发可以，打包就不行了"},{"level":2,"title":"safari 问题","slug":"safari-问题"},{"level":2,"title":"模版区别","slug":"模版区别"},{"level":2,"title":"环境问题","slug":"环境问题"},{"level":2,"title":"依赖安装问题","slug":"依赖安装问题"},{"level":2,"title":"如何保证我的代码能更新到最新代码","slug":"如何保证我的代码能更新到最新代码"},{"level":2,"title":"打包文件过大","slug":"打包文件过大"},{"level":2,"title":"运行错误","slug":"运行错误"},{"level":2,"title":"为什么是 moment.js","slug":"为什么是-moment-js"},{"level":2,"title":"控制台路由警告问题","slug":"控制台路由警告问题"},{"level":2,"title":"启动报错","slug":"启动报错"},{"level":2,"title":"页面报错","slug":"页面报错"},{"level":2,"title":"跨域问题","slug":"跨域问题"},{"level":2,"title":"接口请求问题","slug":"接口请求问题"},{"level":2,"title":"组件库问题","slug":"组件库问题"},{"level":2,"title":"动态调整菜单问题","slug":"动态调整菜单问题"},{"level":2,"title":"更灵活的菜单路由权限控制","slug":"更灵活的菜单路由权限控制"}],"relativePath":"other/faq.md","lastUpdated":1720080436296}',t={},o=s('<h1 id="常见问题"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>列举了一些常见的问题。有问题可以先来这里寻找，如果没有可以在 <a href="https://github.com/vbenjs/vue-vben-admin/issues" target="_blank" rel="noopener noreferrer">issue</a> 提。</p></div><h2 id="前言"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>遇到问题,可以先从以下几个方面查找</p><ol><li>对应模块的 GitHub 仓库 <a href="https://github.com/vbenjs/vue-vben-admin/issues" target="_blank" rel="noopener noreferrer">issue</a> 搜索</li><li>从<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">google</a>搜索问题</li><li>从<a href="https://www.xn--wxtr44c.com" target="_blank" rel="noopener noreferrer">百度</a>搜索问题</li><li>在下面列表找不到问题可以到 issue 提问 <a href="https://github.com/vbenjs/vue-vben-admin/issues" target="_blank" rel="noopener noreferrer">issues</a></li><li>如果不是问题类型的，需要讨论的，请到 <a href="https://github.com/vbenjs/vue-vben-admin/discussions" target="_blank" rel="noopener noreferrer">discussions</a> 讨论</li></ol><h2 id="关于缓存更新问题"><a class="header-anchor" href="#关于缓存更新问题" aria-hidden="true">#</a> 关于缓存更新问题</h2><p>vben-admin 的项目配置默认是缓存在 <code>localStorage</code> 内，所以版本更新后可能有些配置没改变。</p><p>解决方式是每次更新代码的时候修改 <code>package.json</code> 内的 <code>version</code> 版本号. 因为 localStorage 的 key 是根据版本号来的。所以更新后版本不同前面的配置会失效。重新登录即可</p><p><code>VUE_VBEN_ADMIN__DEVELOPMENT__2.0.3__COMMON__LOCAL__KEY__</code> key 的组成是 [项目名]+[开发环境]+[版本号]+[key]</p><h2 id="关于修改配置文件的问题"><a class="header-anchor" href="#关于修改配置文件的问题" aria-hidden="true">#</a> 关于修改配置文件的问题</h2><p>当修改 <code>.env</code> 等环境文件及 <code>vite.config.ts</code> 文件时，vite 会自动重启服务。</p><p>自动重启有几率出现问题，请重新运行项目即可解决.</p><h2 id="esbuild-模式下开启-legacy-打包失败"><a class="header-anchor" href="#esbuild-模式下开启-legacy-打包失败" aria-hidden="true">#</a> esbuild 模式下开启 LEGACY 打包失败</h2><p>如果将 \b build.minify 设置为 &#39;esbuild&#39;，且不能启用 LEGACY，否则打包将会报错，两者选其一即可打包。</p><h2 id="ant-design-vue-控制台警告"><a class="header-anchor" href="#ant-design-vue-控制台警告" aria-hidden="true">#</a> ant-design-vue 控制台警告</h2><p>在控制台看到以下警告的原因是 <code>ant-design-vue</code> 会检测是否使用了 <code>babel-plugin-import</code> 来判断是否进行了组件库的按需引入。</p><p>但是项目使用的是 vite 的插件 <a href="https://github.com/vbenjs/vite-plugin-style-import" target="_blank" rel="noopener noreferrer">vite-plugin-style-import</a> 来进行按需引入。在 vite 内没必要使用 babel 在转换一次代码了。</p><p>所以想关闭这个警告，得等 ant-design-vue 提供可以关闭该警告的配置。</p><div class="language-bash"><pre><code>You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size. Not support Vite <span class="token operator">!</span><span class="token operator">!</span><span class="token operator">!</span>\n</code></pre></div><h2 id="添加菜单后没显示"><a class="header-anchor" href="#添加菜单后没显示" aria-hidden="true">#</a> 添加菜单后没显示</h2><p>菜单必须和路由匹配才会显示在界面上，所以得确保菜单和对应的路由存在即可显示.</p><h2 id="本地运行报错"><a class="header-anchor" href="#本地运行报错" aria-hidden="true">#</a> 本地运行报错</h2><p>由于 vite 在本地没有转换代码，且代码中用到了可选链等比较新的语法。所以本地开发需要使用版本较高的浏览器(<code>Chrome 85+</code>)进行开发</p><h2 id="tab-页切换后页面空白"><a class="header-anchor" href="#tab-页切换后页面空白" aria-hidden="true">#</a> tab 页切换后页面空白</h2><p>这是由于开启了路由切换动画,且对应的页面组件存在多个根节点导致的，在页面最外层添加<code>&lt;div&gt;&lt;/div&gt;</code>即可</p><p><strong>错误示例</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 注释也算一个节点 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>text h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>text h2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><strong>正确示例</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>text h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>text h2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>如果想使用多个根标签，可以禁用路由切换动画</li><li>template 下面的根注释节点也算一个节点</li></ul></div><h2 id="组件命名问题"><a class="header-anchor" href="#组件命名问题" aria-hidden="true">#</a> 组件命名问题</h2><p>目前在 vite+vue3.0.5 版本中，如果组件命名携带关键字，则可能会导致内存溢出。例如 <code>ImportExcel</code> excel 导入组件。</p><h2 id="我的代码本地开发可以，打包就不行了"><a class="header-anchor" href="#我的代码本地开发可以，打包就不行了" aria-hidden="true">#</a> 我的代码本地开发可以，打包就不行了</h2><p>目前发现这个原因可能有以下，可以从以下原因来排查，如果还有别的可能，可以提交 pr 来告诉我</p><ol><li>使用了 ctx 这个变量，ctx 本身未暴露出在实例类型内，尤大也是说了不要用这个属性。这个属性只是用于内部使用。</li></ol><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>xxxx<span class="token punctuation">;</span>\n</code></pre></div><h2 id="safari-问题"><a class="header-anchor" href="#safari-问题" aria-hidden="true">#</a> safari 问题</h2><p>目前在 safari 上面本地开发运行样式会有问题，还未找到原因，有知道的也可以告诉我。</p><h2 id="模版区别"><a class="header-anchor" href="#模版区别" aria-hidden="true">#</a> 模版区别</h2><ul><li><a href="https://github.com/vbenjs/vue-vben-admin" target="_blank" rel="noopener noreferrer">Vue-Vben-Admin</a> - 是包含 Demo 示例的,个人建议不要在这上面进行开发。当然，你如果动手能力强的话可以直接改。</li><li><a href="https://github.com/vbenjs/vben-admin-thin-next" target="_blank" rel="noopener noreferrer">Vue-Vben-Admin-Thin-Next</a> 精简了代码后的模版项目。适合在这基础上进行二次开发。</li></ul><h2 id="环境问题"><a class="header-anchor" href="#环境问题" aria-hidden="true">#</a> 环境问题</h2><p>如果出现依赖安装报错，启动报错等。先检查电脑环境有没有安装齐全。</p><ul><li>Node 版本必须大于<code>12.0.0</code>不支持 <code>13</code>， 推荐 14 版本。</li><li>Git</li><li>Yarn 最新版</li></ul><h2 id="依赖安装问题"><a class="header-anchor" href="#依赖安装问题" aria-hidden="true">#</a> 依赖安装问题</h2><ul><li>如果依赖安装不了或者启动报错可以先尝试 删除 <code>yarn.lock</code> 和 <code>node_modules</code>，然后重新运行 <code>yarn install</code></li><li>如果依赖安装不了或者报错，可以尝试切换手机热点来进行依赖安装。</li><li>如果还是不行，可以自行配置国内镜像安装。</li><li>也可以在项目根目录创建 <code>.npmrc</code> 文件，内容如下</li></ul><div class="language-bash"><pre><code><span class="token comment"># .npmrc</span>\nregistry <span class="token operator">=</span> https://registry.npm.taobao.org\n</code></pre></div><p>然后重新执行<code>yarn run reinstall</code>等待安装完成即可</p><h2 id="如何保证我的代码能更新到最新代码"><a class="header-anchor" href="#如何保证我的代码能更新到最新代码" aria-hidden="true">#</a> 如何保证我的代码能更新到最新代码</h2><p>如果你使用了该项目进行项目开发。开发之中想同步最新的代码。你可以设置多个源的方式</p><ol><li>克隆代码</li></ol><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/vbenjs/vben-admin-thin-next.git\n</code></pre></div><ol start="2"><li>添加自己的公司 git 源地址</li></ol><div class="language-bash"><pre><code><span class="token comment"># up 为源名称,可以随意设置</span>\n<span class="token comment"># gitUrl为开源最新代码</span>\n<span class="token function">git</span> remote <span class="token function">add</span> up gitUrl<span class="token punctuation">;</span>\n</code></pre></div><ol start="3"><li>提交代码到自己公司 git</li></ol><div class="language-bash"><pre><code><span class="token comment"># 提交代码到自己公司</span>\n<span class="token comment"># main为分支名 需要自行根据情况修改</span>\n<span class="token function">git</span> push up main\n\n<span class="token comment"># 同步公司的代码</span>\n<span class="token comment"># main为分支名 需要自行根据情况修改</span>\n<span class="token function">git</span> pull up main\n</code></pre></div><ol start="4"><li>如何同步开源最新代码</li></ol><div class="language-bash"><pre><code><span class="token function">git</span> pull origin main\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>同步代码的时候会出现冲突。只需要把冲突解决即可</p></div><h2 id="打包文件过大"><a class="header-anchor" href="#打包文件过大" aria-hidden="true">#</a> 打包文件过大</h2><ul><li><p>首先，完整版由于引用了比较多的库文件，所以打包会比较大。可以使用精简版来进行开发</p></li><li><p>其次建议开启 gzip，使用之后体积会只有原先 1/3 左右。</p></li></ul><p>gzip 可以由服务器直接开启。如果是这样，前端不需要构建 <code>.gz</code> 格式的文件</p><p>如果前端构建了 <code>.gz</code> 文件，以 nginx 为例，nginx 需要开启 <code>gzip_static: on</code> 这个选项。</p><ul><li>开启 gzip 的同时还可以同时开启 <code>brotli</code>，比 gzip 更好的压缩。两者可以共存</li></ul><p><strong>注意</strong></p><ul><li><p>gzip_static: 这个模块需要 nginx 另外安装，默认的 nginx 没有安装这个模块。</p></li><li><p>开启 <code>brotli</code> 也需要 nginx 另外安装模块</p></li></ul><h2 id="运行错误"><a class="header-anchor" href="#运行错误" aria-hidden="true">#</a> 运行错误</h2><p>如果出现类似以下错误，请检查项目全路径（包含所有父级路径）不能出现中文、日文、韩文。否则将会出现路径访问 404 导致以下问题</p><div class="language-ts"><pre><code><span class="token punctuation">[</span>vite<span class="token punctuation">]</span> Failed to resolve <span class="token keyword">module</span> <span class="token keyword">import</span> <span class="token string">&quot;ant-design-vue/dist/antd.css-vben-adminode_modulesant-design-vuedistantd.css&quot;</span><span class="token punctuation">.</span> <span class="token punctuation">(</span>imported by <span class="token operator">/</span>@<span class="token operator">/</span>setup<span class="token operator">/</span>ant<span class="token operator">-</span>design<span class="token operator">-</span>vue<span class="token operator">/</span>index<span class="token punctuation">.</span>ts<span class="token punctuation">)</span>\n</code></pre></div><h2 id="为什么是-moment-js"><a class="header-anchor" href="#为什么是-moment-js" aria-hidden="true">#</a> 为什么是 moment.js</h2><p>很多人问为什么不用<code>dayjs</code>。在项目依赖中可以看到，它是 <a href="https://www.antdv.com/components/overview-cn" target="_blank" rel="noopener noreferrer">Ant-Design-Vue</a> 内部自带的。</p><p>目前还没有基于 Vite 的 dayjs 替换 momentjs 方案，webpack 已经有了。等以后出现了在进行替换。</p><h2 id="控制台路由警告问题"><a class="header-anchor" href="#控制台路由警告问题" aria-hidden="true">#</a> 控制台路由警告问题</h2><p>如果看到控制台有如下警告，且页面<strong>能正常打开</strong> 可以忽略该警告。</p><p>后续 <code>vue-router</code> 可能会提供配置项来关闭警告</p><p><strong>2.6.1 及以上版本已移除此警告</strong></p><div class="language-ts"><pre><code><span class="token punctuation">[</span>Vue Router warn<span class="token punctuation">]</span><span class="token operator">:</span> No match found <span class="token keyword">for</span> location <span class="token keyword">with</span> path <span class="token string">&quot;xxxx&quot;</span>\n</code></pre></div><h2 id="启动报错"><a class="header-anchor" href="#启动报错" aria-hidden="true">#</a> 启动报错</h2><p>当出现以下错误信息时，请检查你的 nodejs 版本号是否符合要求</p><div class="language-bash"><pre><code>TypeError: str.matchAll is not a <span class="token keyword">function</span>\nat Object.extractor <span class="token punctuation">(</span>vue-vben-admin-main<span class="token punctuation">\\</span>node_modules@purge-icons<span class="token punctuation">\\</span>core<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>index.js:146:27<span class="token punctuation">)</span>\nat Extract <span class="token punctuation">(</span>vue-vben-admin-main<span class="token punctuation">\\</span>node_modules@purge-icons<span class="token punctuation">\\</span>core<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>index.js:173:54<span class="token punctuation">)</span>\n\n</code></pre></div><h2 id="页面报错"><a class="header-anchor" href="#页面报错" aria-hidden="true">#</a> 页面报错</h2><p>当页面出现以下报错，是因为 /xxx 对应的路由组件内部出现了错误。</p><div class="language-ts"><pre><code> <span class="token function">Uncaught</span> <span class="token punctuation">(</span><span class="token keyword">in</span> promise<span class="token punctuation">)</span> Error<span class="token operator">:</span> Couldn&#39;t resolve component <span class="token string">&quot;default&quot;</span> at <span class="token string">&quot;/xxx&quot;</span>\n\n</code></pre></div><p>可以尝试从以下几点排查</p><ol><li>检查对应组件内部 import 的所有文件是否正确</li><li>检查引入方式是否错误。</li></ol><div class="language-ts"><pre><code><span class="token comment">// 正确的</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> cloneDeep <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash-es&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 报错</span>\n<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&#39;lodash-es&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="3"><li>检查样式是否使用变量及有没有引入对应的变量文件</li><li>检查代码明显的语法错误</li></ol><p>这样就不会是使用的取值忘记 xxx.value 来进行数据获取</p><h2 id="跨域问题"><a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a> 跨域问题</h2><p>参考<a href="./../dep/cors.html">跨域问题</a></p><h2 id="接口请求问题"><a class="header-anchor" href="#接口请求问题" aria-hidden="true">#</a> 接口请求问题</h2><p>proxy 代理不成功，没有代理到实际地址？</p><p>代理只是服务请求代理，这个地址是不会变的。 原理可以简单的理解为，在本地启了一个服务，你先请求了本地的服务，本地的服务转发了你的请求到实际服务器。所以你在浏览器上看到的请求地址还是 <code>http://localhost:8000/xxx</code>。以服务端是否收到请求为准。</p><h2 id="组件库问题"><a class="header-anchor" href="#组件库问题" aria-hidden="true">#</a> 组件库问题</h2><p>跟组件库相关的问题可以查看<a href="https://2x.antdv.com/docs/vue/faq-cn/" target="_blank" rel="noopener noreferrer">常见问题</a></p><h2 id="动态调整菜单问题"><a class="header-anchor" href="#动态调整菜单问题" aria-hidden="true">#</a> 动态调整菜单问题</h2><p>菜单数据的值被存放在 <code>store/modules/permission</code> store 中, 你可以在这里进行修改</p><h2 id="更灵活的菜单路由权限控制"><a class="header-anchor" href="#更灵活的菜单路由权限控制" aria-hidden="true">#</a> 更灵活的菜单路由权限控制</h2><p>你可以在 <code>store/modules/permission</code>下, 修改 <code>routeFilter</code> 方法来进行更灵活的菜单路由权限控制</p><div class="language-"><pre><code> const routeFilter = (route: AppRouteRecordRaw) =&gt; {\n    const { meta } = route;\n    // 抽出角色\n    const { roles } = meta || {};\n\n    // 添加你的自定义逻辑来过滤路由和菜单\n    if (xxx) {\n      return false;\n    }\n\n    if (!roles) return true;\n    // 进行角色权限判断\n    return roleList.some((role) =&gt; roles.includes(role));\n  };\n\n</code></pre></div>',99);t.render=function(s,e,t,p,l,c){return a(),n("div",null,[o])};export default t;export{e as __pageData};
