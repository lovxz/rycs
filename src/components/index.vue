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
        <!-- 导航 -->
        <nav>
            <div class="navc">
              <van-tabs v-model="active" swipeable="true " title-active-color="#000" background=' #feedb3'>
                <van-tab title="推荐">
                </van-tab>
                <van-tab title="荣耀70"></van-tab>
                <van-tab title="新品上市"></van-tab>
                <van-tab title="智能办公"></van-tab>
                <van-tab title="运动健康"></van-tab>
                <van-tab title="智能家居"></van-tab>
                <van-tab title="新人福利"></van-tab>
                </van-tabs>
              
            </div>
            <div class="navr">
                 <img src="/img/more_down.png" alt="">
           </div>
        </nav>
       <!-- 轮播 -->
        <section class="carousel">
                <div class="carousel_d">
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item><img src="img/lunbo1.png" alt=""></van-swipe-item>
                        <van-swipe-item><img src="img/lunbo2.jpg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="img/lunbo3.jpg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="img/lunbo4.jpg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="img/lunbo5.jpg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="img/lunbo6.jpg" alt=""></van-swipe-item>
                    </van-swipe>
                </div>
         </section>
       <!-- 小导航 -->
        <section class="nav2">
        <div class="nav2_d">
            <ul class="nav2_ul">
                <li>
                    <div class="nav2_li_a">
                       <p><span class="nav2_span1"></span></p>
                          <span>智慧办公</span>
                    </div>
                </li>
                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span2"></span></p>
                          <span>教育优惠</span>
                      </div>
                </li>
                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span3"></span></p>
                          <span>销售榜单</span>
                    </div>
                </li>
                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span4"></span></p>
                          <span>免费领卷</span>
                    </div>
                </li>
                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span5"></span></p>
                          <span>新人福利</span>
                    </div>
                </li>
                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span6"></span></p>
                          <span>企业特惠</span>
                    </div>
                </li>
                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span7"></span></p>
                          <span>运动健康</span>
                    </div>
                </li>
                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span8"></span></p>
                          <span>以旧换新</span>
                    </div>
                </li>
                                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span9"></span></p>
                          <span>智慧家居</span>
                    </div>
                </li>
                <li>
                      <div class="nav2_li_a">
                       <p><span class="nav2_span10"></span></p>
                          <span>教育购</span>
                    </div>
                </li>
            </ul>
        </div>
         </section>
       <!-- 限时购 -->
        <section class="con1">
                <div class="con1_tim">
                <h3>
                <span>限时购</span>
                <span><img src="img/seckill_title.png" alt=""></span> 
                <span class="djs">
                   <van-count-down :time="time">
                       <template #default="timeData">
                        <span class="block">{{ timeData.hours }}</span>
                        <span class="colon">:</span>
                        <span class="block">{{ timeData.minutes }}</span>
                        <span class="colon">:</span>
                        <span class="block">{{ timeData.seconds }}</span>
                        </template>
                  </van-count-down>
                </span>
                  <span>后结束</span>
                </h3>
                </div>

                <div class="conc">
                    <ul class="conc_ul">
                        <li v-for="(item,index) in list" :key="index">
                        <div class="conc_d">
                         <img :src="item.src" alt="">
                         <p>{{item.a}}</p>
                        </div>
                        <div class="conc_d2">
                           <p> {{item.a1}}</p>
                        </div>
                        </li>
                    </ul>
                    
                </div>
        </section>
       <!-- 精品推荐 -->
        <section class="con2">
               <div class="con2_c">
                 <ul class="con2_ul" >
                    <li>
                       <router-link to="/datail">
                         <img src="img/d1.jpg" alt="">
                       </router-link>
                    </li>
                    <li>
                        <router-link to="/datail1">
                         <img src="img/d2.jpg" alt="">
                       </router-link>
                        <img src="img/d4.jpg" alt="">
                    </li>
                </ul>
                 </div>
                <div class="con2_c2">
                     <ul class="con2_ul2" >
                    <li>
                     <img src="img/d3.png" alt="">
                    </li>
                    <li>
                        <img src="img/d5.jpg" alt="">
                    </li>
                </ul>
                </div>
                <div class="con2_c3">
                     <ul class="con2_ul3" >
                    <li>
                        <img src="img/d6.jpg" alt="">
                    </li>
                    <li>
                       <img src="img/d7.png" alt="">
                    </li>
                </ul>
                </div>
                <div class="con2_c4">
                    <div><h3>精品推荐</h3></div>
                    <div class="con2_c4c" >
                    <div class="con4_c1">
                        <ul class="con4_ul">
                            <li  v-for="(item2,index2) in list11" :key="index2">
                                <div>
                                    <div class="con4_d">
                                        <img :src="item2.src" alt="">
                                        <p><span>{{item2.a}}</span></p>

                                    </div>
                                    <div class="con4_d2">
                                        <p>{{item2.a1}}</p>
                                        <p>{{item2.a2}} <del>{{item2.a3}}</del></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>   
                <p class="con_footer_p"></p>  
        </section>
       <!-- 手机 -->
        <section  class="con3">
                 <div>
                    <div class="con2_c5">
                    <div><h3>手机</h3></div>

                        <ul class="con2_ul5">
                            <li>
                                <div>
                                <div class="ul5_d" >
                                    <p><img src="img/g1.png" alt=""></p>
                                      <p>退换货免运费</p>
                                </div>
                                <div class="ul5_d2" >
                                    <p>荣耀Magic4 至臻版</p>
                                    <span>￥7999</span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                <div class="ul5_d" >
                                    <p><img src="img/g2.png" alt=""></p>
                                      <p>享最高24期免息</p>
                                </div>
                                <div class="ul5_d2" >
                                    <p>荣耀Magic3 至臻版</p>
                                    <span>￥6999</span><del>￥7999</del>
                                </div>
                                </div>
                            </li>

                        </ul>

                         <ul class="con2_ul6">
                            <li>
                                <div>
                                <div class="ul5_d" >
                                    <p><img src="img/g3.png" alt=""></p>
                                      <p>最高立省130元</p>
                                </div>
                                <div class="ul5_d2" >
                                    <p>荣耀X30</p>
                                    <span>￥1369</span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                <div class="ul5_d" >
                                    <p><img src="img/g4.png" alt=""></p>
                                      <p>千元5G机，大内存长续航</p>
                                </div>
                                <div class="ul5_d2" >
                                    <p>荣耀畅玩30</p>
                                    <span>￥1090</span>
                                </div>
                                </div>
                            </li>

                        </ul>
                       
                </div>
                  <div class="con2_c6">
                         <ul class="con2_ul7">
                            <li v-for="(item1,index1) in list1" :key="index1">
                                <div>
                                <div class="ul5_d" >
                                    
                                    <p><img :src="item1.src" alt=""></p>
                                      <p>{{item1.a}}</p>
                                </div>
                                <div class="ul5_d2" >
                                    <p>{{item1.a1}}</p>
                                    <span>{{item1.a2}}</span><del>{{item1.a3}}</del>
                                </div>
                                </div>
                            </li>

                        </ul>


                         </div>
                          <div class="con_footer">
                            <router-link to='/list'><p>发现更多手机></p></router-link>
                            <p class="con_footer_p"></p>

                 </div>

                </div>
        </section>
       <!-- 电脑 -->
        <section  class="con4">
            <h3 class="con4_t">电脑</h3>
            <div class="con4_c">
                <ul class="con4_ul">
                    <li >
                        <div>
                            <div class="con4_d">
                                <img src="img/dn1.png" alt="">
                                <p><span>触控全面屏 轻薄高性能</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook V 14</p>
                                <p>￥5699</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/dn2.png" alt="">
                                <p><span>限时直降800元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook 16 Pro 2021</p>
                                <p>￥4999 <del>￥5799</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c  con4_cc">
                <ul class="con4_ul">
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/dn3.png" alt="">
                                <p><span>最高直降1100</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀MagicBook14 2021</p>
                                <p>￥4199 <del>￥5299</del></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/dn4.png" alt="">
                                <p><span>最高直降600元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook X 14</p>
                                <p>￥2799 <del>￥3299</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="con4_c1">
                <ul class="con4_ul">
                    <li  v-for="(item2,index2) in list2" :key="index2">
                        <div>
                            <div class="con4_d">
                                <img :src="item2.src" alt="">
                                <p><span>{{item2.a}}</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>{{item2.a1}}</p>
                                <p>{{item2.a2}} <del>{{item2.a3}}</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_f  con_footer">
                   <p> 发现更多电脑></p>
                    <p></p>
            </div>

        </section>
        <!-- 平板 -->
        <section  class="con5  con4">
            <h3 class="con4_t">精选平板</h3>
            <div class="con4_c">
                <ul class="con4_ul">
                    <li >
                        <div>
                            <div class="con4_d">
                                <img src="img/pb1.png" alt="">
                                <p><span>触控全面屏 轻薄高性能</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook V 14</p>
                                <p>￥5699</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pb2.png" alt="">
                                <p><span>限时直降800元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook 16 Pro 2021</p>
                                <p>￥4999 <del>￥5799</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c  con4_cc">
                <ul class="con4_ul">
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pb3.png" alt="">
                                <p><span>最高直降1100</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀MagicBook14 2021</p>
                                <p>￥4199 <del>￥5299</del></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pb4.png" alt="">
                                <p><span>最高直降600元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook X 14</p>
                                <p>￥2799 <del>￥3299</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c1">
                <ul class="con4_ul">
                    <li  v-for="(item3,index3) in list3" :key="index3">
                        <div>
                            <div class="con4_d">
                                <img :src="item3.src" alt="">
                                <p><span>{{item3.a}}</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>{{item3.a1}}</p>
                                <p>{{item3.a2}} <del>{{item3.a3}}</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_f  con_footer">
                   <p>发现更多精选平板></p>
                    <p></p>
            </div>

        </section>
        <!-- 智能穿戴 -->
          <section  class="con6 con4">
            <h3 class="con4_t">智能穿戴</h3>
            <div class="con4_c">
                <ul class="con4_ul">
                    <li >
                        <div>
                            <div class="con4_d">
                                <img src="img/cd1.png" alt="">
                                <p><span>触控全面屏 轻薄高性能</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook V 14</p>
                                <p>￥5699</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/cd2.png" alt="">
                                <p><span>限时直降800元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook 16 Pro 2021</p>
                                <p>￥4999 <del>￥5799</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c  con4_cc">
                <ul class="con4_ul">
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/cd3.png" alt="">
                                <p><span>最高直降1100</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀MagicBook14 2021</p>
                                <p>￥4199 <del>￥5299</del></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/cd4.png" alt="">
                                <p><span>最高直降600元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook X 14</p>
                                <p>￥2799 <del>￥3299</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c1">
                <ul class="con4_ul">
                    <li  v-for="(item4,index4) in list4" :key="index4">
                        <div>
                            <div class="con4_d">
                                <img :src="item4.src" alt="">
                                <p><span>{{item4.a}}</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>{{item4.a1}}</p>
                                <p>{{item4.a2}} <del>{{item4.a3}}</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_f  con_footer">
                   <p>发现更多智能穿戴></p>
                    <p></p>
            </div>

        </section>
        <!-- 智慧屏 -->
        <section  class="con7 con4">
            <h3 class="con4_t">智慧屏</h3>
            <div class="con4_c">
                <ul class="con4_ul">
                    <li >
                        <div>
                            <div class="con4_d">
                                <img src="img/pm1.png" alt="">
                                <p><span>触控全面屏 轻薄高性能</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook V 14</p>
                                <p>￥5699</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pm2.png" alt="">
                                <p><span>限时直降800元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook 16 Pro 2021</p>
                                <p>￥4999 <del>￥5799</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c  con4_cc">
                <ul class="con4_ul">
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pm3.png" alt="">
                                <p><span>最高直降1100</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀MagicBook14 2021</p>
                                <p>￥4199 <del>￥5299</del></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pm4.png" alt="">
                                <p><span>最高直降600元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook X 14</p>
                                <p>￥2799 <del>￥3299</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c1">
                <ul class="con4_ul">
                    <li  v-for="(item5,index5) in list5" :key="index5">
                        <div>
                            <div class="con4_d">
                                <img :src="item5.src" alt="">
                                <p><span>{{item5.a}}</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>{{item5.a1}}</p>
                                <p>{{item5.a2}} <del>{{item5.a3}}</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_f  con_footer">
                   <p>发现更多智慧屏></p>
                    <p></p>
            </div>

        </section>
        <!-- 智能家居 -->
        <section  class="con8 con4">
            <h3 class="con4_t">智能家居</h3>
            <div class="con4_c">
                <ul class="con4_ul">
                    <li >
                        <div>
                            <div class="con4_d">
                                <img src="img/jj1.png" alt="">
                                <p><span>触控全面屏 轻薄高性能</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook V 14</p>
                                <p>￥5699</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/jj2.png" alt="">
                                <p><span>限时直降800元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook 16 Pro 2021</p>
                                <p>￥4999 <del>￥5799</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c  con4_cc">
                <ul class="con4_ul">
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/jj3.png" alt="">
                                <p><span>最高直降1100</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀MagicBook14 2021</p>
                                <p>￥4199 <del>￥5299</del></p>
                            </div>
                        </div>
                    </li>
                    <!-- <li>
                        <a href="#">
                            <div class="con4_d">
                                <img src="/img/pm4.png" alt="">
                                <p><span>最高直降600元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook X 14</p>
                                <p>￥2799 <del>￥3299</del></p>
                            </div>
                        </a>
                    </li> -->
                </ul>
            </div>
            <!-- <div class="con4_c1">
                <ul class="con4_ul">
                    <li  v-for="(item5,index5) in list5" :key="index5">
                        <a href="#">
                            <div class="con4_d">
                                <img :src="item5.src" alt="">
                                <p><span>{{item5.a}}</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>{{item5.a1}}</p>
                                <p>{{item5.a2}} <del>{{item5.a3}}</del></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div> -->
            <div class="con4_f  con_footer">
                   <p>发现更多智能家居></p>
                    <p></p>
            </div>

        </section>
        <!-- 热销配件 -->
        <section  class="con9 con4">
            <h3 class="con4_t">热销配件</h3>
            <div class="con4_c">
                <ul class="con4_ul">
                    <li >
                        <div>
                            <div class="con4_d">
                                <img src="img/pj1.png" alt="">
                                <p><span>触控全面屏 轻薄高性能</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook V 14</p>
                                <p>￥5699</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pj2.png" alt="">
                                <p><span>限时直降800元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook 16 Pro 2021</p>
                                <p>￥4999 <del>￥5799</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c  con4_cc">
                <ul class="con4_ul">
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pj3.png" alt="">
                                <p><span>最高直降1100</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀MagicBook14 2021</p>
                                <p>￥4199 <del>￥5299</del></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/pj4.png" alt="">
                                <p><span>最高直降600元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook X 14</p>
                                <p>￥2799 <del>￥3299</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="con4_c1">
                <ul class="con4_ul">
                    <li  v-for="(item6,index6) in list6" :key="index6">
                        <div>
                            <div class="con4_d">
                                <img :src="item6.src" alt="">
                                <p><span>{{item6.a}}</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>{{item6.a1}}</p>
                                <p>{{item6.a2}} <del>{{item6.a3}}</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_f  con_footer">
                   <p>发现更多热销配件></p>
                    <p></p>
            </div>

        </section>
        <!-- 荣耀亲选产品 -->
        <section  class="con10 con4">
            <h3 class="con4_t">荣耀亲选产品</h3>
            <div class="con4_c">
                <ul class="con4_ul">
                    <li >
                        <div>
                            <div class="con4_d">
                                <img src="img/jx1.png" alt="">
                                <p><span>触控全面屏 轻薄高性能</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook V 14</p>
                                <p>￥5699</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/jx2.png" alt="">
                                <p><span>限时直降800元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook 16 Pro 2021</p>
                                <p>￥4999 <del>￥5799</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_c  con4_cc">
                <ul class="con4_ul">
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/jx3.png" alt="">
                                <p><span>最高直降1100</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀MagicBook14 2021</p>
                                <p>￥4199 <del>￥5299</del></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="con4_d">
                                <img src="img/jx4.png" alt="">
                                <p><span>最高直降600元</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>荣耀 MagicBook X 14</p>
                                <p>￥2799 <del>￥3299</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="con4_c1">
                <ul class="con4_ul">
                    <li  v-for="(item7,index7) in list7" :key="index7">
                        <div>
                            <div class="con4_d">
                                <img :src="item7.src" alt="">
                                <p><span>{{item7.a}}</span></p>

                            </div>
                            <div class="con4_d2">
                                <p>{{item7.a1}}</p>
                                <p>{{item7.a2}} <del>{{item7.a3}}</del></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="con4_f  con_footer">
                   <p>发现更多荣耀亲选产品></p>
                    <p></p>
            </div>
        </section>
        <!-- 底部留白 -->
        <div class="footer_c">
            <div class="buttontop">
                <img src="img/button-top.png" alt="">
            </div>
        </div>





    </main>
