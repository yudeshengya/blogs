(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{635:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("对于资源比较大的文件，例如几 M 、几百 M 甚至上 G 的大文件，一口气传输过来是不现实的，并且带宽是有上限的。那么如何在有限的带宽下高速传输这些大文件就成了一大问题。")]),s._v(" "),e("h2",{attrs:{id:"数据压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据压缩"}},[s._v("#")]),s._v(" 数据压缩")]),s._v(" "),e("p",[s._v("在实体数据那篇文章中，我们知道可以利用 Accept-Encoding 和 Content-Encoding 来实现数据压缩，将大文件缩小。")]),s._v(" "),e("p",[s._v("但是这个解决办法有缺点，这些压缩算法通常对文本文件有比较好的压缩率，然而对图片、视频这类本身就高度压缩的文件就无济于事了。")]),s._v(" "),e("h2",{attrs:{id:"分块传输"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分块传输"}},[s._v("#")]),s._v(" 分块传输")]),s._v(" "),e("p",[s._v("分块传输时一种化整为零的思想，也就是将大文件拆分成一个个小块后逐个发送，最后拼接在一起便可以了。")]),s._v(" "),e("p",[s._v("在 HTTP 中对于分块传输有两种方式，一种是针对定长数据，一种是针对不定长数据，它们使用的头字段分别是 Content-Length 和 Transfer-Encoding。这两个响应头字段是互斥的，无法同时出现。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("Content"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Length"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\nTransfer"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" chunked\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"范围请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#范围请求"}},[s._v("#")]),s._v(" 范围请求")]),s._v(" "),e("p",[s._v("仅仅有分块传输还不够，例如当我们看视频时，对进度条的拖动，这时仅仅只需要一个资源片段，那么就可以使用范围请求了。")]),s._v(" "),e("p",[s._v("当然前提需要服务器支持，所以服务器可以在响应头中设置字段，来明确告知客户端，服务端是支持范围请求的")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("Accept"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Ranges"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bytes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("那么客户端便可以设置请求头 Range 来请求资源片段，值是 "),e("code",[s._v("bytes=x-y")]),s._v("，其中 x, y 的判定如下")]),s._v(" "),e("ul",[e("li",[s._v("0-99 表示从起点到第99个字节")]),s._v(" "),e("li",[s._v("100- 表示从第99个字节到终点")]),s._v(" "),e("li",[s._v("-100 表示文件最后100个字节")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("Range"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当服务器收到 Range 字段后，便会进行如下处理")]),s._v(" "),e("ol",[e("li",[s._v("检查范围是否合法，若范围越界，则返回"),e("strong",[s._v("状态码416")])]),s._v(" "),e("li",[s._v("若范围正确，则根据范围计算偏移量并读取文件片段，然后返回"),e("strong",[s._v("状态码206")])]),s._v(" "),e("li",[s._v("同时添加响应头字段 Content-Range，格式是 "),e("code",[s._v("bytes x-y/length")]),s._v("，该头字段根据请求头 Range 的不同也会有所不同，具体分为单段数据和多段数据")])]),s._v(" "),e("h3",{attrs:{id:"单段数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单段数据"}},[s._v("#")]),s._v(" 单段数据")]),s._v(" "),e("p",[s._v("单段数据的请求头")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("Range"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("返回的响应")]),s._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[s._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("206 Partial Content")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Length:")]),s._v(" 10\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Accept-Ranges:")]),s._v(" bytes\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Range:")]),s._v(" bytes 0-9/100\n\nbody xxxxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"多段数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多段数据"}},[s._v("#")]),s._v(" 多段数据")]),s._v(" "),e("p",[s._v("当涉及到多段数据传输时，Range 头使用多个 x-y 来获取多个片段")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("Range"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应头中会表明一个特殊的数据类型 multipart/byteranges 来表示报文 body 是由多段字节序列组成的，并且还会携带一个参数 "),e("code",[s._v("boundary=xxx")]),s._v(" 来区分不同的片段")]),s._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[s._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("206 Partial Content")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Type:")]),s._v(" multipart/byteranges; boundary=00000000001\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Length:")]),s._v(" 189\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Connection:")]),s._v(" keep-alive\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Accept-Ranges:")]),s._v(" bytes\n\n\n--00000000001\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Type:")]),s._v(" text/plain\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Range:")]),s._v(" bytes 0-9/100\n\nbody xxxxx\n--00000000001\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Type:")]),s._v(" text/plain\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Range:")]),s._v(" bytes 30-39/100\n\nbody xxxxx\n--00000000001--\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);