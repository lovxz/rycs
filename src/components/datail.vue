<template>
    <main>

        
        <!-- <h3>这是详情</h3> -->
        <!-- 头部 --> 
        <div class="hea1">
        <van-tabs v-model="active" scrollspy sticky>
          <van-tab v-for="(list7,index) in list" :title="list7.a" :key="index">
         
          </van-tab>
        </van-tabs>
        </div>


        <main>
            <h3></h3>
            <h5></h5>
        </main>
        <!--商品  -->
        <main>
            <header>
            <router-link to="/index">
            <img src="img/dian2.png" alt="">
            </router-link>
            <img src="img/dian.png" alt="">
        </header>
        <!-- 轮播 -->
        <section class="carousel">
            <van-swipe @change="onChange">
                <van-swipe-item><img src="img/lll.png"  alt=""></van-swipe-item>
                <van-swipe-item><img src="img/lll1.png" alt=""></van-swipe-item>
                <van-swipe-item><img src="img/lll2.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="img/lll3.png" alt=""></van-swipe-item>
                <van-swipe-item><img src="img/lll4.png" alt=""></van-swipe-item>
                <van-swipe-item><img src="img/lll5.png" alt=""></van-swipe-item>
                <van-swipe-item><img src="img/lll3.png" alt=""></van-swipe-item>
                <van-swipe-item><img src="img/lll2.jpg" alt=""></van-swipe-item>
                <template #indicator>
                    <div class="custom-indicator">{{ current + 1 }}/8</div>
             </template>
            </van-swipe>
        </section>
        <!-- 简介 -->
        <section class="briefly">
            <h3><span>¥</span>2699</h3>
            <p>荣耀70 8GB+256GB 亮黑色 双卡 全网通版</p>
            <span>【老用户限量加赠专属手机壳点此跳转>>>】8+256版本下单立减150元，支付立享12期免息，2549元起</span>

        </section>
        <!-- 详细介绍 -->
        <section class="con">
            <main class="datade">
             <!-- 促销 -->
            <div class="prom">
            <p class="prom_l"><b>促销</b></p>
            <div class="prom_r">
                <p class="prom_rp1">
                    <span>下单立减</span>
                    <span>下单立减150元</span>
                </p>
                <p class="prom_rp2">
                    <span>一站式换新</span>
                    <span>以旧换新最高补贴2022元|一站式换新</span>
                </p>
                <p class="prom_rp3">
                    <span>商品赠券</span>
                    <span>退还免运费</span>
                    <span>分期免息</span>
                </p>
            </div>
            <span>
                <img src="img/ddd.png" alt="">
            </span>
            </div>
            <p class="dafot"></p>
            <!-- 颜色 -->
            <div class="cpcolor  ">
                <div class="cpcolor_l left">
                    <b>颜色</b>
                </div>
                <div class="cpcolor_r  right">
                   <div>
                    <div>
                        <img src="img/ys1.png" alt="">
                    <p>亮黑色</p>
                    </div>
                   </div>
                   <div>
                    <img src="img/ys2.png" alt="">
                    <p>流光水晶</p>
                   </div>
                   <div>
                    <img src="img/ys3.png" alt="">
                    <p>墨玉青</p>
                   </div>
                   <div>
                    <img src="img/ys4.png" alt="">
                    <p>冰岛幻境</p>
                   </div>
                    
                </div>

            </div>
            <!-- 版本 -->
            <div class="version cptype">
                <div class="left">
                    <b>版本</b>
                </div>
                <div class="right">
                   <p><span>5G全网通 8GB+256GB</span></p>
                    <p><span>5G全网通 12GB+256GB</span></p>
                    <p><span>5G全网通 12GB+512GB</span></p>
                </div>

            </div>
            <!-- 类型 -->
            <div class="cptype">
                <div class="left"><b>类型</b></div>
                <div class="right">
                    <p><span>官方标配</span></p>
                </div>

            </div>
              <div class="cptype cptype1 ">
                <div class="left"><b>类型</b></div>
                <div class="right">
                    <p><span>单品</span><span>多得一个快充套餐</span> <span>数据线套餐</span></p>              
                    <p><span>耳机套餐</span></p>
                </div>

            </div>
            <!-- 数量 -->
            <div class="quan  version">
                <div class="left">
                    <b>数量</b>
                </div>
                <div class="right">
                   <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </div>
            </div>
            <!-- 保障 -->
            <div class="guar  version">
                <div class="left">
                    <b>保障</b>
                </div>
                <div class="right">
                  <span>选购</span>

                  <span>意外保护</span>
                  <span>延长保修</span>
              </div>
            </div>
            <!-- 免息 -->
            <div class="inte  version">
                <div class="left">
                    <b>免息</b>
                </div>
                <div class="right">
                  <span>花呗/掌上生活信用卡分期直购，最高享受12期免息</span>

                  <!-- <span>意外保护</span> -->
                  
              </div>
            </div>
            <!-- 送至 -->
            <div class="give  version">
                <div class="left">
                    <b>送至</b>
                </div>
                <div class="right">
                  <p><span>北京</span> <span>北京市</span> <span>东城区</span></p>
                  <span>现货</span><span>,今天21：59前付款，预计8月12日（明天）送达</span> 
              </div>
            </div>
            <!-- 服务 -->
            <div class="cpserve  version">
                <div class="left">
                    <b>服务</b>
                </div>
                <div class="right">
                   <p><span><img src="img/gou.png" alt=""></span>已满48元包邮</p>
                   <p><span><img src="img/gou.png" alt=""></span>由荣耀终端负责发货，并提供售后咨询服务</p>
                   <p><span><img src="img/gou.png" alt=""></span>退换货免运费</p>

                  
                  
              </div>
            </div>

            </main>
        </section>
        </main>
        <!--评价  -->
        <main>
        <section class="usercom">
           <section class="uctop">
                <h3>用户评价（2959）</h3>
                <p>
                <span>98%好评</span>
                <span>></span>
                </p>
            </section>
            <section class="ucnav">
                <ul>
                    <li><span>外观不错</span></li>
                    <li><span>物流不错</span></li>
                    <li><span>手感好</span></li>
                    <li><span>性价比高</span></li>
                </ul>

            </section>
            <section class="uccon">
                <ul class="uccon_ul">
                    <li v-for="(itme,index) in comm" :key="index">
                        <div class="uccon_d">
                            <div class="uccon_dc1">
                                <div class="uccon_dc11">
                                   <div class="uccon_dc111">
                                    <van-image
                                    round
                                    width="2rem"
                                    height="2rem"
                                    :src=" itme.src"
                                    />
                                    </div>
                                    <div class="uccon_dc112">
                                        <p>{{itme.t}}</p>
                                        <p><van-rate size="10px"  v-model="value" /></p>
                                    </div>
                                    
                                </div>
                                <div class="uccon_dc12">
                                    <p>{{itme.t1}}</p>
                                </div>
                            </div>
                            <div class="uccon_dc2">
                                <p>
                                    <img :src="itme.src1" alt="">
                                </p>

                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="ucfot">
                <span>查看全部评论</span>
            </section>

            <section class="recom">
                <h3>精彩推荐</h3>

            </section>


        </section>

        </main>
        <!-- 参数 -->
        <main>
            <section class="parameter">
                <section class="para">
                    <h3>规格参数</h3>
                    <ul class="para_ul">
                        <li>
                            <div class="para_d">
                               <span>主体</span>

                            </div>
                        </li>
                        <li>
                             <div class="para_d">
                                <span>品牌</span>
                                <span>荣耀</span>
                            </div>
                        </li>
                        <li>
                             <div class="para_d">
                                <span>型号</span>
                                <span>SDY-ANOO</span>
                            </div>
                        </li>
                        <li>
                             <div class="para_d">
                                <span>传播名</span>
                                <span>荣耀70 pro</span>
                            </div>
                        </li>
                        
                    </ul>

                    <section class="ucfot">
                     <span>查看全部参数</span>
                  </section>

                   

                </section>

            </section>
        </main>

        <!-- 详细 -->
        <main>
            <section class="detailed">
                <ul>
                    <li v-for="(data,index1) in data" :key="index1">
                        <img :src=" data.src" alt="">
                    </li>
                </ul>

            </section>
           <div class="buttontop">
                <img src="img/button-top.png" alt="">
            </div>

        </main>

        <!-- 底部  -->
        <section class="footer">
         <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="主界面" color="#ee0a24" />
            <van-goods-action-icon icon="star" text="客服"  color="#ff5000"  />
            <van-goods-action-icon icon="cart-o" text="购物车"/>
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger"  text="立即购买" />
            </van-goods-action>
        </section>
    </main>
