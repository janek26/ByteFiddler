
          window.__NEXT_REGISTER_PAGE('/logicalPage', function() {
            var comp = module.exports=webpackJsonp([3],{123:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=u(l),a=n(17),i=(u(a),function(e){var t=e.onClick,n=e.text;return r.default.createElement("button",{onClick:t},n)});t.default=i},255:function(e,t,n){e.exports=n(256)},256:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),r=u(l),a=n(1),i=u(a),f=n(2),o=u(f),d=n(5),c=u(d),s=n(6),p=u(s),m=n(18),_=u(m),h=n(0),v=u(h),E=n(19),y=u(E),g=n(15),b=n(21),O=n(257),k=u(O),C=n(118),M=u(C),x=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return v.default.createElement("div",{className:"jsx-3700525296"},v.default.createElement(k.default,null),v.default.createElement("div",{className:"jsx-3700525296 links"},v.default.createElement(M.default,{href:"/"},v.default.createElement("span",{className:"jsx-3700525296"},"Zur Index Seite"))),v.default.createElement(_.default,{styleId:"3700525296",css:[".links.jsx-3700525296{position:absolute;top:0;right:0;padding:1em;}",".links.jsx-3700525296>*.jsx-3700525296{cursor:pointer;}"]}))}}]),t}(v.default.Component);t.default=(0,y.default)(b.initStore)((0,g.connect)(function(e){return e})(x))},257:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),r=u(l),a=n(1),i=u(a),f=n(2),o=u(f),d=n(5),c=u(d),s=n(6),p=u(s),m=n(0),_=u(m),h=n(19),v=u(h),E=n(15),y=n(21),g=n(54),b=u(g),O=n(258),k=u(O),C=n(260),M=u(C),x=n(261),j=u(x),R=n(262),S=u(R),N=function(e){return _.default.createElement("h3",null,e.topic)},A=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return _.default.createElement("div",null,_.default.createElement(S.default,null),_.default.createElement(k.default,{name:"first",topic:"Operand 1"}),_.default.createElement("br",null),_.default.createElement(M.default,null),_.default.createElement(k.default,{name:"second",topic:"Operand 2"}),_.default.createElement(N,{topic:"Result"}),_.default.createElement(b.default,{digits:this.props.result,fixedNumberOfBits:8,id:"resultBitDisplay"}),_.default.createElement(j.default,null))}}]),t}(_.default.Component);t.default=(0,v.default)(y.initStore)((0,E.connect)(function(e){return e.logicalReducer})(A))},258:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),r=u(l),a=n(1),i=u(a),f=n(2),o=u(f),d=n(5),c=u(d),s=n(6),p=u(s),m=n(0),_=u(m),h=n(19),v=u(h),E=n(15),y=n(21),g=n(54),b=u(g),O=n(259),k=u(O),C=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=(this.props.name,this.props.topic),t=[];return"first"==this.props.name?t=this.props.bits0:"second"==this.props.name&&(t=this.props.bits1),_.default.createElement("div",null,_.default.createElement("h3",null,e),_.default.createElement(b.default,{digits:t,fixedNumberOfBits:8,name:this.props.name}),_.default.createElement(k.default,{name:this.props.name}))}}]),t}(_.default.Component);t.default=(0,v.default)(y.initStore)((0,E.connect)(function(e){return e.logicalReducer})(C))},259:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),r=u(l),a=n(1),i=u(a),f=n(2),o=u(f),d=n(5),c=u(d),s=n(6),p=u(s),m=n(0),_=u(m),h=n(20),v=n(19),E=u(v),y=n(15),g=n(21),b=n(81),O=n(123),k=u(O),C=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.name,t=this.props,n=[7,6,5,4,3,2,1,0].map(function(n){return function(u){return t.changeBit(e,n)}}),u=[7,6,5,4,3,2,1,0].map(function(e){return _.default.createElement(k.default,{onClick:n[e],key:e,text:"Bit "+e})}),l=["NOT","SHL","SHR"].map(function(n){return function(u){return t.bitgroupAction(e,n)}}),r=["!","<<< shift","shift >>>"].map(function(e,t){return _.default.createElement(k.default,{onClick:l[t],key:e,text:e.toLowerCase()})});return _.default.createElement("div",null,u,r)}}]),t}(_.default.Component);t.default=(0,E.default)(g.initStore)((0,y.connect)(function(e){return e},function(e){return{changeBit:(0,h.bindActionCreators)(b.changeBit,e),bitgroupAction:(0,h.bindActionCreators)(b.bitgroupAction,e)}})(C))},260:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),r=u(l),a=n(1),i=u(a),f=n(2),o=u(f),d=n(5),c=u(d),s=n(6),p=u(s),m=n(0),_=u(m),h=n(20),v=n(19),E=u(v),y=n(15),g=n(21),b=n(81),O=n(123),k=u(O),C=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=["AND","OR","XOR","XNOR","ADD","SUB","MUL","DIV"].map(function(t){return function(n){return e.logicalOperation(t)}}),n=["AND","OR","XOR","XNOR","ADD","SUB","MUL","DIV"].map(function(e,n){return _.default.createElement(k.default,{onClick:t[n],key:e,text:e.toLowerCase()})});return _.default.createElement("div",null,n)}}]),t}(_.default.Component);t.default=(0,E.default)(g.initStore)((0,y.connect)(function(e){return e},function(e){return{logicalOperation:(0,h.bindActionCreators)(b.logicalOperation,e)}})(C))},261:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),r=u(l),a=n(1),i=u(a),f=n(2),o=u(f),d=n(5),c=u(d),s=n(6),p=u(s),m=n(0),_=u(m),h=n(19),v=u(h),E=n(15),y=n(21),g=n(54),b=u(g),O=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return console.log(this.props.flags),_.default.createElement("div",null,_.default.createElement("h3",null,"Flags"),_.default.createElement(b.default,{digits:[this.props.flags.zero,this.props.flags.carry,this.props.flags.parity],fixedNumberOfBits:3,name:"flags"}),_.default.createElement("span",null,"Zero "),_.default.createElement("span",null,"Carry "),_.default.createElement("span",null,"Parity"))}}]),t}(_.default.Component);t.default=(0,v.default)(y.initStore)((0,E.connect)(function(e){return e.logicalReducer})(O))},262:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),r=u(l),a=n(1),i=u(a),f=n(2),o=u(f),d=n(5),c=u(d),s=n(6),p=u(s),m=n(0),_=u(m),h=(n(20),n(19)),v=u(h),E=n(15),y=n(21),g=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return _.default.createElement("div",null,_.default.createElement("h3",null,"Decimal Values"),_.default.createElement("div",null,"Operand1: ",this.props.decValues.bits0),_.default.createElement("div",null,"Operand2: ",this.props.decValues.bits1),_.default.createElement("div",null,"Signed Result: ",this.props.decValues.result))}}]),t}(_.default.Component);t.default=(0,v.default)(y.initStore)((0,E.connect)(function(e){return e.logicalReducer})(g))}},[255]);
            return { page: comp.default }
          })
        