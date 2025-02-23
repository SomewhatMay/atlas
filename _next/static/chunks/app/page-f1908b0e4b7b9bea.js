(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2364:(e,t,s)=>{Promise.resolve().then(s.bind(s,4339))},4339:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var l=s(5155),a=s(5565),n=s(8173),r=s.n(n);function i(e){return"".concat(e.split(" ").slice(0,2).map(e=>e[0]).join("")).toUpperCase()}function o(e){let{visible:t,image:s,name:n,type:o,address:c,phone:x,website:d,business_url:h,setSelectedBusiness:u}=e;d&&"none"!==d&&!d.startsWith("https")&&(d="https://"+d);let m=i(null!=n?n:"");return(0,l.jsxs)("div",{className:"fixed top-0 left-0 bottom-0 right-0 z-10 w-full h-full flex justify-center items-center transition-all duration-300 ".concat(t?"opacity-100":"opacity-0 pointer-events-none"),"aria-hidden":!t,children:[(0,l.jsx)("button",{onClick:()=>u(-1),className:"absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black opacity-[65%]"}),(0,l.jsxs)("div",{className:"w-[80%] max-w-[600px] mx-[10%] rounded-lg px-[30px] pt-[30px] pb-[30px] overflow-hidden bg-neutral-900 shadow-md text-white flex flex-col items-center absolute p-4 transition-all duration-300 ".concat(t?"scale-100":"scale-[80%] pointer-events-none"),children:[(0,l.jsx)("div",{className:"mx-auto w-full max-h-[50%]",children:(null==s?void 0:s.startsWith("http"))?(0,l.jsx)(a.default,{src:s,className:"w-full aspect-auto h-full max-h-[300px] object-cover rounded-lg",width:1024,height:1024,alt:n}):(0,l.jsx)("div",{className:"mx-auto max-h-[50%] rounded-lg w-full h-[300px] bg-neutral-700 transition-all text-white font-bold text-6xl text-center flex flex-col items-center justify-center",children:(0,l.jsx)("span",{className:"absolute left-1/2 translate-x-[-50%]",children:m})})}),(0,l.jsx)("h1",{className:"text-3xl font-bold mt-5",children:n}),"none"!==o&&(0,l.jsx)("p",{className:"mt-1 font-normal",children:o}),(0,l.jsx)("div",{className:"grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-4 text-center mt-4",children:[["Address",c],["Phone",x]].map((e,t)=>"none"!==e[1]&&(0,l.jsx)("div",{className:"bg-neutral-800 rounded-lg p-2 px-4 flex items-center justify-center",children:(0,l.jsxs)("span",{children:[e[0],": ",e[1]]})},t))}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 justify-between mt-5",children:[(null==d?void 0:d.startsWith("http"))&&(0,l.jsx)(r(),{href:d,target:"_blank",rel:"noopener noreferrer",className:"border px-4 border-white rounded-lg p-2 transition-all hover:bg-white hover:scale-105 hover:text-black",children:"View Business Website"}),(null==h?void 0:h.startsWith("http"))&&(0,l.jsx)(r(),{href:h,target:"_blank",rel:"noopener noreferrer",className:"border px-4 border-white rounded-lg p-2 transition-all hover:bg-white hover:scale-105 hover:text-black",children:"View On Google Maps"})]})]})]})}var c=s(2115);function x(e){let{id:t,name:s,type:n,image:r,address:o,setSelectedBusiness:c}=e;if("none"==s)return(0,l.jsx)(l.Fragment,{});let x=i(s),d=s.length>30?"".concat(s.slice(0,27),"..."):s;return(0,l.jsxs)("button",{onClick:()=>c(t),className:"rounded-lg group p-4 flex flex-col items-stretch justify-start text-center bg-neutral-800 hover:scale-105 transition-all cursor-pointer",children:[(0,l.jsxs)("div",{className:"relative w-full aspect-square overflow-hidden rounded-lg",children:[(null==r?void 0:r.startsWith("http"))?(0,l.jsx)(a.default,{alt:s+" logo",className:"w-full scale-110 group-hover:scale-100 aspect-square mx-auto object-cover transition-all",src:r,width:400,height:400}):(0,l.jsx)("div",{className:"w-full h-full bg-neutral-700 transition-all scale-110 text-white font-bold text-6xl text-center",children:(0,l.jsx)("span",{className:"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]",children:x})}),(0,l.jsx)("div",{className:"absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-[80%] transition-all"}),(0,l.jsx)("span",{className:"absolute left-1/2 translate-x-[-50%] bottom-[-50%] group-hover:bottom-1 w-full text-center text-white opacity-0 group-hover:opacity-100 transition-all",children:"Click to learn more"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 mx-auto select-none mt-3",children:[(0,l.jsx)("h2",{className:"text-lg font-bold select-none",children:d}),"none"!==n&&(0,l.jsx)("p",{className:"text-sm font-bold",children:n}),"none"!==o&&(0,l.jsx)("p",{className:"text-sm",children:o})]})]})}function d(e){let{setSelectedBusiness:t,setBusinesses:s,businesses:a}=e,[n,r]=(0,c.useState)(0),[i,o]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{(async function(){fetch("https://bitsandbitesvercel.vercel.app/api/send_scraped_json").then(e=>e.json()).then(e=>{console.log(e),s(e),o(!1)}).catch(e=>{console.log("Error:",e),o(!1)})})()},[n]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-3xl font-bold text-center mt-6 mb-4",children:"Businesses"}),(0,l.jsx)("div",{className:"px-[10%]",children:(0,l.jsx)("hr",{})}),(0,l.jsxs)("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 grid-rows-[auto,auto,auto] mt-6 px-6",children:[!1,0!==a.length&&a.map(e=>(0,l.jsx)(x,{setSelectedBusiness:t,id:e.id,name:e.name,type:e.type,address:e.address,image:e.image},e.id)),0===a.length&&!i&&(0,l.jsxs)("div",{className:"text-center text-lg mt-6 flex flex-col justify-center items-center",children:[(0,l.jsx)("span",{children:"Unable to load businesses!"}),(0,l.jsx)("button",{onClick:()=>r(n+1),className:"py-1 px-3 mt-4 border rounded-lg b-2 max-w-[200px] transition-all hover:bg-white hover:text-black hover:scale-110",children:"Try Again"})]}),i&&(0,l.jsxs)("div",{className:"text-center text-lg mt-6 flex flex-col justify-center items-center",children:[(0,l.jsxs)("svg",{className:"animate-spin h-5 w-5 text-white mb-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]}),(0,l.jsx)("span",{children:"Loading Businesses..."})]})]})]})}function h(){let[e,t]=(0,c.useState)([]),[s,a]=(0,c.useState)(-1);return(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("nav",{className:"mb-[10px] flex items-center justify-center gap-[20px] px-10 bg-neutral-900 py-4 font-bold text-3xl",children:[(0,l.jsx)("span",{children:"Atlas"})," | ",(0,l.jsx)("span",{children:"Little Portugal"})]}),(0,l.jsxs)("main",{className:"mb-[0px]",children:[(0,l.jsx)(o,{setSelectedBusiness:a,visible:-1!==s,...e.find(e=>e.id===s)||{}}),(0,l.jsx)(d,{businesses:e,setBusinesses:t,setSelectedBusiness:a})]}),(0,l.jsxs)("footer",{className:"flex items-center justify-center text-neutral-500 mt-[50px] mb-[40px]",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-1 text-right mr-4",children:[(0,l.jsx)("p",{className:"",children:"SomewhatMay and BasraAC \xa9 2025"}),(0,l.jsx)("p",{className:"",children:"Bits and Bites Hackathon 2025"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 text-left",children:[(0,l.jsx)(r(),{className:"underline",href:"https://github.com/SomewhatMay/atlas",children:"GitHub"}),(0,l.jsx)("div",{children:"Built with Next.js, Vercel and ❤️"})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[465,441,517,358],()=>t(2364)),_N_E=e.O()}]);