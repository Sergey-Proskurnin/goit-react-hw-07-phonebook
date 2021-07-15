(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,n,e){t.exports={item:"ElementContactList_item__3GcFD",span:"ElementContactList_span__1us56",btnList:"ElementContactList_btnList__1nuQu"}},22:function(t,n,e){t.exports={label:"Filter_label__35zO-",span:"Filter_span__25kJy",input:"Filter_input__1oH-N"}},23:function(t,n,e){t.exports={container:"Container_container__1EPYW",title:"Container_title__3RLjU"}},34:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},36:function(t,n,e){t.exports={list:"ContactList_list__1ifF1"}},47:function(t,n,e){},67:function(t,n,e){},8:function(t,n,e){t.exports={form:"ContactForm_form__1KNqy",input:"ContactForm_input__1AhWn",span:"ContactForm_span__167Cu",button:"ContactForm_button__QwcZz"}},87:function(t,n,e){"use strict";e.r(n);var a=e(0),c=e.n(a),r=e(11),o=e.n(r),i=e(7),s=(e(47),e(13)),u=e(14),l=e(17),b=e(15),d=e(33),j=e.n(d),m=e(1),f=function(){return Object(m.jsx)(j.a,{type:"Puff",color:"#00BFFF",height:100,width:100})},p=(e(67),e(4)),O=e(88),h=e(8),C=e.n(h),x=e(3),_=Object(x.b)("contacts/addContactRequest"),v=Object(x.b)("contacts/addContactSuccess"),g=Object(x.b)("contacts/addContactError"),N=Object(x.b)("contacts/deleteContactRequest"),F=Object(x.b)("contacts/deleteContactSuccess"),y=Object(x.b)("contacts/deleteContactError"),L=Object(x.b)("contacts/changeFilter"),w=e(16),I=e(5),k=e(34),S=e(21),A=e.n(S),E=e(35),z=e(10),R=e.n(z);R.a.defaults.baseURL="http://localhost:4040";var q,J,D=Object(x.c)("contacts/fetchContact",Object(E.a)(A.a.mark((function t(){var n,e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.get("/contacts");case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))),P=Object(x.d)(k,(q={},Object(p.a)(q,D.fulfilled,(function(t,n){return n.payload})),Object(p.a)(q,v,(function(t,n){return[n.payload].concat(Object(w.a)(t))})),Object(p.a)(q,F,(function(t,n){return t.filter((function(t){return t.id!==n.payload}))})),q)),Z=Object(x.d)(!1,(J={},Object(p.a)(J,D.pending,(function(){return!0})),Object(p.a)(J,D.fulfilled,(function(){return!1})),Object(p.a)(J,D.rejected,(function(){return!1})),Object(p.a)(J,_,(function(){return!0})),Object(p.a)(J,v,(function(){return!1})),Object(p.a)(J,g,(function(){return!1})),Object(p.a)(J,N,(function(){return!0})),Object(p.a)(J,F,(function(){return!1})),Object(p.a)(J,y,(function(){return!1})),J)),B=Object(x.d)("",Object(p.a)({},L,(function(t,n){return n.payload}))),M=Object(I.b)({items:P,filter:B,loading:Z}),H=e(12),K=function(t){return t.contacts.loading},Q=function(t){return t.contacts.filter},T=function(t){return t.contacts.items},U=Object(H.a)([T],(function(t){return t.slice().sort((function(t,n){return n.id-t.id}))})),W=Object(H.a)([U,Q],(function(t,n){var e=n.toLowerCase().trim();return t.filter((function(t){return t.name.toLowerCase().includes(e)||t.number.includes(n)}))})),G=function(t){Object(l.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=n.call.apply(n,[this].concat(c))).state={name:t.props.name,number:t.props.number},t.nameInputId=Object(O.a)(),t.numberInputId=Object(O.a)(),t.handleChange=function(n){var e=n.currentTarget,a=e.name,c=e.value;t.setState(Object(p.a)({},a,c))},t.addNoRepeatContact=function(n,e){var a=n.name,c=n.number;e.some((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts")):e.some((function(t){return t.number===c}))?alert("".concat(c," is already in contacts")):(t.props.onSubmit(n),t.reset())},t.handleSubmit=function(n){n.preventDefault();var e=t.props.contacts;t.addNoRepeatContact(t.state,e)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.number;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:this.nameInputId,className:"lable",children:[Object(m.jsx)("span",{className:C.a.span,children:"Name"}),Object(m.jsx)("input",{className:C.a.input,type:"text",name:"name",value:n,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameInputId})]}),Object(m.jsxs)("label",{htmlFor:this.numberInputId,className:"lable",children:[Object(m.jsx)("span",{className:C.a.span,children:"Number"}),Object(m.jsx)("input",{className:C.a.input,type:"tel",name:"number",value:e,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.numberInputId})]}),Object(m.jsx)("button",{className:C.a.button,type:"submit",children:"Add contact"})]})})}}]),e}(a.Component);G.defaultProps={name:"",number:""};var Y=Object(i.b)((function(t){return{contacts:T(t)}}),(function(t){return{onSubmit:function(n,e){return t((a=n,function(t){t(_()),R.a.post("/contacts",a).then((function(n){var e=n.data;return t(v(e))})).catch((function(n){return t(g(n))}))}));var a}}}))(G),$=e(22),V=e.n($),X=Object(O.a)(),tt=Object(i.b)((function(t){return{filter:Q(t)}}),(function(t){return{onChangeFilter:function(n){return t(L(n.target.value))}}}))((function(t){var n=t.filter,e=t.onChangeFilter;return Object(m.jsxs)("label",{htmlFor:X,children:[Object(m.jsx)("span",{className:V.a.span,children:"Find contacts by name and number"}),Object(m.jsx)("input",{className:V.a.input,type:"text",value:n,onChange:e,id:X})]})})),nt=e(18),et=e.n(nt),at=function(t){var n=t.contacts,e=t.deleteContact;return n.map((function(t){var n=t.name,a=t.number,c=t.id;return Object(m.jsxs)("li",{className:et.a.item,children:[Object(m.jsx)("span",{className:et.a.span}),n,": ",a,Object(m.jsx)("button",{type:"button",className:et.a.btnList,onClick:function(){return e(c)},children:"Delete"})]},c)}))},ct=Object(i.b)((function(t){return{contacts:W(t)}}),(function(t){return{deleteContact:function(n){return t(function(t){return function(n){n(N()),R.a.delete("/contacts/".concat(t)).then((function(){return n(F(t))})).catch((function(t){return n(y(t))}))}}(n))}}}))(at),rt=e(36),ot=e.n(rt),it=function(){return Object(m.jsx)("ul",{className:ot.a.list,children:Object(m.jsx)(ct,{})})},st=e(23),ut=e.n(st),lt=function(t){var n=t.children,e=t.title;return Object(m.jsxs)("div",{className:ut.a.container,children:[Object(m.jsx)("h1",{className:ut.a.title,children:e}),n]})},bt=function(t){Object(l.a)(e,t);var n=Object(b.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return Object(m.jsxs)(lt,{title:"Phonebook",children:[Object(m.jsx)(Y,{}),Object(m.jsx)("h2",{className:"title",children:"Contacts"}),this.props.isLoadingContacts?Object(m.jsx)(f,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(tt,{}),Object(m.jsx)(it,{})]})]})}}]),e}(a.Component),dt=Object(i.b)((function(t){return{isLoadingContacts:K(t)}}),(function(t){return{onFetchContacts:function(){return t(D())}}}))(bt),jt=e(9),mt=Object(w.a)(Object(x.e)({serializableCheck:{ignoredActions:[jt.a,jt.f,jt.b,jt.c,jt.d,jt.e]}})),ft=Object(x.a)({reducer:{contacts:M},middleware:mt,devTools:!1});o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{store:ft,children:Object(m.jsx)(dt,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.4d25bdaf.chunk.js.map