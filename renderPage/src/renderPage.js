define(["jquery"],function(){

    function rendarPage(){

    }
    rendarPage.prototype = {
        constructor:rendarPage,
        init(){
            console.log("123")
            this.getData().then(function(res){

                console.log(res);     /*--返回从接口获取到的数据在控制台显示--*/
                this.loadData(res);   /*--执行数据化页面--*/
            }.bind(this));
        },
        /*----------------getData负责ajax获取美丽说的数据---------------*/
        getData(){
            this.load ={
                url : "http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=1&trace=0&limit=10&endId=0&pid=106888&_=1526528205879",
                dataType :"jsonp",
                success: function(){
                    console.log("数据获取成功");
                }
            }
            return $.ajax(this.load);

        },
        /*----------------LoadeData负责数据化页面输出html结构和内容---------------*/
        loadData(data){
            var htmlData = data.data.list;
            console.log(htmlData);
            var html = ``;
            for(var i = 0 ; i < htmlData.length ; i++ ){
                html +=
                    `<li class="content_box">
                        <a href="${htmlData[i].item_wx_url}" target="_blank">
                            <img src = "${htmlData[i].image}" title="${htmlData[i].title}"/>
                        </a>
                        <span>主题：${htmlData[i].title}</span>
                        <button>前往主题ID${htmlData[i].item_id}</button>
                     </li>`
            }
            $(".container").html(html);

        },


    }
    return new rendarPage();

})