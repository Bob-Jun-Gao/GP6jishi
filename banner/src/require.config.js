require.config({
    baseUrl : "./",
    paths : {
        "jquery" : "src/jquery-3.3.1",
        "banner" : "src/banner"
    },
    shim:{
        "banner" :{
            deps:["jquery"]
        },
    }
})
// require(["src/banner"],function(){
//     $.banner();
//     // var a = new banner({
//     //
//     // })
// })