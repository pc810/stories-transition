(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5445)}])},5445:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return k}});var n=i(5893),a=i(930),s=i.n(a),r=i(9008),o=i.n(r),l=i(5675),c=i.n(l),h=i(2729),d=i(5820),u=i(7294),b=i(1058),x=i(1664),m=i.n(x),w=function(){return(0,n.jsxs)("header",{className:"col-span-2 h-12 bg-white flex items-center px-8 border-b justify-between",children:[(0,n.jsx)("h1",{className:"font-bold text-xl",children:"Stories Transition"}),(0,n.jsx)(m(),{href:"https://github.com/pc810/stories-transition",children:(0,n.jsx)(b.Z,{src:"/images/GitHub-Mark-64px.png",alt:"Github",unoptimized:!0,className:"h-6 w-6",width:64,height:64})})]})};let f=(0,h.E)(c()),g=[{id:0,src:"/images/max-bohme-7oE-_0Lx0C4-unsplash.webp",width:969,height:1721},{id:1,src:"/images/max-bohme-hmy3Tryu5DI-unsplash.webp",width:974,height:173},{id:2,src:"/images/max-bohme-vpqb5oZJPvE-unsplash.webp",width:964,height:1713},{id:3,src:"/images/max-bohme-wPv-3Cfhr4w-unsplash.webp",width:680,height:1210}],p={enter:e=>({x:e>0?400:-400}),center:{x:0},exit:e=>({x:e<0?400:-400})},v={enter:e=>{let{page:t,id:i}=e;return{width:t%g.length>i?"100%":0}},center:e=>{let{page:t,id:i}=e;return{width:t%g.length>=i?"100%":0}},exit:e=>{let{page:t,id:i}=e;return{width:t%g.length>=i?0:"100%"}}},j=(e,t)=>Math.abs(e)*t;function k(){let[[e,t],i]=(0,u.useState)([0,0]),a=(0,u.useRef)(!1),r=Math.abs(e)%g.length,l=g[r],c=e=>{a.current||(a.current=!0,i(t=>[t[0]+e,e]))},b=e=>{i(t=>[e,t[0]>e?-1:1])};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Stories Transition"}),(0,n.jsx)("meta",{name:"description",content:"Stories transition animation made by priyank"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:s().className,children:[(0,n.jsx)(w,{}),(0,n.jsxs)("div",{className:"grid w-full h-[calc(100vh-3rem)] place-content-center",children:[(0,n.jsxs)("div",{className:"w-80 aspect-[9/16] bg-black overflow-hidden relative",children:[(0,n.jsx)("button",{className:"h-full w-1/5 absolute left-0 top-0 z-10","aria-hidden":!0,tabIndex:-1,onPointerDown:()=>c(-1)}),(0,n.jsx)("button",{className:"h-full w-1/5 absolute right-0 top-0 z-10","aria-hidden":!0,tabIndex:-1,onPointerDown:()=>c(1)}),(0,n.jsx)("div",{className:"grid relative",children:(0,n.jsx)(d.M,{initial:!1,custom:t,onExitComplete:()=>a.current=!1,children:(0,n.jsx)(f,{unoptimized:!0,className:"absolute",drag:"x",dragConstraints:{left:0,right:0},onDragEnd:function(e,t){let i=j(t.offset.x,t.velocity.x);i<-100?c(1):i>100&&c(-1)},dragElastic:.1,initial:"enter",animate:"center",exit:"exit",custom:t,transition:{duration:1},variants:p,alt:"",src:l.src,width:l.width,height:l.height},e)})}),(0,n.jsx)("div",{className:"absolute w-full h-8 flex px-2 items-center z-20",children:g.map((t,i)=>(0,n.jsx)("button",{className:"h-1 w-full mx-1 bg-white/20 relative rounded overflow-hidden","aria-label":"story ".concat(i+1),onClick:e=>{e.preventDefault(),b(i)},children:(0,n.jsx)(h.E.span,{className:"bg-white h-full absolute left-0 top-0",animate:"center",initial:"enter",transition:{duration:1.5,delay:1},onAnimationComplete:()=>c(1),custom:{page:e,id:t.id},variants:v},e)},t.id))})]}),(0,n.jsxs)("div",{className:"flex justify-center my-3",children:[(0,n.jsx)("button",{"aria-label":"prev story",onClick:()=>c(-1),className:"active:bg-white active:border-black active:shadow-lg active:text-black bg-black block border border-transparent duration-150 ease-in-out focus:bg-white focus:border-black focus:outline-none focus:ring-0 focus:shadow-lg focus:text-black font-medium hover:bg-white hover:border-black hover:shadow-lg hover:text-black leading-tight px-6 py-2.5 rounded shadow-md text-white text-xs transition uppercase",children:"prev"}),(0,n.jsx)("button",{"aria-label":"next story",onClick:()=>c(1),className:"active:bg-white mx-4 active:border-black active:shadow-lg active:text-black bg-black block border border-transparent duration-150 ease-in-out focus:bg-white focus:border-black focus:outline-none focus:ring-0 focus:shadow-lg focus:text-black font-medium hover:bg-white hover:border-black hover:shadow-lg hover:text-black leading-tight px-6 py-2.5 rounded shadow-md text-white text-xs transition uppercase",children:"next"})]})]})]})]})}}},function(e){e.O(0,[939,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);