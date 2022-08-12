<template>
    <main>
        <router-view></router-view>
     <ul class="box">
        <li>
        <router-link to="/index">
       <img src="img//fi11.png" alt="">
       <img src="img//fi1.png" alt="">
       <br>

      </router-link>
      </li>
         <li>
        <router-link to="/type">
        <img src="img//fi2.png" alt="">
          <img src="img//fi22.png" alt="">
        <br>

      </router-link></li>
         <li>
        <router-link to="/shop">
        <img src="img//fi3.png" alt="">
          <img src="img//fi33.png" alt="">
        <br>
 
      </router-link></li>
         <li>
        <router-link to="/my">
        <img src="img//fi4.png" alt="">
          <img src="img//fi44.png" alt="">
        <br>

      </router-link></li>
     </ul>
    </main>
</template>
<style>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
</style>
<style scoped>
.box{
      position: fixed;
      display: flex;
      bottom:0px;
      left: 0px;
      width: 100%;
  /* display: none; */
      background: #f88922;
}
.box li{
    height: 50px;
    /* width: 25%; */
    text-align: center;
    background: #f88922;
}

.box li img{
    width: 60%;
} 

a{
  text-decoration: none;
  color: black;
}
/* .box .router-link-active{
    color:red;
} */
.box .router-link-active img:nth-of-type(2){
    display: inline-block;
}
.box .router-link-active img:nth-of-type(1){
    display: none;
}
.box a img:nth-of-type(2){
    display: none;
}
.box a img:nth-of-type(1){
    display: inline-block;
}



</style>
<script>

</script>

