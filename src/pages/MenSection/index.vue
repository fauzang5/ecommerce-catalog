<template lang="">
    <div>
        <div class="card">
                <img src="../../assets/img/men.png" alt="men" style="width:30%; border-radius:20px; padding: 10px">
            <div>
                <h4><b>Mens Casual Slim Fit</b></h4>
                <div class="form">
                  <p>men's clothing</p>
                  <img src="../../assets/img/Group3.png" alt="women" style="max-width:100%">
                </div>
                <hr>
                <p>great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, 
                    hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice 
                    for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or 
                    Christmas Day.</p>
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
  name: 'MenSection',
  
}
</script>
<style lang="css">
* {
  font-family: "Helvetica", sans-serif;
}

h4 {
  color: #002772;
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
  background: linear-gradient(#D6E6FF,#FFFFFF);
  
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
  background-color: #002772; 
  border: 2px solid #002772; 
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
  color: #002772;
  border: 2px solid #002772; 
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