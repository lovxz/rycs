<template>
  <main>

    <header>
     <section>
      <h3>购物车</h3>
      <p>编辑</p>
     </section>
    </header>

    <section class="con">
     <ul class="con_ul">
      <li>
        <div class="con_lf">
          <input type="checkbox">
        </div>
        <div class="con_ri">
          <div class="con_ri1">
           <p><span><img src="img/quan.png" alt=""></span> <span>满20减20</span></p>

            <span>领卷</span>

          </div>
          <div class="con_ri2">

          </div>
          <div class="con_ri3">
            <div class="con_ri3_l">
              <p><img src="img/shop.png" alt=""></p>

            </div>
            <div class="con_ri3_r">
               <p>
                荣耀Magic3 至臻版 多主摄计算摄影 骁龙888Plus 6.76英寸超曲屏 纳米微晶面板 12GB+512GB 陶瓷黑
                </p>
                <p>
                   陶瓷黑,5G全网通 12GB+512GB,官方标配
                </p>

                <span>分期免息</span>


            <div class="con_ri4">
              <div class="con_ri4c">
                <p><b>￥</b><b>6999</b> <del>￥7999</del></p>
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </div>
              <div class="con_ri4c1">
                <span>限购1件</span>
              </div>
            </div>
            <div class="con_ri5">

            </div>
            </div>

          </div>

          <div class="con_ri6">
            <p>
              <span>服务</span>
              <span>选购</span>
              <span>意外保护</span>
              <span>延长保修</span>

            </p>
            <p>
            <img src="img/ddd.png" alt="">
            </p>
            
          </div>
          
        </div>
        

      </li>
      <li>
        <div class="con_lf">
          <input type="checkbox">
        </div>
        <div class="con_ri">
          <div class="con_ri1">
           <p><span><img src="img/quan.png" alt=""></span> <span>满20减20</span></p>

            <span>领卷</span>

          </div>
          <div class="con_ri2">

          </div>
          <div class="con_ri3">
            <div class="con_ri3_l">
              <p><img src="img/shop1.png" alt=""></p>

            </div>
            <div class="con_ri3_r">
               <p>
                荣耀Magic3 至臻版 多主摄计算摄影 骁龙888Plus 6.76英寸超曲屏 纳米微晶面板 12GB+512GB 陶瓷黑
                </p>
                <p>
                   陶瓷黑,5G全网通 12GB+512GB,官方标配
                </p>

                <span>分期免息</span>


            <div class="con_ri4">
              <div class="con_ri4c">
                <p><b>￥</b><b>6999</b> <del>￥7999</del></p>
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </div>
              <div class="con_ri4c1">
                <span>限购1件</span>
              </div>
            </div>
            <div class="con_ri5">

            </div>
            </div>

          </div>

          <div class="con_ri6">
            <p>
              <span>服务</span>
              <span>选购</span>
              <span>意外保护</span>
              <span>延长保修</span>

            </p>
            <p>
            <img src="img/ddd.png" alt="">
            </p>
            
          </div>
          
        </div>
        

      </li>
      <li>
        <div class="con_lf">
          <input type="checkbox">
        </div>
        <div class="con_ri">
          <div class="con_ri1">
           <p><span><img src="img/quan.png" alt=""></span> <span>满20减20</span></p>

            <span>领卷</span>

          </div>
          <div class="con_ri2">

          </div>
          <div class="con_ri3">
            <div class="con_ri3_l">
              <p><img src="img/shop1.png" alt=""></p>

            </div>
            <div class="con_ri3_r">
               <p>
                荣耀Magic3 至臻版 多主摄计算摄影 骁龙888Plus 6.76英寸超曲屏 纳米微晶面板 12GB+512GB 陶瓷黑
                </p>
                <p>
                   陶瓷黑,5G全网通 12GB+512GB,官方标配
                </p>

                <span>分期免息</span>


            <div class="con_ri4">
              <div class="con_ri4c">
                <p><b>￥</b><b>6999</b> <del>￥7999</del></p>
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </div>
              <div class="con_ri4c1">
                <span>限购1件</span>
              </div>
            </div>
            <div class="con_ri5">

            </div>
            </div>

          </div>

          <div class="con_ri6">
            <p>
              <span>服务</span>
              <span>选购</span>
              <span>意外保护</span>
              <span>延长保修</span>

            </p>
            <p>
            <img src="img/ddd.png" alt="">
            </p>
            
          </div>
          
        </div>
        

      </li>
     </ul>
    </section>

   <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" style="bottom:50px">
  <van-checkbox v-model="checked">全选</van-checkbox>
</van-submit-bar>




  </main>
</template>
<style scoped>
main{
  background: #f9f9f9;
}
header{

  padding-bottom: 5%;
}
header>section{
  display: flex;
  justify-content: space-between;
  padding: 3%;
}
h3{
  font-weight: 400;
}

.con{
 margin: 0% 3%;
 /* background: #FFF; */
}
.con_ul{
  margin-bottom: 100px;
}
.con_ul li{
  display: flex;
  font-size: .6rem;
  background: #fff;
  margin-bottom: 3%;
}
.con_lf{
 width: 10%;
 padding-top: 23%;
}

.con_lf input{
   width: 100%;
}

.con_ri{
 width: 90%;
}
.con_ri1{
  display: flex;
  justify-content: space-between;
  margin: 3%;
}
.con_ri1 p:nth-of-type(1){
  padding-top: 3%;
}
.con_ri1 p:nth-of-type(1) img{
  width: 20%;
}
.con_ri1 >span{
  font-size: .9rem;
  padding: 1% 2%;
  border: 1px solid #ccc;
  border-radius: 30px;
  
}
.con_ri3{
  display: flex;
}

.con_ri3_l{
  width: 30%;
}
.con_ri3_l img{
  width: 100%;
}

.con_ri3_r{
  width: 70%;
}

.con_ri3_r p{
  font-size: .8rem;
}
.con_ri3_r p:nth-of-type(2){
  font-size: .6rem;
  color: #ccc;
  margin: 3% 0%;
}
.con_ri3_r span{
  padding: 1% 2%;
  border: 1px solid #256FFF;
  border-radius: 30px;
  color: #256FFF;
}

.con_ri4{
  margin-top: 8%;
}
.con_ri4c{
  display: flex;
   justify-content: space-between;
}
.con_ri4c1 {
  display: flex;
  flex-direction:row-reverse
}
.con_ri4c1 span{
  margin-top: 3%;
  border: none;
  padding: none;
}

.con_ri6{
  display: flex;
    justify-content: space-between;
}
.con_ri6 p:nth-of-type(1){
  width: 90%;
}
.con_ri6 p:nth-of-type(2){
  width: 10%;
}
.con_ri6 p:nth-of-type(1) span{
 margin-right:2% ;
}
.con_ri6 p:nth-of-type(1) span:nth-of-type(1){
 margin-right:8% ;
}

.con_ri6 p:nth-of-type(1) span:nth-of-type(3){
  padding: 1% 2%;
  border: 1px solid #ccc;
}
.con_ri6 p:nth-of-type(1) span:nth-of-type(4){
 padding: 1% 2%;
  border: 1px solid #ccc;
}
.con_ri6 p:nth-of-type(2) img{
 width: 70%;
}
</style>
<script>

</script>