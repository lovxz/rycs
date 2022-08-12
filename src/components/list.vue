<template>
    <main>
        <!-- <h3>这是列表</h3> -->
        <header class="headerc">
            <div class="heal">
                <router-link to="/index"><p><img src="img/fh.png" alt=""></p></router-link>
            </div>
            <div class="hear"> 
                <form action="/" >
                    <van-search
                        v-model="value"
                        show-action
                        placeholder="请输入搜索关键词"
                        @search="onSearch"
                        @cancel="onCancel"
                    />
                    </form>
         </div>
        </header>
        <section class="nav"> 
            <div class="navc">
            <ul class="navc_ul">
                <li><span>综合</span></li>
                <li><span>最新</span></li>
                <li><span>评论数</span></li>
                <li><span>价格</span></li>
                <li><span>价格</span></li>
            </ul>
            </div>

            <div class="navc1">
            <ul class="navc_ul1">
                <li><span>仅看有货</span></li>
                <li><span>分期免息</span></li>
                <li><span>优惠商品</span></li>
                <li><span>屏幕尺寸</span></li>
                <li><span>运行内存</span></li>
                <li><span>存储容量</span></li>
                <li><span>上市时间</span></li>
            </ul>
            </div>
        </section>
        <section class="con">
            <div class="cont">
                <ul class="cont_ul">
                    <li>
                        <div class="cont_d">
                            <p><img src="img/t1.png" alt=""></p>
                            <p>手机</p>
                        </div>
                    </li>
                    <li>
                        <div class="cont_d">
                            <p><img src="img/t2.png" alt=""></p>
                            <p>保护壳</p>
                        </div>
                    </li>
                    <li>
                        <div class="cont_d">
                            <p><img src="img/t3.png" alt=""></p>
                            <p>贴膜</p>
                        </div>
                    </li>

                </ul>

            </div>
            <div class="conc">
                <ul class="conc_ul">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="conc_dlf">
                            <p>
                                <img :src="item.src" alt="">
                            </p>

                        </div>
                        <div class="conc_dri">
                            <div class="conc_dri1">
                                <p>{{item.txt1}}</p>

                            </div>
                            <div class="conc_dri2">
                                <p>{{item.txt2}}</p>

                            </div>
                            <div class="conc_dri3">
                                <b>￥</b>
                                <b>{{item.txt3}}</b>
                                <span>{{item.txt4}}</span>
                            </div>
                            <div class="conc_dri4">
                               <p> <span>{{item.txt5}}</span>
                                <span>{{item.txt6}}</span>
                                <span>{{item.txt7}}</span></p>

                            </div>
                            <div class="conc_dri5">
                                <span>{{item.txt8}}</span>
                                <span>{{item.txt9}}</span>
                            </div>

                        </div>
                    </li>
                </ul>

            </div>

        </section>

    </main>
</template>

<style scoped>

/* t头部 */
.headerc{
     display: flex;
     margin-left: 5%;
}
.heal{
    width: 10%;
}
.heal p{
   padding-top: 40%;
}
.heal img{
    width: 70%;
}
.hear{
   width: 90%;
}

/* 导航 */
.navc{
    margin-top: 2%;
}
.navc_ul{
   display: flex;

}
.navc_ul li{
    text-align: center;
   width: 20%;
   font-size: .9rem;
   line-height: 20px;
   
}

.navc1{
    overflow:auto;
    margin: 5% 0% 3% 0%;
}

.navc_ul1{
    display: flex;
    width: 150vw;
}

.navc_ul1 li{
    width: 20vw;
    text-align: center;
    font-size: .6rem;
    color: #666;

}
.navc_ul1 li span{
    display:inline-block;
    padding: 5% 15%;
    background: #f9f9f9;
    border-radius: 10px;
    
}


/* n内容 */
.cont{
    background: #f9f9f9;

    padding: 2% 0% 5% 0%;
}
.cont_ul{
    display: flex;
}

.cont_ul li{
   width: 16%;
   text-align: center;
   font-size: .5rem;
   margin-left: 2%;
}
.cont_d {
  background: #fff;
}

.cont_d img{
  width: 70%;
}


/* .conc{
      margin-top: 5%;
} */

.conc_ul{
    margin-left: 2%;
}

.conc_ul li{
 width: 100%;
 display: flex;
       margin-top: 5%;
}

.conc_dlf{
  width: 40%;

 
}
/* .conc_dlf p{
  padding: 2% 2%;
} */
.conc_dlf img{
  padding: 10% 20%;
  background: #f9f9f9;
   border-radius: 5px;
  width: 50%;
}
.conc_dri{
  width: 60%;
}
.conc_dri2{
    font-size: .7rem;
    line-height: 20px;

}
.conc_dri2{
    color: rgb(173, 173, 173);

}

.conc_dri3{
    margin-top: 3%;
     

}
.conc_dri3 b:nth-of-type(1){
    font-size: .5rem;
}
.conc_dri3 span{
    margin-top: 3%;
    font-size: .5rem;
        color: rgb(37, 111, 255);
    border:1px solid  rgb(37, 111, 255) ;
       border-radius: 10px;
         padding:0% 3%;
         margin-left: 2%;

}
.conc_dri4{
    margin: 2% 0%;
}
.conc_dri4 p{
    font-size: .5rem;
}
.conc_dri4 span{
    padding:0% 2%;
    color: rgb(37, 111, 255);
    border:1px solid  rgb(37, 111, 255) ;
    border-radius: 10px;
    font-size: .2rem;
    margin-right: 2%;
}

.conc_dri5 span{
    font-size: .1rem;
    color: rgb(173, 173, 173);
    margin-right: 2%;

}


</style>
<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: '',

      list:[
        {
            src:'img/con1.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con1.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con2.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con2.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con3.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con3.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con4.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con1.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con1.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con1.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
            {
            src:'img/con1.png',
            txt1:'荣耀70',
            txt2:'老用户加赠专属手机壳',
            txt3:'2699起',
            txt4:'多款',
            txt5:'一站式换新',
            txt6:'下单立减',
            txt7:'商品赠卷',
            txt8:'2044人评论',
            txt9:'98好评',
        },
      ]
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('搜索');
    },
  },
};
   
</script>