</template>
<style scoped>
.buttontop{
    position: fixed;
    bottom:6%;
    right: -11%;
    display: none;
}
.buttontop img{
    width: 50%;
}


a{
    text-decoration: none;
    color: #000;
}

.top{
 background: #feedb3;
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
}

.top>img{
 
   width: 8%;
}


nav{
    display: flex;
}
.navc{
    height: 35px;
    /* margin: 1% 3%; */
    width: 90%;
}



.navc ul li{
    display: flex;
    width: 25%;
    margin: 0% 10%;
}
.navr{
    width: 10%;
    position: relative;
    background: #feedb3;
}

.navr img{
   position: absolute;
   top: 4vw;
   left: 1vh;
   width: 35%;

}
/* 轮播 */
.carousel{
    background: #feedb3;
        padding: 2% 0%;
}

.carousel_d {
    margin: 0% 2%;
    overflow: hidden;
    border-radius: 15px;
    /* border: 1px solid #000; */
}
.carousel_d img{
    height: 100%;
    width: 100%;
}

/* 小导航 */
.nav2{

}
.nav2_d{
    overflow: auto;
}
.nav2_ul{
    display: flex;
    width: 130vw;

}
.nav2_ul li{
   width: 20vw;
   margin: 2% 3%;

    
}
.nav2_ul li>div{
   display: inline-block;
   text-align: center;
   width: 50px;
   text-decoration: none;
   font-size: .5rem;
   color: #000;

    

    
}
.nav2_li_a p{
    height: 80%;
}
.nav2_li_a p span{
    display: inline-block;
    height: 30px;
    width: 30px;
    background-size: 310px;
}

