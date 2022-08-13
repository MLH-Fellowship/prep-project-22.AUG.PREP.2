(this["webpackJsonpprep-template"]=this["webpackJsonpprep-template"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),i=n(2),o=(n(10),n.p+"static/media/mlh-prep.270f6887.png"),u=n(0);function d(e){var t=e.error;return Object(u.jsxs)("div",{children:["Error: ",t.message]})}function j(e){var t=e.isLoaded,n=e.results;return Object(u.jsxs)("div",{className:"Results",children:[!t&&Object(u.jsx)("h2",{children:"Loading..."}),console.log(n),t&&n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:n.weather[0].main}),Object(u.jsxs)("p",{children:["Feels like ",n.main.feels_like,"\xb0C"]}),Object(u.jsx)("i",{children:Object(u.jsxs)("p",{children:[n.name,", ",n.sys.country]})})]})]})}function l(e){var t=e.city,n=e.changeCity;return Object(u.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}})}var p=function(e){var t=e.img_src;return Object(u.jsx)("div",{className:"card",children:Object(u.jsx)("img",{src:t,alt:"required item"})})},O=n.p+"static/media/cap.474e6898.png",b=n.p+"static/media/gloves.45497ed2.png",m=n.p+"static/media/jacket.58fadea5.png",f=n.p+"static/media/raincoat.376a8ef2.png",h=n.p+"static/media/scarf.fbb31feb.png",g=n.p+"static/media/sunglasses.6c5f1538.png",S=n.p+"static/media/suncream.d8793979.png",_=n.p+"static/media/umbrella.df170598.png",v=n.p+"static/media/water_proof_boots.a48e94f8.png",E=n.p+"static/media/watch.f0a65ecb.png",x=n.p+"static/media/goggles.faf692a2.png",T=n.p+"static/media/flashlight.6563cb05.png",w=n.p+"static/media/mask.e0e07086.png",C=function(e){var t=e.weatherKind,n=function(e){switch(e){case"Rain":return[f,v,_];case"Snow":return[g,b,m,h];case"Clear":return[g,O,S];case"Clouds":return[O,E];case"Tornado":return[x,T];case"Drizzle":return[f,_,v];case"Thunderstorm":return[f,T,v];case"Squall":case"Ash":case"Dust":case"Sand":case"Fog":case"Haze":case"Smoke":case"Mist":return[E,x,w];default:return}};return Object(u.jsx)(u.Fragment,{children:void 0!==n(t)&&n(t).map((function(e,t){return Object(u.jsx)(p,{img_src:e},t)}))})};function P(e){var t=e.getUserLocation;return Object(u.jsx)("button",{onClick:t,children:"Get My Location"})}var R=n(4),L=n.n(R);function A(e){var t=e.setIsLoaded,n=e.setResults,a=e.setError,r=Object(c.useRef)(null),s=Object(c.useRef)(null),o=Object(c.useState)(-70.9),d=Object(i.a)(o,2),j=d[0],l=(d[1],Object(c.useState)(42.35)),p=Object(i.a)(l,2),O=p[0],b=(p[1],Object(c.useState)(9)),m=Object(i.a)(b,2),f=m[0];m[1];return Object(c.useEffect)((function(){s.current||(s.current=new L.a.Map({container:r.current,style:"mapbox://styles/mapbox/streets-v11",center:[j,O],zoom:f}),s.current.on("click",(function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lngLat.lat,"&lon=").concat(e.lngLat.lng,"&units=metric&appid=").concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY)).then((function(e){return e.json()})).then((function(e){200!==e.cod?t(!1):(t(!0),n(e))}),(function(e){t(!0),a(e)}))})))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{ref:r,className:"map-container"})})}function D(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),p=s[0],O=s[1],b=Object(c.useState)("New York City"),m=Object(i.a)(b,2),f=m[0],h=m[1],g=Object(c.useState)(null),S=Object(i.a)(g,2),_=S[0],v=S[1],E=Object(c.useState)(""),x=Object(i.a)(E,2),T=x[0],w=x[1];return Object(c.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(f,"&units=metric&appid=").concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY)).then((function(e){return e.json()})).then((function(e){200!==e.cod?O(!1):(O(!0),v(e),w(e.weather[0].main))}),(function(e){O(!0),a(e)}))}),[f]),n?Object(u.jsx)(d,{error:n}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:T,children:[Object(u.jsx)("img",{className:"logo",src:o,alt:"MLH Prep Logo"}),Object(u.jsx)("h2",{children:"Enter a city below \ud83d\udc47"}),Object(u.jsx)(l,{city:f,changeCity:h}),Object(u.jsx)(P,{getUserLocation:function(){O(!1),new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,c=t.coords.longitude;e({lat:n,lon:c})}),n)})).then((function(e){fetch("https://api.openweathermap.org/geo/1.0/reverse?lat=".concat(e.lat,"&lon=").concat(e.lon,"&limit=1&appid=").concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY)).then((function(e){return e.json()})).then((function(e){h(e[0].name),O(!0)}),(function(e){O(!0),a(e)}))}))}}),Object(u.jsx)(j,{isLoaded:p,results:_}),p&&_&&Object(u.jsx)(C,{weatherKind:_.weather[0].main}),Object(u.jsx)(A,{setIsLoaded:O,setResults:v,setError:a})]})})}L.a.accessToken="pk.eyJ1Ijoicm95Z2JldiIsImEiOiJjbDFjYzF2ajUwMHgzM2NwcXBzdWVxM3ZvIn0.2k8N-UN2Y7ZdT5vwml9QAw";n(12),n(13);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.39f09ca9.chunk.js.map