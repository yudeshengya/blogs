(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{630:function(_,t,v){"use strict";v.r(t);var r=v(6),e=Object(r.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("HTTP 状态码分成五类，用数字的第一位表示分类：")]),_._v(" "),v("ul",[v("li",[_._v("1xx：提示信息，表示是协议处理的中间状态，还需要进一步的操作")]),_._v(" "),v("li",[_._v("2xx：成功")]),_._v(" "),v("li",[_._v("3xx：重定向，请求资源发生改动")]),_._v(" "),v("li",[_._v("4xx：客户端错误")]),_._v(" "),v("li",[_._v("5xx：服务端错误")])]),_._v(" "),v("h2",{attrs:{id:"_1xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1xx"}},[_._v("#")]),_._v(" 1xx")]),_._v(" "),v("p",[v("strong",[_._v("101 Switching Protocols")]),_._v("：表示客户端要求更改协议，比如将 HTTP 升级为 WebSocket，如果服务端也同意变更协议，就会发送状态码 101")]),_._v(" "),v("h2",{attrs:{id:"_2xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[_._v("#")]),_._v(" 2xx")]),_._v(" "),v("p",[v("strong",[_._v("200 OK")]),_._v("：表示一切正常，通常在响应体重放有数据")]),_._v(" "),v("p",[v("strong",[_._v("204 No Content")]),_._v("：一切正常，但响应体中没有数据")]),_._v(" "),v("p",[v("strong",[_._v("206 Partial Content")]),_._v("：是 HTTP 分块下载或断点续传的基础，客户端要求获取资源的部分数据。通常会有 "),v("strong",[_._v("Content-Range")]),_._v(" 头字段来表示数据的具体范围")]),_._v(" "),v("h2",{attrs:{id:"_3xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[_._v("#")]),_._v(" 3xx")]),_._v(" "),v("p",[v("strong",[_._v("301 Moved Permanently")]),_._v("：永久重定向，访问的资源已经不存在，需要改用新的 URL 再次访问")]),_._v(" "),v("p",[v("strong",[_._v("302 Found")]),_._v("：临时重定向")]),_._v(" "),v("blockquote",[v("p",[_._v("浏览器默认会对"),v("strong",[_._v("永久重定向")]),_._v("进行缓存优化，当下次访问时直接改用新的 URL 进行访问")])]),_._v(" "),v("p",[v("strong",[_._v("304 Not Modified")]),_._v("：缓存重定向，当协商缓存命中时会返回这个状态码")]),_._v(" "),v("h2",{attrs:{id:"_4xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[_._v("#")]),_._v(" 4xx")]),_._v(" "),v("p",[v("strong",[_._v("400 BadRequest")]),_._v("：通用的错误码，表示客户端错误")]),_._v(" "),v("p",[v("strong",[_._v("401 BadRequest")]),_._v("：请求要求身份验证")]),_._v(" "),v("p",[v("strong",[_._v("403 Forbidden")]),_._v("：权限不足，实际上不是客户端出错而是服务端禁止访问资源。原因很多，比如法律禁止、服务器拒绝接收请求等")]),_._v(" "),v("p",[v("strong",[_._v("404 Not Found")]),_._v("：表示资源在服务器上没有找到")]),_._v(" "),v("p",[v("strong",[_._v("405 Method Not Allowed")]),_._v("：不允许使用某些方法操作资源。例如只能用 GET 就不能用 POST")]),_._v(" "),v("p",[v("strong",[_._v("406 Not Acceptable")]),_._v("：资源无法满足客户端请求的条件，例如请求中文但是只有英文")]),_._v(" "),v("p",[v("strong",[_._v("408 Request Timeout")]),_._v("：请求超时")]),_._v(" "),v("h2",{attrs:{id:"_5xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[_._v("#")]),_._v(" 5xx")]),_._v(" "),v("p",[v("strong",[_._v("500 Internal Server Error")]),_._v("：与400类似，是个通用的错误码，表示服务端错误")]),_._v(" "),v("p",[v("strong",[_._v("501 Not Implemented")]),_._v("：服务器不支持当前请求所需要的功能")]),_._v(" "),v("p",[v("strong",[_._v("502 Bad Gateway")]),_._v("：通常是网关或代理服务器返回的错误码，表示当前服务器正常，但去访问后端服务器时发生了错误")]),_._v(" "),v("p",[v("strong",[_._v("503 Service Unavailable")]),_._v("：表示服务器很忙，暂时无法响应")])])}),[],!1,null,null,null);t.default=e.exports}}]);