.nav2_span1{
        background: url(/img/xdh.png) no-repeat 0px 0px;
}
.nav2_span2{
        background: url(/img/xdh.png) no-repeat -31px 0px;
}
.nav2_span3{
        background: url(/img/xdh.png) no-repeat -61px 0px;
}
.nav2_span4{
        background: url(/img/xdh.png) no-repeat -93px 0px;
}
.nav2_span5{
        background: url(/img/xdh.png) no-repeat -125px 0px;
}
.nav2_span6{
        background: url(/img/xdh.png) no-repeat -156px 0px;
}
.nav2_span7{
        background: url(/img/xdh.png) no-repeat -187px 0px;
}
.nav2_span8{
        background: url(/img/xdh.png) no-repeat -215px 0px;
}
.nav2_span9{
        background: url(/img/xdh.png) no-repeat -248px 0px;
}
.nav2_span10{
        background: url(/img/xdh.png) no-repeat -279px 0px;
}
.nav2_li_a>span{
    /* display: inline-block; */
    width: 20%;
    

} 





/* 限时购 */
.con1 h3{
    text-align: center;
    line-height: 30px;
}
.con1_tim span{

   font-weight: normal;
}
.con1_tim h3>span:nth-of-type(1){
  font-size: 20px;
}
.con1_tim span:nth-of-type(2){
  margin: 0% 1%;
}


