function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("applicatrion/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
    }
    loadjson("data.json",function(text){
        var raw = JSON.parse(text);
        console.log(raw)
    })    
