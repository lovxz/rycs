<template>
    <main>
        <header>
            <section class="hea">
                <p><img src="img/log.png" alt=""></p>
                <h3>荣耀账号</h3>
            </section>
        </header>
        <section class="con">
            <div class="conc">
                <p>国家或地区</p>
                <span>中国</span>
            </div>
            <div class="conc1">
                <div>
                    <div><span>中国  (+86) </span><i></i></div>
                    <input type="text" placeholder="手机号码">
                </div>
            </div>
            <div class="conc2">
                <input type="text" placeholder="验证码">
                <div>
                 <span>获取验证码</span>
                </div>
            </div>
            <div class="conc3">

                <span id="mm">密码登陆</span>

            </div>
             <div class="conc4">

               <p>
                <button>登陆/注册</button>
               </p>

            </div>
            <div class="con6">
                <p><input type="checkbox"></p>
                <div>
                本人已阅并同意 <span>荣耀账号用户协议</span>
                ,知悉<span>关于荣耀账号与隐私的声明</span>
                ,并同意授权调用<b>联网、存储、设备信息，信息、相机、通讯录、位置</b>
                权限
                </div>

            </div>


            <div class="conc5">
                <p>遇到问题</p>
                <p>三方账号登陆</p>
                <p><img src="https://hnid-drcn.cloud.hihonor.com/CAS/up/idmw_rss_68/logos/login_ic_HW.svg" alt=""></p>
            </div>

            
        </section>
        <section class="con con2">
            <div class="conc1 conc11">
                <div class="concc">
                   <p> <input type="text" placeholder="手机号码/账号/邮箱"></p>
                </div>
            </div>
            <div class="conc2 conc22">
                <p><input type="text" placeholder="密码"></p>
                <p><img src="img/yj.png" alt=""></p>
            </div>
            <div class="conc3 conc33 ">
                <span>忘记密码</span>
                <span id="yzm">验证码登陆</span>

            </div>
             <div class="conc4">
               <p>
                <button>登陆</button>
               </p>
            <div class="conc5 conc55">
                <p>遇到问题</p>
            </div>
            </div>

        </section>
    </main>
</template>
<style scoped>
.hea{
    margin: 5% 3% 3% 3%;
    text-align: center;

}
.hea p img{
    width: 15%;
}
.hea h3{
    margin-top: 3%;
}
.con{
    padding: 5% 5%;
}
.conc{
    display: flex;
    justify-content: space-between;
}
.conc span{
    font-size: .8rem;
    color: #bbb;
}
.conc1{
    margin: 5% 0%;
    border-bottom: 1px solid #ccc;
}

.conc1 input{
    height: 24px;
    border: none;
    padding-left: 2%;
    font-size: .9rem;
    /* color: cornflowerblue; */
}
.conc1 div>i{
    display: inline-block;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent transparent rgb(0,0,0);
}
.conc1>div,.conc2{
   display: flex;
   padding-bottom: 2%;
   
} 
.conc1>div>div{
    border-right: 1px solid #ccc;
}
.conc2{
    justify-content: space-between;
       border-bottom: 1px solid #ccc;

}
.conc11 .concc p input{
    padding:none;
}
.conc22{ 
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
}
/* .conc22 p{
   width: 20%;
} */
.conc22 img{
   width: 20%;
   margin-left: 80%;
}
.conc22 p input{
     width: 70%;

}
.conc2 input{
    height: 24px;
    border: none;
    padding-left: 2%;
    font-size: .9rem;
    width: 30%;
  
}
.conc2 span{
    font-size: .9rem;
    color: #256FFF;
    font-weight: 600
}


.conc3{
    display: flex;
    margin: 5% 0%;
    color: #256FFF;
    font-size: .8rem;
    font-weight: 600;
    flex-direction: row-reverse;
}
.conc33{
    justify-content: space-between;

}


.conc4{
    text-align: center;
}
.conc4 button{
    width: 100%;
    border: none;
    padding: 2% 0%;
    background: #256FFF;
    border-radius: 30px;
    color: #fff;
    font-weight: 600;
}

.conc5{
    margin-top: 90%;
    text-align: center;
}
.conc5 p{
    margin: 4% 0%;
}
.conc5 p:nth-of-type(1){
    color: #256FFF;
    font-size: .8rem;
    font-weight: 700;
}
.conc5 p:nth-of-type(2){
    color: gray;
    font-size: .6rem;
    
}
.conc5 img{
    width: 10%;
}

.con2{
    display: none;
}

.conc55{
    margin-top: 55vh;
}

.con6{
    display: flex;
    font-size: .6rem;
    margin-top : 5%;
    line-height: 17px;
}
.con6>p{
    margin-top: 1%;
}
.con6>p input{
    width: 16px;
    height: 20px;
}
.con6>div{
    margin-left: 3%;
}
.con6>div span{
    color: #256FFF;
    font-weight: 700;
}
</style> 
<script>
import $ from 'jquery'
export default {
    data() {
    return {


    }
    },

mounted() { 

    $('#mm').click(function(){
        $('.con').css('display','none')
        $('.con2').css('display','block')
    })

     $('#yzm').click(function(){
        $('.con').css('display','block')
        $('.con2').css('display','none')
    })


}
};



</script>