.con1_tim span:nth-of-type(2) img{
  height: 16px;
}
.con1_tim .djs{
   display: inline-block;
}
.con1_tim h3>span:nth-of-type(4){
 font-size: 12px;
  color: #b3b3b3;
}


/* 倒计时样式 */
  /* .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  } */
  .block {
    /* display: inline-block;
    width: 22px;
    color: #fff; */
    font-size: 20px;
    /* text-align: center;
    background-color: #ee0a24; */
  }
.conc{
    margin: 2% 0%;
    overflow: auto;
}

.conc_ul{
    display: flex;
    width: 175vw;




}

.conc_ul li{
    width: 25vw;
    text-align: center;
    font-size: .5rem;
    line-height: 20px;
    /* margin-left: 2%; */
}
.conc_d{
    background: #fff;
    color: #b3b3b3;
    border-radius: 10px;

}
.conc_d img{
    width: 70%;
    padding: 10% 0%  0% 0%;
}

.conc_d2 p{
    color:#256fff;
    overflow: hidden;
    font-size: .5rem;
    /* border-radius: 10px; */

}

/* 主界面 */
.con2_ul{
   display: flex;
}
.con2_ul li{
   width: 50%;
}
.con2_ul li{
   width: 50%;
}
.con2_ul li:nth-of-type(1) img{
   width: 100%;
   height: 100%;
}

