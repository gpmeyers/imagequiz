(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{38:function(e,t,a){},40:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),s=a.n(c),o=(a(38),a(39),a(40),a(8)),i=a(6),l=a(56),b=a(58),h=a(3);var m=function(){return Object(h.jsx)(l.a,{bg:"dark",variant:"dark",children:Object(h.jsxs)(b.a,{className:"mr-auto",children:[Object(h.jsx)(b.a.Link,{children:Object(h.jsx)(o.b,{to:"/home",children:"Home"})}),Object(h.jsx)(b.a.Link,{children:Object(h.jsx)(o.b,{to:"/login",children:"Login"})})]})})},j=[{name:"Acacia",picture:"https://habahram.blob.core.windows.net/flowers/acacia.jpg"},{name:"Alyssum",picture:"https://habahram.blob.core.windows.net/flowers/alyssum.jpg"},{name:"Amaryllis",picture:"https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"},{name:"Aster",picture:"https://habahram.blob.core.windows.net/flowers/aster.jpg"},{name:"Azalea",picture:"https://habahram.blob.core.windows.net/flowers/azalea.jpg"},{name:"Begonia",picture:"https://habahram.blob.core.windows.net/flowers/begonia.jpg"},{name:"Buttercup",picture:"https://habahram.blob.core.windows.net/flowers/buttercup.jpg"},{name:"Calluna",picture:"https://habahram.blob.core.windows.net/flowers/calluna.jpg"},{name:"Camellia",picture:"https://habahram.blob.core.windows.net/flowers/camellia.jpg"},{name:"Cardinal",picture:"https://habahram.blob.core.windows.net/flowers/cardinal.jpg"},{name:"Carnation",picture:"https://habahram.blob.core.windows.net/flowers/carnation.jpg"},{name:"Clover",picture:"https://habahram.blob.core.windows.net/flowers/clover.jpg"},{name:"Crown Imperial",picture:"https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"},{name:"Daffodil",picture:"https://habahram.blob.core.windows.net/flowers/daffodil.jpg"},{name:"Dahlia",picture:"https://habahram.blob.core.windows.net/flowers/dahlia.jpg"},{name:"Daisy",picture:"https://habahram.blob.core.windows.net/flowers/daisy.jpg"},{name:"Gladiolus",picture:"https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"},{name:"Lantana",picture:"https://habahram.blob.core.windows.net/flowers/lantana.jpg"},{name:"Lily",picture:"https://habahram.blob.core.windows.net/flowers/lily.jpg"},{name:"Lotus",picture:"https://habahram.blob.core.windows.net/flowers/lotus.jpg"},{name:"Marigold",picture:"https://habahram.blob.core.windows.net/flowers/Marigold.jpg"},{name:"Orchid",picture:"https://habahram.blob.core.windows.net/flowers/orchid.jpg"},{name:"Primrose",picture:"https://habahram.blob.core.windows.net/flowers/primrose.jpg"},{name:"Sunflower",picture:"https://habahram.blob.core.windows.net/flowers/sunflower.jpg"},{name:"Tickseed",picture:"https://habahram.blob.core.windows.net/flowers/tickseed.jpg"},{name:"Tulip",picture:"https://habahram.blob.core.windows.net/flowers/tulip.jpg"},{name:"Zinnia",picture:"https://habahram.blob.core.windows.net/flowers/zinnia.jpg"}],d=a(53),p=a(54),u=a(33),w=a(59);var x=function(){return Object(h.jsxs)("div",{class:"text-center",children:[Object(h.jsx)("h2",{class:"m-3",children:"Home"}),Object(h.jsx)(d.a,{children:Object(h.jsx)(p.a,{children:j.map((function(e){var t="/"+e.name;return Object(h.jsx)(u.a,{class:"align-top p-3",xs:12,md:3,children:Object(h.jsxs)(w.a,{component:o.b,to:t,children:[Object(h.jsx)(o.b,{to:t,children:Object(h.jsx)(w.a.Img,{variant:"top",src:e.picture})}),Object(h.jsx)(o.b,{to:t,children:Object(h.jsx)(w.a.Title,{class:"text-center",children:e.name})})]})})}))})})]})},f=a(57),g=a(55);var O=function(){return Object(h.jsxs)("div",{class:"text-center",children:[Object(h.jsx)("h2",{children:"Login"}),Object(h.jsxs)(f.a,{class:"w-75 border border-dark rounded p-4 mx-auto",children:[Object(h.jsxs)(f.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(f.a.Label,{children:"Email address"}),Object(h.jsx)(f.a.Control,{type:"email",placeholder:"Enter email"}),Object(h.jsx)(f.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)(f.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(f.a.Label,{children:"Password"}),Object(h.jsx)(f.a.Control,{type:"password",placeholder:"Password"})]}),Object(h.jsx)(o.b,{to:"/home",children:Object(h.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})})]})]})},v=a(22),y=function(){for(var e=[],t=0,a=function(){for(var e=[],t=0,a=0;a<j.length;a++){(t=a)>j.length-4&&(t=a-2);var r={picture:j[a].picture,choices:[j[t].name,j[t+1].name,j[t+2].name],answer:j[a].name};e.push(r)}return e}(),r=0;r<a.length;r++){(t=r)>a.length-7&&(t=r-5);var n=[a[t],a[t+1],a[t+2],a[t+3],a[t+4],a[t+5]];e.push(n)}return e}(),k=function(e){for(var t=e.name,a=0,n=0;n<j.length;n++)if(j[n].name===t){a=n;break}var c=y[a],s=Object(r.useState)(0),i=Object(v.a)(s,2),l=i[0],b=i[1],m=Object(r.useState)(!1),d=Object(v.a)(m,2),p=d[0],u=d[1],w=Object(r.useState)(0),x=Object(v.a)(w,2),f=x[0],g=x[1];return Object(h.jsx)("div",{children:p?Object(h.jsxs)("div",{className:"text-center font-weight-bolder display-3 mt-3",children:["You scored ",f," out of ",c.length,Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"d-flex mx-auto justify-content-center mt-3 w-75",children:[Object(h.jsx)(o.b,{to:"/home",className:"btn btn-primary my-auto btn-block mx-3 h-100",children:"Home"}),Object(h.jsx)("button",{className:"btn btn-primary my-auto btn-block mx-3 h-100",onClick:function(){return b(0),u(!1),void g(0)},children:"Retry"})]})]}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"text-center font-weight-bolder m-3 display-3",children:[Object(h.jsxs)("span",{children:["Question ",l+1]}),"/",c.length]}),Object(h.jsx)("img",{className:"rounded mx-auto d-block mt-3 mb-3",src:c[l].picture,alt:""})]}),Object(h.jsx)("div",{className:"d-flex mx-auto justify-content-center mt-3 w-75",children:c[l].choices.map((function(e){return Object(h.jsx)("button",{className:"btn btn-primary my-auto btn-block mx-3 h-100",onClick:function(){return e===c[l].answer&&g(f+1),void(l+1<c.length?b(l+1):u(!0))},children:e})}))})]})})};var C=function(){return Object(h.jsxs)(o.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/home",component:x}),Object(h.jsx)(i.a,{path:"/login",component:O}),j.map((function(e){return Object(h.jsx)(i.a,{path:"/"+e.name,render:function(){return Object(h.jsx)(k,{name:e.name,isAuthed:!0})}})}))]})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),L()}},[[51,1,2]]]);
//# sourceMappingURL=main.6324b2c3.chunk.js.map