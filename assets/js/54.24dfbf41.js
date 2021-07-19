(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{582:function(t,e,a){"use strict";a.r(e);var n=a(6),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("正则表达式用于搜索匹配具体字符，它非常强大，我们可以在各种地方看到它的身影。比如 Vue 模板编译的源码、编辑器的搜索匹配等等。在使用正则表达式时，我们可以用两个在线工具让我们事半功倍。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://regex101.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式在线测试"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://regexper.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("可视化正则表达式"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"regexp-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp-对象"}},[t._v("#")]),t._v(" RegExp 对象")]),t._v(" "),a("p",[t._v("我们可以很简单地创建一个 RegExp 对象")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\w+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者更加简单的方式")]),t._v("\nreg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\w+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("RegExp 对象有两个主要方法")]),t._v(" "),a("ul",[a("li",[t._v("test()：搜索字符串指定的值，根据结果返回 true 或 false")]),t._v(" "),a("li",[t._v("exec()：搜索匹配字符串，返回匹配结果")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("abc+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dcaacccde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dcaabcccde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dcaabde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dcaabcccde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["abccc", index: 3, input: "dcaabcccde", groups: undefined]')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"正则表达式语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式语法"}},[t._v("#")]),t._v(" 正则表达式语法")]),t._v(" "),a("h3",{attrs:{id:"元字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),a("p",[t._v("正则表达式主要依赖元字符。元字符是指不代表本身字面意思的字符，它们都有着特殊的含义。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("元字符")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配任意单个字符（除换行符）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字符种类，匹配方括号指定的一个字符集（方括号中的句号就表示句号）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[^]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否定的字符种类，匹配除了方括号里的任意字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配 >=0 个重复在 * 号之前的字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配 >=1 个重复在 + 号之前的字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("? 前的字符可有可无")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("{n,m}")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配 num 个 {} 前的字符（n <= num <= m）注意逗号后没有空格")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("(xyz)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("特征标群，(...) 中包含的内容会被看成一个整体")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("|")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("或运算符，匹配 | 前或后的字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("转义字符，用于匹配一些2保留字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从起始开始匹配")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配末尾字符")])])])]),t._v(" "),a("h3",{attrs:{id:"简写字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简写字符集"}},[t._v("#")]),t._v(" 简写字符集")]),t._v(" "),a("p",[t._v("正则表达式提供了一些常用的字符集简写")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("简写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配任意单个字符（除换行符）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\w")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配所有字母数字，等于 [a-zA-Z0-9_]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\W")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配所有非字母数字，等于 [ ^\\w]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配数字，等于 [0-9]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\D")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配非数字，等于 [ ^\\d]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配所有空格字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\S")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配所有非空格字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个换行符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个制表符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个换页符")])])])]),t._v(" "),a("h3",{attrs:{id:"标志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标志"}},[t._v("#")]),t._v(" 标志")]),t._v(" "),a("p",[t._v("标志也叫模式修正符，可以修改正则表达式的搜索结果")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("标志")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("忽略大小写")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("全局搜索")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("多行修饰符，让 ^ 和 $ 匹配到每行的起始")])])])]),t._v(" "),a("h3",{attrs:{id:"零宽度断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#零宽度断言"}},[t._v("#")]),t._v(" 零宽度断言")]),t._v(" "),a("p",[t._v("零宽度断言，也就是前后检查，包括先行断言和后发断言。定义一个断言要使用 () 包裹")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("断言")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("?=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("正先行断言，存在，其后跟随着断言中定义的内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("?!")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("负先行断言，排除，其后不跟随着断言中定义的内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("?<=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("正后发断言，存在，其前跟随着断言中定义的内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("?<!")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("负后发断言，排除，其前不跟随着断言中定义的内容")])])])]),t._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("p",[t._v("下面来看一些正则表达式的例子")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("正则表达式")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("匹配语句（粗写为匹配到的结果）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/he/")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("T"),a("strong",[t._v("he")]),t._v(" fat cat sat on the mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/he/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("T"),a("strong",[t._v("he")]),t._v(" fat cat sat on t"),a("strong",[t._v("he")]),t._v(" mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/.at/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The "),a("strong",[t._v("fat cat sat")]),t._v(" on the "),a("strong",[t._v("mat")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/[fc]at/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The "),a("strong",[t._v("fat cat")]),t._v(" sat on the mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/[ ^fc]at/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The fat cat "),a("strong",[t._v("sat")]),t._v(" on the "),a("strong",[t._v("mat")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/[a-z]*/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("T"),a("strong",[t._v("he fat cat sat on the mat")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/c+at/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The fat "),a("strong",[t._v("cat")]),t._v(" sat on the mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/[T]?he/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("The")]),t._v(" fat cat sat on t"),a("strong",[t._v("he")]),t._v(" mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/[0-9]{2,3}/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The number was 9."),a("strong",[t._v("999")]),t._v("7 but we rounded it off to "),a("strong",[t._v("10")]),t._v(".0.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/\\d{2,3}/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The number was 9."),a("strong",[t._v("999")]),t._v("7 but we rounded it off to "),a("strong",[t._v("10")]),t._v(".0.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/(f|c)at/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The "),a("strong",[t._v("fat cat")]),t._v(" sat on the mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/[Tt]he|fat/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("The fat")]),t._v(" cat sat on "),a("strong",[t._v("the")]),t._v(" mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/^(T|t)he/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("The")]),t._v(" fat cat sat on the mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/the/gi")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("The")]),t._v(" fat cat sat on "),a("strong",[t._v("the")]),t._v(" mat.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/.at(.)?$/g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The fat"),a("br"),t._v("cat sat"),a("br"),t._v("on the "),a("strong",[t._v("mat.")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/.at(.)?$/gm")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The "),a("strong",[t._v("fat")]),a("br"),t._v("cat "),a("strong",[t._v("sat")]),a("br"),t._v("on the "),a("strong",[t._v("mat.")])])])])]),t._v(" "),a("h3",{attrs:{id:"贪婪匹配与惰性匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪婪匹配与惰性匹配"}},[t._v("#")]),t._v(" 贪婪匹配与惰性匹配")]),t._v(" "),a("p",[t._v("正则表达式默认采用贪婪匹配模式，在该模式下会匹配尽可能长的字串。我们可以使用 ? 将贪婪模式转化为惰性匹配模式。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("模式")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("正则表达式")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("匹配语句（粗写为匹配到的结果）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("贪婪匹配")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("/(.*at)/")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("The fat cat sat on the mat")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("惰性匹配")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("/(.*?at)/")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("The fat")]),t._v(" cat sat on the mat.")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);