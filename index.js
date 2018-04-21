// 小明 表白的故事
// 小明 talk in 
// js  具有强大的表现力
// js是弱类型语言 Java 是静态强类型语言
// js  基础类型  字符串 数字, 对象{},array,function''
// symbol
//  bool布尔值, false null为空 undefined
// 六大基础类型 一个复杂类型

var xiaoming={
  name:'小明',
  age:21,
  hasGirlFriend:false,
  job:null,
  city:'Shenzheng',
  sendFlower:function(target){
    // 方法 行为
    // 1 买花
    var flower=new Flower('玫瑰');
    if(typeof target.receiverFlower=='function')
      target.receiverFlower(flower,this.name);
    else
      console.log('不想谈。。')


    
  }
}
var xueba={
  
}
var xiaomei={
  name:'小美',
  room:'1栋',
  hometown:'赣州',
  age:20,
  hasBoyFriend:false,
  job:null,
  city:undefined,
  mood:'good',
  receiverFlower:function(flower,name){
   
    console.log('收到'+name+'送的'+flower.type)
  },
  // 监听小美的好心情
  /*
  功能：提供心情监听
  参数：fn 类型函数
  在一段时间后，心情好了，将fn执行
  */
  ListenGoodMood:function(fn){
    setTimeout(function(){
    fn();
    },1000); 
  } 
}
var xiaoxue={
  name:'小雪',
  age:'20',
  room:'1栋',
  receiverFlower:function(flower,name){
     // 实现了同样的收花方法，接口interface
    // 小美和小雪都实现了相同的方法，实现了相同的接口
    // 实现了相同的接口，就可以互换对象


    // if(name=='小明'){
    //   console.log('让我们在一起吧')
    // }else{
      // xiaomei .receiverFlower(flower,name);
    // }
    xiaomei.ListenGoodMood(function(){
      xiaomei .receiverFlower(flower,name);
    })

    // if(xiaomei.mood=='good'){
    //   xiaomei .receiverFlower(flower,name);
    //   console.log('收到'+name+'送的'+flower.type)
    // }
    
  }
}

// 类大写，对象小写
var Flower=function(type){
  this.type=type || '玫瑰'
}

// xiaoming.sendFlower(xiaomei);
xiaoming.sendFlower(xiaoxue);
