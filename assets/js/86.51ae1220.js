(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{633:function(t,e,a){"use strict";a.r(e);var s=a(6),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("缓存可以减少网络资源的消耗，提高访问速度。浏览器是一种操作简单、效果显著的前端性能优化手段。")]),t._v(" "),a("h2",{attrs:{id:"浏览器缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制"}},[t._v("#")]),t._v(" 浏览器缓存机制")]),t._v(" "),a("p",[t._v("浏览器缓存机制分为强缓存和协商缓存，它们都是利用 HTTP 头字段来进行标识的。强缓存的优先级高，当强缓存命中失败时，才会走协商缓存的逻辑。")]),t._v(" "),a("h3",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),a("p",[t._v("强缓存是利用 http 头中的 Expires 和 Cache-Control 两个字段来进行控制的。当请求发出时，浏览器会根据这两个字段来判断是否命中强缓存，如果命中的话会直接从缓存中获取资源，不会再与服务器进行通信，并且此时的 HTTP 状态码为 200 。")]),t._v(" "),a("h4",{attrs:{id:"expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" Expires")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("expires: Fri, 26 Feb 2021 00:58:09 GMT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如你所见，expires 是一个具体的过期时间戳。当我们向服务器请求资源时，浏览器会对比本地时间和这个时间，如果 expires 的时间比本地时间大，那么意味着资源并没有过期，所以会命中改资源。")]),t._v(" "),a("p",[t._v("但是 expires 是有缺陷的，它依赖于本地时间。当我们修改了本地时间，那么情况也就会有所不同。所以 HTTP1.1 新增了 Cache-Control 字段来替代 expires。")]),t._v(" "),a("h4",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cache-control: max-age=30\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里表示着 30 秒后过期，是一个时间长度。cache-control 优先级高于 expires ，当两者同时出现时，以 cache-control 为准。")]),t._v(" "),a("p",[t._v("当然 cache-control 还有其他的指令，如下表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("指令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("public")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("表示响应可以被客户端和代理服务器缓存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("private")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("表示响应只可以被客户端缓存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("no-store")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不缓存任何响应")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("no-cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("资源可以被缓存，但是立即失效，下次会发起请求验证资源是否过期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("max-age=30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该缓存30秒后就过期，需要重新请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("s-maxage=30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("作用与 max-age 一样，但只在代理服务器生效")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("max-stale=30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在缓存过期的后30秒内也可以使用该缓存，客户端缓存控制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("min-fresh=30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在缓存过期的前30秒内就不可以使用该缓存，客户端缓存控制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("must-revalidate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("客户端只要缓存过期就必须向源服务器验证，服务器缓存控制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("proxy-revalidate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("代理服务器只要缓存过期就必须向源服务器验证，服务器缓存控制")])])])]),t._v(" "),a("h3",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),a("p",[t._v("当我们的缓存过期了，也就是强缓存没有命中，我们就需要向服务器发起请求了。在协商缓存机制下，浏览器会在请求头中携带相应的字段去向服务器询问缓存的相关信息，来判断是否能够使用过期的缓存。")]),t._v(" "),a("p",[t._v("如果服务器提示缓存的资源未过期或未改动，那么资源会重定向到浏览器缓存，还是从缓存中获取资源，这时的 HTTP 状态码为 304")]),t._v(" "),a("h4",{attrs:{id:"last-modified-和-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-if-modified-since"}},[t._v("#")]),t._v(" Last-Modified 和 If-Modified-Since")]),t._v(" "),a("p",[t._v("Last-Modified 表示文件最后的修改时间戳，如果我们启用了协商缓存，那么在首次请求中该字段会被写进响应头里并返回给浏览器")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("last-modified: Tue, 19 May 2020 09:32:01 GMT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在后续的请求中，浏览器会自动在请求头中给我们加上一个 If-Modified-Since 的字段，它的值就是上次 Last-Modified 的值")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("If-Modified-Since: Tue, 19 May 2020 09:32:01 GMT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("服务器接收到这个时间后，会与服务器上该资源最后修改的时间进行比对。如果一致，意味着资源没有修改，缓存能够继续使用，则返回 304 的状态码。如果资源修改了，则返回完整的响应内容。")]),t._v(" "),a("h4",{attrs:{id:"etag-和-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-if-none-match"}},[t._v("#")]),t._v(" ETag 和 If-None-Match")]),t._v(" "),a("p",[t._v("ETag 类似于文件指纹，当文件内容发生修改时，文件指纹也会发生变化，意味着 ETag 能够感知文件的变化。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ETag: W/"5dad8f90-70f"\n\nIf-None-Match: W/"5dad8f90-70f"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("它的工作方式与 Last-Modified 和 If-Modified-Since 类似：首次响应头中有 ETag，后续请求中携带 If-None-Match。")]),t._v(" "),a("h4",{attrs:{id:"两者对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两者对比"}},[t._v("#")]),t._v(" 两者对比")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("对于精准度，ETag 优于 Last-Modified")]),t._v("。ETag 能够感知文件的变化，而 Last-Modified 的话，它有以下的弊端：")]),t._v(" "),a("ul",[a("li",[t._v("在服务器端我们编辑了资源文件，但实际上文件并没有发生修改，这也会造成 Last-Modified 的改动。我们能够命中缓存时，服务器却给了我们一个完整的响应。")]),t._v(" "),a("li",[t._v("Last-Modified 能够感知的单位时间是秒，如果文件在 1 秒内发生了改变，那么这时候的 Last-Modified 并没有体现出修改了。没有命中缓存时，服务器却提示我们命中了。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("对于性能，Last-Modified 优于 ETag")]),t._v("。Last-Modified 只是记录一个时间，而 ETag 是根据文件内容生成的哈希值。")])])]),t._v(" "),a("p",[t._v("所以我们需要权衡利弊，选择合适的策略。另外，当两者都存在时，服务器会优先考虑 ETag")]),t._v(" "),a("h3",{attrs:{id:"启发式缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启发式缓存"}},[t._v("#")]),t._v(" 启发式缓存")]),t._v(" "),a("p",[t._v("当请求头中没有设置 Cache-Control 和 Expires 时，浏览器会默认采用一个"),a("strong",[t._v("启发式算法")]),t._v("对资源进行缓存。")]),t._v(" "),a("p",[t._v("启发式算法，通常会取响应头的 Date 减去 Last-Modified 值的 10% 作为缓存时间。")]),t._v(" "),a("h2",{attrs:{id:"缓存位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[t._v("#")]),t._v(" 缓存位置")]),t._v(" "),a("p",[t._v("当我们的强缓存命中或协商缓存返回304状态码时，浏览器会从去获取这些缓存资源，那么这些资源缓存在什么位置呢？")]),t._v(" "),a("p",[t._v("浏览器的缓存位置按照优先级分为以下四种：")]),t._v(" "),a("ul",[a("li",[t._v("Service Worker")]),t._v(" "),a("li",[t._v("Memory Cache")]),t._v(" "),a("li",[t._v("Disk Cache")]),t._v(" "),a("li",[t._v("Push Cache")])]),t._v(" "),a("h3",{attrs:{id:"service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[t._v("#")]),t._v(" Service Worker")]),t._v(" "),a("p",[t._v("Service Worker 是运行在浏览器背后的独立线程，它有很多的功能，例如离线缓存、消息推送等等，它是PWA的重要实现机制。")]),t._v(" "),a("p",[t._v("Service Worker 实现缓存功能一般是以下几个步骤：首先在首次请求之后可以注册 Service Worker，然后监听 install 事件就能够缓存需要缓存的文件。那么当下次访问时就可以通过拦截请求的方式查询是否存在缓存，如果存在直接使用，不需要发送请求。")]),t._v(" "),a("h3",{attrs:{id:"memory-cache-和-disk-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache-和-disk-cache"}},[t._v("#")]),t._v(" Memory Cache 和 Disk Cache")]),t._v(" "),a("p",[a("strong",[t._v("Memory Cache")]),t._v(" 是存在内存中的缓存，它是响应效率最快的一种缓存，但存活时间短，当渲染进程结束后，也就是tab关闭后，内存中的数据也就不存在了")]),t._v(" "),a("p",[a("strong",[t._v("Disk Cache")]),t._v(" 是存在磁盘的缓存，从响应效率来讲它比内存缓存慢，但优势是存活时间长存储容量大。")]),t._v(" "),a("p",[t._v("那么对于缓存是放在内存还是磁盘浏览器是如何抉择的呢？")]),t._v(" "),a("ul",[a("li",[t._v("体积比较大的 js、css 文件是存在磁盘的，反之放进内存中")]),t._v(" "),a("li",[t._v("当内存的使用率比较高时，文件优先进入磁盘")])]),t._v(" "),a("h4",{attrs:{id:"push-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[t._v("#")]),t._v(" Push Cache")]),t._v(" "),a("p",[t._v("Push Cache 是 HTTP2 中的内容，当前面三种缓存都没有命中时才会去询问 Push Cache")])])}),[],!1,null,null,null);e.default=r.exports}}]);