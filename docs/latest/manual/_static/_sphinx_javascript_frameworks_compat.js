jQuery.urldecode=function(e){return e?decodeURIComponent(e.replace(/\+/g," ")):e},jQuery.urlencode=encodeURIComponent,jQuery.getQueryParameters=function(e){void 0===e&&(e=document.location.search);for(var t=e.substr(e.indexOf("?")+1).split("&"),r={},n=0;n<t.length;n++){var a=t[n].split("=",2),o=jQuery.urldecode(a[0]),s=jQuery.urldecode(a[1]);o in r?r[o].push(s):r[o]=[s]}return r},jQuery.fn.highlightText=function(e,t){function r(n,a){if(3===n.nodeType){var o=n.nodeValue,s=o.toLowerCase().indexOf(e);if(s>=0&&!jQuery(n.parentNode).hasClass(t)&&!jQuery(n.parentNode).hasClass("nohighlight")){var u,i=jQuery(n).closest("body, svg, foreignObject").is("svg");if(i?u=document.createElementNS("http://www.w3.org/2000/svg","tspan"):(u=document.createElement("span")).className=t,u.appendChild(document.createTextNode(o.substr(s,e.length))),n.parentNode.insertBefore(u,n.parentNode.insertBefore(document.createTextNode(o.substr(s+e.length)),n.nextSibling)),n.nodeValue=o.substr(0,s),i){var c=document.createElementNS("http://www.w3.org/2000/svg","rect"),l=n.parentElement.getBBox();c.x.baseVal.value=l.x,c.y.baseVal.value=l.y,c.width.baseVal.value=l.width,c.height.baseVal.value=l.height,c.setAttribute("class",t),a.push({parent:n.parentNode,target:c})}}}else jQuery(n).is("button, select, textarea")||jQuery.each(n.childNodes,(function(){r(this,a)}))}for(var n=[],a=this.each((function(){r(this,n)})),o=0;o<n.length;++o)jQuery(n[o].parent).before(n[o].target);return a},jQuery.browser||(jQuery.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},jQuery.browser={},jQuery.browser[jQuery.uaMatch(navigator.userAgent).browser]=!0);