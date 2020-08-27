(this["webpackJsonpcard-game"]=this["webpackJsonpcard-game"]||[]).push([[0],{15:function(n,e,t){n.exports=t(23)},20:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(7),i=t.n(o),u=(t(20),t(8)),c=t(9),s=t(13),l=t(14),f=t(1),d=t(2);function m(){var n=Object(f.a)(["\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n  color: ","\n"]);return m=function(){return n},n}function h(){var n=Object(f.a)(["\n  position: absolute;\n  top: ",";\n  right: ",";\n  left: ",";\n  bottom: ",";\n  color: ","\n"]);return h=function(){return n},n}function g(){var n=Object(f.a)(["\n  position: relative;\n  margin-right: 1rem;\n  width: 8rem;\n  height: 12rem;\n  border: 1px solid;\n  border-radius: 8px;\n  background: #fff;\n  font-family: 'Overpass', Regular;\n\n  @media(max-width: 648px) {\n    margin-bottom: 1rem;\n  }\n"]);return g=function(){return n},n}var p=d.a.div(g()),v=d.a.p(h(),(function(n){return n.first&&"0"}),(function(n){return!n.first&&".5rem"}),(function(n){return n.first&&".5rem"}),(function(n){return!n.first&&"0"}),(function(n){return n.suitColor?"red":"#000"})),b=d.a.p(m(),(function(n){return n.suitColor?"red":"#000"}));var x=function(n){var e=n.card,t="paus"!==e.suit&&"espadas"!==e.suit;return a.a.createElement(p,null,a.a.createElement(v,{first:!0,suitColor:t},e.label),a.a.createElement(b,{suitColor:t},function(){switch(e.suit){case"copas":return"\u2665";case"paus":return"\u2663";case"espadas":return"\u2660";case"ouros":return"\u2666";default:return""}}()),a.a.createElement(v,{suitColor:t},e.label))};function w(){var n=Object(f.a)(["\n  margin-right: .5rem;\n  margin-top: ",";\n  margin-left: ",";\n  width: ",";\n  height: ",";\n  color: ",";\n  font-family: 'Overpass', Bold;\n  font-size: .9rem;\n  font-weight: ",";\n  border-radius: 8px;\n  border: none;\n  border-bottom: ",";\n  background: ",";\n  cursor: pointer;\n\n  @media(max-width: 648px) {\n    margin: 0;\n    margin: .5rem;\n    width: 16rem;\n  }\n"]);return w=function(){return n},n}var C=d.a.button(w(),(function(n){return n.marginTop}),(function(n){return n.marginLeft}),(function(n){return n.width?n.width:"18rem"}),(function(n){return n.height?n.height:"4rem"}),(function(n){return n.color?n.color:"#fff"}),(function(n){return n.fontWeight?n.fontWeight:"800"}),(function(n){return n.borderBottom}),(function(n){return n.bg?n.bg:"#20bf55"})),E=function(n){return a.a.createElement(C,{marginTop:n.marginTop,marginLeft:n.marginLeft,width:n.width,height:n.height,color:n.color,bg:n.bg,borderBottom:n.borderBottom,fontWeight:n.fontWeight,onClick:n.onClick},n.text)};function j(){var n=Object(f.a)(["\n  color: #fff;\n  font-size: 1.3rem;\n  font-family: 'Overpass', Bold;\n\n  @media(max-width: 648px) {\n    margin-top: 12rem;\n    text-align: center;\n  }\n"]);return j=function(){return n},n}function k(){var n=Object(f.a)(["\n  color: #000;\n  font-family: 'Overpass', Bold;\n  font-size: 1rem;\n"]);return k=function(){return n},n}function O(){var n=Object(f.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 0;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background: #fff;\n  border-radius: 10px;\n  z-index: 2;\n"]);return O=function(){return n},n}function y(){var n=Object(f.a)(["\n  position: absolute;\n  top: 0.5rem;\n  right: 3rem;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 13px solid #fff;\n"]);return y=function(){return n},n}function P(){var n=Object(f.a)(["\n  position: relative;\n  z-index: 2;\n"]);return P=function(){return n},n}function B(){var n=Object(f.a)(["\n  position: fixed;\n  bottom: 0;\n  margin-bottom: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);return B=function(){return n},n}function M(){var n=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  @media(max-width: 648px) {\n    margin: 1rem;\n    justify-content: center;\n  }\n"]);return M=function(){return n},n}function S(){var n=Object(f.a)(["\n  color: #fff;\n"]);return S=function(){return n},n}function N(){var n=Object(f.a)(["\n  @media(max-width: 648px) {\n    display: none;\n  }\n"]);return N=function(){return n},n}function W(){var n=Object(f.a)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background: darkgreen;\n"]);return W=function(){return n},n}var z=d.a.div(W()),G=d.a.div(N()),R=d.a.h1(S()),J=d.a.div(M()),T=d.a.div(B()),L=d.a.div(P()),V=d.a.div(y()),A=d.a.div(O()),K=d.a.p(k()),Q=d.a.p(j()),D=function(n){Object(l.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=e.call.apply(e,[this].concat(o))).state={cards:["A","2","3","4","5","6","7","8","9","10","J","Q","K"],suits:["paus","copas","espadas","ouros"],deck:[],userCards:[],result:void 0,points:0,finalMessage:void 0,isRenderPoints:!1},n.getCardValue=function(n){return"A"===n?1:"J"===n||"Q"===n||"K"===n?10:Number(n)},n.createCard=function(){var e=n.state,t=e.cards,r=e.suits,a=e.deck;t.forEach((function(e){r.forEach((function(t){a.push({label:e,value:n.getCardValue(e),suit:t})}))})),n.setState({deck:a})},n.handleGetCard=function(){return n.state.deck[Math.floor(52*Math.random())+0]},n.handleNewCard=function(){var e=n.state,t=e.userCards,r=e.points,a=n.handleGetCard(),o=t.concat(a);if(n.setState({userCards:o}),t.length>0){var i=o.map((function(n){return n.value})).reduce((function(n,e){return n+e}),0);if(i>21)return void n.setState({finalMessage:"Voc\xea perdeu :("});21===i&&n.setState({points:r+1,finalMessage:"Voc\xea ganhou!!! Teste novamente a sua sorte!"})}},n.handleNewGame=function(){n.setState({userCards:[],sum:0,finalMessage:!1})},n.handlePoints=function(){n.setState({isRenderPoints:!n.state.isRenderPoints})},n.renderPoints=function(){var e=n.state.points;return a.a.createElement(L,null,a.a.createElement(V,null),a.a.createElement(A,null,a.a.createElement(K,null,e," \xe9 a sua pontua\xe7\xe3o at\xe9 o momento."),a.a.createElement(K,null,"Continue testando a sua sorte!")))},n.renderCardGame=function(){var e=n.state,t=e.userCards,r=e.finalMessage;return a.a.createElement(a.a.Fragment,null,r?a.a.createElement(Q,null,r):a.a.createElement(J,null,t.map((function(n){return a.a.createElement("div",{key:n},a.a.createElement(x,{card:n}))}))),a.a.createElement(T,null,a.a.createElement(E,{text:"Nova Carta",onClick:n.handleNewCard}),a.a.createElement(E,{bg:"red",text:"Novo jogo",onClick:n.handleNewGame})))},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.createCard()}},{key:"render",value:function(){var n=this,e=this.state.isRenderPoints;return a.a.createElement(z,{onClick:function(){return e&&n.setState({isRenderPoints:!1})}},a.a.createElement(G,null,a.a.createElement(E,{marginTop:"1rem",marginLeft:"70rem",color:"#fff",bg:"transparent",borderBottom:"1px solid",width:"auto",height:"auto",fontWeight:"600",text:"Pontua\xe7\xe3o +",onClick:this.handlePoints}),e&&this.renderPoints()),a.a.createElement(R,null,"Jogue agora 21!"),this.renderCardGame())}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ffbd56e0.chunk.js.map