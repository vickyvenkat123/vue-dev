<template>
  <div>
      <p>Employe Designation List</p>
       <router-link to="/updatedesi" @click="updateItem()" class="btn btn-primary">
           Add Designation
       </router-link> 
       
  
       <router-view></router-view>
      <div>
          <table class="table table-hover">
      <thead>
        <tr>
                 <td>ID</td>
          <td>Designation</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item._id">
            <td>{{ item.id}}</td>
          <td>{{ item.designation}}</td>
          <td>
              <button @click="updateItem(item.id)" class="btn btn-primary">
                Edit
              </button>
            </td>
            <td>
              <button class="btn btn-danger" v-on:click="deleteItem(item.id)">
                Delete
              </button>
            </td>
        </tr>
      </tbody>
    </table>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import updatedesi from './updatedesi.vue';
export default {
  components: { updatedesi },
data(){
    return{
        items:{
            designation:'',
        }
    }
},
created() {
    this.fetchItems();
  },
methods:{
    fetchItems() {
      let uri = "  http://localhost:3000/departmen";
      axios.get(uri).then((response) => {
        this.items = response.data;
        console.log(response.data);
         
      });
    },
}
}
</script>

<style>
.btn{
    float: right;
}
.table{
  width: 40%;
  text-align: center;
}

</style>

