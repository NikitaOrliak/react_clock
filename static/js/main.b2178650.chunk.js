(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(8),a=n.n(c),o=n(3),r=n(5),s=n(6),i=n(4),l=n(2),u=n.n(l),d=(n(13),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.name,e=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.PureComponent);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var k=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(e){e.preventDefault(),t.setState({hasClock:!0})})),this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300)}},{key:"componentDidUpdate",value:function(t,e){this.state.hasClock&&e.clockName!==this.state.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.state.clockName))}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(m,{name:n})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b2178650.chunk.js.map