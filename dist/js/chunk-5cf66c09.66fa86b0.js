(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cf66c09"],{1799:function(t,e,c){"use strict";var a=c("7a23"),n={"aria-label":"Page navigation example"},r={class:"pagination"},l=Object(a["h"])("span",{"aria-hidden":"true"},"«",-1),o=Object(a["h"])("span",{"aria-hidden":"true"},"»",-1);function d(t,e,c,d,i,s){return Object(a["t"])(),Object(a["e"])("nav",n,[Object(a["h"])("ul",r,[Object(a["h"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=Object(a["N"])((function(e){return t.$emit("get-product",c.page.current_page-1)}),["prevent"]))},[l])],2),(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(c.page.total_pages,(function(e){return Object(a["t"])(),Object(a["e"])("li",{class:["page-item",{active:e===c.page.current_page}],key:e},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["N"])((function(c){return t.$emit("get-product",e)}),["prevent"])},Object(a["D"])(e),9,["onClick"])],2)})),128)),Object(a["h"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(a["N"])((function(e){return t.$emit("get-product",c.page.current_page+1)}),["prevent"]))},[o])],2)])])}var i={props:["page"]};i.render=d;e["a"]=i},"4de4":function(t,e,c){"use strict";var a=c("23e7"),n=c("b727").filter,r=c("1dde"),l=r("filter");a({target:"Array",proto:!0,forced:!l},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function a(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function n(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,a)}return c}function r(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?n(Object(c),!0).forEach((function(e){a(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}},5651:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"table mt-4"},r=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"購買時間"),Object(a["h"])("th",null,"Email"),Object(a["h"])("th",null,"購買款項"),Object(a["h"])("th",null,"應付金額"),Object(a["h"])("th",null,"是否付款"),Object(a["h"])("th",null,"編輯")])],-1),l={class:"list-unstyled"},o={class:"text-right"},d={class:"form-check form-switch"},i={key:0},s={key:1},b={class:"btn-group"},u=Object(a["h"])("td",null,null,-1),O={class:"d-flex justify-content-center mt-5"};function h(t,e,c,h,j,p){var f=Object(a["A"])("Loading"),m=Object(a["A"])("pagination"),g=Object(a["A"])("orderModal"),y=Object(a["A"])("del-product-modal");return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(f,{active:j.isLoading,"z-index":1060},null,8,["active"]),Object(a["h"])("table",n,[r,Object(a["h"])("tbody",null,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(j.orders,(function(e,c){return Object(a["t"])(),Object(a["e"])(a["a"],{key:c},[j.orders.length?(Object(a["t"])(),Object(a["e"])("tr",{key:0,class:{"text-secondary":!e.is_paid}},[Object(a["h"])("td",null,Object(a["D"])(t.$filters.date(e.create_at)),1),Object(a["h"])("td",null,[e.user?(Object(a["t"])(),Object(a["e"])("span",{key:0,textContent:Object(a["D"])(e.user.email)},null,8,["textContent"])):Object(a["f"])("",!0)]),Object(a["h"])("td",null,[Object(a["h"])("ul",l,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(e.products,(function(t,e){return Object(a["t"])(),Object(a["e"])("li",{key:e},Object(a["D"])(t.product.title)+" 數量: "+Object(a["D"])(t.qty)+" "+Object(a["D"])(t.product.unit),1)})),128))])]),Object(a["h"])("td",o,Object(a["D"])(e.total),1),Object(a["h"])("td",null,[Object(a["h"])("div",d,[Object(a["M"])(Object(a["h"])("input",{type:"checkbox",class:"form-check-input",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return p.updatePaid(e)}},null,40,["id","onUpdate:modelValue","onChange"]),[[a["G"],e.is_paid]]),Object(a["h"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(a["t"])(),Object(a["e"])("span",i,"已付款")):(Object(a["t"])(),Object(a["e"])("span",s,"未付款"))],8,["for"])])]),Object(a["h"])("td",null,[Object(a["h"])("div",b,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return p.openModal(e)}},"檢視",8,["onClick"]),Object(a["h"])("button",{class:"btn btn-outline-danger  btn-sm",onClick:function(t){return p.openDelOrderModal(e)}},"刪除",8,["onClick"])])]),u],2)):Object(a["f"])("",!0)],64)})),128))])]),Object(a["h"])("div",O,[Object(a["h"])(m,{page:j.pagination,onGetProduct:p.getOrders},null,8,["page","onGetProduct"])]),Object(a["h"])(g,{order:j.tempOrder,onUpdatePaid:p.updatePaid,ref:"orderModal"},null,8,["order","onUpdatePaid"]),Object(a["h"])(y,{product:j.tempOrder,onDelProduct:p.delOrders,ref:"delModal"},null,8,["product","onDelProduct"])],64)}var j=c("5530"),p=(c("99af"),c("e1a2")),f=(c("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),m={class:"modal-dialog modal-xl",role:"document"},g={class:"modal-content border-0"},y=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"訂單細節")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},k={class:"row"},D={class:"col-md-4"},w=Object(a["h"])("h3",null,"用戶資料",-1),M={class:"table"},P={key:0},x=Object(a["h"])("th",{style:{width:"100px"}},"姓名",-1),$=Object(a["h"])("th",null,"Email",-1),_=Object(a["h"])("th",null,"電話",-1),C=Object(a["h"])("th",null,"地址",-1),L={class:"col-md-8"},S=Object(a["h"])("h3",null,"訂單細節",-1),N={class:"table"},A=Object(a["h"])("th",{style:{width:"100px"}},"訂單編號",-1),U=Object(a["h"])("th",null,"下單時間",-1),E=Object(a["h"])("th",null,"付款時間",-1),G={key:0},V={key:1},q=Object(a["h"])("th",null,"付款狀態",-1),J={key:0,class:"text-success"},z={key:1,class:"text-muted"},F=Object(a["h"])("th",null,"總金額",-1),B=Object(a["h"])("h3",null,"選購商品",-1),H={class:"table"},I=Object(a["h"])("thead",null,[Object(a["h"])("tr")],-1),K={class:"text-end"},Q={class:"d-flex justify-content-end"},R={class:"form-check"},T={class:"form-check-label",for:"flexCheckDefault"},W={key:0},X={key:1},Y={class:"modal-footer"},Z=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function tt(t,e,c,n,r,l){return Object(a["t"])(),Object(a["e"])("div",f,[Object(a["h"])("div",m,[Object(a["h"])("div",g,[y,Object(a["h"])("div",v,[Object(a["h"])("div",k,[Object(a["h"])("div",D,[w,Object(a["h"])("table",M,[r.tempOrder.user?(Object(a["t"])(),Object(a["e"])("tbody",P,[Object(a["h"])("tr",null,[x,Object(a["h"])("td",null,Object(a["D"])(r.tempOrder.user.name),1)]),Object(a["h"])("tr",null,[$,Object(a["h"])("td",null,Object(a["D"])(r.tempOrder.user.email),1)]),Object(a["h"])("tr",null,[_,Object(a["h"])("td",null,Object(a["D"])(r.tempOrder.user.tel),1)]),Object(a["h"])("tr",null,[C,Object(a["h"])("td",null,Object(a["D"])(r.tempOrder.user.address),1)])])):Object(a["f"])("",!0)])]),Object(a["h"])("div",L,[S,Object(a["h"])("table",N,[Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[A,Object(a["h"])("td",null,Object(a["D"])(r.tempOrder.id),1)]),Object(a["h"])("tr",null,[U,Object(a["h"])("td",null,Object(a["D"])(t.$filters.date(r.tempOrder.create_at)),1)]),Object(a["h"])("tr",null,[E,Object(a["h"])("td",null,[r.tempOrder.paid_date?(Object(a["t"])(),Object(a["e"])("span",G,Object(a["D"])(t.$filters.date(r.tempOrder.paid_date)),1)):(Object(a["t"])(),Object(a["e"])("span",V,"時間不正確"))])]),Object(a["h"])("tr",null,[q,Object(a["h"])("td",null,[r.tempOrder.is_paid?(Object(a["t"])(),Object(a["e"])("strong",J,"已付款")):(Object(a["t"])(),Object(a["e"])("span",z,"尚未付款"))])]),Object(a["h"])("tr",null,[F,Object(a["h"])("td",null,Object(a["D"])(t.$filters.currency(r.tempOrder.total)),1)])])]),B,Object(a["h"])("table",H,[I,Object(a["h"])("tbody",null,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(r.tempOrder.products,(function(e){return Object(a["t"])(),Object(a["e"])("tr",{key:e.id},[Object(a["h"])("th",null,Object(a["D"])(e.product.title),1),Object(a["h"])("td",null,Object(a["D"])(e.qty)+" / "+Object(a["D"])(e.product.unit),1),Object(a["h"])("td",K,Object(a["D"])(t.$filters.currency(e.final_total)),1)])})),128))])]),Object(a["h"])("div",Q,[Object(a["h"])("div",R,[Object(a["M"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.tempOrder.is_paid=t})},null,512),[[a["G"],r.tempOrder.is_paid]]),Object(a["h"])("label",T,[r.tempOrder.is_paid?(Object(a["t"])(),Object(a["e"])("span",W,"已付款")):(Object(a["t"])(),Object(a["e"])("span",X,"未付款"))])])])])])]),Object(a["h"])("div",Y,[Z,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=function(e){return t.$emit("update-paid",r.tempOrder)})}," 修改付款狀態")])])])],512)}var et=c("7c2b"),ct=c.n(et),at={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{}}},emits:["update-paid"],inject:["emitter"],watch:{order:function(){this.tempOrder=this.order}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new ct.a(this.$refs.modal)}};at.render=tt;var nt=at,rt=c("1799"),lt={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},inject:["emitter","$httpMessageState"],components:{pagination:rt["a"],delProductModal:p["a"],orderModal:nt},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=e;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jimmytest","/admin/orders?page=").concat(e);this.isLoading=!0,this.$http.get(c,this.tempProduct).then((function(e){e.data.success?(t.orders=e.data.orders,t.pagination=e.data.pagination,t.isLoading=!1):console.log(e.data.message)})).catch((function(t){console.log(t)}))},openModal:function(t){this.tempOrder=Object(j["a"])({},t),this.isNew=!1;var e=this.$refs.orderModal;e.openModal()},openDelOrderModal:function(t){this.tempOrder=Object(j["a"])({},t);var e=this.$refs.delModal;e.openModal()},updatePaid:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jimmytest","/admin/order/").concat(t.id),a={is_paid:t.is_paid};this.$http.put(c,{data:a}).then((function(t){if(t.data.success){e.isLoading=!1;var c=e.$refs.orderModal;c.hideModal(),e.$httpMessageState(t,"更新付款狀態"),e.getOrders(e.currentPage)}else console.log(t.data.massage)})).catch((function(t){console.log(t)}))},delOrders:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jimmytest","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(e).then((function(e){if(e.data.success){var c=t.$refs.delModal;c.hideModal(),t.getOrders(t.currentPage)}else console.log(e.data.message)})).catch((function(t){console.log(t)}))}},created:function(){this.getOrders()}};lt.render=h;e["default"]=lt},b0c0:function(t,e,c){var a=c("83ab"),n=c("9bf2").f,r=Function.prototype,l=r.toString,o=/^\s*function ([^ (]*)/,d="name";a&&!(d in r)&&n(r,d,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})},dbb4:function(t,e,c){var a=c("23e7"),n=c("83ab"),r=c("56ef"),l=c("fc6a"),o=c("06cf"),d=c("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,c,a=l(t),n=o.f,i=r(a),s={},b=0;while(i.length>b)c=n(a,e=i[b++]),void 0!==c&&d(s,e,c);return s}})},e1a2:function(t,e,c){"use strict";var a=c("7a23"),n={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},r={class:"modal-dialog"},l={class:"modal-content border-0"},o={class:"modal-header bg-danger text-white"},d={id:"delProductModalLabel",class:"modal-title"},i=Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),s={class:"modal-body"},b=Object(a["g"])(" 是否刪除 "),u={class:"text-danger"},O=Object(a["g"])(" 商品(刪除後將無法恢復)。 "),h={class:"modal-footer"},j=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),p=Object(a["g"])("` ");function f(t,e,c,f,m,g){return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",n,[Object(a["h"])("div",r,[Object(a["h"])("div",l,[Object(a["h"])("div",o,[Object(a["h"])("h5",d,[Object(a["h"])("span",null,"刪除 "+Object(a["D"])(c.product.title),1)]),i]),Object(a["h"])("div",s,[b,Object(a["h"])("strong",u,Object(a["D"])(c.product.title),1),O]),Object(a["h"])("div",h,[j,Object(a["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(e){return t.$emit("del-product",c.product)})}," 確認刪除 ")])])])],512),p],64)}var m=c("7c2b"),g=c.n(m),y={props:{product:{type:Object,dafalut:function(){return{}}}},data:function(){return{modal:""}},emits:["del-product"],methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new g.a(this.$refs.modal)}};y.render=f;e["a"]=y},e439:function(t,e,c){var a=c("23e7"),n=c("d039"),r=c("fc6a"),l=c("06cf").f,o=c("83ab"),d=n((function(){l(1)})),i=!o||d;a({target:"Object",stat:!0,forced:i,sham:!o},{getOwnPropertyDescriptor:function(t,e){return l(r(t),e)}})}}]);
//# sourceMappingURL=chunk-5cf66c09.66fa86b0.js.map