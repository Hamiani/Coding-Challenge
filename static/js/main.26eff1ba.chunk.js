(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(51)},25:function(e,t,a){},31:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),i=a.n(s),o=(a(25),a(2)),c=a(3),l=a(5),d=a(4),u=a(6),m=a(9),p=a(17),h=a.n(p),f=a(8),v=a.n(f),g=(a(31),function(e){return r.a.createElement("div",null,e.repositories.map(function(t,a){return r.a.createElement("div",{className:"Repository",key:a},r.a.createElement("div",{className:"image"},r.a.createElement("img",{alt:"",height:"150",width:"150",src:t.owner.avatar_url})),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"repoName"}," ",t.name," "),r.a.createElement("p",{className:"repoDescription"}," ",t.description," "),r.a.createElement("div",{className:"detailss"},r.a.createElement("div",{className:"stars"},"Stars: ",e.handleNumber(t.stargazers_count)),r.a.createElement("div",{className:"issues"},"ISSUES: ",e.handleNumber(t.open_issues_count)),r.a.createElement("div",{className:"submitted"},"SUBMMITED"," "+e.handleDaysDifference(t.created_at.split("T")[0])+" ","DAYS AGO BY ",t.owner.login))))}))}),b=a(18),E=a.n(b);var D=100,w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={repositories:[],page:1,hasMore:!0},a.loadRepositories=function(){var e=a.state,t=e.page,n=e.repositories,r=new Date;r.setDate(r.getDate()-30),function(e,t,a){var n="https://api.github.com/search/repositories?q=created:>"+e+"&sort=stars&order=desc&page="+t+"&per_page="+a;return E.a.get(n)}(r.toISOString().split("T")[0],t,D).then(function(e){return a.setState({repositories:[].concat(Object(m.a)(n),Object(m.a)(e.data.items)),page:t+1})}),t>10&&a.setState({hasMore:!1})},a.handleNumber=function(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e},a.handleDaysDifference=function(e){var t=new Date,a=v()(t.toISOString().split("T")[0],"YYYY-MM-DD"),n=v()(e,"YYYY-MM-DD");return a.diff(n,"days")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{key:0,className:"loader"},"Loading...");return r.a.createElement(h.a,{pageStart:this.state.page,loadMore:this.loadRepositories,hasMore:this.state.hasMore,loader:e},r.a.createElement(g,{repositories:this.state.repositories,handleNumber:this.handleNumber,handleDaysDifference:this.handleDaysDifference}))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(w,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.26eff1ba.chunk.js.map