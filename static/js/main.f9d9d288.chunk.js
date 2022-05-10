(this["webpackJsonpbrownian-bridge"]=this["webpackJsonpbrownian-bridge"]||[]).push([[0],{268:function(e,t,n){},286:function(e){e.exports=JSON.parse('{"bridge":[[0,0],[0.01,0.0999585188692316],[0.02,0.053143436674174274],[0.03,0.1748991776728547],[0.04,0.060336302128481095],[0.05,0.24445794828383216],[0.06,0.25442211927966824],[0.07,0.09998527856436357],[0.08,0.20119924281676638],[0.09,0.16409711589114884],[0.1,0.19011103350718614],[0.11,0.06050361735560714],[0.12,-0.019002167388463824],[0.13,0.04749398741395218],[0.14,0.06665172234907824],[0.15,0.21764624391580142],[0.16,0.21646852120270604],[0.17,0.19354383532561753],[0.18,0.037722480367085864],[0.19,0.1061361116344795],[0.2,0.1726185978330515],[0.21,0.23883979077971418],[0.22,0.28736485434283715],[0.23,0.12430659889195061],[0.24,0.03372163995962604],[0.25,-0.006426496122284922],[0.26,-0.033848961402855725],[0.27,-0.09966535683145486],[0.28,-0.04795303284281045],[0.29,-0.12854203295545852],[0.3,-0.2403373535239762],[0.31,-0.20570892229249624],[0.32,-0.1085653103737558],[0.33,-0.044698130776347926],[0.34,-0.06708502154055565],[0.35000000000000003,-0.060970340628508264],[0.36,-0.13113236630217068],[0.37,-0.046950276494621856],[0.38,-0.20729185964633953],[0.39,-0.2507024123532222],[0.4,-0.03515572766521588],[0.41000000000000003,-0.1582170204156867],[0.42,-0.23158822523163136],[0.43,-0.27653458380061224],[0.44,-0.23539794804439787],[0.45,-0.15357810753654794],[0.46,-0.060749332025984454],[0.47000000000000003,-0.17928136922082005],[0.48,-0.11615739544294526],[0.49,-0.12650553501258285],[0.5,-0.24823514668605912],[0.51,-0.277601735589707],[0.52,-0.2781014937973248],[0.53,-0.3123407615055955],[0.54,-0.1938554211314022],[0.55,-0.2511385774664352],[0.56,-0.3207619902507625],[0.5700000000000001,-0.5384620360543022],[0.58,-0.42634128253137804],[0.59,-0.4362396845959935],[0.6,-0.32073193740247213],[0.61,-0.282251943417953],[0.62,-0.3007956802410001],[0.63,-0.3696013022154546],[0.64,-0.30465245541996244],[0.65,-0.12387701213171831],[0.66,-0.045403743725946216],[0.67,-0.03569002232844063],[0.68,-0.04681523042877514],[0.6900000000000001,-0.015573152593296183],[0.7000000000000001,-0.1255841293983696],[0.71,-0.03542970192501342],[0.72,-0.11413788456459464],[0.73,-0.08710655682378311],[0.74,0.058465694299462065],[0.75,0.26130479570325665],[0.76,0.2623544731076446],[0.77,0.15535353357325418],[0.78,0.06761259468552926],[0.79,0.10135380015692946],[0.8,-0.07365307100802927],[0.81,-0.05096118426458601],[0.8200000000000001,-0.005530344621877285],[0.8300000000000001,-0.02449855782816655],[0.84,0.05144408386271075],[0.85,0.010159180118541312],[0.86,0.1512725523741928],[0.87,0.05742122781717966],[0.88,0.038141916938736566],[0.89,-0.06236272255817689],[0.9,-0.11290203319695336],[0.91,-0.0038875090697494535],[0.92,-0.21950788496243648],[0.93,-0.31339065031892355],[0.9400000000000001,-0.27657302634758896],[0.9500000000000001,-0.195132801636443],[0.96,-0.2035743911285261],[0.97,-0.17202510035189175],[0.98,-0.042336010708055934],[0.99,0]],"color":"#F76C6A"}')},554:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(40),c=n.n(o),r=n(13),s=n(10),l=n(116),d=n.n(l),j=n(75),b=n.n(j),u=n(154),h=n.n(u),g=n(153),m=n.n(g),O=n(191),x=n.n(O),f=n(192),p=n.n(f),C=n(189),y=n.n(C),v=n(110),w=n.n(v),B=n(564),D=n(17),k=function(e){var t=e.calculateBridge,n=e.resetData,a=e.onChangeSigma,i=e.sigma,o=e.onChangeAmountPoints,c=e.amountPoints,r="Number of points to generate a graph",s="Standard deviation";return Object(D.jsx)("div",{className:"controller",children:Object(D.jsxs)(y.a,{direction:"vertical",size:"middle",style:{display:"flex",padding:30},children:[Object(D.jsx)(h.a.Title,{level:4,style:{color:d.a?"#000000":"#ffffff"},children:"Controllers"}),Object(D.jsx)(x.a,{onClick:t,type:"primary",block:!0,children:"add new Brownian bridge"}),Object(D.jsx)(x.a,{onClick:n,type:"primary",block:!0,children:"Reset"}),Object(D.jsx)(p.a,{controls:!0,min:10,max:1e3,step:"100",defaultValue:c,onChange:o,style:{width:"100%"},addonBefore:"Points:",addonAfter:Object(D.jsx)(w.a,{title:r,children:Object(D.jsx)(B.a,{})})}),Object(D.jsx)(p.a,{min:.1,max:10,step:"0.1",defaultValue:i,onChange:a,style:{width:"100%"},addonBefore:"Sigma:",addonAfter:Object(D.jsx)(w.a,{title:s,children:Object(D.jsx)(B.a,{})})})]})})},S=n(565),A=n(568),M=n(566),F=n(569),N=n(567),P=function(e){var t=e.data,n=Object(a.useState)({x:[0,1]}),i=Object(s.a)(n,2),o=i[0],c=i[1],r=function(e){c(e)};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(S.a,{width:900,height:350,containerComponent:Object(D.jsx)(A.a,{width:900,height:350,zoomDomain:o,onZoomDomainChange:r}),children:t.map((function(e){return Object(D.jsx)(M.a,{style:{data:{stroke:e.color}},data:e.bridge,x:0,y:1},e.color)}))}),Object(D.jsxs)(S.a,{padding:{top:10,left:50,right:50,bottom:20},height:150,width:900,containerComponent:Object(D.jsx)(F.a,{width:900,height:160,brushDimension:"x",brushDomain:o,onBrushDomainChange:r}),children:[Object(D.jsx)(N.a,{}),t.map((function(e){return Object(D.jsx)(M.a,{style:{data:{stroke:e.color}},data:e.bridge,x:0,y:1},e.color)}))]})]})},E=n(285),z=n.n(E),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=null,a=null,i=null;if(null!=n)i=n,n=null;else do{a=(n=2*Math.random()-1)*n+(i=2*Math.random()-1)*i}while(!a||a>1);return e+t*i*Math.sqrt(-2*Math.log(a)/a)},J=n(286),V=(n(268),function(){var e=Object(a.useState)([J]),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(100),c=Object(s.a)(o,2),d=c[0],j=c[1],u=Object(a.useState)(1),g=Object(s.a)(u,2),O=g[0],x=g[1],f=Object(a.useCallback)((function(e){j(e)}),[d]),p=Object(a.useCallback)((function(e){x(e)}),[O]),C=Object(a.useCallback)((function(){i([])}),[]),y=Object(a.useCallback)((function(){if(n.length<10){var e=function(e,t){var n=1/(e-1),a=Math.sqrt(n),i=z.a.empty([1,e]);i.set(0,0,0);for(var o=0;o<=e-2;o++){var c=o*n,s=H(0,t)*a,l=i.get(0,o)*(1-n/(1-c))+s;i.set(0,o+1,l)}return i.set(0,e-1,0),i.tolist()[0].reduce((function(e,t,n){var a=1/i.size*n;return[].concat(Object(r.a)(e),[[a,t]])}),[])}(d,O);i((function(t){return[].concat(Object(r.a)(t),[{bridge:e,color:(n=t.length,["#F76C6A","#D45BCE","#AB71EB","#676DD6","#76C0F5","#86F7C8","#72D475","#CBEB8B","#D6CD7E","#F5D690"][n])}]);var n}))}else t="Max count bridges = ".concat(10),m.a.config({maxCount:1}),m.a.open({message:"Warning",description:t});var t}),[d,O,n]);return Object(D.jsxs)(b.a,{style:{minHeight:"100vh"},children:[l.isDesktop&&Object(D.jsxs)(b.a.Sider,{width:"400",children:[Object(D.jsx)("div",{className:"logo"}),Object(D.jsx)(k,{resetData:C,calculateBridge:y,onChangeSigma:p,onChangeAmountPoints:f,amountPoints:d,sigma:O})]}),Object(D.jsxs)(b.a,{className:"site-layout",children:[Object(D.jsx)(b.a.Header,{className:"site-layout-background",children:Object(D.jsx)(h.a.Title,{level:2,style:{marginBottom:0},children:"Brownian bridge"})}),Object(D.jsxs)(b.a.Content,{style:{margin:"16px"},children:[Object(D.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:Object(D.jsx)(P,{data:n})}),Object(D.jsx)(l.MobileView,{children:Object(D.jsx)(k,{resetData:C,calculateBridge:y,onChangeSigma:p,onChangeAmountPoints:f,amountPoints:d,sigma:O})})]}),Object(D.jsx)(b.a.Footer,{style:{textAlign:"center"},children:"\xa92022 Created by Modsen"})]})]})});n(551);c.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(V,{})}),document.getElementById("root"))}},[[554,1,2]]]);
//# sourceMappingURL=main.f9d9d288.chunk.js.map