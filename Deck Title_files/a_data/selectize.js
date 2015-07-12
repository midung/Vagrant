/*! selectize.js - v0.7.2 | https://github.com/brianreavis/selectize.js | Apache License (v2) */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){var a=function(a,b){this.items=a,this.settings=b||{diacritics:!0}};a.prototype.tokenize=function(a){if(a=c(String(a||"").toLowerCase()),!a||!a.length)return[];var b,e,g,h,i=[],j=a.split(/ +/);for(b=0,e=j.length;e>b;b++){if(g=d(j[b]),this.settings.diacritics)for(h in f)f.hasOwnProperty(h)&&(g=g.replace(new RegExp(h,"g"),f[h]));i.push({string:j[b],regex:new RegExp(g,"i")})}return i},a.prototype.iterator=function(a,b){var c;c=e(a)?Array.prototype.forEach||function(a){for(var b=0,c=this.length;c>b;b++)a(this[b],b,this)}:function(a){for(var b in this)this.hasOwnProperty(b)&&a(this[b],b,this)},c.apply(a,[b])},a.prototype.getScoreFunction=function(a,b){var c,d,e,f;c=this,a=c.prepareSearch(a,b),e=a.tokens,d=a.options.fields,f=e.length;var g=function(a,b){var c,d;return a?(a=String(a||""),d=a.search(b.regex),-1===d?0:(c=b.string.length/a.length,0===d&&(c+=.5),c)):0},h=function(){var a=d.length;return a?1===a?function(a,b){return g(b[d[0]],a)}:function(b,c){for(var e=0,f=0;a>e;e++)f+=g(c[d[e]],b);return f/a}:function(){return 0}}();return f?1===f?function(a){return h(e[0],a)}:function(a){for(var b=0,c=0;f>b;b++)c+=h(e[b],a);return c/f}:function(){return 0}},a.prototype.prepareSearch=function(a,c){return"object"==typeof a?a:{options:b({},c),query:String(a||"").toLowerCase(),tokens:this.tokenize(a),total:0,items:[]}},a.prototype.search=function(a,b){var c,d,f,g=this;return d=this.prepareSearch(a,b),b=d.options,a=d.query,e(b.fields)||(b.fields=[b.fields]),f=b.score||g.getScoreFunction(d),a.length?(g.iterator(g.items,function(a,b){c=f(a),c>0&&d.items.push({score:c,id:b})}),d.items.sort(function(a,b){return b.score-a.score})):(g.iterator(g.items,function(a,b){d.items.push({score:1,id:b})}),b.sort&&d.items.sort(function(){var a=b.sort,c="desc"===b.direction?-1:1;return function(b,d){return b=b&&String(g.items[b.id][a]||"").toLowerCase(),d=d&&String(g.items[d.id][a]||"").toLowerCase(),b>d?1*c:d>b?-1*c:0}}())),d.total=d.items.length,"number"==typeof b.limit&&(d.items=d.items.slice(0,b.limit)),d};var b=function(a){var b,c,d,e;for(b=1,c=arguments.length;c>b;b++)if(e=arguments[b])for(d in e)e.hasOwnProperty(d)&&(a[d]=e[d]);return a},c=function(a){return(a+"").replace(/^\s+|\s+$|/g,"")},d=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},e=Array.isArray||$&&$.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},f={a:"[aÀÁÂÃÄÅàáâãäå]",c:"[cÇç]",e:"[eÈÉÊËèéêë]",i:"[iÌÍÎÏìíîï]",n:"[nÑñ]",o:"[oÒÓÔÕÕÖØòóôõöø]",s:"[sŠš]",u:"[uÙÚÛÜùúûü]",y:"[yŸÿý]",z:"[zŽž]"};return a}),function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.MicroPlugin=b()}(this,function(){var a={};a.mixin=function(a){a.plugins={},a.prototype.initializePlugins=function(a){var c,d,e,f=this,g=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},b.isArray(a))for(c=0,d=a.length;d>c;c++)"string"==typeof a[c]?g.push(a[c]):(f.plugins.settings[a[c].name]=a[c].options,g.push(a[c].name));else if(a)for(e in a)a.hasOwnProperty(e)&&(f.plugins.settings[e]=a[e],g.push(e));for(;g.length;)f.require(g.shift())},a.prototype.loadPlugin=function(b){var c=this,d=c.plugins,e=a.plugins[b];if(!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "'+b+'" plugin');d.requested[b]=!0,d.loaded[b]=e.fn.apply(c,[c.plugins.settings[b]||{}]),d.names.push(b)},a.prototype.require=function(a){var b=this,c=b.plugins;if(!b.plugins.loaded.hasOwnProperty(a)){if(c.requested[a])throw new Error('Plugin has circular dependency ("'+a+'")');b.loadPlugin(a)}return c.loaded[a]},a.define=function(b,c){a.plugins[b]={name:b,fn:c}}};var b={isArray:Array.isArray||function(){return"[object Array]"===Object.prototype.toString.call(vArg)}};return a}),function(a,b){"function"==typeof define&&define.amd?define(["sifter","microplugin"],b):a.Selectize=b(a.Sifter,a.MicroPlugin)}(this,function(a,b){"use strict";var c=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e);h.splitText(f[0].length);var i=h.cloneNode(!0);g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}},d=function(){};d.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1),void 0)},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},d.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=d.prototype[b[c]]};var e=/Mac/.test(navigator.userAgent),f=65,g=13,h=27,i=37,j=38,k=39,l=40,m=8,n=46,o=16,p=e?91:17,q=e?18:17,r=9,s=1,t=2,u=function(a){return"undefined"!=typeof a},v=function(a){return"undefined"==typeof a||null===a?"":"boolean"==typeof a?a?"1":"0":a+""},w=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},x=function(a){return a.replace(/(['"])/g,"\\$1")},y={};y.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},y.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var z=function(a,b){if(!$.isArray(b))return b;var c,d,e={};for(c=0,d=b.length;d>c;c++)b[c].hasOwnProperty(a)&&(e[b[c][a]]=b[c]);return e},A=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},B=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},C=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];return-1===b.indexOf(c)?e.apply(a,arguments):(f[c]=arguments,void 0)},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},D=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},E=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},F=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;e>d;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},G=function(a,b){var c=$("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"nowrap"}).text(a).appendTo("body");F(b,c,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var d=c.width();return c.remove(),d},H=function(a){var b=function(b){var c,d,e,f,g,h,i,j;b=b||window.event||{},b.metaKey||b.altKey||a.data("grow")!==!1&&(c=a.val(),b.type&&"keydown"===b.type.toLowerCase()&&(d=b.keyCode,e=d>=97&&122>=d||d>=65&&90>=d||d>=48&&57>=d||32===d,d===n||d===m?(j=E(a[0]),j.length?c=c.substring(0,j.start)+c.substring(j.start+j.length):d===m&&j.start?c=c.substring(0,j.start-1)+c.substring(j.start+1):d===n&&"undefined"!=typeof j.start&&(c=c.substring(0,j.start)+c.substring(j.start+1))):e&&(h=b.shiftKey,i=String.fromCharCode(b.keyCode),i=h?i.toUpperCase():i.toLowerCase(),c+=i)),f=a.attr("placeholder")||"",!c.length&&f.length&&(c=f),g=G(c,a)+4,g!==a.width()&&(a.width(g),a.triggerHandler("resize")))};a.on("keydown keyup update blur",b),b()},I=function(b,c){var d=this;b[0].selectize=d,$.extend(d,{settings:c,$input:b,tagType:"select"===b[0].tagName.toLowerCase()?s:t,eventNS:".selectize"+ ++I.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isLocked:!1,isFocused:!1,isInputFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:B(d.onSearchChange,c.loadThrottle)}),d.sifter=new a(this.options,{diacritics:c.diacritics}),$.extend(d.options,z(c.valueField,c.options)),delete d.settings.options,$.extend(d.optgroups,z(c.optgroupValueField,c.optgroups)),delete d.settings.optgroups,d.settings.mode=d.settings.mode||(1===d.settings.maxItems?"single":"multi"),"boolean"!=typeof d.settings.hideSelected&&(d.settings.hideSelected="multi"===d.settings.mode),d.initializePlugins(d.settings.plugins),d.setupCallbacks(),d.setup()};return d.mixin(I),b.mixin(I),$.extend(I.prototype,{setup:function(){var a,b,c,d,f,g,h,i,j,k,l=this,m=l.settings,n=l.eventNS,r=$(window),t=$(document);h=l.settings.mode,i=l.$input.attr("tabindex")||"",j=l.$input.attr("class")||"",a=$("<div>").addClass(m.wrapperClass).addClass(j).addClass(h),b=$("<div>").addClass(m.inputClass).addClass("items").appendTo(a),c=$('<input type="text">').appendTo(b).attr("tabindex",i),g=$(m.dropdownParent||a),d=$("<div>").addClass(m.dropdownClass).addClass(j).addClass(h).hide().appendTo(g),f=$("<div>").addClass(m.dropdownContentClass).appendTo(d),a.css({width:l.$input[0].style.width,display:l.$input.css("display")}),l.plugins.names.length&&(k="plugin-"+l.plugins.names.join(" plugin-"),a.addClass(k),d.addClass(k)),(null===m.maxItems||m.maxItems>1)&&l.tagType===s&&l.$input.attr("multiple","multiple"),l.settings.placeholder&&c.attr("placeholder",m.placeholder),l.$wrapper=a,l.$control=b,l.$control_input=c,l.$dropdown=d,l.$dropdown_content=f,b.on("mousedown",function(a){a.isDefaultPrevented()||window.setTimeout(function(){l.focus(!0)},0)}),b.on("click",function(){l.isInputFocused||l.focus(!0)}),d.on("mouseenter","[data-selectable]",function(){return l.onOptionHover.apply(l,arguments)}),d.on("mousedown","[data-selectable]",function(){return l.onOptionSelect.apply(l,arguments)}),D(b,"mousedown","*:not(input)",function(){return l.onItemSelect.apply(l,arguments)}),H(c),c.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return l.onKeyDown.apply(l,arguments)},keyup:function(){return l.onKeyUp.apply(l,arguments)},keypress:function(){return l.onKeyPress.apply(l,arguments)},resize:function(){l.positionDropdown.apply(l,[])},blur:function(){return l.onBlur.apply(l,arguments)},focus:function(){return l.onFocus.apply(l,arguments)}}),t.on("keydown"+n,function(a){l.isCmdDown=a[e?"metaKey":"ctrlKey"],l.isCtrlDown=a[e?"altKey":"ctrlKey"],l.isShiftDown=a.shiftKey}),t.on("keyup"+n,function(a){a.keyCode===q&&(l.isCtrlDown=!1),a.keyCode===o&&(l.isShiftDown=!1),a.keyCode===p&&(l.isCmdDown=!1)}),t.on("mousedown"+n,function(a){if(l.isFocused){if(a.target===l.$dropdown[0]||a.target.parentNode===l.$dropdown[0]){var b=l.ignoreFocus;return l.ignoreFocus=!0,window.setTimeout(function(){l.ignoreFocus=b,l.focus(!1)},0),void 0}l.$control.has(a.target).length||a.target===l.$control[0]||l.blur()}}),r.on(["scroll"+n,"resize"+n].join(" "),function(){l.isOpen&&l.positionDropdown.apply(l,arguments)}),r.on("mousemove"+n,function(){l.ignoreHover=!1}),l.$input.attr("tabindex",-1).hide().after(l.$wrapper),$.isArray(m.items)&&(l.setValue(m.items),delete m.items),l.updateOriginalInput(),l.refreshItems(),l.refreshClasses(),l.updatePlaceholder(),l.isSetup=!0,l.$input.is(":disabled")&&l.disable(),l.on("change",this.onChange),l.trigger("initialize"),m.preload&&l.onSearchChange("")},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]],b&&this.on(a,b))},triggerCallback:function(a){var b;"function"==typeof this.settings[a]&&(b=Array.prototype.slice.apply(arguments,[1]),this.settings[a].apply(this,b))},onChange:function(){this.$input.trigger("change")},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){a.target===this.$control_input[0];var b=this;if(b.isLocked)return a.keyCode!==r&&a.preventDefault(),void 0;switch(a.keyCode){case f:if(b.isCmdDown)return b.selectAll(),void 0;break;case h:return b.blur(),void 0;case l:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return a.preventDefault(),void 0;case j:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return a.preventDefault(),void 0;case g:return b.$activeOption&&b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault(),void 0;case i:return b.advanceSelection(-1,a),void 0;case k:return b.advanceSelection(1,a),void 0;case r:return b.settings.create&&$.trim(b.$control_input.val()).length&&(b.createItem(),a.preventDefault()),void 0;case m:case n:return b.deleteSelection(a),void 0}return b.isFull()||b.isInputHidden?(a.preventDefault(),void 0):void 0},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this;return b.isInputFocused=!0,b.isFocused=!0,b.isDisabled?(b.blur(),a.preventDefault(),!1):(b.ignoreFocus||("focus"===b.settings.preload&&b.onSearchChange(""),b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus),b.refreshClasses()),void 0)},onBlur:function(){var a=this;a.isInputFocused=!1,a.ignoreFocus||(a.close(),a.setTextboxValue(""),a.setActiveItem(null),a.setActiveOption(null),a.setCaret(a.items.length),a.isFocused=!1,a.refreshClasses())},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(a){var b,c,d=this;a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),d.focus(!1),c=$(a.currentTarget),c.hasClass("create")?d.createItem():(b=c.attr("data-value"),b&&(d.setTextboxValue(""),d.addItem(b),!d.settings.hideSelected&&a.type&&/mouse/.test(a.type)&&d.setActiveOption(d.getOption(b))))},onItemSelect:function(a){var b=this;"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a),b.focus(!1),b.hideInput())},load:function(a){var b=this,c=b.$wrapper.addClass("loading");b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(!1),b.isInputFocused&&b.open()),b.loading||c.removeClass("loading"),b.trigger("load",a)}])},setTextboxValue:function(a){this.$control_input.val(a).triggerHandler("update"),this.lastValue=a},getValue:function(){return this.tagType===s&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a){C(this,["change"],function(){this.clear();for(var b=$.isArray(a)?a:[a],c=0,d=b.length;d>c;c++)this.addItem(b[c])})},setActiveItem:function(a,b){var c,d,e,f,g,h,i,j,k=this;if(a=$(a),!a.length)return $(k.$activeItems).removeClass("active"),k.$activeItems=[],k.isFocused=k.isInputFocused,void 0;if(c=b&&b.type.toLowerCase(),"mousedown"===c&&k.isShiftDown&&k.$activeItems.length){for(j=k.$control.children(".active:last"),f=Array.prototype.indexOf.apply(k.$control[0].childNodes,[j[0]]),g=Array.prototype.indexOf.apply(k.$control[0].childNodes,[a[0]]),f>g&&(i=f,f=g,g=i),d=f;g>=d;d++)h=k.$control[0].childNodes[d],-1===k.$activeItems.indexOf(h)&&($(h).addClass("active"),k.$activeItems.push(h));b.preventDefault()}else"mousedown"===c&&k.isCtrlDown||"keydown"===c&&this.isShiftDown?a.hasClass("active")?(e=k.$activeItems.indexOf(a[0]),k.$activeItems.splice(e,1),a.removeClass("active")):k.$activeItems.push(a.addClass("active")[0]):($(k.$activeItems).removeClass("active"),k.$activeItems=[a.addClass("active")[0]]);k.isFocused=!!k.$activeItems.length||k.isInputFocused},setActiveOption:function(a,b,c){var d,e,f,g,h,i=this;i.$activeOption&&i.$activeOption.removeClass("active"),i.$activeOption=null,a=$(a),a.length&&(i.$activeOption=a.addClass("active"),(b||!u(b))&&(d=i.$dropdown_content.height(),e=i.$activeOption.outerHeight(!0),b=i.$dropdown_content.scrollTop()||0,f=i.$activeOption.offset().top-i.$dropdown_content.offset().top+b,g=f,h=f-d+e,f+e>d-b?i.$dropdown_content.stop().animate({scrollTop:h},c?i.settings.scrollDuration:0):b>f&&i.$dropdown_content.stop().animate({scrollTop:g},c?i.settings.scrollDuration:0)))},selectAll:function(){this.$activeItems=Array.prototype.slice.apply(this.$control.children(":not(input)").addClass("active")),this.isFocused=!0,this.$activeItems.length&&this.hideInput()},hideInput:function(){var a=this;a.close(),a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(a){var b=this;b.isDisabled||(b.ignoreFocus=!0,b.$control_input[0].focus(),b.isInputFocused=!0,window.setTimeout(function(){b.ignoreFocus=!1,a&&b.onFocus()},0))},blur:function(){this.$control_input.trigger("blur")},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.searchField;return{fields:$.isArray(b)?b:[b],sort:a.sortField,direction:a.sortDirection}},search:function(a){var b,c,d,e=this,f=e.settings,g=this.getSearchOptions();if(f.score&&(d=e.settings.score.apply(this,[a]),"function"!=typeof d))throw new Error('Selectize "score" setting must be a function that returns a function');if(a!==e.lastQuery?(e.lastQuery=a,c=e.sifter.search(a,$.extend(g,{score:d})),e.currentResults=c):c=$.extend(!0,{},e.currentResults),f.hideSelected)for(b=c.items.length-1;b>=0;b--)-1!==e.items.indexOf(v(c.items[b].id))&&c.items.splice(b,1);return c},refreshOptions:function(a){"undefined"==typeof a&&(a=!0);var b,d,e,f,g,h,i,j,k,l,m,n=this,o=n.$control_input.val(),p=n.search(o),q=n.$dropdown_content;if(d=p.items.length,"number"==typeof n.settings.maxOptions&&(d=Math.min(d,n.settings.maxOptions)),e={},n.settings.optgroupOrder)for(f=n.settings.optgroupOrder,b=0;b<f.length;b++)e[f[b]]=[];else f=[];for(b=0;d>b;b++)g=n.options[p.items[b].id],h=g[n.settings.optgroupField]||"",n.optgroups.hasOwnProperty(h)||(h=""),e.hasOwnProperty(h)||(e[h]=[],f.push(h)),e[h].push(n.render("option",g));for(i=[],b=0,d=f.length;d>b;b++)h=f[b],n.optgroups.hasOwnProperty(h)&&e[h].length?(j=n.render("optgroup_header",n.optgroups[h])||"",j+=e[h].join(""),i.push(n.render("optgroup",$.extend({},n.optgroups[h],{html:j})))):i.push(e[h].join(""));if(q.html(i.join("")),n.settings.highlight&&p.query.length&&p.tokens.length)for(b=0,d=p.tokens.length;d>b;b++)c(q,p.tokens[b].regex);if(!n.settings.hideSelected)for(b=0,d=n.items.length;d>b;b++)n.getOption(n.items[b]).addClass("selected");k=n.settings.create&&p.query.length,k&&(q.prepend(n.render("option_create",{input:o})),m=$(q[0].childNodes[0])),n.hasOptions=p.items.length>0||k,n.hasOptions?(l=p.items.length>0?m?n.getAdjacentOption(m,1):q.find("[data-selectable]").first():m,n.setActiveOption(l),a&&!n.isOpen&&n.open()):(n.setActiveOption(null),a&&n.isOpen&&n.close())},addOption:function(a){var b,c,d,e=this;if($.isArray(a))for(b=0,c=a.length;c>b;b++)e.addOption(a[b]);else d=v(a[e.settings.valueField]),d&&!e.options.hasOwnProperty(d)&&(e.userOptions[d]=!0,e.options[d]=a,e.lastQuery=null,e.trigger("option_add",d,a))},addOptionGroup:function(a,b){this.optgroups[a]=b,this.trigger("optgroup_add",value,b)},updateOption:function(a,b){var c,d,e,f,g,h,i=this;if(a=v(a),e=v(b[i.settings.valueField]),i.options.hasOwnProperty(a)){if(!e)throw new Error("Value must be set in option data");e!==a&&(delete i.options[a],f=i.items.indexOf(a),-1!==f&&i.items.splice(f,1,e)),i.options[e]=b,g=i.renderCache.item,h=i.renderCache.option,u(g)&&(delete g[a],delete g[e]),u(h)&&(delete h[a],delete h[e]),-1!==i.items.indexOf(e)&&(c=i.getItem(a),d=$(i.render("item",b)),c.hasClass("active")&&d.addClass("active"),c.replaceWith(d)),i.isOpen&&i.refreshOptions(!1)}},removeOption:function(a){var b=this;a=v(a),delete b.userOptions[a],delete b.options[a],b.lastQuery=null,b.trigger("option_remove",a),b.removeItem(a)},clearOptions:function(){var a=this;a.loadedSearches={},a.userOptions={},a.options=a.sifter.items={},a.lastQuery=null,a.trigger("option_clear"),a.clear()},getOption:function(a){return a=v(a),a?this.$dropdown_content.find("[data-selectable]").filter('[data-value="'+x(a)+'"]:first'):$()},getAdjacentOption:function(a,b){var c=this.$dropdown.find("[data-selectable]"),d=c.index(a)+b;return d>=0&&d<c.length?c.eq(d):$()},getItem:function(a){return this.$control.children('[data-value="'+x(v(a))+'"]')},addItem:function(a){C(this,["change"],function(){var b,c,d,e,f=this,g=f.settings.mode;a=v(a),"single"===g&&f.clear(),"multi"===g&&f.isFull()||-1===f.items.indexOf(a)&&f.options.hasOwnProperty(a)&&(b=$(f.render("item",f.options[a])),f.items.splice(f.caretPos,0,a),f.insertAtCaret(b),f.refreshClasses(),f.isSetup&&(d=f.$dropdown_content.find("[data-selectable]"),c=f.getOption(a),e=f.getAdjacentOption(c,1).attr("data-value"),f.refreshOptions(f.isFocused&&"single"!==g),e&&f.setActiveOption(f.getOption(e)),!d.length||null!==f.settings.maxItems&&f.items.length>=f.settings.maxItems?f.close():f.positionDropdown(),f.isFocused&&window.setTimeout(function(){"single"===g?(f.blur(),f.focus(!1),f.hideInput()):f.focus(!1)},0),f.updatePlaceholder(),f.trigger("item_add",a,b),f.updateOriginalInput()))})},removeItem:function(a){var b,c,d,e=this;b="object"==typeof a?a:e.getItem(a),a=v(b.attr("data-value")),c=e.items.indexOf(a),-1!==c&&(b.remove(),b.hasClass("active")&&(d=e.$activeItems.indexOf(b[0]),e.$activeItems.splice(d,1)),e.items.splice(c,1),e.lastQuery=null,!e.settings.persist&&e.userOptions.hasOwnProperty(a)&&e.removeOption(a),c<e.caretPos&&e.setCaret(e.caretPos-1),e.refreshClasses(),e.updatePlaceholder(),e.updateOriginalInput(),e.positionDropdown(),e.trigger("item_remove",a))},createItem:function(){var a=this,b=$.trim(a.$control_input.val()||""),c=a.caretPos;if(b.length){a.lock();var d="function"==typeof a.settings.create?this.settings.create:function(b){var c={};return c[a.settings.labelField]=b,c[a.settings.valueField]=b,c},e=A(function(b){if(a.unlock(),a.focus(!1),b&&"object"==typeof b){var d=v(b[a.settings.valueField]);d&&(a.setTextboxValue(""),a.addOption(b),a.setCaret(c),a.addItem(d),a.refreshOptions("single"!==a.settings.mode),a.focus(!1))}}),f=d.apply(this,[b,e]);"undefined"!=typeof f&&e(f)}},refreshItems:function(){if(this.lastQuery=null,this.isSetup)for(var a=0;a<this.items.length;a++)this.addItem(this.items);this.refreshClasses(),this.updateOriginalInput()},refreshClasses:function(){var a=this,b=a.isFull(),c=a.isLocked;this.$control.toggleClass("focus",a.isFocused).toggleClass("disabled",a.isDisabled).toggleClass("locked",c).toggleClass("full",b).toggleClass("not-full",!b).toggleClass("dropdown-active",a.isOpen).toggleClass("has-options",!$.isEmptyObject(a.options)).toggleClass("has-items",a.items.length>0),this.$control_input.data("grow",!b&&!c)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(){var a,b,c,d=this;if("select"===d.$input[0].tagName.toLowerCase()){for(c=[],a=0,b=d.items.length;b>a;a++)c.push('<option value="'+w(d.items[a])+'" selected="selected"></option>');c.length||this.$input.attr("multiple")||c.push('<option value="" selected="selected"></option>'),d.$input.html(c.join(""))}else d.$input.val(d.getValue());d.isSetup&&d.trigger("change",d.$input.val())},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update")}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(!0),a.isOpen=!0,a.refreshClasses(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",this.$dropdown))},close:function(){var a=this;a.isOpen&&(a.$dropdown.hide(),a.setActiveOption(null),a.isOpen=!1,a.refreshClasses(),a.trigger("dropdown_close",a.$dropdown))},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a.outerWidth(),top:b.top,left:b.left})},clear:function(){var a=this;a.items.length&&(a.$control.children(":not(input)").remove(),a.items=[],a.setCaret(0),a.updatePlaceholder(),a.updateOriginalInput(),a.refreshClasses(),a.showInput(),a.trigger("clear"))},insertAtCaret:function(a){var b=Math.min(this.caretPos,this.items.length);0===b?this.$control.prepend(a):$(this.$control[0].childNodes[b]).before(a),this.setCaret(b+1)},deleteSelection:function(a){var b,c,d,e,f,g,h,i,j,k=this;if(d=a&&a.keyCode===m?-1:1,e=E(k.$control_input[0]),k.$activeOption&&!k.settings.hideSelected&&(h=k.getAdjacentOption(k.$activeOption,-1).attr("data-value")),f=[],k.$activeItems.length){for(j=k.$control.children(".active:"+(d>0?"last":"first")),g=k.$control.children(":not(input)").index(j),d>0&&g++,b=0,c=k.$activeItems.length;c>b;b++)f.push($(k.$activeItems[b]).attr("data-value"));a&&(a.preventDefault(),a.stopPropagation())}else(k.isFocused||"single"===k.settings.mode)&&k.items.length&&(0>d&&0===e.start&&0===e.length?f.push(k.items[k.caretPos-1]):d>0&&e.start===k.$control_input.val().length&&f.push(k.items[k.caretPos]));if(!f.length||"function"==typeof k.settings.onDelete&&k.settings.onDelete(f)===!1)return!1;for("undefined"!=typeof g&&k.setCaret(g);f.length;)k.removeItem(f.pop());return k.showInput(),k.refreshOptions(!0),h&&(i=k.getOption(h),i.length&&k.setActiveOption(i)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h,i=this;0!==a&&(c=a>0?"last":"first",d=E(i.$control_input[0]),i.isInputFocused&&!i.isInputHidden?(f=i.$control_input.val().length,g=0>a?0===d.start&&0===d.length:d.start===f,g&&!f&&i.advanceCaret(a,b)):(h=i.$control.children(".active:"+c),h.length&&(e=i.$control.children(":not(input)").index(h),i.setActiveItem(null),i.setCaret(a>0?e+1:e),i.showInput())))},advanceCaret:function(a,b){if(0!==a){var c=this,d=a>0?"next":"prev";if(c.isShiftDown){var e=c.$control_input[d]();e.length&&(c.hideInput(),c.setActiveItem(e),b&&b.preventDefault())}else c.setCaret(c.caretPos+a)}},setCaret:function(a){var b=this;a="single"===b.settings.mode?b.items.length:Math.max(0,Math.min(b.items.length,a));var c,d,e,f;for(e=b.$control.children(":not(input)"),c=0,d=e.length;d>c;c++)f=$(e[c]).detach(),a>c?b.$control_input.before(f):b.$control.append(f);b.caretPos=a},lock:function(){this.close(),this.isLocked=!0,this.refreshClasses()},unlock:function(){this.isLocked=!1,this.refreshClasses()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.isDisabled=!1,a.unlock()},destroy:function(){var a=this,b=a.eventNS;a.trigger("destroy"),a.off(),a.$wrapper.remove(),a.$dropdown.remove(),a.$input.show(),$(window).off(b),$(document).off(b),$(document.body).off(b),delete a.$input[0].selectize},render:function(a,b){var c,d,e,f="",g=!1,h=this,i=/^[\t ]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;if(("option"===a||"item"===a)&&(c=v(b[h.settings.valueField]),g=!!c),g&&(u(h.renderCache[a])||(h.renderCache[a]={}),h.renderCache[a].hasOwnProperty(c)))return h.renderCache[a][c];if(h.settings.render&&"function"==typeof h.settings.render[a])f=h.settings.render[a].apply(this,[b,w]);else switch(e=b[h.settings.labelField],a){case"optgroup":f='<div class="optgroup">'+b.html+"</div>";break;case"optgroup_header":e=b[h.settings.optgroupLabelField],f='<div class="optgroup-header">'+w(e)+"</div>";break;case"option":f='<div class="option">'+w(e)+"</div>";break;case"item":f='<div class="item">'+w(e)+"</div>";break;case"option_create":f='<div class="create">Add <strong>'+w(b.input)+"</strong>&hellip;</div>"}return("option"===a||"option_create"===a)&&(f=f.replace(i,"<$1 data-selectable")),"optgroup"===a&&(d=b[h.settings.optgroupValueField]||"",f=f.replace(i,'<$1 data-group="'+w(d)+'"')),("option"===a||"item"===a)&&(f=f.replace(i,'<$1 data-value="'+w(c||"")+'"')),g&&(h.renderCache[a][c]=f),f}}),I.count=0,I.defaults={plugins:[],delimiter:",",persist:!0,diacritics:!0,create:!1,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,preload:!1,scrollDuration:60,loadThrottle:300,dataAttr:"data-data",optgroupField:"optgroup",sortField:null,sortDirection:"asc",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",optgroupOrder:null,searchField:["text"],mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,render:{}},$.fn.selectize=function(a){a=a||{};var b=$.fn.selectize.defaults,c=a.dataAttr||b.dataAttr,d=function(c,d){var e,f,g,h=$.trim(c.val()||"");if(h.length){for(g=h.split(a.delimiter||b.delimiter),e=0,f=g.length;f>e;e++)d.options[g[e]]={text:g[e],value:g[e]};d.items=g}},e=function(a,b){var d,e,f,g;b.maxItems=a.attr("multiple")?null:1;var h=function(a){var b=c&&a.attr(c);return"string"==typeof b&&b.length?JSON.parse(b):null},i=function(a,c){a=$(a);var d=a.attr("value")||"";d.length&&(b.options[d]=h(a)||{text:a.text(),value:d,optgroup:c},a.is(":selected")&&b.items.push(d))},j=function(a){var c,d,e=$("option",a);a=$(a);var f=a.attr("label");for(f&&f.length&&(b.optgroups[f]=h(a)||{label:f}),c=0,d=e.length;d>c;c++)i(e[c],f)};for(g=a.children(),d=0,e=g.length;e>d;d++)f=g[d].tagName.toLowerCase(),"optgroup"===f?j(g[d]):"option"===f&&i(g[d])};return this.each(function(){var c,f=$(this),g=f[0].tagName.toLowerCase(),h={placeholder:f.children('option[value=""]').text()||f.attr("placeholder"),options:{},optgroups:{},items:[]};"select"===g?e(f,h):d(f,h),c=new I(f,$.extend(!0,{},b,h,a)),f.data("selectize",c),f.addClass("selectized")})},$.fn.selectize.defaults=I.defaults,I.define("drag_drop",function(){if(!$.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var a=this;this.setup=function(){var b=a.setup;return function(){b.apply(this,arguments);var c=this.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),c.css({overflow:"visible"})},stop:function(){c.css({overflow:"hidden"});var b=this.$activeItems?this.$activeItems.slice():null,d=[];c.children("[data-value]").each(function(){d.push($(this).attr("data-value"))}),a.setValue(d),a.setActiveItem(b)}})}}()}}),I.define("dropdown_header",function(a){var b=this;a=$.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'">'+'<div class="'+a.titleRowClass+'">'+'<span class="'+a.labelClass+'">'+a.title+"</span>"+'<a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a>'+"</div>"+"</div>"
}},a),b.setup=function(){var c=b.setup;return function(){c.apply(b,arguments),b.$dropdown_header=$(a.html(a)),b.$dropdown.prepend(b.$dropdown_header)}}()}),I.define("optgroup_columns",function(a){var b=this;a=$.extend({equalizeWidth:!0,equalizeHeight:!0},a),this.getAdjacentOption=function(a,b){var c=a.closest("[data-group]").find("[data-selectable]"),d=c.index(a)+b;return d>=0&&d<c.length?c.eq(d):$()},this.onKeyDown=function(){var a=b.onKeyDown;return function(c){var d,e,f,g;return!this.isOpen||c.keyCode!==i&&c.keyCode!==k?a.apply(this,arguments):(b.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=c.keyCode===i?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),e.length&&this.setActiveOption(e),void 0)}}();var c=function(){var c,d,e,f,g,h,i;if(i=$("[data-group]",b.$dropdown_content),d=i.length,d&&b.$dropdown_content.width()){if(a.equalizeHeight){for(e=0,c=0;d>c;c++)e=Math.max(e,i.eq(c).height());i.css({height:e})}a.equalizeWidth&&(h=b.$dropdown_content.innerWidth(),f=Math.round(h/d),i.css({width:f}),d>1&&(g=h-f*(d-1),i.eq(d-1).css({width:g})))}};(a.equalizeHeight||a.equalizeWidth)&&(y.after(this,"positionDropdown",c),y.after(this,"refreshOptions",c))}),I.define("remove_button",function(){var a=this;this.settings.render.item=function(b){var c=b[a.settings.labelField];return'<div class="item">'+c+' <a href="javascript:void(0)" class="remove" tabindex="-1" title="Remove">&times;</a></div>'},this.setup=function(){var b=a.setup;return function(){b.apply(this,arguments),this.$control.on("click",".remove",function(b){b.preventDefault();var c=$(b.target).parent();a.setActiveItem(c),a.deleteSelection()&&a.setCaret(a.items.length)})}}()}),I.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return b.keyCode===m&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1,d>=0&&d<this.items.length)?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),b.preventDefault(),void 0):c.apply(this,arguments)}}()}),I});