.con2_ul li:nth-of-type(2){
    margin-left:1% ;
}
.con2_ul li:nth-of-type(2) img{
   display: block;
   width: 100%;
   height: 50%;
}
  

.con2_c2,.con2_c,.con2_c3,.con2_c4{
    margin: 2% 2%;
}

.con2_c3{
  margin-bottom: 10%;
}

.con2_ul2{
    margin-top:1% ;
   display: flex;
   width: 100%;
}

.con2_ul3{
    /* margin-top:1% ; */
   display: flex;
   width: 100%;
}
.con2_ul2 li,.con2_ul3 li{
   width: 50%;
}
.con2_ul2 li:nth-of-type(2),.con2_ul3 li:nth-of-type(2){
    margin-left: 1%;
}
.con2_ul2 li img,.con2_ul3 li img{
   width: 100%;
   height: 100%;
}



/* 精品 */
.con2__ul4{
    display: flex;
}
.con2__ul4 li{
    width: 20%;
}

.con2_c4c{
    margin-bottom: 10%;
}
/* 手机 */
.con2_c5{
    margin: 0% 1%;
}

/* .con2_c5,.con2_c6{
   background: #fff;
} */
h3{
    text-align: center;
    font-weight: normal;
    margin: 2% 0%;
}

.con2_ul5,.con2_ul6{
    display: flex;
    width: 100%;
}

