<template>
    <header class="header">
        <div>
            <div class="main-body">
        <div class="gallery-container">
            <div class="main-img-container">
                <img class="mainimg" src="https://289f4f-e-commerce-product-page.netlify.app/static/media/image-product-1.520cc50bd13955f55cb2.jpg">
                
                
            </div>
            <div class="thumbnail-container">
                <img class="img-thumbnail" data-img="0" tab-index="0" src="https://289f4f-e-commerce-product-page.netlify.app/static/media/image-product-1.520cc50bd13955f55cb2.jpg">
                <img class="img-thumbnail" data-img="1" tab-index="1" src="https://289f4f-e-commerce-product-page.netlify.app/static/media/image-product-2.c8bb0aaccecdebb16596.jpg">
                <img class="img-thumbnail" data-img="2" tab-index="2" src="https://289f4f-e-commerce-product-page.netlify.app/static/media/image-product-3.af5c71ba9ffcc0b8b54d.jpg">
                <img class="img-thumbnail" data-img="3" tab-index="3" src="https://289f4f-e-commerce-product-page.netlify.app/static/media/image-product-4.9962862ef3eff6d65e5b.jpg">
            </div>
        </div>
        </div>
        </div>

       <div v-for="user in users" :key="user.id" class="text-box">
       
            
           
            <h2 style="margin-bottom: 5px;">{{ user.name }}</h2>
            <br>
            <p style="margin-right: 5px;">{{ user.description }}</p>
            <div class="amou">
            
    
            <h3 style="text-decoration: line-through">${{ user.price.full }}</h3>
        
            <h3 style="color: cadetblue;">50%</h3>
            </div>
            <h3> ${{ user.price.discounted }}</h3>
            <div class="sec">
                <div class="sect">
                   
                    <button class="btnn" @click="incr" >+</button>
                    <h3 class="ttt">  {{ this.count }}   </h3>
                    <button class="btnn" @click="decr" >-</button>                
                </div>
                <div>
                    <button class="buton" @click="cart">Add to cart</button>
                </div>

            </div>
               
        </div>
    </header>
</template>
<script>

import {UserService} from "./UserService";
export default{
    name: "App",
    data : function(){
        return{
            users:[],
            errorMessage : null,
            count:0
        };
    },
    methods : {
        incr : function(){
         this.count = this.count + 1;
        },
        decr : function(){
            this.count = this.count - 1;
        },
        cart : function(){
            
            this.chart = this.count+0 ;
            
        },
        showMainImage : function() {
             this.showImageModal = true;
     },
        changeMainImage : function() {
              this.mainImage = image;
        }
    },
    created: async function() {
     try{
        let response = await UserService.getAllUsers();
        console.log(response.data);
        this.users = response.data;
     }
     catch(error){
        console.log(error);
        this.errorMessage = error;
     }
    }
 
}

