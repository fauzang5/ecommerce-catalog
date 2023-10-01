<template lang="">
    <div>
        <div class="card">
                <img src="../../assets/img/women.png" alt="women" style="width:30%; border-radius:20px; padding: 10px">
            <div>
                <h4><b>Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</b></h4>
                <div class="form">
                  <p>women's clothing</p>
                  <img src="../../assets/img/Group3.png" alt="women" style="max-width:100%">
                </div>
                <hr>
                <p>100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material 
                for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on 
                waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON</p>
                <hr>
                <p style="color:#720060">$29.95</p>
                <div class="button">
                    <button class="btn1">Buy now</button>
                    <button class="btn2">Next Product</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'WomenSection',
  // component:{
  //   WomenSection
  // }
}
</script>
<style lang="css">
* {
  font-family: "Helvetica", sans-serif;
}

h4 {
  color: #720060;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

p {
  color: #1E1E1E;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

body {
  padding: 100px 20px;
  display: flex;
  max-height: 100%;
  line-height: 1.6;
  background: linear-gradient(#FDE2FF,#FFFFFF);
  
}
.form{
  display: flex;
  justify-content: space-between;
}


.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 25px;
}


.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.button{
  display: flex;
  justify-content:space-between;
}

.btn1 {
  background-color: #720060; 
  border: 2px solid #720060; 
  color: white; 
  padding: 10px 24px; 
  cursor: pointer;
  width: 259px;
}

.btn1:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.btn2 {
  background-color: white;
  color: #720060;
  border: 2px solid #720060; 
  padding: 10px 24px; 
  width: 259px;
}

.btn2:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media screen and (max-width: 768px){
  .card{
    align-self: stretch;
  }
}
</style>