.con2_ul5 li,.con2_ul6 li{
    width: 50%;  
    text-align: center;
    font-size: .65rem;
    line-height: 20px;
    margin:0% 1%;
}

.con2_ul5 li del{
    color: #9e9e9e;
}

.con2_ul5 li a,.con2_ul6 li a ,.con2_ul7 li a{
    display: inline-block; 
    width: 100%;
    color: #000;
}

.ul5_d{
    width: 100%;
    height: 80%;
    background: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;


}

.ul5_d p:nth-of-type(2){
   background: rgba(155,155,155,.1);
   line-height: 20px;
   color: #9b9b9b;

}
.ul5_d2{
    height: 20%;
    margin-top: 2%;

}
.ul5_d img{
    width: 75%;

    padding: 10% 10% 0% 10%;
}


.con2_ul6{
    margin-top: 3%;
}


.con2_c6{
    overflow: auto;
    margin-top: 3%;
}
.con2_ul7 {
    display: flex;
    width: 5000px;
}
.con2_ul7 li{
    width: 33vw;
    font-size: .3rem;
    text-align: center;
    margin-left: 2vw;
}

.con2_ul7 li del{
    color: #9e9e9e;
}

.con_footer{
    margin-top: 10%;

}
.con_footer p{
    text-align: center;
    font-size: 15px;
    margin: 4% 0%;

}
.con_footer p a{
   text-decoration: none;
   color: #000;
   

}
.con_footer p:nth-of-type(2){
  height: 10px;
  width: 100%;
  background: rgba(155,155,155,.1);

}


