(this["webpackJsonpbattleship-ui"]=this["webpackJsonpbattleship-ui"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),i=n.n(r),s=n(4),j=n.n(s),a=(n(10),n(3));n(11);function l(t){var e=Object(r.useState)(0),n=Object(a.a)(e,2),i=n[0],s=n[1];return Object(c.jsx)("button",{className:"square",onClick:function(){t.incrementBoardCount(),s(t.count)},children:i})}function o(){var t=Object(r.useState)(0),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Array(10).fill(null).map((function(t,e){return Object(c.jsx)("th",{children:String.fromCodePoint("A".charCodeAt(0)+e)})})),j=Array(10).fill(Object(c.jsx)("td",{children:Object(c.jsx)(l,{count:n,incrementBoardCount:function(){i(n+1)}})})),o=Array(10).fill(null).map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e+1}),j]})}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),s]})}),Object(c.jsx)("tbody",{children:o})]})})}var d=function(){return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("div",{className:"game-board",children:Object(c.jsx)(o,{})}),Object(c.jsxs)("div",{className:"game-info",children:[Object(c.jsx)("h1",{children:"Battleship Game"}),Object(c.jsx)("p",{children:"\u30de\u30b9\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u30680\u30681\u304c\u5207\u308a\u66ff\u308f\u308b"})]})]})},u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))};j.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),u()}},[[12,1,2]]]);
//# sourceMappingURL=main.aca8ccc5.chunk.js.map