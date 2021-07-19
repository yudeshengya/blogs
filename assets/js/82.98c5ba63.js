(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{621:function(t,a,e){"use strict";e.r(a);var r=e(6),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[t._v("#")]),t._v(" 代理")]),t._v(" "),e("p",[t._v("HTTP 中的代理是指"),e("strong",[t._v("本身不生产内容，而是处于中间位置转发客户端的请求和服务端的响应，具有双重身份")])]),t._v(" "),e("ul",[e("li",[t._v("从客户端的视角来看，表现为服务器，代表源服务器响应客户端的请求")]),t._v(" "),e("li",[t._v("从源服务端的视角来看，表现为客户端，代表客户端发送请求")])]),t._v(" "),e("p",[t._v("当然有可能不止一层代理，源客户端和源服务端之间可能会有多层代理。")]),t._v(" "),e("p",[t._v("代理分为正向代理和反向代理，"),e("strong",[t._v("正向代理隐藏真实客户端，反向代理隐藏真实服务端")])]),t._v(" "),e("h2",{attrs:{id:"代理的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理的作用"}},[t._v("#")]),t._v(" 代理的作用")]),t._v(" "),e("blockquote",[e("p",[t._v("计算机中有一句名言：计算机科学领域里的任何问题，都可以通过引入一个中间层来解决。")])]),t._v(" "),e("p",[t._v("代理正是如此。代理的作用有很多：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("负载均衡")]),t._v("：因为面向客户端屏蔽了源服务器，客户端并不知道发出的请求会由代理背后的哪台服务器来响应请求。代理能够决定将请求转发给哪台服务器处理，代理通过负载均衡算法（轮询法、源地址哈希法等等）将外部浏览合理地分散到多台源服务器，提高系统的整体资源利用率和性能。")]),t._v(" "),e("li",[e("strong",[t._v("安全防护")]),t._v("：拦截传输过来的数据，保护被代理的后端服务器，限制 IP 地址或流量，抵御网络攻击。对外网使用 SSL/TLS 加密通信，对安全的内网不加密，消除加解密成本。")]),t._v(" "),e("li",[e("strong",[t._v("缓存代理")]),t._v("：将内容缓存到代理服务器，使客户端能够直接从代理服务器获取资源，减少网络资源消耗")]),t._v(" "),e("li",[e("strong",[t._v("健康检查")]),t._v("：使用心跳机制等监控后端服务器，发现有故障服务器便即时移除出集群，保证服务高可用")])]),t._v(" "),e("h2",{attrs:{id:"代理相关头字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理相关头字段"}},[t._v("#")]),t._v(" 代理相关头字段")]),t._v(" "),e("h3",{attrs:{id:"via"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#via"}},[t._v("#")]),t._v(" Via")]),t._v(" "),e("p",[t._v("通过 Via 字段，代理服务器能够表明代理的身份，这是一个通用字段，请求头和响应头中都有可能出现。每当报文经过一个代理节点，代理服务器会把自身的信息追加到字段的值中。")]),t._v(" "),e("p",[t._v("例如在客户端与源服务器之间有两个代理服务器，那么在源服务器收到请求后，请求头中的 Via 字段会是这个样子")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Via"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" proxy1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proxy2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("而客户端收到响应后，响应头中的 Via 字段会是这个样子")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Via"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" proxy2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proxy1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("其中 Via 的值为代理主机名")]),t._v(" "),e("h3",{attrs:{id:"x-forwarded-for"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x-forwarded-for"}},[t._v("#")]),t._v(" X-Forwarded-For")]),t._v(" "),e("p",[t._v("X-Forwarded-For 记录的是"),e("strong",[t._v("代理的对象")]),t._v("，即为谁而转发，与 Via 差不多，每经过一个代理节点，代理服务器会把要转发对象的信息追加到字段的值中。")]),t._v(" "),e("p",[t._v("另外，X-Forwarded-For 记录的是 IP 地址。")]),t._v(" "),e("p",[t._v("例如在客户端与源服务器之间有两个代理服务器，客户端的真实 IP 为 IP0，两个代理的 IP 分别为 IP1，IP2，那么在源服务器收到请求后，请求头中的 X-Forwarded-For 字段会是这个样子")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("注意，这里没有 IP2，IP1 表示代理2在帮代理1转发请求")]),t._v(" "),e("h3",{attrs:{id:"x-real-ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x-real-ip"}},[t._v("#")]),t._v(" X-Real-IP")]),t._v(" "),e("p",[t._v("X-Real-IP 记录用户的真实 IP，不管中间经过多少代理，这个字段始终记录客户端 IP")]),t._v(" "),e("p",[t._v("如果客户端和服务器之间只有一个代理，那么 X-Forwarded-For 和 X-Real-IP 这两个字段的值就是相同的。")]),t._v(" "),e("h2",{attrs:{id:"缓存代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存代理"}},[t._v("#")]),t._v(" 缓存代理")]),t._v(" "),e("p",[t._v("在 HTTP 传输链路上，不只是客户端有缓存，服务器上的缓存也能起到性能优化的效果，可以让请求不必特地到源服务器去处理，而是就近获得响应结果。")]),t._v(" "),e("p",[t._v("代理服务器一个重要的作用就是缓存代理，特别针对那些频繁读取的数据，例如爆款商品的详情页，一秒内可能有成千上万次请求，在缓存有效的时间内就能够把巨大的访问流量挡在外面，减轻源服务器的并发压力。")]),t._v(" "),e("p",[t._v("缓存代理的控制分为两部分，一部分由源服务器控制，一部分由客户端控制")]),t._v(" "),e("p",[t._v("这里主要针对的是强缓存相关的 Cache-control 字段")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("指令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("public")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表示响应可以被客户端和代理服务器缓存")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("private")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表示响应只可以被客户端缓存")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("no-store")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不缓存任何响应")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("no-cache")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("资源可以被缓存，但是立即失效，下次会发起请求验证资源是否过期")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("max-age=30")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("该缓存30秒后就过期，需要重新请求")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("s-maxage=30")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("作用与 max-age 一样，但只在代理服务器生效")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("max-stale=30")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在缓存过期的后30秒内也可以使用该缓存，客户端缓存控制")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("min-fresh=30")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在缓存过期的前30秒内就不可以使用该缓存，客户端缓存控制")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("must-revalidate")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("客户端只要缓存过期就必须向源服务器验证，服务器缓存控制")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("proxy-revalidate")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("代理服务器只要缓存过期就必须向源服务器验证，服务器缓存控制")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);