(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{503:function(t,s,a){t.exports=a.p+"assets/img/image-20210802005909948.4e191d83.png"},578:function(t,s,a){"use strict";a.r(s);var v=a(6),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("当接收到的 Content-Type 为 html 类型时，接下来就是由渲染进程来负责"),v("strong",[t._v("解析")]),t._v("和"),v("strong",[t._v("渲染")]),t._v("工作了。")]),t._v(" "),v("p",[t._v("对于解析的流程，主要分为以下几个步骤：")]),t._v(" "),v("ul",[v("li",[t._v("解析 HTML 构建 DOM 树")]),t._v(" "),v("li",[t._v("解析 CSS 进行样式计算")])]),t._v(" "),v("h2",{attrs:{id:"_1-解析-html"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-解析-html"}},[t._v("#")]),t._v(" 1. 解析 HTML")]),t._v(" "),v("p",[t._v("渲染引擎内部有一个 "),v("strong",[t._v("HTML 解析器(HTMLParser)")]),t._v(" 的模块，它负责 HTML 的解析。")]),t._v(" "),v("p",[t._v("对于 HTML 解析算法，具体分为两个过程：")]),t._v(" "),v("ol",[v("li",[t._v("Token 化（词法分析）")]),t._v(" "),v("li",[t._v("构建 DOM 树（语法分析）")])]),t._v(" "),v("h3",{attrs:{id:"token-化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#token-化"}},[t._v("#")]),t._v(" Token 化")]),t._v(" "),v("p",[t._v("简单来说，Token 化的过程就是"),v("strong",[t._v("将 HTML 文本分解为一个个 Token")]),t._v("，Token 即 HTML 标记。其过程使用了一种类似状态机的算法")]),t._v(" "),v("div",{staticClass:"language-html line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Hello World\n  "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])]),v("p",[t._v("例如上面的例子，整个标记的过程：")]),t._v(" "),v("ol",[v("li",[t._v("匹配到 "),v("code",[t._v("<")]),t._v("，状态切换为"),v("strong",[t._v("标签打开状态")])]),t._v(" "),v("li",[t._v("匹配 "),v("code",[t._v("[a-z]")]),t._v(" 的字符，状态切换为"),v("strong",[t._v("标签名称状态")]),t._v("。这个状态会一直保持，直到匹配到 "),v("code",[t._v(">")])]),t._v(" "),v("li",[t._v("匹配到 "),v("code",[t._v(">")]),t._v("，表示标签名称记录完成，状态切换为"),v("strong",[t._v("数据状态")])]),t._v(" "),v("li",[t._v("接下来遇到 body 标签也是同样的处理，最后来到 "),v("code",[t._v(">")]),t._v("，状态为"),v("strong",[t._v("数据状态")])]),t._v(" "),v("li",[t._v("保持数据状态接收字符串 Hello World")]),t._v(" "),v("li",[t._v("匹配到 "),v("code",[t._v("<")]),t._v("，状态切换为标签打开状态，匹配到 "),v("code",[t._v("/")]),t._v("，状态切换为"),v("strong",[t._v("结束标签打开状态")])]),t._v(" "),v("li",[t._v("后续过程与上面一样，直至完成")])]),t._v(" "),v("p",[t._v("最终生成的 Token 如下")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("StartTag html\n\tStartTag body\n    \tHello World\n    EndTag body\nEndTag html\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])]),v("h3",{attrs:{id:"构建-dom-树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构建-dom-树"}},[t._v("#")]),t._v(" 构建 DOM 树")]),t._v(" "),v("p",[t._v("在上述的 Token 化过程中产生的每个 Token 都会被传输到"),v("strong",[t._v("树构建器")]),t._v("中进行处理，树构建器会利用一个"),v("strong",[t._v("开放元素栈")]),t._v("，进而为 Token 生成一个 DOM 节点，以便有序地插入到 DOM 树中。")]),t._v(" "),v("div",{staticClass:"language-html line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[t._v("StartTag html\n\tStartTag body\n    \tHello World\n    EndTag body\nEndTag html\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])]),v("ol",[v("li",[t._v("在开始工作之前，会默认创建一个以 "),v("code",[t._v("document")]),t._v(" 为根的空 DOM 结构，同时会维护一个 Token 栈")]),t._v(" "),v("li",[t._v("当树构建器接收到 "),v("code",[t._v("StartTag html")]),t._v(" 时，会为该 Token 生成一个 html 节点并插入到 document 节点上，同时将该 Token 压入栈")]),t._v(" "),v("li",[t._v("接着收到 "),v("code",[t._v("StartTag body")]),t._v("，由于没有接收到 "),v("code",[t._v("head")]),t._v(" 的 Token，所以会自动创建一个 head 节点。")]),t._v(" "),v("li",[t._v("收到 "),v("code",[t._v("StartTag body")]),t._v(" 后，生成 body 节点插入到父节点（父节点就是"),v("strong",[t._v("栈顶节点")]),t._v("）同时压入栈中")]),t._v(" "),v("li",[t._v("收到文本 Token "),v("code",[t._v("Hello World")]),t._v("，将文本节点插入父节点中，但是不用压栈")]),t._v(" "),v("li",[t._v("收到 "),v("code",[t._v("EndTag body")]),t._v("，将栈顶弹出，表示 body 元素解析完成")]),t._v(" "),v("li",[t._v("收到 "),v("code",[t._v("EndTag html")]),t._v("，将栈顶弹出，此时解析过程结束")])]),t._v(" "),v("p",[t._v("DOM 树是一颗以 "),v("code",[t._v("document")]),t._v(" 为根节点的多叉树。在 JS 中可使用  "),v("code",[t._v("document")]),t._v(" 查看")]),t._v(" "),v("h2",{attrs:{id:"_2-解析-css-并计算样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-解析-css-并计算样式"}},[t._v("#")]),t._v(" 2. 解析 CSS 并计算样式")]),t._v(" "),v("p",[t._v("关于 CSS 的来源，主要来自以下三种：")]),t._v(" "),v("ol",[v("li",[t._v("通过 link 引用的 css 文件")]),t._v(" "),v("li",[t._v("style 标签内的 css")]),t._v(" "),v("li",[t._v("元素的内嵌 style 属性")])]),t._v(" "),v("h3",{attrs:{id:"格式化样式表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#格式化样式表"}},[t._v("#")]),t._v(" 格式化样式表")]),t._v(" "),v("p",[t._v("与 HTML 一样，浏览器也是无法理解 CSS 文本内容的，所以当解析 HTML 的过程中遇到 CSS 时，会去解析 CSS 转换为浏览器能够理解的结构，即 styleSheets。")]),t._v(" "),v("p",[t._v("我们可以通过在控制台输入 "),v("code",[t._v("document.styleSheets")]),t._v(" 进行查看，这个结构就包含了上面三种 CSS")]),t._v(" "),v("h3",{attrs:{id:"标准化样式属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标准化样式属性"}},[t._v("#")]),t._v(" 标准化样式属性")]),t._v(" "),v("p",[t._v("有一些 CSS 属性，如 1em、blue、bold，这些数值不被理解，所以需要将这些值转为渲染引擎能够理解的，标准化的值，如 "),v("code",[t._v("16px")]),t._v("、"),v("code",[t._v("rgb(0, 0, 255)")]),t._v("、"),v("code",[t._v("700")])]),t._v(" "),v("h3",{attrs:{id:"计算样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算样式"}},[t._v("#")]),t._v(" 计算样式")]),t._v(" "),v("p",[t._v("接下来计算每个 DOM 节点的样式属性，其中涉及到 CSS 的"),v("strong",[t._v("继承")]),t._v("规则和"),v("strong",[t._v("层叠")]),t._v("规则")]),t._v(" "),v("p",[t._v("CSS 具有"),v("strong",[t._v("继承")]),t._v("特性，也就是会继承父节点样式作为当前样式，然后再进行覆盖。每个节点的样式中还包含有浏览器提供的默认样式。")]),t._v(" "),v("p",[t._v("关于"),v("strong",[t._v("层叠")]),t._v("特性，它是一个定义了如何合并来自多个源的属性值，即最终的样式取决于各个属性共同作用的效果。")]),t._v(" "),v("p",[t._v("最终会计算出每个 DOM 节点的样式属性，这个我们可以打开开发者工具的 element -> Computed 面板进行查看")]),t._v(" "),v("h2",{attrs:{id:"题外话-阻塞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#题外话-阻塞"}},[t._v("#")]),t._v(" 题外话：阻塞")]),t._v(" "),v("p",[t._v("从上面的解析过程中我们知道解析html构建DOM树，在解析的过程中难免会遇到 css 和 js，那么我们思考这个问题")]),t._v(" "),v("blockquote",[v("p",[t._v("css、js 会阻塞 html 的解析，也就是 DOM 的生成吗？会阻塞页面的渲染吗？")])]),t._v(" "),v("ul",[v("li",[t._v("css 在部分情况下也会阻塞DOM的生成")]),t._v(" "),v("li",[t._v("js会阻塞DOM生成")]),t._v(" "),v("li",[t._v("css、js 都会阻塞页面渲染")])]),t._v(" "),v("p",[t._v("由于 js 内部经常会获取 DOM 节点和样式，所以在解析 html 的过程中如果遇到 js 文件会暂停解析，将控制权交由 js 引擎线程，并等待其下载和执行完成后再继续解析。如果有引用css文件，js文件不会立即执行，而是等css文件解析完构建CSSOM之后才执行。")]),t._v(" "),v("p",[v("strong",[t._v("所以css在部分情况下也会阻塞DOM的生成，js会阻塞DOM生成，两者都会阻塞页面渲染")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),v("p",[t._v("浏览器在解析 html 构建 DOM 树时，这个过程占用了主线程。")]),t._v(" "),v("p",[t._v("浏览器针对下载阶段进行优化，渲染引擎中有"),v("strong",[t._v("预加载扫描器")]),t._v("，当接收到 html 文件时，扫描器会对文件进行扫描，并找到关键资源（如 css, js）去下载，下载过程中不会占用主线程，减少阻塞时间。")]),t._v(" "),v("p",[t._v("另外，我们经常把css文件放在head，而js文件放在body底部，避免 js 执行时 css 还未解析完成。")]),t._v(" "),v("p",[t._v("或者通过 async 和 defer 来标记 js 文件，从而避免下载过程阻塞DOM生成")]),t._v(" "),v("ul",[v("li",[t._v("async：js文件异步下载，下载完成立即执行。")]),t._v(" "),v("li",[t._v("defer：推迟下载，等到 DOMContentLoaded 事件之后执行。")])]),t._v(" "),v("h3",{attrs:{id:"关于-domcontentloaded-和-load"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于-domcontentloaded-和-load"}},[t._v("#")]),t._v(" 关于 DOMContentLoaded 和 load")]),t._v(" "),v("ul",[v("li",[t._v("DOMContentLoaded 事件：当纯HTML被完全加载以及解析时，DOMContentLoaded 事件会被触发，而不必等待样式表，图片或者子框架完成加载。也就是 jQuery 中的 $(document).ready(function() { });")]),t._v(" "),v("li",[t._v("load 事件：等所有资源加载完成之后（需要等待样式表，图片或者子框架等资源完成加载），load 事件才会被触发。")])]),t._v(" "),v("p",[t._v("关于上面这两者的区别，我们可以点击进入"),v("a",{attrs:{href:"https://testdrive-archive.azurewebsites.net/HTML5/DOMContentLoaded/Default.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个站点来观察一下"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("另外，我们可以打开 NetWork 面板来查看这两者执行的具体时刻，如下图，蓝色的线是 DOMContentLoaded 执行时刻，红色的线是 load 执行时刻。")]),t._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:a(503),alt:"image-20210802005909948"}})])}),[],!1,null,null,null);s.default=e.exports}}]);