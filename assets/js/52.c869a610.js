(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{575:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("浏览器存储主要分为：Cookie、Local Storage、Session Storage 和 IndexedDB")]),t._v(" "),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),s("p",[t._v("HTTP 协议是无状态协议，客户端向服务端发送请求，服务端返回响应，那么当客户端向服务端再次发送请求，这时服务端并不知道这还是刚才的那个客户端。所以为了避免这种情况的出现，Cookie 诞生了。")]),t._v(" "),s("p",[t._v("Cookie 是为了解决 HTTP 协议在状态管理上的不足，Cookie 实际上就是个很小很小的文本文件，"),s("strong",[t._v("最大只有 4KB")]),t._v("，它的内部以键值对的形式来存储。"),s("strong",[t._v("只要匹配到是同一个域名下的请求且路径正确（即 domain 和 path 相同），无论是否需要用到，每次都会携带上 Cookie")]),t._v("，这样随着请求数量的增多，势必会造成无谓的性能浪费，这便是 cookie 最大的劣势。")]),t._v(" "),s("h3",{attrs:{id:"cookie-的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的属性"}},[t._v("#")]),t._v(" Cookie 的属性")]),t._v(" "),s("p",[t._v("Cookie 的设置是通过响应头的 Set-Cookie 字段，它有几个属性：")]),t._v(" "),s("ul",[s("li",[t._v("Expires：Cookie 过期的具体时间点，是个绝对时间。")]),t._v(" "),s("li",[t._v("Max-Age：相对时间，如30秒。浏览器收到报文的时间加上 Max-Age 就能得到绝对时间")]),t._v(" "),s("li",[t._v("Domian：指定 Cookie 的域名")]),t._v(" "),s("li",[t._v("Path：指定 Cookie 的路径。在浏览器发出请求前会对域名和路径进行匹配，如果不满足则不会在请求头中加入 Cookie")]),t._v(" "),s("li",[t._v("HttpOnly：只允许 Cookie 通过 HTTP 协议传输，禁止其他方式的访问。意味着禁止 JS 引擎使用 document.cookie 来访问，对防范 XSS 攻击有很大的好处。")]),t._v(" "),s("li",[t._v("SameSite：防范 CSRF 攻击的利器，通常由以下三个值\n"),s("ul",[s("li",[t._v("Strict：完全禁止第三方 cookie，只有当前站点与请求目标站点一致时才会携带上 cookie")]),t._v(" "),s("li",[t._v("Lax：从第三方站点打开链接、从第三方站点提交 GET 表单以及预加载这三种方式会携带 Cookie。其他请求不会携带。")]),t._v(" "),s("li",[t._v("None：任何情况下都会发送 cookie")])])]),t._v(" "),s("li",[t._v("Secure：表示这个 Cookie 只能用 HTTPS 协议来传输。但是Cookie 还是以明文的形式存在。")])]),t._v(" "),s("h2",{attrs:{id:"local-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-storage"}},[t._v("#")]),t._v(" Local Storage")]),t._v(" "),s("p",[t._v("Local Storage 有以下几个特性：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("存储：存储容量每个浏览器支持大小不一样，一般可达到 5 M，与 Cookie 一样以键值对形式存储")])]),t._v(" "),s("li",[s("p",[t._v("位于浏览器端，与Cookie不一样的是它不与服务端发生通信。")])]),t._v(" "),s("li",[s("p",[t._v("生命周期：Local Storage 是本地持久化存储，存储在其中的数据是永远不会过期的，除非手动删除。")])]),t._v(" "),s("li",[s("p",[t._v("作用域：Local Storage、Session Storage 都遵循同源策源，与 Cookie 一样在同个域名下，会存储相同的一段 Local Storage。")])]),t._v(" "),s("li",[s("p",[t._v("接口封装好，下面展示的就是存储的操作方式")])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储数据")]),t._v("\n\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取数据")]),t._v("\n\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除数据")]),t._v("\n\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清空数据")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("应用场景：利用 Local Storage 能够存储较大容量数据和持久性，可以利用 Local Storage 存储一些稳定的资源，比如官网的 logo，存储 base64 编码的图片资源，还有一些不经常更新的CSS、JS 等静态资源。")]),t._v(" "),s("h2",{attrs:{id:"session-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-storage"}},[t._v("#")]),t._v(" Session Storage")]),t._v(" "),s("p",[t._v("Session Storage 与 Local Storage 非常类似，容量上限为 5 M，不参与服务器通信，操作方式与存储方式都一样。但有一点不同的是，Session Storage 存储的是会话级别的信息，当会话结束时（页面关闭）存储内容也会消失。")]),t._v(" "),s("p",[t._v("应用场景：利用 Local Storage 存储会话级别信息的特性，可以利用其来维护表单信息，这样即时页面刷新了，表单信息还是存在，如果页面关闭，存储的内容也会消失。")]),t._v(" "),s("h2",{attrs:{id:"indexeddb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[t._v("#")]),t._v(" IndexedDB")]),t._v(" "),s("p",[t._v("IndexedDB 是运行在浏览器上的一个"),s("strong",[t._v("非关系型数据库")]),t._v("，所以它的内部是以 key-value 的形式存储的，从理论上来讲它的存储容量是没有上限的。")]),t._v(" "),s("p",[t._v("应用场景：可以把 IndexedDB 看做是 Local Storage 的升级版，当数据复杂度和规模上升到 Local Storage 无法处理的地步时就可以考虑使用 IndexedDB。")])])}),[],!1,null,null,null);a.default=n.exports}}]);