</template>
<style scoped>
.buttontop{
    z-index: 999;
    position: fixed;
    bottom:6%;
    right: -11%;
    display: none;
}
.buttontop img{
    width: 50%;
}


header{
    display: flex;
    justify-content: space-between;
    padding: 2% 3%;
}
header a img{
   width: 25%;
   /* height: 25%; */
   

}
header >img{
   width: 8%;
   height: 8%;
   

}


/* 轮播 */
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  /* 简介 */
.briefly{
    margin: 2% 3%;
}
.briefly p{
    margin: 2% 0%;
}
.briefly >span{
   font-size: .5rem;
   color: red;
}
.carousel img{
    width: 70%;
    margin-left: 16%;
    padding-bottom: 10%;
    
}
.dafot{
    height: 10px;
    width: 100%;

}


.con{
    background: #ece9e9;
}
/* 促销 */
.datade{
padding: 5% 3%;
background: #fff;

}
.datade b{
    font-size: .8rem;
}
.prom{
    
    display: flex;
    margin-bottom:5% ;
}
.prom_l{
    width: 20%;
    
    
}
.prom_r{
    width: 70%;

    font-size: .5rem;

}

.prom>span img{
   width: 40%;
   padding-left:60% ;
}
.prom_r span{
    margin-right: 2%;

}
.prom_rp2{
    /* white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; */
    margin: 3% 0%;
    width: 100%;
    white-space: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.prom_rp2 span{
   
    overflow: hidden;

}

.prom_rp1 span:nth-of-type(1),.prom_rp2 span:nth-of-type(1),
.prom_rp3 span{
    color: rgb(37, 111, 255);
    border:1px solid  rgb(37, 111, 255) ;
    border-radius: 10px;
    padding: 0% 2%;
 
}

.left{
    width: 20%;
}
.right{
   width: 70% ;
}
/* 手机颜色 */
.cpcolor{
 margin-top: 3%;
 display: flex;
}

.cpcolor_r{
 display: flex;
 flex-wrap:wrap
}
.cpcolor_r>div{
 width: 20%;
 border:  .5px solid rgba(51,51,51,.3);

 border-radius: 5px;
 font-size:.5rem ;
 text-align: center;
 margin:0% 3%  3% 0%;
 padding: 3%;
}

.cpcolor_r>div:nth-of-type(1){
     border: .5px solid rgb(37, 111, 255);
     color: rgb(37, 111, 255);
}

.cpcolor_r>div p{
/* background: #ccc; */
width: 100%;
}



.cpcolor_r>div img{
 width: 100%;
 margin-bottom: 5%;
}

/* 版本 */
.version{
    display: flex;
    margin-top: 5%;
}

.version p{
    margin-bottom: 3%;
}
/* .version p:nth-of-type(1) span:nth-of-type(1){
     color: rgb(37, 111, 255);
    border:1px solid  rgb(37, 111, 255) ;
    font-size: .8rem;
    border-radius: 10px;
    padding: 1% 2%;
}
.version span{
     color: #000;
    border:1px solid rgba(51,51,51,.3) ;
    font-size: .8rem;
    border-radius: 10px;
    padding: 1% 2%;
} */

/* 类型  套餐 */
.cptype,.cptype1 {
    display: flex;
    margin-top: 5%;
}
.cptype p{
    margin-bottom: 3%;
}

.cptype p:nth-of-type(1) span:nth-of-type(1){
  color: rgb(37, 111, 255);
    border:.5px solid  rgb(37, 111, 255) ;
    font-size: .8rem;
    border-radius: 10px;
    padding: 1% 2%;
    margin-right: 2%;
}
.cptype p span{
  color: #000;
    border:.5px solid  rgba(51,51,51,.3) ;
    font-size: .8rem;
    border-radius: 10px;
    padding: 1% 2%;
    margin-right: 2%;
}


.guar{
    display: flex;
    /* border-top: 1px solid #ccc;
     border-bottom: 1px solid #ccc; */
    padding: 4% 0%;
    font-size: .5rem;
}

.guar>.right span{
   /* border: 1px solid #ccc; */
   padding: 1%;
   margin-right: 2%;
}
.guar>.right span:nth-of-type(1){
  border: none;
    /* white-space: normal; */
    
}
.inte>.right span{
    /* white-space: nowrap;
    text-overflow: ellipsis; */
     font-size: .5rem;

}

.give{
    font-size: .5rem;

}
.give .right span{
     /* white-space: nowrap;
    text-overflow: ellipsis; */
    font-size: .5rem;
     
}
.give .right>span{
    color:#ccc;
}
.give .right>span:nth-of-type(1) {
    color: rgb(37, 111, 255);
}

.cpserve .right p{
      white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .5rem;
}

.cpserve .right span img{
    width: 5%;
}


/* 用户界面评论 */
.usercom{
    margin-top: 2%;
    padding: 0% 3%;
    background: #FFF;
}
.uctop{
    display: flex;
    font-size: .8rem;
    justify-content: space-between;
}

.ucnav ul{
    display: flex;
    margin-top: 5% ; 
}


.ucnav ul li{
    width: 25%;
    /* background: #ccc;
    border-radius: 30px;
    text-align: center;
    padding: 2%;
    font-size: .6rem; */

}

.ucnav ul li span{
    background: #f5f5f5;
    border-radius: 20px;
    text-align: center;
    padding: 5% 20%;
    font-size: .6rem;

}

.uccon{
    overflow: auto;
}

.uccon_ul{
    display: flex;
    margin: 5% 0%;
    width: 500vw;
}

.uccon_ul li{
    width: 85vw;
    margin-right: 1%;
    border: 1px solid #ccc;
    
}
.uccon_d{
  display: flex;
  padding: 3% 2%;
}

.uccon_dc1{
  width: 60%;
  font-size: .8rem;
}
.uccon_dc11{
    display: flex;
    text-align: center;
}

.uccon_dc112{
   margin: 2% 0% 0% 2%; 
}
/* .uccon_dc112{
    width: 20%;
} */

.uccon_dc12{
   margin-top: 5%;
}

.uccon_dc2{
  /* margin-top: 10%; */
  margin-left: 4%;
  width: 35%;
}
.uccon_dc2 img{
  
  width: 100%;
}
.ucfot{
    text-align: center;
    font-size: .9rem;

}
.ucfot span{
    border: 1px solid #ccc;
    padding: 2% 3%;
    border-radius: 30px;

}
.recom{
    margin: 10% 0%;
}
.recom h3{
   font-size: .9rem;
}



/* 参数 */
.para{
    margin:5% 3%;
}
.para h3{
   font-size: .9rem;
}


.para_ul{
    margin-bottom: 10%;
}
.para_ul li{
    margin: 3% 0%;
}
.para_ul li:nth-of-type(1) span{
    font-weight: 800;
}


.para_d{
   display: flex;
   font-size: .6rem;
}
.para_d span:nth-of-type(1){
   width: 30%;
}

.para_d span:nth-of-type(2){
   width: 70%;
}
.detailed{
    margin-bottom: 10%;
}
.detailed ul li{
    width: 100%;
}

.detailed ul li img{
    width: 100%;
}


</style>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      current: 0,
       value: 1,
      

      comm:[
        {
        src:'https://img01.yzcdn.cn/vant/cat.jpeg',
        src1:'img/pl1.jpg',
        t:'135****888',
        t1:'第一次用荣耀70pro，确实好用流畅，性价比高，用着舒服，手感好！',
         
        },
        {
        src:'https://img01.yzcdn.cn/vant/cat.jpeg',
        src1:'img/pl1.jpg',
        t:'135****888',
        t1:'第一次用荣耀70pro，确实好用流畅，性价比高，用着舒服，手感好！',
         
        },
        {
        src:'https://img01.yzcdn.cn/vant/cat.jpeg',
        src1:'img/pl1.jpg',
        t:'135****888',
        t1:'第一次用荣耀70pro，确实好用流畅，性价比高，用着舒服，手感好！',
         
        },
        {
        src:'https://img01.yzcdn.cn/vant/cat.jpeg',
        src1:'img/pl1.jpg',
        t:'135****888',
        t1:'第一次用荣耀70pro，确实好用流畅，性价比高，用着舒服，手感好！',
         
        },
      ],
      data:[
        {
            src:'img/xx1.jpg'
        },
         {
            src:'img/xx2.jpg'
        },
         {
            src:'img/xx3.jpg'
        },
         {
            src:'img/xx4.jpg'
        },
         {
            src:'img/xx5.jpg'
        },
         {
            src:'img/xx6.jpg'
        },
         {
            src:'img/xx7.jpg'
        },
         {
            src:'img/xx8.jpg'
        },
         {
            src:'img/xx9.jpg'
        },
         {
            src:'img/xx10.jpg'
        },
         {
            src:'img/xx11.jpg'
        },
         {
            src:'img/xx12.jpg'
        },
         {
            src:'img/xx13.jpg'
        },
         {
            src:'img/xx14.jpg'
        },
         {
            src:'img/xx15.jpg'
        },
         {
            src:'img/xx16.jpg'
        },
         {
            src:'img/xx17.jpg'
        },
         {
            src:'img/xx18.jpg'
        },
         {
            src:'img/xx19.jpg'
        },
      ],
      list:[
          {
            a:'商品',
            b:'888'
          },
          {
            a:'评价'
          },
          {
            a:'参数'
          },
           {
            a:'详细'
          },
     
      ]



      
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },

      mounted() { 
    $(function(){

    $(window).scroll(function(){

    if($(window).scrollTop()>500){
        $('.buttontop').css('display','inline-block')
    }else{
        $('.buttontop').css('display','none')
    }
  })
      $('.buttontop').click(function(){
    $('html,body').animate({'scrollTop':'0'})
  })


})


  }
};






</script>
