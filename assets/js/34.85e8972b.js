(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{311:function(s,t,e){"use strict";e.r(t);var a=e(14),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"判断语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断语句"}},[s._v("#")]),s._v(" 判断语句")]),s._v(" "),t("p",[s._v("Stamon中基本的流程控制语句,可通过布尔表达式的值决定是否会指定语句块内的代码.")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"if"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[s._v("#")]),s._v(" If")]),s._v(" "),t("ul",[t("li",[s._v("在Stamon中,使用"),t("code",[s._v("if")]),s._v("关键字定义一个判断语句")])]),s._v(" "),t("blockquote",[t("p",[s._v("括号内的表达式最终结果必须确保为布尔值, "),t("br"),s._v("\n因为Stamon弱类型的特性,"),t("code",[s._v("CoolPot")]),s._v("等一些静态编译器不会做表达式预推断 "),t("br"),s._v("\n编译出来的字节码会发生运行时错误")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("script.st")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('import std;\nif(true){\n    println("一个判断语句");\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#else"}},[s._v("#")]),s._v(" Else")]),s._v(" "),t("ul",[t("li",[s._v("在Stamon中,使用"),t("code",[s._v("else")]),s._v("关键字定义一个否则语句")]),s._v(" "),t("li",[s._v("在"),t("code",[s._v("else")]),s._v("语句前必须有一个"),t("code",[s._v("if")]),s._v("或"),t("code",[s._v("else if")]),s._v("语句的定义")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("script.st")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('import std;\nif(false){\n\n}else{\n    println("否则语句块");\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"else-if"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#else-if"}},[s._v("#")]),s._v(" Else:if")]),s._v(" "),t("ul",[t("li",[s._v("在Stamon中, 否则如果语句的写法为 "),t("code",[s._v("else:if(bool) {}")])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("script.st")]),s._v(" "),t("h5",[s._v("默认写法")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("if(true){\n\n}else:if(){\n\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h5",[s._v("语法糖 "),t("Badge",{attrs:{text:"CoolPot",type:"warning"}})],1),s._v(" "),t("blockquote",[t("p",[s._v("在CoolPot编译模式下,您可以省略 "),t("code",[s._v(":")]),s._v(" 的写法")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("if(true){\n\n}else if(true){\n\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("该语法糖为CoolPot编译器特有, StamonVM即时运行解释器不具备编译该语法糖的功能")])])]),s._v(" "),t("ul",[t("li",[s._v("为什么会有带冒号的写法?")])]),s._v(" "),t("blockquote",[t("p",[s._v("答: 因为在Stamon中,诸如"),t("code",[s._v("if")]),s._v(" "),t("code",[s._v("while")]),s._v("这些语句是可以省略 "),t("code",[s._v("{}")]),s._v("语句块 "),t("br"),s._v("\n替换成 "),t("code",[s._v(":")]),s._v(" 并在后面跟进单个语句的写法, 所以默认情况下是 "),t("code",[s._v("else:if")]),s._v(" 的写法")])])])}),[],!1,null,null,null);t.default=n.exports}}]);