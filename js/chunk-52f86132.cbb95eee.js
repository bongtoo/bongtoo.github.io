(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52f86132"],{"0575":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.data.length?s("ul",{staticClass:"Board"},[t._l(t.data,function(a,e){return s("li",{key:"board"+e,staticClass:"Board-Item"},[s("div",{staticClass:"Board-Info"},[s("div",{staticClass:"Board-Info-Head"},[s("div",{staticClass:"Board-Info-HeadText",domProps:{textContent:t._s(a.title)}}),s("div",{staticClass:"Board-Info-HeadState",domProps:{textContent:t._s(t.isRecruit(a.endtime))}})]),s("div",{staticClass:"Board-Info-Body"},[s("span",{staticClass:"Board-Info-BodyPeriod"},[t._v("모집기간 : "+t._s(a.term))]),s("div",{staticClass:"Board-Info-BodyGroup"},[t._v("모집기관 : "+t._s(a.place))])])]),s("div",{staticClass:"Board-Button"},[s("a",{attrs:{href:"https://www.vms.or.kr/partspace/recruitView.do?seq="+a.value,target:"blank"}},[s("base-button",{attrs:{type:"line",color:"ocean"}},[t._v("검색하기")])],1)])])}),s("li",{staticClass:"Board-Item",staticStyle:{display:"block",textAlign:"center"}},[s("span",{on:{click:function(a){return t.$emit("addList")}}},[s("base-button",{attrs:{color:"ocean",type:"line"}},[s("img",{attrs:{src:t.plusIcon,width:"25px",alt:"ADD"}})])],1)])],2):s("div",{staticClass:"Board-Item"},[t._v("데이터가 없습니다.")])])},n=[],o=s("7c3c"),i={props:["data"],data:function(){return{plusIcon:o}},computed:{presentDate:function(){return new Date},disabled:function(){return this.loading}},methods:{isRecruit:function(t){return this.presentDate>new Date(t)?"모집중":"모집종료"}}},r=i,c=(s("f12f"),s("2877")),d=Object(c["a"])(r,e,n,!1,null,"64b54f4a",null);a["default"]=d.exports},"0e73":function(t,a,s){},"7c3c":function(t,a,s){t.exports=s.p+"img/plus.9171455f.png"},f12f:function(t,a,s){"use strict";var e=s("0e73"),n=s.n(e);n.a}}]);
//# sourceMappingURL=chunk-52f86132.cbb95eee.js.map