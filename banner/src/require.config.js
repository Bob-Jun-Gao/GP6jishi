require.config({
    baseUrl : "./",
    paths : {
        "jquery" : "src/jquery-3.3.1",
        // "JQbanner" : "src/jquery.banner"
    },
    // shim:{
    //     "JQbanner" :{
    //         deps:["jquery"]
    //     },
    // }
})
require(["src/banner"],function(){
    // var a = new banner({
    //
    // })
})