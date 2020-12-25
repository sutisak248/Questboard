<template>

  <div id="app">
    <nav>
        <div class="logo">
            Quest Board
        </div>
        <div class="nav-search">
      <input type="text" placeholder="Search.." name="search" size="40px" style="font: size 25px;height:25px">
        <i class="fa fa-search" aria-hidden="true" style="color: white; cursor: pointer; font:size 30px;"></i>
        </div>
        <ul class="nav-links" >
        <li>
            <a href="#">Quest</a>
        </li>
        <li>
            <a href="">About</a>
        </li>
        <li>
            <a href="#">Work</a>
        </li>
        <li>
          
        </li>
        </ul>
        <div class="burger" v-on:click="navSlide();">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <div class="display_name">
            name
        </div>
    </nav>   
    <router-view></router-view>
    
  </div>
</template>

<script src="script.js"></script>
<script>
// import home from './components/home.vue'
// import hello from './components/HelloWorld.vue'
// import VueRouter from 'vue-router'
// import Vue from 'vue'





export default {
  name: 'App',
  
  methods: {
    navSlide : () =>{
        const burger = document.querySelector(".burger");
        const nav    = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll('.nav-links li');
        burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
            navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation ='';   
                }
                else {
                    link.style.animation = 'navLinkFade 0.5s ease forwards $(index / 7 + 2s )';
                    
                }
            });
            burger.classList.toggle('toggle');
        
        });
    }  
  }
 
}
</script>
<style scoped >
    @import 'styles/nav.css';
</style>
<style scoped>


body{
margin : 0;
padding : 0;
background : url(https://www.facebook.com/NetflixTH/photos/a.292183707902294/1130505247403465/?__cft__[0]=AZX_COK714_cGvilvVwzz2OuKdfemAKSoqPJxHsj5YZMPANJVPbymJDx2S_IvpOU5kjqRNYFylqFO2i0Xbd67OQ_mbWy88hnHVHgTwEV2hNw4you4rY_3EGh8JJrUsAn0DwHpvxs__Qx0CX8urkfpusgjxUlHGQQyvLMBhrSrSDfvjT6SgkiDu0aWkd2f7T-7GfDzfpGVIp6qClmn46Kv7hk&__tn__=EH-y-R);
background-repeat:no-repeat ;
background-position: center;
background-size: auto;
font-family: sans-serif;
}
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}    
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    font-family: 'Poppins', sans-serif;
    background-color: #82b340;
}
.logo{
    color: white;
}
.nav-links{
    display: flex;
    background-color: #ececec;
    width: 30%;
    justify-content: space-around;
      
}
.nav-links a{
    color: black;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 30px;
    padding-right: 20px;
    margin-left: 1px;
    
}
.nav-links li{
    list-style: none;
    color: white;
    align-items: center;
    padding: 6px;
    cursor: pointer;
    border: none;
}
/* .nav-links :hover{
    border: 1px solid black; 
    background-color: #25383c;
    transition-property: background-color;
    transition-duration: 1s;  
} */

.nav-links li:hover{
    border: 1px solid black;
    background-color: #25383c;
    transition-property: background-color;
    transition-duration: 1s;  
}
.nav-links a:hover{
    color: #ececec;
}
.burger{
    display: none;
    border: solid 1px white;
}

.burger div{
    background-color: white;
    width: 25px;
    height: 4px;
    margin: 5px;
    transition: all 0.5s ease;
}
.nav-search{
    
    position: relative;
    padding-left: 0.5%;
    margin-right:20%
    
}
@media screen and (max-width:1024px){
.nav-links{
    width: 60%;
    } 
}
@media screen and (max-width:768px){
    body{
        overflow-x:hidden;
        width: 100%
    }
.nav-links{
    position: absolute;
    right: 0px;
    height: 52vh;
    top: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
    cursor: pointer;
    opacity: 0;
    } 

    .nav-links li{
        opacity: 1;
    }
    .burger{
        display: block;
    }
.nav-active{
    transform: translateX(0%);
    transition: transform 0.5s ease-in;
    opacity: 1;
}
@keyframes navLinkFade {
    from{
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translate(0px);
    }
}
nav-search-active{
    transform: translateX(100%);
    background-color: black;
}

.toggle .line1{
    transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2{
    opacity: 0;
}
.toggle .line3{
    transform: rotate(45deg) translate(-5px,-6px);
}

}
@media screen and (max-width:1200px){
.nav-search{
    display: none;
}
.display_name{
    display: none;
}
}

</style>
