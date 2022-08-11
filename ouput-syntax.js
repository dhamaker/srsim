function uaOutput(){
    // vo
if (auth.arialabelledby!="") {return auth.arialabelledby;} 
if (auth.arialabel!="") {return auth.arialabel;} 
if (auth.label!="") {return auth.label;} 
if (standard & auth.placeholder!="") {useName = "placeholder"; return auth.placeholder;} 
if (auth.title!="") {useName = "title"; return auth.title;} 
return "missing label";

return getAccName() + 
(auth.placeholder.length>0? " "+ auth.placeholder : "") +  // begin name
(prop.disabled != "false" | prop.required != "false" ? ", " : "") +
(prop.disabled != "false" ? " dimmed" : "") +
(prop.required != "false" ? " required" : "") +
" " + obj[prop.type].name + // add (value.text? value : null)
(prop.autocomplete != "false" ? " " + obj.autocomplete.name : "") + "." +  
" " + getAccDesc() + "." +  // begin description
" " + obj[prop.type].desc + 
" " + obj[prop.type].instruction + 
(prop.disabled != "false" ? " " + obj["disabled"].desc : "");
}