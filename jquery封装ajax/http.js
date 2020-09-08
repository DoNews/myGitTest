const axios = function(options){
    var promise = new Promise(( resolve , reject )=>{
        var xhr = null;
        if(window.XMLHttpRequest){//兼容处理
           xhr = new XMLHttpRequest();
       }else{
           xhr = new ActiveXObject("Microsoft.XMLHTTP");   
       }
         var data = "";
        for (var key in options.data) {//数据处理
            data += "&" + key + "=" + options.data[key]
        }
       if (options.method == "get") {

            let url = options.url + "?" + data.slice(1);
            xhr.open(options.method, url);
            xhr.send();
        } else if (options.method == "post") {

            xhr.open(options.method, options.url);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }

    
        xhr.onreadystatechange = function () {
            let timer = null;
            let timeout = options.timeout?options.timeout:5000  //等待响应的时间 
            if(xhr.readyState == 4 && xhr.status == 200){
                let res = JSON.parse(xhr.responseText);
                clearTimeout(timer);
                resolve(res);
            }
             

            timer = setTimeout(()=>{
                clearTimeout(timer);
                reject(xhr.status);
            },timeout) 
            
        }
    })
    return promise;
}