$.fn.waterFall=function(){
        /*
        *  这个方法里面实现瀑布流布局.
           需求：我在jQuery 对象的基础上去扩展一个方法。
       扩展一个局部方法，调用这个方法，可以实现瀑布流的布局.
           1: 我要明确什么是瀑布流
              有列组成，每一列的宽度一样，高度不一样.
           2：怎么在jQuery 插件里面实现瀑布流的思路.
        * 目的：要获取到当前盒子 items 里面所有的 item
        * 计算出每一个item 的left 以及top 值.
        * */
    //1.4我要获取到items的width
    var parentWidth=$(this).width();
    /*1.1:我要获取到所有的item*/
    var items=$(this).children();
    //1.5 获取子盒子的width
    var width=items.width();
    //1.6 要定义有多少列. 写死了，也可以计算.
    var column=5;
    //计算出来间距了。
    var space=(parentWidth-column*width)/(column-1);

    //定义一个数组，来存放所有的列的高度.
    var colArray=[];
    /*
    * 1.2:我要对每一个item 进行定位.
    * */
    items.each(function(index,dom){
        var $dom=$(dom);
        /*
        * 1.3我在这里的定位因为我们可以把盒子分为两种
        *   第一行的盒子
        *       top 值等于 0
        *   以及下面的盒子
        *       left ,top 自己计算
        * */
        if(index<5){
            //0,1,2,3,4  $dom
            //dom  都是第一行的
            $dom.css({
                 top:0,
                 left:index*(width+space)
            })
            colArray[index]=$dom.height();

        }else{
            //这里面的盒子都是下面的.
            /*
            * 我要找到这五列当中最矮的那一列
            * 我要知道这一列的高度，以及这最矮的这一列的索引值.
            * 如果有这个，我的left ，top 值就出来.
            * */
            //console.log(colArray);  我要从数组里面找到最矮的这一列. 以及它的索引

            //假设最矮的这一列它的索引是0
            var minIndex=0;
            var minHeight=colArray[0];


            //遍历数组，找到最矮的这一列.
            for(var i=0;i<colArray.length;i++){
                  if(minHeight>colArray[i]){
                      minIndex=i;
                      minHeight=colArray[i];
                  }
            }

            //设置位置. 在最矮的这一列上面添加了一个元素.
            //最矮的这一列它的高度就发生了改变.
            $dom.css({
                 top:minHeight+space,
                 left:minIndex*(width+space)
            });


            colArray[minIndex]=minHeight+space+$dom.height();






        }

    });




}