/* 电脑 */
/* .con4{
  
} */
.con4_c{
    margin: 3% 2%;
}
.con4_ul{
    display: flex;

}
.con4_ul li{
    width: 50%;
}
.con4_ul li:nth-of-type(2){
    margin-left: 2%;
}
.con4_ul li>div{
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: .65rem;
}
.con4_d{
    background: #f9f9f9;
    width: 100%;
    height: 80%;
    border-radius: 10px;
    overflow: hidden;
} 
.con4_d img{
   padding: 10% 15%;
    width: 70%;
}
.con4_d p{
    background: rgba(155,155,155,.1);
    line-height: 20px;
    color: #9b9b9b;
}
.con4_d2{
    /* background: #b3b3b3; */
    height: 20%;
}
.con4_d2 p{
    line-height: 20px;
    color: #000;
    word-wrap:break-word
}

.con4_c1{
    overflow: auto;
}
.con4_c1 ul{
    width: 5000px;
}

.con4_c1 ul li{
    width: 33vw;
    margin-left: 2vw;
}
.con4_c1 ul li:nth-of-type(2){
    margin-left: 2vw;
}
.footer_c{
    height: 35px;
    width: 100%;
}

.con_footer_p{
    height: 10px;
    background: #f9f9f9;
    width: 100%;
}
</style>



<script>
import $ from 'jquery'
export default {
  data() {
    return {
        active :0,
      time: 30 * 60 * 60 * 1000,
//现时活动
// 精品
 list11:[
        {
             src:'img/jp1.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/jp2.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/jp3.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
        {
             src:'img/jp1.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/jp2.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/jp3.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
             
      ],
//手机列表
      list:[
        {
             src:'img/hd1.png',
             a:'荣耀play6',
             a1:'限时最高优惠1',
       
        },
         {
             src:'img/sj2.png',
             a:'荣耀play6T',
             a1:'购机赠79元耳机',
       
        },
         {
             src:'img/sj3.png',
             a:'荣耀play6',
             a1:'最高直降500元',
       
        },
         {
             src:'img/sj4.png',
             a:'荣耀play6',
             a1:'12英寸护眼',
       
        },
         {
             src:'img/sj5.png',
             a:'荣耀play6',
             a1:'晒单立反50元',
       
        },
         {
             src:'img/hd1.png',
             a:'荣耀play6',
             a1:'显示最高优惠1',
       
        },
         {
             src:'img/hd1.png',
             a:'荣耀play6',
             a1:'显示最高优惠1',
       
        },
         {
             src:'img/hd1.png',
             a:'荣耀play6',
             a1:'显示最高优惠1',
       
        },

      ],
     

//手机列表
      list1:[
        {
             src:'img/g1.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/g1.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/g1.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/g1.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/g1.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
      ],

// 电脑列表
      list2:[
        {
             src:'img/dn1.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/dn2.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/dn3.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/dn4.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/dn4.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
      ],
//平板列表
      list3:[
        {
             src:'img/pb5.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },

      ],
//智能穿戴
      list4:[
        {
             src:'img/cd5.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },

      ],
//智慧屏
      list5:[
        {
             src:'img/pm5.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },

      ],
//热销配件
 list6:[
        {
             src:'img/pj5.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/pj6.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/pj7.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
             
      ],
//荣耀亲选产品
 list7:[
        {
             src:'img/jx5.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/jx6.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/jx7.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                 {
             src:'img/jx6.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
                {
             src:'img/jx7.png',
             a:'享优惠一百五十元',
             a1:'荣耀 Play5T',
             a2:'￥999',
             a3:'￥1199'

        },
            
             
      ],


};
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
}



</script>
