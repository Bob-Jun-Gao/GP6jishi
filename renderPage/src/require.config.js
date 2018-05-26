require.config({
    baseUrl : "./",
    paths : {
        "jquery" : "src/jquery-3.3.1"
    },
})
require(["src/renderPage"],function(renderPage){
    renderPage.init();
})