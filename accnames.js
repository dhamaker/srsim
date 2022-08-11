function getAccName(ua){
    // follow standard naming or handlle expceptions
    var = nonstandard["jaws", "nvda"]
    var standard = nonstandard.includes(ua) ? false : true;
    

    if (auth.arialabelledby!="") {return auth.arialabelledby;} 
    if (auth.arialabel!="") {return auth.arialabel;} 
    if (auth.label!="") {return auth.label;} 
    if (standard & auth.placeholder!="") {useName = "placeholder"; return auth.placeholder;} 
    if (auth.title!="") {useName = "title"; return auth.title;} 
    return "missing label";
}