var stopwords=["a","and","are","as","at","be","but","by","for","if","in","into","is","it","near","no","not","of","on","or","such","that","the","their","then","there","these","they","this","to","was","will","with"],Stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[aeiouy]",s="[^aeiou][^aeiouy]*",a=i+"[aeiou]*",n="^("+s+")?"+a+s,l="^("+s+")?"+a+s+"("+a+")?$",o="^("+s+")?"+a+s+a+s,c="^("+s+")?"+i;this.stemWord=function(a){var r,u,x,$,p,w,g;if(a.length<3)return a;if("y"==(x=a.substr(0,1))&&(a=x.toUpperCase()+a.substr(1)),p=/^(.+?)([^s])s$/,($=/^(.+?)(ss|i)es$/).test(a)?a=a.replace($,"$1$2"):p.test(a)&&(a=a.replace(p,"$1$2")),p=/^(.+?)(ed|ing)$/,($=/^(.+?)eed$/).test(a)){var b=$.exec(a);($=new RegExp(n)).test(b[1])&&($=/.$/,a=a.replace($,""))}else p.test(a)&&(r=(b=p.exec(a))[1],(p=new RegExp(c)).test(r)&&(a=r,p=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\1$"),g=new RegExp("^"+s+i+"[^aeiouwxy]$"),p.test(a)?a+="e":w.test(a)?($=/.$/,a=a.replace($,"")):g.test(a)&&(a+="e")));return($=/^(.+?)y$/).test(a)&&(r=(b=$.exec(a))[1],($=new RegExp(c)).test(r)&&(a=r+"i")),($=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/).test(a)&&(r=(b=$.exec(a))[1],u=b[2],($=new RegExp(n)).test(r)&&(a=r+e[u])),($=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/).test(a)&&(r=(b=$.exec(a))[1],u=b[2],($=new RegExp(n)).test(r)&&(a=r+t[u])),p=/^(.+?)(s|t)(ion)$/,($=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/).test(a)?(r=(b=$.exec(a))[1],($=new RegExp(o)).test(r)&&(a=r)):p.test(a)&&(r=(b=p.exec(a))[1]+b[2],(p=new RegExp(o)).test(r)&&(a=r)),($=/^(.+?)e$/).test(a)&&(r=(b=$.exec(a))[1],$=new RegExp(o),p=new RegExp(l),w=new RegExp("^"+s+i+"[^aeiouwxy]$"),($.test(r)||p.test(r)&&!w.test(r))&&(a=r)),$=/ll$/,p=new RegExp(o),$.test(a)&&p.test(a)&&($=/.$/,a=a.replace($,"")),"y"==x&&(a=x.toLowerCase()+a.substr(1)),a}};