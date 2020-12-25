<template>
    <div class="loginfrom">
        <img src="https://cdn1.iconfinder.com/data/icons/esports-blush-vol-2/64/mmorpg-512.png" class="avater">
        <h1>Login</h1>
        <form>
            <p>E-mail</p>
            <input type="email" v-model="email"  placeholder="Enter E-mail">
            <p>Password</p>
            <input type="password" v-model="password" value="" placeholder="Enter Password"><br>
            <button v-on:click="login()">Login</button><br><br><br>
            <p class="p-1">Not have account yet?<router-link to="/signup"><a href="#"> Sign up</a></router-link></p>
        </form>
    </div>
</template>

<script>
import FuckService from '../Fuckservice'
export default {
    name: 'login',
    data(){
        return{
            username:"",
            email:"",
            password:""
        }
    },
    methods: {
        login:async function(){
            
            let data = {
                username:this.username,
                email: this.email,
                password:this.password
            }     
            await FuckService.postfuck(data)
            
        }
    }
}
</script>

<style scoped>
    
.loginfrom{
    width: 320px;
    height: 420px;
    background:#000;
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    box-shadow: 8px 8px 50px rgb(36, 35, 34);
    padding: 70px 30px;
    border-radius: 10px;
}
.avater{
    width: 100px;
    height: 100px;
    
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
}

button{
  border: none;
  outline: none;
  height: 40px;
  background: linear-gradient(120deg,#4CAF50,rgb(69, 160, 212));
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  width: 250px;
  /* position: absolute; */
  
}
button:hover {
  background: linear-gradient(120deg,rgb(69, 160, 212),#4CAF50);
  color: #fff;
}

h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 30px;
}

.loginfrom p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.loginfrom input{
    width: 100%;
    margin-bottom: 20px;
}
.loginfrom input[type = "email"], input[type = "password"]{
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
}


.loginfrom a{
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: darkgray;
}
.loginfrom a:hover{
    color: darkorange;
}
.p-1{
    color: darkgray;
    font-size: 12px;
}
</style>