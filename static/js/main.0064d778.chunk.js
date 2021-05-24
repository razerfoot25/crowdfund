(this["webpackJsonpcrowdfunding-product-page"]=this["webpackJsonpcrowdfunding-product-page"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),r=c(4),o=c(2),l=c(0),d=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(l.jsx)("div",{className:"nav-container",children:Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("h1",{children:"crowdfund"}),Object(l.jsx)("label",{className:"".concat(c&&"hamburger-close"," hamburger"),onClick:function(){a(!c)}})]}),Object(l.jsx)("div",{className:"".concat(c&&"show"," nav-headers"),children:Object(l.jsxs)("ul",{className:"nav-list",children:[Object(l.jsx)("li",{children:"About"}),Object(l.jsx)("li",{children:" Discover"}),Object(l.jsx)("li",{children:"Get Started"})]})})]})})},j=function(e){var t=e.onSetBK,c=e.showBK,n=e.onShowModal;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:"/images/logo-mastercraft.svg",className:"container-logo",alt:"mastercraft logo"}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:"maintext",children:"Mastercraft Bamboo Monitor Riser"}),Object(l.jsx)("p",{className:"subtext",children:"A beautiful & handcrafted monitor stand to reduce neck and eye strain."}),Object(l.jsxs)("div",{className:"container-btn",children:[Object(l.jsx)("button",{onClick:n,className:"btn-green",children:"Back this project"}),Object(l.jsxs)("button",{onClick:function(){var e=document.querySelector(".svg-bg"),n=document.querySelector(".svg-inner");t(),!0===c?(e.classList.add("bookmark-bg"),n.classList.add("bookmark-inner")):(e.classList.remove("bookmark-bg"),n.classList.remove("bookmark-inner"))},className:"btn ".concat(c?"btn-booked":"btn-bookmark"),children:[Object(l.jsx)("span",{children:Object(l.jsx)("svg",{children:Object(l.jsx)("use",{href:"#bookmark"})})}),Object(l.jsx)("span",{children:"Bookmark"})]})]})]}),Object(l.jsx)("div",{style:{display:"none"},children:Object(l.jsx)("svg",{width:"56",id:"bookmark",height:"56",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(l.jsx)("circle",{fill:"#2F2F2F",className:"svg-bg bookmark-bg",cx:"28",cy:"28",r:"28"}),Object(l.jsx)("path",{className:"svg-inner bookmark-inner",fill:"#B1B1B1",d:"M23 19v18l5-5.058L33 37V19z"})]})})})]})},b=function(e){var t=e.pledge;return Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"container-info",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{children:["$",t.amount.toLocaleString()]}),Object(l.jsx)("p",{children:"of $100,000 backed"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t.backers.toLocaleString()}),Object(l.jsx)("p",{children:"total backers"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"56"}),Object(l.jsx)("p",{children:" days left"})]})]}),Object(l.jsx)("div",{className:"progress-bar",children:Object(l.jsx)("div",{className:"--bar"})})]})},h=function(){return Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h3",{children:"About this project"}),Object(l.jsx)("p",{children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(l.jsx)("p",{children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."})]})},m=function(e){var t=e.projects,c=(e.onShowModal,function(e){var t=e.items;return Object(l.jsxs)("div",{className:"".concat(t.quantity<1&&"empty"," project"),children:[Object(l.jsxs)("div",{className:"project-header",children:[Object(l.jsx)("h4",{children:t.name}),Object(l.jsxs)("span",{children:["Pledge $",t.price," or more"]})]}),Object(l.jsx)("p",{className:"project-text",children:t.description}),Object(l.jsxs)("div",{className:"project-footer",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:t.quantity}),Object(l.jsx)("small",{children:"left"})]}),t.quantity<1?Object(l.jsx)("button",{className:"btn-green",disabled:!0,children:"Out of Stock"}):Object(l.jsx)("button",{className:"btn-green",children:" Select Reward"})]})]})});return t.map((function(e){return Object(l.jsx)(c,{items:e},e.id)}))},u=c(3),O=function(e){var t=e.projects,c=e.setPledgeAmount,a=e.onShow,s=e.closeModal,i=Object(n.useState)(!1),r=Object(o.a)(i,2),d=r[0],j=r[1],b=Object(n.useState)(0),h=Object(o.a)(b,2);h[0],h[1];console.log(t);var m=function(e){e.onShow;return Object(l.jsx)("div",{className:"".concat(d?"modal-show":"modal-hide"," modal-conf modal-center"),children:Object(l.jsxs)("div",{className:"modal-confirm modal-container",children:[Object(l.jsx)("div",{className:"modal-header",children:Object(l.jsx)("img",{src:"/images/icon-check.svg",alt:"check"})}),Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsx)("h2",{children:"Thanks for your support!"}),Object(l.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."})]}),Object(l.jsx)("div",{className:"modal-footer",children:Object(l.jsx)("button",{onClick:function(){return j(!1)},className:"btn-green",children:"Got it!"})})]})})},O=function(){return Object(l.jsx)("div",{className:"".concat(a?"modal-show":"modal-hide","  modal-bg modal-center"),children:Object(l.jsxs)("div",{className:"modal-container",children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsx)("h2",{children:"Back this project"}),Object(l.jsx)("p",{children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}),Object(l.jsx)("span",{children:Object(l.jsx)("img",{onClick:s,src:"./images/icon-close-modal.svg",alt:"close"})})]}),Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsx)(p,{name:"Pledge with no reward",description:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",quantity:"3"}),t.map((function(e){return Object(l.jsx)(x,{id:e.id,name:e.name,quantity:e.quantity,price:e.price,description:e.description},e.id)}))]})]})})},x=function(e){var t=e.id,c=e.name,n=e.quantity,a=e.price,s=e.description;return Object(l.jsxs)("div",{children:[n>1&&Object(l.jsx)("input",{type:"radio",name:"select",className:"project-checkbox","aria-label":"radio"}),Object(l.jsxs)("div",{className:"".concat(n<1&&"modal-fade"," modal-project"),children:[Object(l.jsxs)("div",{className:"modal-project--header",children:[n>1?Object(l.jsxs)("h4",{className:"--mainText",onClick:function(e){return v(e.target.parentElement)},children:[Object(l.jsx)("span",{}),c]}):Object(l.jsx)("h4",{children:c}),Object(l.jsxs)("span",{children:["Pledge $",a," or more"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:n}),Object(l.jsx)("small",{children:"left"})]})]}),Object(l.jsx)("div",{className:"modal-project--text",children:Object(l.jsx)("p",{children:s})}),Object(l.jsxs)("div",{className:"modal-quantity-sm",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("small",{children:"left"})]}),Object(l.jsxs)("div",{className:"modal-project--footer",children:[Object(l.jsx)("input",{type:"text","aria-label":"amount",placeholder:"Enter your pledge"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("button",{onClick:function(){return f(a,t)},className:"btn-white",children:[Object(l.jsx)("span",{children:"$"}),a]}),Object(l.jsx)("button",{onClick:function(e){return g(e,t)},className:"continue btn-green",children:"Continue"})]})]})]})]})},p=function(e){var t,c=e.name,n=e.description,a=e.quantity;return Object(l.jsxs)("div",{children:[a>1&&Object(l.jsx)("input",(t={type:"radio",name:"radio-button"},Object(u.a)(t,"name","select"),Object(u.a)(t,"className","project-checkbox"),Object(u.a)(t,"aria-label","radio"),t)),Object(l.jsxs)("div",{className:"".concat(a<1&&"modal-fade"," modal-project"),children:[Object(l.jsx)("div",{className:"modal-project--header",children:a>1?Object(l.jsxs)("h4",{className:"--mainText",onClick:function(e){return v(e.target.parentElement)},children:[Object(l.jsx)("span",{}),c]}):Object(l.jsx)("h4",{children:c})}),Object(l.jsx)("div",{className:"modal-project--text",children:Object(l.jsx)("p",{children:n})}),Object(l.jsxs)("div",{className:"modal-project--footer",children:[Object(l.jsx)("input",{type:"text",id:"email","aria-label":"amount",placeholder:"Enter your Email"}),Object(l.jsx)("button",{onClick:function(){return f(0)},className:"btn-green",children:"Continue"})]})]})]})},v=function(e){var t=e.parentElement.previousSibling;t&&(t.checked=!0)},g=function(e,t){var c=e.target.parentElement.previousSibling.value;f(c,t)},f=function(e,t){c(e,t),j(!d),s()};return d?Object(l.jsx)(m,{}):Object(l.jsx)(O,{})};c(12);var x=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),u=i[0],x=i[1],p=Object(n.useState)({amount:89914,backers:5007}),v=Object(o.a)(p,2),g=v[0],f=v[1],k=Object(n.useState)([{id:1,name:"Bamboo Stand",price:25,description:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",quantity:101},{id:2,name:"Black Edition Stand",price:75,description:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",quantity:64},{id:3,name:"Mahogany Special Edition",price:200,description:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",quantity:0}]),N=Object(o.a)(k,2),y=N[0],w=N[1],S=function(){x(!u)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(O,{onShow:u,closeModal:S,projects:y,setPledgeAmount:function(e,t){if(e){var c=parseInt(e);f(Object(r.a)(Object(r.a)({},g),{},{amount:g.amount+c,backers:g.backers+1})),w(y.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{quantity:e.quantity-1}):e})));var n=(g.amount+c)/1e5*100;document.querySelector(".--bar").style.width=n.toPrecision()+"%"}}}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{onSetBK:function(){a(!c)},showBK:c,onShowModal:S}),Object(l.jsx)(b,{pledge:g}),Object(l.jsxs)("div",{className:"about-bg",children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"projects-container",children:Object(l.jsx)(m,{projects:y,onShowModal:S})})]})]})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.0064d778.chunk.js.map