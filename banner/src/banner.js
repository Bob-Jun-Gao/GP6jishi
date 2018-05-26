require(["jquery"],function(){
    function banner(object){
        this.init(object);
    }
    banner.prototype = {
        constructor:banner,
        init(object){
            this.index = 0;
            this.slideEle = $(".slide");

            this.eleWidth = $(".slide").width(); /*获取轮播元素的宽度*/

            this.elenum = this.slideEle.length;/*获取轮播元素的个数*/

            $(this.slideEle).not(this.slideEle[0]).hide();/*注意确保除第一张图片之外都是影藏的否则淡入淡出第一张效果有瑕疵*/
            $(this.slideEle).not(this.slideEle[0]).css("z-index",0);
            $(this.slideEle[0]).css("z-index",99);

            this.btnPrev = $(".prev");
            this.btnNext = $(".next");

            /*---------------绑定事件-------------*/
            this.btnNext.on("click",function(){
                this.before =  this.index
                this.index == this.elenum - 1? this.index=0 : this.index ++
                this.fade()
            }.bind(this))

            this.btnPrev.on("click",function(){
                this.before =  this.index
                this.index == 0 ? this.index = this.elenum - 1 : this.index --
                this.fade()
            }.bind(this))



            console.log(this.elenum);
            console.log(this.btnNext);
        },
        /*--------------淡入淡出效果方法--------------*/
        fade(){
            for(var i = 0; i < this.elenum; i++){
                console.log(this.index)
                if( i == this.index ){
                    $(this.slideEle[i]).fadeIn(500);

                }else{
                    $(this.slideEle[i]).hide();
                }

            }
        },
        slide(){

            $(this.slideEle).show();
            $(this.slideEle[this.index]).not(this.before,this.index).css("z-index",0);
            $(this.slideEle[this.before]).css("z-index",99);
            $(this.slideEle[this.index]).css("z-index",100);
            if( this.index > this.before){
                $(this.slideEle[this.index]).css("left",this.eleWidth) ;
                $(this.slideEle[this.index]).animate({left:"0px"});

            }else{
                $(this.slideEle[this.index]).css("left",-this.eleWidth);
                $(this.slideEle[this.index]).animate({left:"0px"});

            }

        },

    }
    return new banner();
})