</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
@media (max-width: 1440px){


.header{
    width: 80%;
    height:80vh;
    padding:25px 10%;
    margin: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   
}

nav{
    display: flex;
    align-items: center;
    
}

nav ul li{
    display: flex;
    list-style-type: none;
    flex-direction: row;
}
.sec{
    display: flex;
    flex-direction: row;
    margin: 10px;
    justify-content: space-around;
}
.text-box{
    padding-top: 40px;
}
.sect{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

nav ul li a{
    display: flex;
    
    text-decoration:none;
    color: gray;
}
nav ul li a:hover{
    color: #ff6e00;
    border-radius: 2px solid #ff6e00;
    padding-bottom: 10px;
}
.cart-profile{
    position: absolute;
    right: 10%;
}
.avatar{
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-left: 30px;
}
.product{
    width:400px;
    height: 400px;
    border-radius: 5px;

}
.amou{
    display: flex;
    flex-direction: row;

}
.navc{
    display: flex;
    text-align: center;
    justify-content: space-evenly;

}
.section{
    display:flex;
    align-items: center;
    margin-top:150px;
    margin-left: 50px;
}
.text-box{
    margin-left: 120px;
}
.text-box .p-1{
    color: #ff6e00;
    margin-bottom :20px;
    margin-top:20px;

}
.text-box h1{
    font-size: 50px;
    line-height: 1.2;
}
h3{
    margin-top: 20px;
}
.ttt{
    color: black;
    margin: 10px;
}
.btnn{
    width: 90px;
    height:13px;
    margin: 2px;
    padding: 15px;

    border: none;
    border-radius: 3px;
    font-weight: bolder;
}
.btnn:hover{
    cursor:pointer;
    background-color: #f3e0d2;
    border: 1px solid #fff;
}
.buton{
    width: 200px;
    height: 35px;
   margin-left: 5px;
    border: none;
    outline: none;
    background: #ff6e00;
    border-radius: 5px;
    font-weight: bold;
}
.buton:hover{
    cursor:pointer;
    background-color: #ff6e00;
    border: 1px solid #fff;
}
.card-body{
    display: flex;
    flex-direction: row;

}



.mainimg {
    max-width: 350px;
    max-height: 370px;
    border-radius: 10px;
    display: flex;
    justify-items: start;
    left: 20%;
}

.mainimg:hover {
    cursor: pointer;
}

.img-thumbnail {
    margin-top: 70px;
    width: 80px;
    height: auto;
    border-radius: 10px;
    gap: 13px;
}

.img-thumbnail:hover {
    cursor: pointer;
    opacity: .6;
}

.thumbnail-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.previous-main {
    position: absolute;
    width: 13px;
    height: auto;
    z-index: 300;
    top: 180px;
    left: 15px;
    z-index: 200;
    box-sizing: content-box;
    padding: 10px 15px 10px 15px;
    background-color: white;
    border-radius: 50%;
    display: none;
}

.previous-main:hover {
    cursor: pointer;
}

.next-main {
    position: absolute;
    width: 13px;
    height: auto;
    z-index: 300;
    top: 180px;
    right: 15px;
    z-index: 200;
    box-sizing: content-box;
    padding: 10px 15px 10px 15px;
    background-color: white;
    border-radius: 50%;
    display: none;
}

.next-main:hover {
    cursor: pointer;
}

.main-img-container {
    position: relative;
    max-width: 435px;
    height: auto;
    margin: 0 auto;
}
}

@media (max-width: 375px){
.header{
    width: 80%;
    height:80vh;
    padding:25px 10%;
    padding-top: 100px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    /*justify-content: space-around;  */ 
}
.amou{
    display: flex;
    flex-direction: row;
    justify-content: center;

}
.sec{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.navc{
    display: flex;
    text-align: center;
    justify-content: space-evenly;

}
.section{
    display:flex;
    align-items: center;
    margin-top:70px;
    margin-left: 50px;
}
.text-box{
    margin-left: 5px;
}
.text-box .p-1{
    color: #ff6e00;
    margin-bottom :20px;
    margin-top:20px;

}
.text-box h1{
    font-size: 50px;
    line-height: 1.2;
}
h3{
    margin-top: 20px;
}
.ttt{
    color: black;
    margin: 10px;
}
.btnn{
    width: 90px;
    height:13px;
    margin: 2px;
    padding: 15px;

    border: none;
    border-radius: 3px;
    font-weight: bolder;
}
.btnn:hover{
    cursor:pointer;
    background-color: #f3e0d2;
    border: 1px solid #fff;
}
.sec{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.buton{
    width: 200px;
    height: 35px;
   margin-left: 5px;
    border: none;
    outline: none;
    background: #ff6e00;
    border-radius: 5px;
    font-weight: bold;
}
.buton:hover{
    cursor:pointer;
    background-color: #ff6e00;
    border: 1px solid #fff;
}
.mainimg {
    max-width: 350px;
    max-height: 370px;
    border-radius: 10px;
    display: flex;
    justify-items: start;
    left: 20%;
}

.mainimg:hover {
    cursor: pointer;
}

.img-thumbnail {
    margin-top: 70px;
    width: 80px;
    height: auto;
    border-radius: 10px;
    gap: 13px;
}

.img-thumbnail:hover {
    cursor: pointer;
    opacity: .6;
}
.main-img-container {
    position: relative;
    max-width: 235px;
    height: auto;
    margin: 0 auto;
}


}
@media (min-width: 375px){
.header{
    width: 100%;
    height:80vh;
    padding:25px 10%;
    padding-top: 100px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    /*justify-content: space-around;  */ 
}
.sec{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.amou{
    display: flex;
    flex-direction: row;
    justify-content: center;

}
.navc{
    display: flex;
    text-align: center;
    justify-content: space-evenly;

}
.section{
    display:flex;
    align-items: center;
    margin-top:70px;
    margin-left: 50px;
}
.text-box{
    margin-left: 40px;
}
.text-box .p-1{
    color: #ff6e00;
    margin-bottom :20px;
    margin-top:20px;

}
.text-box h1{
    font-size: 50px;
    line-height: 1.2;
}
h3{
    margin-top: 20px;
}
.ttt{
    color: black;
    margin: 10px;
}
.btnn{
    width: 90px;
    height:13px;
    margin: 2px;
    padding: 15px;

    border: none;
    border-radius: 3px;
    font-weight: bolder;
}
.btnn:hover{
    cursor:pointer;
    background-color: #f3e0d2;
    border: 1px solid #fff;
}
.buton{
    width: 200px;
    height: 35px;
   margin-left: 5px;
    border: none;
    outline: none;
    background: #ff6e00;
    border-radius: 5px;
    font-weight: bold;
}
.buton:hover{
    cursor:pointer;
    background-color: #ff6e00;
    border: 1px solid #fff;
}
.mainimg {
    max-width: 220px;
    max-height: 240px;
    border-radius: 10px;
    display: flex;
    justify-items: start;
    left: 2%;
}

.mainimg:hover {
    cursor: pointer;
}

.img-thumbnail {
    margin-top: 70px;
    width: 80px;
    height: auto;
    border-radius: 10px;
    gap: 13px;
}

.img-thumbnail:hover {
    cursor: pointer;
    opacity: .6;
}
.main-img-container {
    position: relative;
    max-width: 235px;
    height: auto;
    margin: 0 auto;
}


}

</style>