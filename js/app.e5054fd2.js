(function(t){function e(e){for(var o,r,s=e[0],u=e[1],l=e[2],c=0,p=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"01ed":function(t,e,n){"use strict";n("8760")},"034f":function(t,e,n){"use strict";n("85ec")},3322:function(t,e,n){"use strict";n("9f96")},"85ec":function(t,e,n){},8760:function(t,e,n){},"9f96":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=(n("f5df1"),n("ecee")),a=n("b702"),r=n("ad3d"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TodoApp",{attrs:{tasks:t.todoListTasks}})],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainWrapper"},[n("h1",{staticClass:"mainTitle"},[t._v("Мой список дел :)")]),n("div",{staticClass:"todoControls"},[n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.prioritySelectValue,expression:"prioritySelectValue",modifiers:{number:!0}}],staticClass:"todoControls__prioritySelect",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var n="_value"in e?e._value:e.value;return t._n(n)}));t.prioritySelectValue=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"1"}},[t._v("1")]),n("option",{attrs:{value:"2"}},[t._v("2")]),n("option",{attrs:{value:"3"}},[t._v("3")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textInputValue,expression:"textInputValue"}],staticClass:"todoControls__textInput",attrs:{type:"text",placeholder:"Введите текст"},domProps:{value:t.textInputValue},on:{input:function(e){e.target.composing||(t.textInputValue=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.deadlineInputValue,expression:"deadlineInputValue"}],staticClass:"todoControls__dateInput",attrs:{type:"text",placeholder:"Введите deadline"},domProps:{value:t.deadlineInputValue},on:{input:function(e){e.target.composing||(t.deadlineInputValue=e.target.value)}}}),n("button",{staticClass:"todoControls__addButton",on:{click:t.addNewItem}},[t._v(" + ")])]),n("div",{staticClass:"todoList"},t._l(t.innerTasks,(function(e){return n("TodoAppItem",{key:e.id,attrs:{item:e},on:{save:t.onTodoAppItemSave,delete:t.onTodoAppItemDelete}})})),1),n("h2",{directives:[{name:"show",rawName:"v-show",value:!t.innerTasks.length,expression:"!innerTasks.length"}]},[t._v(t._s(t.noDataMsg))])])},d=[],c=(n("c740"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.todoClasses},[t.isEditModeEnabled?n("div",{staticClass:"todo__editMode"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textInputValue,expression:"textInputValue"}],staticClass:"todo__editModeInput",attrs:{type:"text"},domProps:{value:t.textInputValue},on:{input:function(e){e.target.composing||(t.textInputValue=e.target.value)}}}),n("button",{staticClass:"todo__editModeButton btn",on:{click:t.onSave}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","check-square"]}})],1)]):n("div",{staticClass:"todo__viewMode"},[n("div",{staticClass:"todo__text"},[t._v(t._s(t.text))]),n("div",{staticClass:"todo__deadline"},[t._v(t._s(t.deadline))])]),n("div",{staticClass:"todo__buttons"},[n("button",{staticClass:"todo__buttonEdit btn",on:{click:t.onEdit}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","edit"]}})],1),n("button",{staticClass:"todo__buttonDelete btn",on:{click:t.onDelete}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","trash-alt"]}})],1)])])}),p=[],f=o["a"].extend({name:"TodoAppItem",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{isEditModeEnabled:!1,textInputValue:this.item.text,classMap:{1:"todo--high",2:"todo--normal",3:"todo--low"}}},computed:{priority:function(){return this.item.priority},text:function(){return this.item.text||"Я туду без текста :("},deadline:function(){return this.item.deadline},id:function(){return this.item.id},todoClasses:function(){var t=this.priority?this.priority:2;return["todo",this.classMap[t],{}]}},methods:{onEdit:function(){this.isEditModeEnabled=!this.isEditModeEnabled},onSave:function(){var t=this.id,e=this.textInputValue;this.$emit("save",{id:t,value:e}),this.isEditModeEnabled=!1},onDelete:function(){var t=this.id;this.$emit("delete",{id:t})}}}),v=f,m=(n("01ed"),n("2877")),h=Object(m["a"])(v,c,p,!1,null,"b85e87f4",null),_=h.exports,x=n("d4ec"),y=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{priority:1,text:"UNSET",deadline:"UNSET"};Object(x["a"])(this,t);var n=e.priority,o=e.text,i=e.deadline;this.priority=n,this.text=o,this.deadline=i,this.createDate=Date.now(),this.id=Date.now()+Math.floor(1000001*Math.random())},b=o["a"].extend({name:"TodoApp",components:{TodoAppItem:_},props:{tasks:{type:Array,default:function(){return[]}}},data:function(){return{innerTasks:[],prioritySelectValue:1,textInputValue:"",deadlineInputValue:"",noDataMsg:"Список пуст. Добавьте сюда что-нибудь"}},methods:{addNewItem:function(){var t=new y({priority:this.prioritySelectValue,text:this.textInputValue,deadline:this.deadlineInputValue});""!==t.text&&(this.innerTasks.unshift(t),this.textInputValue="",this.deadlineInputValue="",this.prioritySelectValue=1)},onTodoAppItemSave:function(t){var e=this.innerTasks.findIndex((function(e){return e.id===t.id}));this.innerTasks[e].text=t.value},onTodoAppItemDelete:function(t){var e=this.innerTasks.findIndex((function(e){return e.id===t.id}));this.innerTasks.splice(e,1)}},created:function(){this.innerTasks=this.tasks}}),I=b,w=(n("3322"),Object(m["a"])(I,l,d,!1,null,"c6d7a6f8",null)),g=w.exports,T=[new y({priority:1,text:"Buy some food",deadline:"01.02.2021"}),new y({priority:3,text:"Buy a new car",deadline:"01.08.2021"}),new y({priority:2,text:"Become a developer",deadline:"01.03.2021"})],C=o["a"].extend({name:"App",components:{TodoApp:g},data:function(){return{todoListTasks:T}}}),V=C,k=(n("034f"),Object(m["a"])(V,s,u,!1,null,null,null)),M=k.exports;i["c"].add(a["a"],a["b"],a["c"]),o["a"].component("font-awesome-icon",r["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(M)}}).$mount("#app")}});
//# sourceMappingURL=app.e5054fd2.js.map