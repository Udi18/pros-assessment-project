(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),c=(n(14),n(3)),i=n(4),u=n(6),s=n(5),d=n(7),g=(n(16),function(e){var t=e.onNamesChangeHandler,n=e.names;return r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement("h3",{style:{paddingRight:"20px"}},"Names:"),r.a.createElement("textarea",{name:"names",value:n,cols:"25",rows:"15",onChange:t,required:!0}))}),m=function(e){var t=e.languageOptions,n=e.onLanguageSelectHandler;return r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement("h3",{style:{paddingRight:"20px"}},"Language options:"),r.a.createElement("select",{onChange:n,required:!0},r.a.createElement("option",null,"Please select language"),Object.values(t).map(function(e){return r.a.createElement("option",{key:e},e)})))},f=function(e){var t=e.onGreetingInputHandler;return r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement("h3",{style:{paddingRight:"20px"}},"Please enter a greeting for the name tags."),r.a.createElement("input",{required:!0,style:{width:"350px"},onChange:t}))},p=function(e){var t=e.names,n=e.translatedText,a=t.split("\n").map(function(e){return r.a.createElement("div",{style:{border:"solid",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",margin:"10px",width:"300px"},key:e},r.a.createElement("h3",null,n),r.a.createElement("h2",null,e))});return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"}},a)},h=function(e){var t=e.onButtonClick,n=e.route;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{onClick:t},function(e){return"tags"===e?"Back":"Generate"}(n)))},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={languageOptions:{},names:"",textToTranslate:"",languageChoice:"",translatedText:"",route:"home"},n.keyFinder=function(e,t){return Object.keys(e).find(function(n){return e[n]===t})},n.onButtonClick=function(){return"home"===n.state.route?n.setState({route:"tags"}):n.setState({route:"home"})},n.onSubmitHandler=function(e,t,a){return function(r){var o=encodeURI("&text=".concat(n.state.textToTranslate)),l="&lang=en-".concat(e(t,a));r.preventDefault(),fetch("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190125T225412Z.10a346ef55de66c0.c6a59bb3601e9dbe458c012ab1cd29461c9f7c2d"+o+l).then(function(e){return e.json()}).then(function(e){return n.setState({translatedText:e.text[0]})}).catch(function(e){return console.log("Something went wrong!",e)}),n.onButtonClick()}},n.onNamesChangeHandler=function(e){var t=e.target.value;n.setState({names:t})},n.onLanguageSelectHandler=function(e){var t=e.target.value;n.setState({languageChoice:t})},n.onGreetingInputHandler=function(e){var t=e.target.value;n.setState({textToTranslate:t})},n.routeHandler=function(){var e=n.state,t=e.names,a=e.languageOptions,o=e.textToTranslate,l=e.languageChoice,c=e.translatedText,i=e.route;return"home"===i?r.a.createElement("form",{onSubmit:n.onSubmitHandler(n.keyFinder,a,l)},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(g,{onNamesChangeHandler:n.onNamesChangeHandler,names:t}),r.a.createElement(m,{languageOptions:a,onLanguageSelectHandler:n.onLanguageSelectHandler}),r.a.createElement(f,{textToTranslate:o,onGreetingInputHandler:n.onGreetingInputHandler})),r.a.createElement(h,null)):"tags"===i?r.a.createElement("div",null,r.a.createElement(p,{names:t,translatedText:c}),r.a.createElement(h,{onButtonClick:n.onButtonClick,route:i})):void 0},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20190125T225412Z.10a346ef55de66c0.c6a59bb3601e9dbe458c012ab1cd29461c9f7c2d&ui=en").then(function(e){return e.json()}).then(function(t){return e.setState({languageOptions:t.langs})}).catch(function(e){return console.log("Something went wrong!",e)})}},{key:"render",value:function(){return r.a.createElement("div",null,this.routeHandler())}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.316815f8.chunk.js.map