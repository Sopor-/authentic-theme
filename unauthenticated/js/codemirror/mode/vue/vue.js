(function(b){if(typeof exports==="object"&&typeof module==="object"){b(require("../../lib/codemirror"),require("../../addon/mode/overlay"),require("../xml/xml"),require("../javascript/javascript"),require("../coffeescript/coffeescript"),require("../css/css"),require("../sass/sass"),require("../stylus/stylus"),require("../pug/pug"),require("../handlebars/handlebars"))}else{if(typeof define==="function"&&define.amd){define(["../../lib/codemirror","../../addon/mode/overlay","../xml/xml","../javascript/javascript","../coffeescript/coffeescript","../css/css","../sass/sass","../stylus/stylus","../pug/pug","../handlebars/handlebars"],b)}else{b(CodeMirror)}}})(function(d){var c={script:[["lang",/coffee(script)?/,"coffeescript"],["type",/^(?:text|application)\/(?:x-)?coffee(?:script)?$/,"coffeescript"]],style:[["lang",/^stylus$/i,"stylus"],["lang",/^sass$/i,"sass"],["type",/^(text\/)?(x-)?styl(us)?$/i,"stylus"],["type",/^text\/sass/i,"sass"]],template:[["lang",/^vue-template$/i,"vue"],["lang",/^pug$/i,"pug"],["lang",/^handlebars$/i,"handlebars"],["type",/^(text\/)?(x-)?pug$/i,"pug"],["type",/^text\/x-handlebars-template$/i,"handlebars"],[null,null,"vue-template"]]};d.defineMode("vue-template",function(f,b){var a={token:function(e){if(e.match(/^\{\{.*?\}\}/)){return"meta mustache"}while(e.next()&&!e.match("{{",false)){}return null}};return d.overlayMode(d.getMode(f,b.backdrop||"text/html"),a)});d.defineMode("vue",function(a){return d.getMode(a,{name:"htmlmixed",tags:c})},"htmlmixed","xml","javascript","coffeescript","css","sass","stylus","pug","handlebars");d.defineMIME("script/x-vue","vue");d.defineMIME("text/x-vue","vue")});