(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(0),n=s.n(a),r=s(28),c=s.n(r),o=s(11),d=s(12),j=s(14),u=s(13),l=s(17),b=s.n(l),m=s(29),v=s(30),h=s.n(v),O=s(5),p=s.n(O);s(58);function x(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(i.jsxs)("div",{className:"movie",children:[Object(i.jsx)("div",{className:"movie__poster",children:Object(i.jsx)("img",{src:n,alt:s,title:s})}),Object(i.jsx)("div",{className:"movie__title",children:s}),Object(i.jsx)("div",{className:"movie_year",children:t}),Object(i.jsx)("div",{className:"movie_summary",children:a}),Object(i.jsx)("div",{className:"genres",children:r.map((function(e,t){return Object(i.jsxs)("span",{children:["#",e]},t)}))})]})}x.PropsTypes={id:p.a.number.isRequired,year:p.a.number.isRequired,title:p.a.string.isRequired,summary:p.a.string.isRequired,poster:p.a.string.isRequired,genres:p.a.arrayOf(p.a.string).isRequired};var g=x,f=(s(59),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovieList=Object(m.a)(b.a.mark((function t(){var s,i,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=raiting");case 2:s=t.sent,i=s.status,a=s.data.data.movies,200===i&&e.setState((function(){return{movies:a,isLoading:!1}}));case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovieList()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(i.jsx)("section",{className:"section",children:t?Object(i.jsxs)("div",{className:"loading-spinner",children:[Object(i.jsxs)("div",{className:"sk-double-bounce",children:[Object(i.jsx)("div",{className:"sk-child sk-double-bounce1"}),Object(i.jsx)("div",{className:"sk-child sk-double-bounce2"})]}),Object(i.jsx)("div",{className:"loading-spinner__txt",children:"Loading...."})]}):Object(i.jsx)("div",{className:"movies",children:s.map((function(e){return Object(i.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.PureComponent));var y=function(){return Object(i.jsx)("h1",{children:"this is about"})},N=(s(60),s(10));var _=function(){return Object(i.jsx)(N.a,{basename:"/react-movie-app",children:Object(i.jsxs)("div",{className:"navigation",children:[Object(i.jsx)(N.b,{to:"/",activeStyle:{fontWeight:"bold",color:"red"},children:"Home"}),Object(i.jsx)(N.b,{to:"/about",activeStyle:{fontWeight:"bold",color:"red"},children:"About"})]})})},k=s(2),q=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_,{}),Object(i.jsx)(N.a,{basename:"/react-movie-app",children:Object(i.jsxs)(k.c,{children:[Object(i.jsx)(k.a,{exact:!0,path:"/",children:Object(i.jsx)(f,{})}),Object(i.jsx)(k.a,{path:"/about",children:Object(i.jsx)(y,{})})]})})]})}}]),s}(n.a.PureComponent);c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(q,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.9acc44f4.chunk.js.map