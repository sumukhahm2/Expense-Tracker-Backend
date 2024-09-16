(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{144:function(e,t,s){},145:function(e,t,s){},149:function(e,t,s){},159:function(e,t){},161:function(e,t){},191:function(e,t){},193:function(e,t){},194:function(e,t){},200:function(e,t){},202:function(e,t){},205:function(e,t){},207:function(e,t){},227:function(e,t){},243:function(e,t){},246:function(e,t){},277:function(e,t,s){},282:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(26);const n=Object(c.b)({name:"auth",initialState:{username:"",email:"",password:"",isLogin:!1,token:null,isPremium:!1},reducers:{signup(e,t){console.log(t),e.username=t.payload.username,e.email=t.payload.email,e.password=t.payload.password},login(e,t){localStorage.setItem("email",t.payload.email),localStorage.setItem("username",t.payload.username),localStorage.setItem("postperscreen",5),console.log(t.payload.token),localStorage.setItem("token",t.payload.token),console.log(t.payload.token),e.isLogin=!0,e.email=t.payload.email,e.password=t.payload.password,e.token=t.payload.token},stayLogin(e){e.isLogin=!0},logout(e){localStorage.removeItem("email"),localStorage.removeItem("username"),localStorage.removeItem("postperscreen"),localStorage.removeItem("token"),e.isLogin=!1},setPremium(e,t){localStorage.setItem("premium",!0),e.isPremium=!0,console.log(t.payload.token),localStorage.setItem("token",t.payload.token),e.token=t.payload.token}}}),r=n.actions;var o=n.reducer;const l=Object(c.b)({name:"expense",initialState:{expenses:[],totalPages:1},reducers:{addExpenses(e,t){console.log(t.payload),e.expenses=e.expenses.concat(t.payload.expenses),e.totalPages=t.payload.totalPages,console.log(e.totalPages)},addExpense(e,t){e.expenses=e.expenses.concat(t.payload.expenses)},deleteExpense(e,t){console.log(t.payload),e.expenses=e.expenses.filter((e=>e.id!=t.payload))}}}),i=l.actions;var d=l.reducer;const j=Object(c.b)({name:"leaderboard",initialState:{expenses:[],totalPages:1},reducers:{addExpense(e,t){e.expenses=[],e.expenses=e.expenses.concat(t.payload.expenses),e.totalPages=t.payload.totalPages}}}),b=j.actions;var h=j.reducer;const x={inDarkMode:"dark-mode"===localStorage.getItem("theme")},m=Object(c.b)({name:"theme",initialState:x,reducers:{changeTheme(e){"dark-mode"===localStorage.getItem("theme")?(localStorage.removeItem("theme"),e.inDarkMode=!1):(localStorage.setItem("theme","dark-mode"),e.inDarkMode=!0),console.log(e.inDarkMode)}}}),p=m.actions;var u=m.reducer;var O=Object(c.a)({reducer:{auth:o,expense:d,leaderboard:h,theme:u}}),g=s(134),f=s.n(g),y=(s(144),s(145),s(4)),v=s(285),w=s(290),N=s(286),k=s(10),S=s(1);var A=e=>{const t=Object(a.useRef)();return Object(S.jsx)(a.Fragment,{children:Object(S.jsx)(v.a,{className:"d-flex justify-content-center ",children:Object(S.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();const s=await fetch("http://51.20.144.40:3000/password/forgotpassword",{method:"POST",body:JSON.stringify({email:t.current.value}),headers:{"Content-Type":"application/json"}}),a=await s.json();console.log(a),a.message?alert(a.message):a.error&&alert(a.error)},children:[Object(S.jsxs)(w.a.Group,{className:"mb-3 ",children:[Object(S.jsx)(w.a.Label,{children:"Enter Your Email"}),Object(S.jsx)(w.a.Control,{type:"email",placeholder:"Enter Email",ref:t,required:!0})]}),Object(S.jsx)(N.a,{type:"submit",className:"btn-success m-2",children:"Submit"}),Object(S.jsx)(N.a,{className:"btn-danger",onClick:e.cancel,children:"Cancel"})]})})})};var C=()=>Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{class:"spinner-grow text-primary",role:"status",children:Object(S.jsx)("span",{class:"sr-only"})}),Object(S.jsx)("div",{class:"spinner-grow text-secondary",role:"status",children:Object(S.jsx)("span",{class:"sr-only"})}),Object(S.jsx)("div",{class:"spinner-grow text-success",role:"status",children:Object(S.jsx)("span",{class:"sr-only"})}),Object(S.jsx)("div",{class:"spinner-grow text-danger",role:"status",children:Object(S.jsx)("span",{class:"sr-only"})}),Object(S.jsx)("div",{class:"spinner-grow text-warning",role:"status",children:Object(S.jsx)("span",{class:"sr-only"})}),Object(S.jsx)("div",{class:"spinner-grow text-info",role:"status",children:Object(S.jsx)("span",{class:"sr-only"})}),Object(S.jsx)("div",{class:"spinner-grow text-dark",role:"status",children:Object(S.jsx)("span",{class:"sr-only"})})]});s(149);var E=()=>{const e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useRef)(),[n,o]=Object(a.useState)(null),[l,i]=Object(a.useState)(null),[d,j]=Object(a.useState)(!1),[b,h]=Object(a.useState)(!1),[x,m]=Object(a.useState)(!1),p=Object(k.b)();return console.log(d),Object(S.jsxs)(a.Fragment,{children:[!b&&Object(S.jsx)(v.a,{className:"d-flex justify-content-center ",children:Object(S.jsxs)(w.a,{className:"w-50 border border-success  rounded form",onSubmit:async s=>{let a,n;s.preventDefault(),d?(m(!0),n={email:c.current.value,password:t.current.value},a=await fetch("http://51.20.144.40:3000/user/auth-login",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})):(m(!0),n={username:e.current.value,email:c.current.value,password:t.current.value},console.log(n),a=await fetch("http://51.20.144.40:3000/user/auth-signup",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}));const l=await a.json();if(m(!1),console.log(l),l.error)if(d)i(l.error);else{const e=l.error;i(e)}else d?(console.log(l.token),alert(l.message),p(r.login({...n,token:l.token})),window.location.reload()):(o("User Created Successfully"),p(r.signup(n)))},children:[Object(S.jsx)(w.a.Text,{className:"fs-1 text-success fw-bold",children:d?"Login":"Sign Up"}),n&&Object(S.jsx)("h5",{className:"text-info",children:n}),l&&Object(S.jsx)("h5",{className:"text-danger",children:l}),!d&&Object(S.jsxs)(w.a.Group,{className:"mb-3 mx-2",controlId:"formBasicPassword",children:[Object(S.jsx)(w.a.Label,{className:"fw-bold",children:"Name"}),Object(S.jsx)(w.a.Control,{type:"text",placeholder:"Name",className:"border border-success",ref:e,required:!0})]}),Object(S.jsxs)(w.a.Group,{className:"mb-3  mx-2",controlId:"formBasicEmail",children:[Object(S.jsx)(w.a.Label,{className:"fw-bold",children:"Email address"}),Object(S.jsx)(w.a.Control,{type:"email",placeholder:"Enter email",className:"border border-success",ref:c,required:!0}),Object(S.jsx)(w.a.Text,{className:"text-muted text-success",children:"We'll never share your email with anyone else."})]}),Object(S.jsxs)(w.a.Group,{className:"mb-3  mx-2",controlId:"formBasicPassword",children:[Object(S.jsx)(w.a.Label,{className:"fw-bold",children:"Password"}),Object(S.jsx)(w.a.Control,{type:"password",placeholder:"Password",className:"border border-success",ref:t,required:!0})]}),!d&&Object(S.jsxs)(w.a.Group,{className:"mb-3  mx-2",controlId:"formBasicPassword",children:[Object(S.jsx)(w.a.Label,{className:"fw-bold",children:"Confirm Password"}),Object(S.jsx)(w.a.Control,{type:"password",placeholder:"Confirm Password",className:"border border-success",ref:s,required:!0})]}),Object(S.jsx)(N.a,{variant:"success",type:"submit",className:"fw-bold",children:d?"Login":"SignUp"}),x&&Object(S.jsx)(C,{}),Object(S.jsx)("br",{}),Object(S.jsx)("button",{type:"button",onClick:()=>{j((e=>!e))},className:"m-2 border border-none bg-none text-success fw-bold",children:d?"Don`t Have An Account":"Have An Account?"}),d&&Object(S.jsx)("button",{type:"button",onClick:()=>{h(!0)},className:"m-2 border border-none bg-none text-success fw-bold",children:"Forgot Password?"})]})}),b&&Object(S.jsx)(A,{cancel:()=>{h(!1)}})]})},P=s(288),I=s(135),D=s(287),L=s(292);var T=e=>{let{total:t,current:s,onChangePage:a}=e;console.log(t+" "+s+" ");let c=[];s>1&&c.push(Object(S.jsx)(L.a.Prev,{onClick:()=>{a(s-1)}},"prev"));for(let n=1;n<=t;n++)c.push(Object(S.jsx)(L.a.Item,{"data-page":n,active:n===s,onClick:()=>{a(n)},children:n},n));return s<t&&c.push(Object(S.jsx)(L.a.Next,{onClick:()=>{a(s+1)}},"next")),Object(S.jsx)(L.a,{children:c})};var M=()=>{const[e,t]=Object(a.useState)(1),[s,c]=Object(a.useState)(localStorage.getItem("postperscreen")),n=Object(k.c)((e=>e.expense.expenses)),r=Object(k.c)((e=>e.expense.totalPages)),o=Object(k.b)(),l=async e=>{const t=await fetch("http://51.20.144.40:3000/expense/delete-expense/".concat(e),{method:"DELETE",headers:{Authorization:localStorage.getItem("token")}});await t.json();o(i.deleteExpense(e))};console.log(r);const d=Object(a.useCallback)((e=>{console.log("hi"),t(e)}),[]);console.log(n.length%s);const j=n.length%s===0?Math.floor(n.length/s):Math.floor(n.length/s)+1;return Object(S.jsx)(a.Fragment,{children:Object(S.jsxs)(v.a,{children:[Object(S.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,variant:"",className:"",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{className:"bg-info ",children:"#"}),Object(S.jsx)("th",{className:"bg-info ",children:"Expense Amount"}),Object(S.jsx)("th",{className:"bg-info",children:"Description"}),Object(S.jsx)("th",{className:"bg-info",children:"Category  "}),Object(S.jsx)("th",{className:"bg-info",children:"Action  "})]})}),Object(S.jsx)("tbody",{children:n.slice((e-1)*s,e*s).map(((t,a)=>Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:(e-1)*s+a+1}),Object(S.jsx)("td",{children:t.expenseAmount}),Object(S.jsx)("td",{children:t.description}),Object(S.jsx)("td",{children:t.category}),Object(S.jsx)("td",{children:Object(S.jsx)(N.a,{className:"btn-danger",onClick:l.bind(null,t.id),children:"Delete"})})]},t.id)))})]}),Object(S.jsxs)(P.a,{className:"",children:[Object(S.jsx)(I.a,{className:"",children:Object(S.jsx)(T,{total:j,current:e,onChangePage:d})}),Object(S.jsx)(I.a,{className:"col-2",children:Object(S.jsxs)("select",{onChange:e=>{console.log(e.target.value),localStorage.setItem("postperscreen",e.target.value),c(e.target.value)},children:[Object(S.jsx)("option",{value:"5",children:"5"}),Object(S.jsx)("option",{value:"10",children:"10"}),Object(S.jsx)("option",{value:"20",children:"20"}),Object(S.jsx)("option",{value:"50",children:"50"})]})})]})]})})};var G=()=>{const[e,t]=Object(a.useState)(1),[s,c]=Object(a.useState)(localStorage.getItem("leaderboardpostperscreen")),n=Object(k.c)((e=>e.leaderboard.expenses)),r=Object(k.c)((e=>e.leaderboard.totalPages)),o=Object(a.useCallback)((e=>{console.log("hi"),t(e)}),[]);return Object(S.jsx)(a.Fragment,{children:Object(S.jsxs)(v.a,{children:[Object(S.jsxs)(P.a,{children:[Object(S.jsx)("h2",{children:"LeaderBoard"}),Object(S.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,variant:"",className:"",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{className:"bg-info ",children:"#"}),Object(S.jsx)("th",{className:"bg-info ",children:"User Name"}),Object(S.jsx)("th",{className:"bg-info",children:"Total Expenses"})]})}),Object(S.jsx)("tbody",{children:n.slice((e-1)*s,e*s).map(((e,t)=>Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:t+1}),Object(S.jsx)("td",{children:e.username}),Object(S.jsx)("td",{children:e.totalExpenses})]})))})]})]}),Object(S.jsxs)(P.a,{className:"",children:[Object(S.jsx)(I.a,{className:"",children:Object(S.jsx)(T,{total:r,current:e,onChangePage:o})}),Object(S.jsx)(I.a,{className:"col-2",children:Object(S.jsxs)("select",{onChange:e=>{console.log(e.target.value),localStorage.setItem("leaderboardpostperscreen",e.target.value),c(e.target.value)},children:[Object(S.jsx)("option",{value:"5",children:"5"}),Object(S.jsx)("option",{value:"10",children:"10"}),Object(S.jsx)("option",{value:"20",children:"20"}),Object(S.jsx)("option",{value:"50",children:"50"})]})})]})]})})};s(151);var J=()=>{const[e,t]=Object(a.useState)(!1),[s,c]=Object(a.useState)(!1),n=Object(k.c)((e=>e.auth.isPremium)),o=Object(a.useRef)(),l=Object(a.useRef)(),d=Object(a.useRef)(),j=Object(k.b)();return Object(S.jsx)(a.Fragment,{children:Object(S.jsxs)(P.a,{children:[Object(S.jsx)(I.a,{className:"col-8",children:Object(S.jsx)(v.a,{className:"d-flex justify-content-center mb-3 shadow-lg border p-2",children:Object(S.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();const s={expenseAmount:o.current.value,description:l.current.value,category:d.current.value,token:localStorage.getItem("token")};console.log(s);const a=await fetch("http://51.20.144.40:3000/expense/add-expense",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}),c=await a.json();console.log(c),j(i.addExpense({expenses:c.expenseData})),t(!1)},children:[Object(S.jsx)(w.a.Text,{className:"text-warning fs-1 fw-bold",children:"Add Expense Details"}),Object(S.jsxs)(w.a.Group,{className:"mb-3 ",controlId:"expenseAmount",children:[Object(S.jsx)(w.a.Label,{className:"fw-bold",children:"Expense Amount"}),Object(S.jsx)(w.a.Control,{type:"number",placeholder:"Enter Expense Amount",className:"border border-warning",ref:o})]}),Object(S.jsxs)(w.a.Group,{className:"mb-3",controlId:"ExpenseDescription",children:[Object(S.jsx)(w.a.Label,{className:"fw-bold",children:"Description"}),Object(S.jsx)(w.a.Control,{type:"text",placeholder:"Enter Description",className:"border border-warning",ref:l})]}),Object(S.jsx)(w.a.Label,{className:"fw-bold",children:"Category"}),Object(S.jsxs)(w.a.Select,{"aria-label":"Default select example",className:"mb-3 border border-warning",ref:d,children:[Object(S.jsx)("option",{children:"Select Category--"}),Object(S.jsx)("option",{value:"food",children:"Food"}),Object(S.jsx)("option",{value:"shoping",children:"Shoping"}),Object(S.jsx)("option",{value:"traveling",children:"Traveling"}),Object(S.jsx)("option",{value:"other",children:"Other"})]}),Object(S.jsx)(N.a,{variant:"warning",type:"submit",className:"text-light fw-bold",children:"Add Expense"})]})})}),Object(S.jsxs)(I.a,{children:[Object(S.jsxs)(P.a,{children:[!n&&Object(S.jsx)(N.a,{variant:"primary",onClick:async e=>{const t=await(e=>new Promise((t=>{const s=document.createElement("script");s.src=e,s.onload=()=>{t(!0)},s.onerror=()=>{t(!1)},document.body.appendChild(s)})))("https://checkout.razorpay.com/v1/checkout.js");if(!t)return void alert("Something went wrong");const s=await fetch("http://51.20.144.40:3000/expense/buy-premium",{method:"GET",headers:{Authorization:localStorage.getItem("token")}}),a=await s.json();console.log(a);var c={key_id:a.key_id,order_id:a.order.id,handler:async function(e){const t=await fetch("http://51.20.144.40:3000/expense/update-transaction",{method:"POST",body:JSON.stringify({order_id:e.razorpay_order_id,payment_id:e.razorpay_payment_id}),headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}),s=await t.json();console.log(s),s.token?(j(r.setPremium({token:s.token})),alert("You Are A Premium User Now")):alert(s.message)}};const n=new window.Razorpay(c);console.log(n),n.open(),e.preventDefault()},className:"fw-bolder",children:"Buy Premium"}),n&&Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{children:"You Are A Premium User"}),Object(S.jsx)(N.a,{className:"mb-3",onClick:e?()=>{t(!1)}:async()=>{const e=await fetch("http://51.20.144.40:3000/expense/get-allexpenses",{method:"GET"}),s=await e.json();console.log(s.expenses),j(b.addExpense(s)),t(!0)},children:e?"Hide LeaderBoard":"Show LeaderBoard"})]})]}),Object(S.jsx)(P.a,{children:e&&Object(S.jsx)(G,{})})]})]})})},R=s(62),z=s.n(R);var B=e=>{const t=e.expense.reduce(((e,t)=>(console.log(e+" "+t),e+t.expenseAmount)),0);return Object(S.jsxs)(v.a,{children:[Object(S.jsx)("h3",{children:e.month}),Object(S.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,variant:"",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{className:"bg-info",children:"Date"}),Object(S.jsx)("th",{className:"bg-info",children:"Description"}),Object(S.jsx)("th",{className:"bg-info",children:"Category  "}),Object(S.jsx)("th",{className:"bg-info ",children:"Income Amount"}),Object(S.jsx)("th",{className:"bg-info ",children:"Expense Amount"})]})}),Object(S.jsxs)("tbody",{children:[e.expense.map((e=>Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:z()(e.createdAt).utc().format("DD-MM-YYYY")}),Object(S.jsx)("td",{children:e.description}),Object(S.jsx)("td",{children:e.category}),Object(S.jsx)("td",{children:"0"}),Object(S.jsx)("td",{children:e.expenseAmount})]},e.id))),Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsx)("td",{className:"fw-bold",children:"Total Expenses"}),Object(S.jsx)("td",{className:"fw-bold",children:t})]})]})]})]})},F=s(137);const _=e=>{let t=z()(e).utc().format("MM");return t<10&&(t=t.substring(1)),Y(t-1)},Y=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];var U=()=>{const e=Object(k.c)((e=>e.expense.expenses)),[t,s]=Object(a.useState)(""),c=Object(a.useRef)();console.log(e);const n=[e.filter((e=>"January"===_(e.createdAt))),e.filter((e=>"February"===_(e.createdAt))),e.filter((e=>"March"===_(e.createdAt))),e.filter((e=>"April"===_(e.createdAt))),e.filter((e=>"May"===_(e.createdAt))),e.filter((e=>"June"===_(e.createdAt))),e.filter((e=>"July"===_(e.createdAt))),e.filter((e=>"August"===_(e.createdAt))),e.filter((e=>"September"===_(e.createdAt))),e.filter((e=>"October"===_(e.createdAt))),e.filter((e=>"November"===_(e.createdAt))),e.filter((e=>"December"===_(e.createdAt)))];console.log(n);return Object(S.jsxs)(v.a,{children:[Object(S.jsx)("h1",{children:"Day To Day Expenses"}),n.map(((e,t)=>Object(S.jsx)(S.Fragment,{children:e.length>0&&Object(S.jsx)(B,{expense:e,month:Y(t)})}))),Object(S.jsx)(N.a,{onClick:async()=>{const e=await fetch("http://51.20.144.40:3000/expense/download-expense",{method:"GET",headers:{Authorization:localStorage.getItem("token")}}),t=await e.json();t.url&&(console.log(t.url),s(t.url)),c.current.link.click()},children:"Download CSV"}),Object(S.jsx)(F.CSVLink,{data:t,filename:"transactions.csv",className:"hidden",ref:c,target:"_blank"})]})},q=s(289),H=s(291);s(277);var V=()=>{const e=Object(k.c)((e=>e.auth.isPremium)),t=Object(k.c)((e=>e.auth.isLogin)),s=Object(k.c)((e=>e.theme.inDarkMode)),a=Object(y.p)(),c=Object(k.b)();return Object(S.jsx)(q.a,{expand:"lg",className:"bg-body-tertiary ",children:Object(S.jsxs)(v.a,{children:[Object(S.jsx)(q.a.Brand,{href:"#home",className:"bg-success border border-ridge rounded text-light p-1 m-2 ",children:"MyExpenses"}),Object(S.jsx)(q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)(q.a.Collapse,{id:"basic-navbar-nav",children:Object(S.jsxs)(H.a,{className:"me-auto ",children:[Object(S.jsx)(H.a.Link,{href:t?"/add-expense":"/",className:"fw-bolder",children:t?"Home":""}),t&&Object(S.jsx)(H.a.Link,{href:"/view",className:"fw-bolder",children:"View Expenses"}),e&&t&&Object(S.jsx)(H.a.Link,{href:"/report",className:"fw-bolder",children:"Generate Report"}),t&&Object(S.jsx)("button",{className:"border-0 bg-transparent fw-bolder",onClick:()=>{c(r.logout()),a("/")},children:"Logout"}),Object(S.jsx)(N.a,{onClick:e=>{e.preventDefault(),c(p.changeTheme())},className:"mx-3 nav-link",children:s?Object(S.jsxs)("span",{children:[Object(S.jsx)("i",{className:"fa-solid fa-sun",style:{color:"#d4ea34"}})," Light Mode"]}):Object(S.jsxs)("span",{children:[Object(S.jsx)("i",{className:"fa-regular fa-moon",style:{color:"#cf642a"}})," Dark Mode"]})})]})})]})})};var W=function(){const e=Object(k.b)(),t=Object(k.c)((e=>e.theme.inDarkMode));Object(a.useEffect)((()=>{localStorage.getItem("email")&&e(r.stayLogin())}),[]),Object(a.useEffect)((()=>{document.body.style.backgroundColor=t?"#292c35":"#fff",document.body.style.color=t?"#fff":"#292c35"}),[t]),Object(a.useEffect)((()=>{!async function(){const t=await fetch("http://51.20.144.40:3000/user/get-premium",{method:"GET",headers:{Authorization:localStorage.getItem("token")}}),s=await t.json();s.user&&s.user.isPremium&&e(r.setPremium({token:localStorage.getItem("token")}))}()}),[]),Object(a.useEffect)((()=>{!async function(){const t=await fetch("http://51.20.144.40:3000/expense/get-expense",{method:"GET",headers:{Authorization:localStorage.getItem("token")}}),s=await t.json();console.log(s),e(i.addExpenses({expenses:s.expenseData,totalPages:s.totalPages}))}()}),[]);const s=Object(k.c)((e=>e.auth.isLogin));return console.log(s),Object(S.jsxs)("div",{className:"App",children:[Object(S.jsxs)("header",{className:"App-header",children:[Object(S.jsx)(V,{}),Object(S.jsx)("hr",{})]}),Object(S.jsx)("main",{className:"app-main",children:Object(S.jsxs)(y.d,{children:[Object(S.jsx)(y.b,{path:s?"/":"/add-expense",element:s?Object(S.jsx)(y.a,{to:"/add-expense"}):Object(S.jsx)(y.a,{to:"/"})}),Object(S.jsx)(y.b,{path:"/",element:Object(S.jsx)(E,{})}),Object(S.jsx)(y.b,{path:"/add-expense",element:Object(S.jsx)(J,{})}),Object(S.jsx)(y.b,{path:"/report",element:Object(S.jsx)(U,{})}),Object(S.jsx)(y.b,{path:"/view",element:Object(S.jsx)(M,{})})]})})]})},K=s(53);s(280);f.a.createRoot(document.getElementById("root")).render(Object(S.jsx)(k.a,{store:O,children:Object(S.jsx)(K.a,{children:Object(S.jsx)(W,{})})}))}},[[282,1,2]]]);
//# sourceMappingURL=main.3f6f17cd.chunk.js.map