define(["jquery"],function($){


        $.banner = function(){
            new Slider_banner();
        }
        Slider_banner = function(){
            this.init()
        }
        Slider_banner.prototype = {
            constructor:Slider_banner,
            init(){
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
                    this.index == this.elenum - 1 ? this.index=0 : this.index ++;
                    this.startleft = this.eleWidth;
                    this.slide()
                }.bind(this))

                this.btnPrev.on("click",function(){
                    this.before =  this.index
                    this.index == 0 ? this.index = this.elenum - 1 : this.index --;

                    /*上一张就是从右左往由运动“→”，--
                    --设置运动起点为距离为宽度的负值*/
                    this.startleft= -this.eleWidth;
                    this.slide()
                }.bind(this))

                // console.log(this.elenum);
                // console.log(this.btnNext);
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

                $(this.slideEle).show().css({"left":"0px"});
                $(this.slideEle).not(this.before,this.index).css("z-index",0);
                $(this.slideEle[this.before]).css("z-index",99);
                $(this.slideEle[this.index]).css("z-index",100);

                $(this.slideEle[this.index]).css({"left":"0px"});
                $(this.slideEle[this.before]).stop().animate({left:-this.startleft});
                $(this.slideEle[this.before]) ;

                $(this.slideEle[this.index]).css("left",this.startleft);
                $(this.slideEle[this.index]).stop().animate({left:"0px"});



            },

        }


})