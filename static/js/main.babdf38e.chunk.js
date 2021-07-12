(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{16:function(t,n,e){t.exports={item:"ElementContactList_item__3GcFD",span:"ElementContactList_span__1us56",btnList:"ElementContactList_btnList__1nuQu"}},19:function(t,n,e){t.exports={label:"Filter_label__35zO-",span:"Filter_span__25kJy",input:"Filter_input__1oH-N"}},20:function(t,n,e){t.exports={container:"Container_container__1EPYW",title:"Container_title__3RLjU"}},30:function(t,n,e){t.exports={list:"ContactList_list__1ifF1"}},31:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},43:function(t,n,e){},44:function(t,n,e){},64:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),r=e(10),o=e.n(r),i=e(6),s=(e(43),e(11)),u=e(12),b=e(15),l=e(13),d=(e(44),e(2)),m=e(65),j=e(7),f=e.n(j),p=e(9),h=e.n(p),O=e(3),C=Object(O.b)("contacts/fetchContactRequest"),_=Object(O.b)("contacts/fetchContactSuccess"),x=Object(O.b)("contacts/fetchContactError"),v=Object(O.b)("contacts/addContactRequest"),N=Object(O.b)("contacts/addContactSuccess"),y=Object(O.b)("contacts/addContactError"),g=Object(O.b)("contacts/deleteContactRequest"),F=Object(O.b)("contacts/deleteContactSuccess"),I=Object(O.b)("contacts/deleteContactError"),L=Object(O.b)("contacts/changeFilter");h.a.defaults.baseURL="http://localhost:4040";var S=e(1),k=function(t){Object(b.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(s.a)(this,e);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={name:t.props.name,number:t.props.number},t.nameInputId=Object(m.a)(),t.numberInputId=Object(m.a)(),t.handleChange=function(n){var e=n.currentTarget,c=e.name,a=e.value;t.setState(Object(d.a)({},c,a))},t.addNoRepeatContact=function(n,e){var c=n.name,a=n.number;e.some((function(t){return t.name.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts")):e.some((function(t){return t.number===a}))?alert("".concat(a," is already in contacts")):(t.props.onSubmit(n),t.reset())},t.handleSubmit=function(n){n.preventDefault();var e=t.props.contacts;t.addNoRepeatContact(t.state,e)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.number;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(S.jsxs)("label",{htmlFor:this.nameInputId,className:"lable",children:[Object(S.jsx)("span",{className:f.a.span,children:"Name"}),Object(S.jsx)("input",{className:f.a.input,type:"text",name:"name",value:n,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameInputId})]}),Object(S.jsxs)("label",{htmlFor:this.numberInputId,className:"lable",children:[Object(S.jsx)("span",{className:f.a.span,children:"Number"}),Object(S.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:e,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.numberInputId})]}),Object(S.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})})}}]),e}(c.Component);k.defaultProps={name:"",number:""};var w,A,E=Object(i.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(n,e){return t(function(t){var n=t.name,e=t.number;return function(t){var c={name:n,number:e};t(v()),h.a.post("/contacts",c).then((function(n){var e=n.data;return t(N(e))})).catch((function(n){return t(y(n))}))}}(n))}}}))(k),R=e(19),z=e.n(R),q=Object(m.a)(),J=Object(i.b)((function(t){return{filter:t.filter}}),(function(t){return{onChangeFilter:function(n){return t(L(n.target.value))}}}))((function(t){var n=t.filter,e=t.onChangeFilter;return Object(S.jsxs)("label",{htmlFor:q,children:[Object(S.jsx)("span",{className:z.a.span,children:"Find contacts by name and number"}),Object(S.jsx)("input",{className:z.a.input,type:"text",value:n,onChange:e,id:q})]})})),D=e(16),Z=e.n(D),M=function(t){var n=t.contacts,e=t.deleteContact;return n.map((function(t){var n=t.name,c=t.number,a=t.id;return Object(S.jsxs)("li",{className:Z.a.item,children:[Object(S.jsx)("span",{className:Z.a.span}),n,": ",c,Object(S.jsx)("button",{type:"button",className:Z.a.btnList,onClick:function(){return e(a)},children:"Delete"})]},a)}))},P=function(t,n){var e=n.toLowerCase().trim();return t.filter((function(t){return t.name.toLowerCase().includes(e)||t.number.includes(n)}))},B=Object(i.b)((function(t){var n=t.contacts,e=n.items,c=n.filter;return{contacts:P(e,c)}}),(function(t){return{deleteContact:function(n){return t(function(t){return function(n){n(g()),h.a.delete("/contacts/".concat(t)).then((function(){return n(F(t))})).catch((function(t){return n(I(t))}))}}(n))}}}))(M),H=e(30),K=e.n(H),Q=function(){return Object(S.jsx)("ul",{className:K.a.list,children:Object(S.jsx)(B,{})})},T=e(20),U=e.n(T),W=function(t){var n=t.children,e=t.title;return Object(S.jsxs)("div",{className:U.a.container,children:[Object(S.jsx)("h1",{className:U.a.title,children:e}),n]})},G=function(t){Object(b.a)(e,t);var n=Object(l.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return Object(S.jsxs)(W,{title:"Phonebook",children:[Object(S.jsx)(E,{}),Object(S.jsx)("h2",{className:"title",children:"Contacts"}),Object(S.jsx)(J,{}),Object(S.jsx)(Q,{})]})}}]),e}(c.Component),Y=Object(i.b)((function(t){return{contacts:t.items}}),(function(t){return{onFetchContacts:function(){return t((function(t){t(C()),h.a.get("/contacts").then((function(n){var e=n.data;return t(_(e))})).catch((function(n){return t(x(n))}))}))}}}))(G),$=e(14),V=e(4),X=e(31),tt=Object(O.c)(X,(w={},Object(d.a)(w,_,(function(t,n){return n.payload})),Object(d.a)(w,N,(function(t,n){return[n.payload].concat(Object($.a)(t))})),Object(d.a)(w,F,(function(t,n){return t.filter((function(t){return t.id!==n.payload}))})),w)),nt=Object(O.c)(!1,(A={},Object(d.a)(A,C,(function(){return!0})),Object(d.a)(A,_,(function(){return!1})),Object(d.a)(A,x,(function(){return!1})),Object(d.a)(A,v,(function(){return!0})),Object(d.a)(A,N,(function(){return!1})),Object(d.a)(A,y,(function(){return!1})),Object(d.a)(A,g,(function(){return!0})),Object(d.a)(A,F,(function(){return!1})),Object(d.a)(A,I,(function(){return!1})),A)),et=Object(O.c)("",Object(d.a)({},L,(function(t,n){return n.payload}))),ct=Object(V.b)({items:tt,filter:et,loading:nt}),at=e(8),rt=Object($.a)(Object(O.d)({serializableCheck:{ignoredActions:[at.a,at.f,at.b,at.c,at.d,at.e]}})),ot=Object(O.a)({reducer:{contacts:ct},middleware:rt,devTools:!1});o.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(i.a,{store:ot,children:Object(S.jsx)(Y,{})})}),document.getElementById("root"))},7:function(t,n,e){t.exports={form:"ContactForm_form__1KNqy",input:"ContactForm_input__1AhWn",span:"ContactForm_span__167Cu",button:"ContactForm_button__QwcZz"}}},[[64,1,2]]]);
//# sourceMappingURL=main.babdf38e.chunk.js.map