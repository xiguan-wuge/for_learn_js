/*
* author:ghd;
* date:2018-5-4;
* 功能:图片懒加载
*/

// 服务于任何图片元素，img 幕后，再将origin_src 设置过去
// 函数嵌套函数=闭包
var LazyLoadImage=(function(){
  // 变量的冒泡查找
  var a=1;
  return {
    setSrc:function(ele){
      // console.log("开始下载图片吧！");
      const url = ele.getAttribute('origin_src') ? ele.getAttribute('origin_src') : ''

      if(!url)return;
      const oImg=document.createElement('img');
      // 不会影响页面，none会离开文档流
      // opacity：0 这个会撑长页面
      oImg.style.display='none';
      document.body.appendChild(oImg);
      // 注册事件 addEventListener 新的
      // 当设置了图片的src 后，都会启动http请求
      // 图片下载完成后 onload注册事件回调
      // 函数就会执行
      // 异步，同步
      oImg.onload=function(){
        // 不会立即执行
        // 后执行
        console.log("图片下载完成了")
        ele.src=url;
        // 洋葱
        document.body.removeChild(this);
        // document.body.removeChild(oImg);
      }
      // 先执行
      console.log("设置src");
      oImg.src=url;
    }
  }
      // var removeObj = document.getElementsByClassName('pic1').getElementsByTagName('src');
      // removeObj.parentNode.removeChild(removeObj);
})();

// LazyLoadImage.setSrc();