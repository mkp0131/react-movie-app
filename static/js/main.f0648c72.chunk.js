(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},67:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i(0),n=i.n(a),c=i(28),r=i.n(c),o=i(11),d=i(12),j=i(14),l=i(13),u=i(17),b=i.n(u),m=i(29),v=i(30),h=i.n(v),p=i(5),O=i.n(p);i(58);function x(e){e.id;var t=e.year,i=e.title,a=e.summary,n=e.poster,c=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("div",{className:"movie__poster",children:Object(s.jsx)("img",{src:n,alt:i,title:i})}),Object(s.jsx)("div",{className:"movie__title",children:i}),Object(s.jsx)("div",{className:"movie_year",children:t}),Object(s.jsx)("div",{className:"movie_summary",children:a}),Object(s.jsx)("div",{className:"genres",children:c.map((function(e,t){return Object(s.jsxs)("span",{children:["#",e]},t)}))})]})}x.PropsTypes={id:O.a.number.isRequired,year:O.a.number.isRequired,title:O.a.string.isRequired,summary:O.a.string.isRequired,poster:O.a.string.isRequired,genres:O.a.arrayOf(O.a.string).isRequired};var g=x,f=(i(59),function(e){Object(j.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(o.a)(this,i);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovieList=Object(m.a)(b.a.mark((function t(){var i,s,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=raiting");case 2:i=t.sent,s=i.status,a=i.data.data.movies,200===s&&e.setState((function(){return{movies:a,isLoading:!1}}));case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(i,[{key:"componentDidMount",value:function(){this.getMovieList()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,i=e.movies;return Object(s.jsx)("section",{className:"section",children:t?Object(s.jsxs)("div",{className:"loading-spinner",children:[Object(s.jsxs)("div",{className:"sk-double-bounce",children:[Object(s.jsx)("div",{className:"sk-child sk-double-bounce1"}),Object(s.jsx)("div",{className:"sk-child sk-double-bounce2"})]}),Object(s.jsx)("div",{className:"loading-spinner__txt",children:"Loading...."})]}):Object(s.jsx)("div",{className:"movies",children:i.map((function(e){return Object(s.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),i}(n.a.PureComponent));var y=function(){return Object(s.jsx)("h1",{children:"this is about"})},N=(i(60),i(9));var _=function(){return Object(s.jsx)(N.a,{basename:"/react-movie-app",children:Object(s.jsxs)("div",{className:"navigation",children:[Object(s.jsx)(N.b,{to:"".concat("/react-movie-app","/"),activeStyle:{fontWeight:"bold",color:"red"},children:"Home"}),Object(s.jsx)(N.b,{to:"".concat("/react-movie-app","/about"),activeStyle:{fontWeight:"bold",color:"red"},children:"About"}),Object(s.jsx)(N.b,{to:"".concat("/react-movie-app","/ddd"),activeStyle:{fontWeight:"bold",color:"red"},children:"ddd"})]})})},k=i(2),q=function(e){Object(j.a)(i,e);var t=Object(l.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(N.a,{basename:"/react-movie-app",children:Object(s.jsxs)(k.c,{children:[Object(s.jsx)(k.a,{exact:!0,path:"/",children:Object(s.jsx)(f,{})}),Object(s.jsx)(k.a,{path:"/about",children:Object(s.jsx)(y,{})})]})})]})}}]),i}(n.a.PureComponent);r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(q,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f0648c72.chunk.js.map