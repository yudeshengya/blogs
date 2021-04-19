(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{594:function(t,e,a){"use strict";a.r(e);var n=a(6),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("HTTP 实体数据的介绍具体分为 5 个部分：数据类型、压缩方式、语言类型、字符集、内容协商权重")]),t._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("p",[t._v("在 TCP/IP 协议栈里，传输数据基本上都是 header+body 的格式，但 TCP、UDP 都是传输层协议，它们并不关心 body 数据是什么，只需将数据交付到对方便可以了。但 HTTP 不同，它是应用层协议，并且它的 body 中有各种各样的数据格式，HTTP 必须告知上层应用这是什么数据。")]),t._v(" "),a("p",[t._v("HTTP 为此定义了 Accept 请求头字段和 Content-Type 响应头字段。客户端使用 Accept 头告知服务器希望接收什么样的数据，而服务器使用 Content-Type 头告知客户端实际发送了什么样的数据。")]),t._v(" "),a("p",[t._v("具体而言，这两个字段的取值能够分为以下几类：")]),t._v(" "),a("ul",[a("li",[t._v("text：文本格式，例如超文本文档 text/html、纯文本 text/plain、样式表 text/css 等")]),t._v(" "),a("li",[t._v("image：即图像文件，例如 image/gif、image/jpeg、image/png 等")]),t._v(" "),a("li",[t._v("audio/video：音频和视频数据，例如 audio/mpeg、video/mp4 等")]),t._v(" "),a("li",[t._v("application：数据格式不固定，可能是文本也可能是二进制，例如 application/json、application/octet-stream")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Accept: text/html,application/xhtml+xml,application/xml\nContent-Type: text/html\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"压缩方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩方式"}},[t._v("#")]),t._v(" 压缩方式")]),t._v(" "),a("p",[t._v("一般 body 都会经过编码压缩后才会进行发送。客户端使用 Accept-Encoding 请求头来告知服务器支持哪些压缩格式，服务端使用 Content-Encoding 头来告知客户端 body 采用了哪种压缩格式。具体的取值有以下三种：")]),t._v(" "),a("ul",[a("li",[t._v("gzip：最流行的压缩格式")]),t._v(" "),a("li",[t._v("deflate：另一种流行的压缩格式")]),t._v(" "),a("li",[t._v("br：专门为 HTTP 优化的压缩格式")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Accept-Encoding: gzip, deflate, br\nContent-Encoding: gzip\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"语言类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言类型"}},[t._v("#")]),t._v(" 语言类型")]),t._v(" "),a("p",[t._v("在国际化方案中，我们需要适配不同的语言类型，这就可以使用 Accept-Language 请求头和 Content-Language 响应头来标记使用的语言类型。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Accept-Language: zh-CN, zh, en\nContent-Language: zh-CN\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符集"}},[t._v("#")]),t._v(" 字符集")]),t._v(" "),a("p",[t._v("对于编码字符集的话，请求头使用的字段是 Accept-Charset，值得注意的是响应头使用 Content-Type 中的 charset=xxx 来标识")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Accept-Charset: gbk, utf-8\nContent-Type: text/html; charset=utf-8\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"内容协商权重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容协商权重"}},[t._v("#")]),t._v(" 内容协商权重")]),t._v(" "),a("p",[t._v("在 HTTP 协议里使用 Accept、Accept-Encoding、Accept-Language 等请求头字段进行内容协商时，可以使用 q 参数表示权重来设置优先级。")]),t._v(" "),a("p",[t._v("权重最大值是1，最小值是0.01，默认值是1，如果是0表示拒绝，具体形式为 q=value")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Accept: text/html,application/xml;q=0.9,*/*;q=0.8\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("上面代码表示浏览器最希望接收 HTML 文件，权重是1，其次是 XML 文件，权重是0.9，最后是任意类型，权重是0.8")]),t._v(" "),a("p",[t._v("值得注意的是，HTTP 中 "),a("code",[t._v(";")]),t._v(" 的断气语气要小于 "),a("code",[t._v(",")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("请求头")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("响应头")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("压缩格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Encoding")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("语言类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Language")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Language")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("字符集")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Charset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Type")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);