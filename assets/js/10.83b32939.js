(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{376:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ftw-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftw-ui"}},[t._v("#")]),t._v(" ftw-ui")]),t._v(" "),a("p",[t._v("A collection of vue components used in different applications of 4teamwork. The components are built using vuetify.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("@4tw/ui can be added using the npm module.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @4tw/ui\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @4tw/ui\n")])])]),a("p",[t._v("Once installed, register the Vue plugin.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FtwUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@4tw/ui'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FtwUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Or if you are using nuxt, register a new plugin.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugins/ftw-ui.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FtwUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@4tw/ui"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FtwUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"prerequisite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[t._v("#")]),t._v(" Prerequisite")]),t._v(" "),a("p",[t._v("Make sure your project where you use the ftw-ui has "),a("code",[t._v("vue-i18n")]),t._v(", "),a("code",[t._v("lodash")]),t._v(", "),a("code",[t._v("vue")]),t._v(" and "),a("code",[t._v("vuetify")]),t._v(" installed.")]),t._v(" "),a("h2",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[t._v("#")]),t._v(" Development")]),t._v(" "),a("h3",{attrs:{id:"project-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-setup"}},[t._v("#")]),t._v(" Project setup")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("h3",{attrs:{id:"compile-and-hot-reload-for-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-hot-reload-for-development"}},[t._v("#")]),t._v(" Compile and hot-reload for development")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n")])])]),a("h3",{attrs:{id:"run-your-unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-your-unit-tests"}},[t._v("#")]),t._v(" Run your unit tests")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" test-unit\n")])])]),a("h3",{attrs:{id:"run-your-end-to-end-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-your-end-to-end-tests"}},[t._v("#")]),t._v(" Run your end-to-end tests")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" test-e2e\n")])])]),a("h3",{attrs:{id:"release-the-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-the-package"}},[t._v("#")]),t._v(" Release the package")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" release\n")])])]),a("h2",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),a("p",[t._v("The docs are built using "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Every component has its own directory under "),a("code",[t._v("docs/components")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"preview-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preview-documentation"}},[t._v("#")]),t._v(" Preview documentation")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:dev\n")])])]),a("h3",{attrs:{id:"publish-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-documentation"}},[t._v("#")]),t._v(" Publish documentation")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./publish-docs\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);