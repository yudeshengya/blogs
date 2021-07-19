(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{503:function(_,v,t){_.exports=t.p+"assets/img/16daf0c0a72be715.6a54ca55.jpg"},504:function(_,v,t){_.exports=t.p+"assets/img/image-20210223004030284.7a2932d4.png"},573:function(_,v,t){"use strict";t.r(v);var a=t(6),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"_1-构建布局树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建布局树"}},[_._v("#")]),_._v(" 1. 构建布局树")]),_._v(" "),a("p",[_._v("现在，我们已经有了 DOM 树和 DOM 树中的样式。接下来就是确定 DOM 树中"),a("strong",[_._v("可见元素的几何位置")]),_._v("，这个过程就是构建布局树。")]),_._v(" "),a("p",[_._v("构建布局树具体有两个步骤：")]),_._v(" "),a("ol",[a("li",[_._v("遍历 DOM 树中的所有可见节点，并添加到布局树中")]),_._v(" "),a("li",[_._v("计算布局树中每个节点的位置信息")])]),_._v(" "),a("p",[_._v("这样我们就有了一颗完整的布局树，这棵布局树只有可见节点，例如 "),a("code",[_._v("head")]),_._v(" 和 "),a("code",[_._v("display: none")]),_._v(" 的节点都没有在布局树上")]),_._v(" "),a("h2",{attrs:{id:"_2-构建图层树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-构建图层树"}},[_._v("#")]),_._v(" 2. 构建图层树")]),_._v(" "),a("p",[_._v("接下来，渲染引擎为了应对复杂的场景，比如3D变换、页面滚动或者使用 "),a("code",[_._v("z-index")]),_._v(" 做为 z 轴对页面排序等。"),a("strong",[_._v("渲染引擎为特定的节点生成专用的图层，并生成一颗图层树")]),_._v("。这些图层经过叠加后最终合成为完整的页面。（这里的图层指的是"),a("strong",[_._v("合成层")]),_._v("）")]),_._v(" "),a("h3",{attrs:{id:"合成层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合成层"}},[_._v("#")]),_._v(" 合成层")]),_._v(" "),a("p",[_._v("在了解合成层前需要先了解下"),a("strong",[_._v("渲染层")]),_._v("，由下图可以得知，一个 DOM 节点对应一个渲染对象，由渲染对象根据层叠上下文的划分，处于相同坐标空间（z 轴空间）的渲染对象，都将归于同一个渲染层中，而不同坐标空间的渲染对象将形成多个渲染层。")]),_._v(" "),a("p",[a("img",{attrs:{src:t(503),alt:"16daf0c0a72be715"}})]),_._v(" "),a("p",[_._v("当满足某些条件的渲染层将被提升为"),a("strong",[_._v("合成层")]),_._v("，合成层能给我们带来不少好处：")]),_._v(" "),a("ul",[a("li",[_._v("当需要 repaint 时，只需要 repaint 本身，不会影响到其他层")]),_._v(" "),a("li",[_._v("合成层的位图能够交由 GPU 合成")])]),_._v(" "),a("p",[_._v("那么如何将渲染层提升为合成层呢？有两种情况，一种是"),a("strong",[_._v("显式合成")]),_._v("，一种是"),a("strong",[_._v("隐式合成")])]),_._v(" "),a("h3",{attrs:{id:"显式合成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显式合成"}},[_._v("#")]),_._v(" 显式合成")]),_._v(" "),a("p",[_._v("我们可以通过设置某些 CSS 属性来提升为合成层")]),_._v(" "),a("ul",[a("li",[_._v("通过 3D transforms：translate3d、translateZ")]),_._v(" "),a("li",[_._v("video、canvas、iframe 等元素")]),_._v(" "),a("li",[_._v("通过 CSS 动画实现 opacity 或 transform 动画的转换")]),_._v(" "),a("li",[_._v("position: fixed 或 sticky")]),_._v(" "),a("li",[_._v("具有 will-change 属性，且值为 opacity、transform、top、left、bottom、right")]),_._v(" "),a("li",[_._v("需要进行裁剪的地方")])]),_._v(" "),a("h3",{attrs:{id:"隐式合成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式合成"}},[_._v("#")]),_._v(" 隐式合成")]),_._v(" "),a("p",[_._v("当"),a("strong",[_._v("层叠等级低")]),_._v("的渲染层被提升为单独的合成层后，那么"),a("strong",[_._v("层叠等级高")]),_._v("的渲染层都将提升为合成层。")]),_._v(" "),a("p",[_._v("隐式合成如果处理不当会有"),a("strong",[_._v("层爆炸")]),_._v("的风险，若一个 "),a("code",[_._v("z-index")]),_._v(" 很低的渲染层被提升为合成层后，层叠在它上面的渲染层都将提升为合成层，那么可能会产生几千个合成层。")]),_._v(" "),a("h2",{attrs:{id:"_3-生成绘制列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-生成绘制列表"}},[_._v("#")]),_._v(" 3. 生成绘制列表")]),_._v(" "),a("p",[_._v("完成图层树的构建后，渲染引擎会对每个图层进行绘制，即将每个图层拆分成很多小的"),a("strong",[_._v("绘制指令")]),_._v("，然后将这些指令按照顺序组成一个"),a("strong",[_._v("绘制列表")]),_._v("。")]),_._v(" "),a("p",[_._v("我们可以通过打开开发者工具的 "),a("code",[_._v("Layers")]),_._v(" 面板中的 "),a("code",[_._v("Profiler")]),_._v(" 进行查看，下面以谷歌首页为例")]),_._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:t(504),alt:"image-20210223004030284"}}),_._v(" "),a("p",[_._v("可以看到，谷歌首页被分为了两个层（document 和 滚动条），其中的  "),a("code",[_._v("Profiler")]),_._v(" 就是一条条绘制指令")]),_._v(" "),a("h2",{attrs:{id:"_4-生成图块、位图以及合成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-生成图块、位图以及合成"}},[_._v("#")]),_._v(" 4. 生成图块、位图以及合成")]),_._v(" "),a("p",[_._v("一旦有了图层树以及对应的绘制列表之后就能进行绘制操作了，而绘制操作是交由渲染进程中的"),a("strong",[_._v("合成线程")]),_._v("来执行的。")]),_._v(" "),a("p",[a("strong",[_._v("合成线程")]),_._v("将图层分成一个个小块，并将这些图块交给"),a("strong",[_._v("栅格线程")]),_._v("来生成"),a("strong",[_._v("位图")]),_._v("，由图块生成位图就是栅格化。渲染进程维护了一个"),a("strong",[_._v("栅格化线程池")]),_._v("，所有图块的栅格化都在线程池中进行。")]),_._v(" "),a("p",[_._v("另外，合成线程能够对栅格化线程池进行优先排序，以便利用视口附近的图块来优先生成位图。")]),_._v(" "),a("p",[_._v("当生成合成层的位图之后，会交由 "),a("strong",[_._v("GPU 将多个位图进行合成")]),_._v("，这也就是常说的 GPU 硬件加速")]),_._v(" "),a("h2",{attrs:{id:"_5-显示页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-显示页面"}},[_._v("#")]),_._v(" 5. 显示页面")]),_._v(" "),a("p",[_._v('栅格化后合成线程发送命令 "draw quad" 给浏览器进程后，浏览器进程将合成帧发送给显卡。')]),_._v(" "),a("p",[_._v("显卡的刷新频率一般是 60Hz，即一秒更新60帧图像，而显卡分为"),a("strong",[_._v("前缓冲区")]),_._v("和"),a("strong",[_._v("后缓冲区")]),_._v("，每次更新帧的时候是将帧发送给显卡的后缓冲区，显示的区是前缓冲区，当显卡将图像保存在后缓冲区，会自动将前缓冲区和后缓冲区对换位置，以达到页面更新。")]),_._v(" "),a("p",[_._v("这也就是为什么在执行一次动画过程中，当渲染引擎生成某些帧的时间过久，帧传给显卡不及时，而显卡的刷新频率不变，从而产生页面卡顿的现象。")])])}),[],!1,null,null,null);v.default=s.exports}}]);