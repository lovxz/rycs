<template>
<main>

  <!-- 头部 -->
  <header>
    <div class="heac">
      <div class="top"><img src="img/icon_setting.3e822f4.png" alt="">
      </div>
      <div class="top1">
        <img src="img/duih.png" alt=""> 
      </div>
    </div>

    <div class="healog">
      <div class="healog_l">
        <van-image
            round
            width="4rem"
            height="4rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
      </div>
      <div class="healog_r" >
        
          <p>
            <router-link to="/login">
              <span>登陆</span>/ <span>注册</span>
            </router-link>
          
          </p>
       
        <p><span> </span> 签到领积分</p>
      </div>
    </div>
    <div class="heafoot"></div>
  </header>
  <section class="con">
  <!-- -->
    <div class="cont">
      <ul class="cont_ul">
        <li>
          <div class="cont_d">
            <p>--</p>
            <p>积分</p>
            <span>|</span>
          </div>
        </li>
          <li>
          <div class="cont_d">
            <p>--</p>
            <p>优惠券</p>
            <span>|</span>
          </div>
        </li>
          <li>
          <div class="cont_d">
            <p>--</p>
            <p>代金券</p>
          </div>
        </li>

      </ul>

    </div>
    
    <div class="conmy">
      <div class="conmy_t">
        <h3>我的订单</h3>
        <p>全部订单></p>
      </div>
      <div class="conmy_c">
        <ul class="conmy_ul">
          <li>
            <div class="conmy_d">
              <span class="conmy_span1"></span>
              <p>待付款</p>
            </div>
          </li>
          <li>
            <div class="conmy_d">
              <span class="conmy_span2"></span>
              <p>待付款</p>
            </div>
          </li>
          <li>
            <div class="conmy_d">
              <span class="conmy_span3"></span>
              <p>待付款</p>
            </div>
          </li>
          <li>
            <div class="conmy_d">
              <span class="conmy_span4"></span>
              <p>待付款</p>
            </div>
          </li>
          <li>
            <div class="conmy_d">
              <span class="conmy_span5"></span>
              <p>待付款</p>
            </div>
          </li>

        </ul>

      </div>


      <div class="conlb">
        <van-swipe class="my-swipe conlb1" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="img/xlb1.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="img/xlb2.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="img/xlb3.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="img/xlb4.jpg" alt=""></van-swipe-item>
      </van-swipe>
    </div>


      <div class="conmy_t conmy_bot">
        <h3>我的HONOR</h3>
      </div>
      <div class="conmy_c  conmybot_c">
        <ul class="conmy_ul">
          <li>
            <div class="conmy_d">
              <span class="conmy_span11"></span>
              <p>优选码</p>
            </div>
          </li>
          <li>
            <div class="conmy_d">
              <span class="conmy_span12"></span>
              <p>我的拼图</p>
            </div>
          </li>
          <li>
            <div class="conmy_d">
              <span class="conmy_span13"></span>
              <p>收货地址</p>
            </div>
          </li>
          <li>
            <div class="conmy_d">
              <span class="conmy_span14"></span>
              <p>新人福利</p>
            </div>
          </li>
        </ul>

      </div>

    </div>


  </section>
</main>
  
</template>
<style scoped>

header{
  background: #007aff;
  /* overflow: hidden; */
  position: relative;
}
.heac{
   padding-top: 5%;
   display: flex;
   flex-direction:row-reverse;
    /* background: #115468; */
} 
.heac>.top,.heac>.top1{
  width: 10%;
}

.heac img{
  width: 65%;
} 
.healog{
  padding: 0% 5% 5% 5%;
  display: flex;
}
.healog_r{
  margin: 2% 1%;

}
.healog_r p a{
  color: #fff;
}

.healog_r  p:nth-of-type(1){
  font-size: 1.3rem;
  color: #fff;
}
.healog_r p:nth-of-type(2){
  margin-top: 7%;
  text-align: center;
  font-size: .3rem;
  color: #fff;
  background-color: #09a4e9;
  border-radius: 10px;
}
.healog_r p:nth-of-type(2) span{
  display: inline-block;
  height: 13px;
  width: 15px;
  background: url(../assets/xz.png) no-repeat 0px -15px;
  background-size:100% ;
}

.heafoot{
  height: 50px;
  width: 100%;
  background: #007aff;
  border-radius: 30px;
  position: absolute;
  bottom: -18%;
  

}
.con{
  background: rgb(246, 242, 242);
}
.cont{
  margin: 0% 2%;
  position: relative;
  /* width: 97%; */

}
.cont_ul{
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}
.cont_ul li{
  width: 33%;
  background: #fff;
  text-align: center;
  padding: 2%;
  font-size:.5rem ;
  line-height: 24px;
  color: darkgray;
}
.cont_d{
  position: relative;
}
.cont_d span{
  position: absolute;
  right: 0%;
  bottom: 28%;
  font-size: 18px;
  color: rgb(200, 199, 199);

}


.conmy{
  margin-top: 3%;
  background: #fff;
  margin: 3% 2%;
}
.conmy_t{
  display: flex;
  justify-content: space-between;

}
.conmy_t p,.conmy_t h3{
    margin: 0% 2%;
}
.conmy_t h3{
 font-size: .9rem ;
 line-height: 35px;
}   

.conmy_t p{
    font-size: .7rem;
    line-height: 35px;
}




.conmy_ul{
  display: flex;
}

.conmy_ul li{
  width: 20%;
  text-align: center;
  font-size: .5rem;
}

.conmy_d span{
  display: inline-block;
  height: 42px;
  width: 42px;

  background-size: 100%;
}
.conmy_span1{
  background: url(../assets/mydd.png);
}
.conmy_span2{
  background: url(../assets/mydd.png) no-repeat  0px  -43px;
}

.conmy_span3{
  background: url(../assets/mydd.png)  no-repeat  0px  -84px;
}

.conmy_span4{
  background: url(../assets/mydd.png)  no-repeat  0px  -127px;
}

.conmy_span5{
  background: url(../assets/mydd.png)  no-repeat  0px -170px;
}


/* 轮播 */
  .my-swipe .van-swipe-item {
    color: #fff;
    /* font-size: 20px; */
    /* line-height: 90px; */
    text-align: center;
    /* background-color: #39a9ed; */
  }

 .conlb{
  margin: 2% ;

  overflow: hidden;
 }

.conlb1{
   border-radius: 8px;
}
 .conlb img{
  width: 100%;
 }



.conmy_bot{
  margin-top: 10%;

}
.conmy_bot h3{
 font-size: 1rem ;
}
.conmybot_c ul li{
  width: 25%;
}
 .conmy_span11{
  background: url(../assets/wm1.png);
}
 .conmy_span12{
  background: url(../assets/wd2.png) ;
}

.conmy_span13{
  background: url(../assets/wd3.png) ;
}

 .conmy_span14{
  background: url(../assets/wd4.png) ;
}

/* .conmy_bot .conmy_span5{
  background: url(/img/mydd.png)  no-repeat  0px -170px;
} */

</style>
<script>
export default {
  setup() {
    
  },
}
</script>