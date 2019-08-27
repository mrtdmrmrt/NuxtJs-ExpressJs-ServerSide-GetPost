<template>
  <div class="container">
    <div class="row">
      <input type="text" v-model="title">

      <button @click="sendData" class="button--green">Verileri Göster</button>
    </div>
    <div class="row">
      <h3>{{response}}</h3>
    </div>
    
    <!--
    <div v-for="product in loadedData">
      <p>{{product.title}}</p>
    </div>
    -->

    <!--
    <button @click="getData" class="button--green">Verileri Getir</button>
    -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      //loadedData: null,
      response : null,
      title : null
    };
  },
  methods: {
    sendData(){
      axios.post("http://localhost:3000/api/save",{title : this.title})
      .then(response=>{
        console.log(response.data)
        this.response = response.data.title
      })
    }
    /*
    getData() {
      axios.get("http://localhost:3000/api/get-all-data")

        //res in denk geldiği kısım
        .then(response => {
          this.loadedData = response.data.products;
          console.log(this.loadedData);
        });
    }
    */
  }
};
</script>

<style>
</style>
