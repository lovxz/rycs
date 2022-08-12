<template>
    <main>
        <!-- 头部 -->
        <header>
           <div class="top">
             <span><img src="img/sous.png" alt=""></span>
             <input type="text" placeholder="搜索的物品"> 
             <img src="img/icon_message_black.png" alt="">
           </div>
        </header>
        <!-- 内容 -->
        <section class="con">
          <div>
          <van-sidebar v-model="activeKey" class="conl">
          <van-sidebar-item  title="新品推荐" />
          <van-sidebar-item  title="老用户专享" />
          <van-sidebar-item  title="手机" />
          <van-sidebar-item  title="笔记本" />
          <van-sidebar-item  title="平板" />
          <van-sidebar-item  title="智能穿戴" />
          <van-sidebar-item  title="智慧屏" />
          <van-sidebar-item  title="路由" />
          <van-sidebar-item  title="耳机音箱" />
          <van-sidebar-item  title="生态产品" />
          <van-sidebar-item  title="配件" />
          <van-sidebar-item  title="售后服务" />
         </van-sidebar>
          </div>

          <div class="conc">
            <div class="conr conr1">
            <h4>新品推荐</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>

          </div>
          <div class="conr">
            <h4>老用户专属</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>
          <div class="conr">
            <h4>手机</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>
          <div class="conr">
            <h4>笔记本</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>
          <div class="conr">
            <h4>平板</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>
          <div class="conr">
            <h4>智能穿戴</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>

          <div class="conr">
            <h4>智慧屏</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>

          <div class="conr">
            <h4>路由</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>

            <div class="conr">
            <h4>耳机音箱</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>

             <div class="conr">
            <h4>生态产品</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>
            <div class="conr">
            <h4>配件</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>
            <div class="conr">
            <h4>售后服务</h4>
            <ul>
              <li v-for="(item1,index1) in list1" :key="index1">
                <img :src="item1.src" alt="">
                <p><span>{{item1.a}}</span></p>
              </li>
            </ul>
          </div>



          </div>
          

        </section>
         



      



 

   





    </main>
</template>
<style scoped>
.top{
 /* background: #feedb3; */
 display: flex; 
 padding: 1% 5%;
 justify-content:space-between;
 box-sizing: border-box;
 position: relative;
}

.top span{
    display: inline-block;
    position: absolute;
    top: 9px;
    left: 30px;
}

.top span img{
    width: 70%;
    height: 70%;
}
.top input{
    line-height: 30px;
    width: 80%;
    border: none;
    font-size: 12px;
    color: #b3b3b3;
    border-radius: 30px;
    padding-left: 35px;
    background: #e0dfdf;
}

.top>img{
 
   width: 8%;
}
.con{
  display: flex;
  
}
.conr {
  width: 100%;
  margin-top: 5%;
  display: none;
}

.conr1{
  display: inline-block;
}
.conr h4{
  text-align: center;
  font-weight: normal;
  margin-bottom: 5%;

}
.conr ul{
  display: flex;
  flex-wrap:wrap
}

.conr ul li{
  width: 33%;
  margin-bottom: 5%;

  text-align: center;
}

.conr ul li img{
  width: 50%;


}
.conr ul li p{
  margin-top: 3%;
}
.conr ul li span {

  font-size: .5rem;
}
</style>



<script>
import $ from 'jquery'
export default {
  data() {
    return {
      activeKey: 0,

    list1:[
      {
      src:'img/fl1.png',
      a:'荣耀'
      },
      {
      src:'img/fl1.png',
      a:'荣耀'
      },
      {
      src:'img/fl1.png',
      a:'荣耀'
      },
      {
      src:'img/fl1.png',
      a:'荣耀'
      },
      {
      src:'img/fl1.png',
      a:'荣耀'
      },
      {
      src:'img/fl1.png',
      a:'荣耀'
      },
     
    ]
    };

  
  },
  mounted() { 
    $(function(){
  var num=0;
  $('.van-sidebar-item').click(function(){
    num=$(this).index()
      $('.conr').eq(num).addClass('conr1') 
      $('.conr').eq(num).siblings().removeClass('conr1') 
     
      



  })
})


  }
};




</script>
