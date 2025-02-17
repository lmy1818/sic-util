import{_ as i,c as a,o as n,ag as t}from"./chunks/framework.BXFZJ7fW.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"doc/sic-util.author_router_add.md","filePath":"doc/sic-util.author_router_add.md"}'),h={name:"doc/sic-util.author_router_add.md"};function p(e,s,l,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<p><a href="./">Home</a> &gt; <a href="./sic-util.html">sic-util</a> &gt; <a href="./sic-util.author_router_add.html">author_router_add</a></p><h2 id="author-router-add-function" tabindex="-1">author_router_add() function <a class="header-anchor" href="#author-router-add-function" aria-label="Permalink to &quot;author\\_router\\_add() function&quot;">​</a></h2><p>处理缓存的路由数据，将本地的路由信息补充进去 数据层面：既处理数据问题，也将DOM元素打进当前函数 业务层面：可以在当前函数中使用DOM元素，用于渲染</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#B392F0;">author_router_add</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">origin</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#B392F0;"> MenuInformation</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">[], </span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">local</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#B392F0;"> MenuInformation</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    resourcelist:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> ResourceList</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#0000FF;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    menuid</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    menuId</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    parentid</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    parentId</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    parentname</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> string</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    parentName</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> string</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    resourceList</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> ResourceList</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    sort</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    label</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> string</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    key</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> string</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    icon</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    element</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    children</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#0000FF;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">)[]</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>origin</p></td><td><p>MenuInformation[]</p></td><td><p>接口的路由信息</p></td></tr><tr><td><p>local</p></td><td><p>MenuInformation[]</p></td><td><p>本地的路由信息</p></td></tr></tbody></table> **Returns:** <p>({ resourcelist: ResourceList[] | undefined; menuid?: number; menuId?: number; parentid?: number; parentId?: number; parentname?: string; parentName?: string; resourceList?: ResourceList[]; sort?: number; label?: string; key?: string; icon?: any; element?: any; children?: any; } | null)[]</p><p>{Array} 用于渲染的路由树</p>`,10)]))}const o=i(h,[["render",p]]);export{g as __pageData,o as default};
