(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./portoSpPrice/cssMixins/vcStyle.pcss":function(e,t){e.exports="@if $elementId != false {\r\n\t.single-price-$elementId {\r\n\t\tp.price {\r\n\t\t\t@if $spNormalColor != false {\r\n\t\t\t\tcolor: $spNormalColor;\r\n\t\t\t}\r\n\t\t\t@if $normalFontSize != false {\r\n\t\t\t\tfont-size: $normalFontSize;\r\n\t\t\t}\r\n\t\t\t@if $normalFontWeight != false {\r\n\t\t\t\tfont-weight: $normalFontWeight;\r\n\t\t\t}\r\n\t\t\t@if $normalLineHeight != false {\r\n\t\t\t\tline-height: $normalLineHeight;\r\n\t\t\t}\r\n\t\t\t@if $normalLetterSpacing != false {\r\n\t\t\t\tletter-spacing: $normalLetterSpacing;\r\n\t\t\t}\r\n\t\t\tdel {\r\n\t\t\t\t@if $spPriceColor != false {\r\n\t\t\t\t\tcolor: $spPriceColor;\r\n\t\t\t\t}\r\n\t\t\t\t@if $oldFontSize != false {\r\n\t\t\t\t\tfont-size: $oldFontSize;\r\n\t\t\t\t}\r\n\t\t\t\t@if $oldFontWeight != false {\r\n\t\t\t\t\tfont-weight: $oldFontWeight;\r\n\t\t\t\t}\r\n\t\t\t\t@if $oldLineHeight != false {\r\n\t\t\t\t\tline-height: $oldLineHeight;\r\n\t\t\t\t}\r\n\t\t\t\t@if $oldLetterSpacing != false {\r\n\t\t\t\t\tletter-spacing: $oldLetterSpacing;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t@if $betweenSpacing != false {\r\n\t\t.single-price-$elementId del {\r\n\t\t\tmargin-right: $(betweenSpacing)px;\r\n\t\t}\r\n\t\tbody.rtl .single-price-$elementId del {\r\n\t\t\tmargin-left: $(betweenSpacing)px;\r\n\t\t}\r\n\t}\r\n\r\n}\r\n"},"./portoSpPrice/index.js":function(e,t,n){"use strict";n.r(t);var l=n("./node_modules/vc-cake/index.js"),i=n("./node_modules/@babel/runtime/helpers/extends.js"),r=n.n(i),o=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),a=n.n(o),s=n("./node_modules/@babel/runtime/helpers/createClass.js"),c=n.n(s),p=n("./node_modules/@babel/runtime/helpers/get.js"),u=n.n(p),d=n("./node_modules/@babel/runtime/helpers/inherits.js"),g=n.n(d),m=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),v=n.n(m),b=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=n.n(b),f=n("./node_modules/react/index.js"),y=n.n(f);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return v()(this,n)}}var x=function(e){g()(n,e);var t=S(n);function n(){return a()(this,n),t.apply(this,arguments)}return c()(n,[{key:"componentDidMount",value:function(){u()(h()(n.prototype),"updateShortcodeToHtml",this).call(this,this.getShortcode(),this.refs.vcvhelper)}},{key:"getShortcode",value:function(){return"[porto_single_product_price]"}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.atts,l=e.editor,i=n.spAlign,o=n.el_class,a="vc-sp-price";a=a.concat(" single-price-".concat(t)),i&&(a=a.concat(" text-".concat(i))),"string"==typeof o&&o&&(a+=" "+o);var s=this.applyDO("margin border padding animation");return y.a.createElement("div",r()({className:a},l,{id:"el-"+t},s),y.a.createElement("div",{className:"vcvhelper",ref:"vcvhelper","data-vcvs-html":this.getShortcode()}))}}]),n}(Object(l.getService)("portoComponent").shortcodeComponent);(0,Object(l.getService)("cook").add)(n("./portoSpPrice/settings.json"),(function(e){e.add(x)}),{css:!1,editorCss:!1,mixins:{vcStyle:{mixin:n("./node_modules/raw-loader/index.js!./portoSpPrice/cssMixins/vcStyle.pcss")}}})},"./portoSpPrice/settings.json":function(e){e.exports=JSON.parse('{"spAlign":{"type":"buttonGroup","access":"public","value":"left","options":{"label":"Alignment","values":[{"label":"Left","value":"left","icon":"vcv-ui-icon-attribute-alignment-left"},{"label":"Center","value":"center","icon":"vcv-ui-icon-attribute-alignment-center"},{"label":"Right","value":"right","icon":"vcv-ui-icon-attribute-alignment-right"}]}},"spNormalColor":{"type":"color","access":"public","value":"","options":{"label":"Regular Price","cssMixin":{"mixin":"vcStyle","property":"spNormalColor","namePattern":"[\\\\da-f]+"}}},"spPriceColor":{"type":"color","access":"public","value":"","options":{"label":"Old Price","cssMixin":{"mixin":"vcStyle","property":"spPriceColor","namePattern":"[\\\\da-f]+"}}},"betweenSpacing":{"type":"range","access":"public","value":"","options":{"label":"Spacing between old price and sale price","min":0,"max":100,"measurement":"px","cssMixin":{"mixin":"vcStyle","property":"betweenSpacing","namePattern":"[\\\\d]+"}}},"normalFontSize":{"type":"string","access":"public","value":"","options":{"label":"Font size","cssMixin":{"mixin":"vcStyle","property":"normalFontSize"}}},"normalFontWeight":{"type":"dropdown","access":"public","value":"","options":{"label":"Font weight","cssMixin":{"mixin":"vcStyle","property":"normalFontWeight"},"values":[{"label":"Default","value":""},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"}]}},"normalLineHeight":{"type":"string","access":"public","value":"","options":{"label":"Line height","cssMixin":{"mixin":"vcStyle","property":"normalLineHeight"}}},"normalLetterSpacing":{"type":"string","access":"public","value":"","options":{"label":"Letter spacing","cssMixin":{"mixin":"vcStyle","property":"normalLetterSpacing"}}},"oldFontSize":{"type":"string","access":"public","value":"","options":{"label":"Font size","cssMixin":{"mixin":"vcStyle","property":"oldFontSize"}}},"oldFontWeight":{"type":"dropdown","access":"public","value":"","options":{"label":"Font weight","cssMixin":{"mixin":"vcStyle","property":"oldFontWeight"},"values":[{"label":"Default","value":""},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"}]}},"oldLineHeight":{"type":"string","access":"public","value":"","options":{"label":"Line height","cssMixin":{"mixin":"vcStyle","property":"oldLineHeight"}}},"oldLetterSpacing":{"type":"string","access":"public","value":"","options":{"label":"Letter spacing","cssMixin":{"mixin":"vcStyle","property":"oldLetterSpacing"}}},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["spAlign","spNormalColor","spPriceColor","betweenSpacing","el_class"],"options":{"label":"General"}},"editFormTab2":{"type":"group","access":"protected","value":["normalFontSize","normalFontWeight","normalLineHeight","normalLetterSpacing"],"options":{"label":"Regular Price Style"}},"editFormTab3":{"type":"group","access":"protected","value":["oldFontSize","oldFontWeight","oldLineHeight","oldLetterSpacing"],"options":{"label":"Old Price Style"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","editFormTab2","editFormTab3","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"el_class":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"tag":{"access":"protected","type":"string","value":"portoSpPrice"}}')}},[["./portoSpPrice/index.js"]]]);