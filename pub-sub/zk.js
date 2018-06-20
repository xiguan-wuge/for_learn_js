// publisher 一个
// subscriber 多个
// pub-sub

// 发布者
let zk={};
// 订阅者
zk.peopleList=[];
// zk.peopleList.push('dl')
// 2018年10月1日大婚
// 作何反应？
zk.listen=function(fn){
  this.peopleList.push(fn)
}
// zk.listen('zg');
zk.trigger=function(){
  // 消息发布后，所有订阅者做出相应
  for(var i=0,fn;fn=this.peopleList[i++];){
    fn.apply(this,arguments);
  }
}
//订阅者的过程
zk.listen(function(msg){
  console.log(`收到你${msg}信息,红包给你`)
});
zk.listen(function(msg){
  console.log(`收到你${msg}信息,飞过来`)
});
zk.listen(function(msg){
  console.log(`收到你${msg}信息,作为情敌，不开心`)
})
zk.trigger('曾凯要结婚了');
zk.trigger('曾凯生了个大胖小子');
