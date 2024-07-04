import{o as n,c as a,a as s}from"./app.6092a699.js";const t='{"title":"引入外部模块","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"使用","slug":"使用"},{"level":3,"title":"全局使用","slug":"全局使用"},{"level":3,"title":"局部使用","slug":"局部使用"},{"level":2,"title":"注意","slug":"注意"}],"relativePath":"guide/lib.md","lastUpdated":1720080436296}',p={},e=s('<h1 id="引入外部模块"><a class="header-anchor" href="#引入外部模块" aria-hidden="true">#</a> 引入外部模块</h1><p>除了自带组件以外，有时我们还需要引入其他外部模块。我们以 <code>ant-design-vue</code> 为例：</p><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>安装 <code>ant-design-vue</code></p><div class="language-bash"><pre><code><span class="token comment"># 在终端输入下面的命令完成安装</span>\n<span class="token function">yarn</span> <span class="token function">add</span> ant-design-vue\n</code></pre></div><h2 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="全局使用"><a class="header-anchor" href="#全局使用" aria-hidden="true">#</a> 全局使用</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="局部使用"><a class="header-anchor" href="#局部使用" aria-hidden="true">#</a> 局部使用</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n      Button<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="注意"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><ul><li>如果组件有依赖样式，则需要再引入样式文件</li></ul>',12);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
