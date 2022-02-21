<template>
  <div>
  <div class="container">
      <p>Employees</p>

          <router-link to="/create" id="add">Add </router-link>
      </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Contact</td>
          <td>Gender</td>
          <td>Address</td>
          <td>Designation</td>
          <td>Department</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.password }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.address }}</td>
              <td>{{ item.designation }}</td>
            <td>{{ getDept(item.department) }}</td>

          <td>
            <button @click="updateItem(item.id)" class="btn btn-primary">
              Edit
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteItem(item.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {

      items: [
        {
          name: "",
          email: "",
          password: "",
          contact: "",
          gender: "",
          address: "",
          designation:"",
          department:""
        },
      ],
      deptList:[]
    };
  },

  mounted() {
    this.fetchItems()
    this.fetchdept()
  },

  methods: {
    fetchItems() {
      let uri = "http://localhost:3000/employees";
      axios.get(uri).then((response) => {
        this.items = response.data;
        console.log(response.data);
      });
    },
     fetchdept() {
      let uri = "http://localhost:3000/departmen";
      axios.get(uri).then((response) => {
        this.deptList = response.data;
        console.log(response.data,'dpt');
      });
    },
   updateItem(id) {
      this.$router.replace("/create/" + id);
    },
    getDept(id){
      if(this.deptList.length>0){
let dept = this.deptList.find(e=>e.id==id);

      }

},
      
      deleteItem(id) {
      let uri = "http://localhost:3000/employees/";
      axios.delete(uri + id).then((response) => {
        console.log("delete item");
        alert("Are you sure you want to delete this item?");
        this.fetchItems();

      });
    },
  }
};
</script>

<style scoped>
.table {
  margin-top: 10px;
  width: 90%;
  margin-left: 50px;
}
#add {
  text-decoration: none;
  color: blue !important;
}
p {

    margin-left: 35px !important;
}
.container{
  display: flex;
    /* background-color: rgb(181, 111, 247); */
 
  column-gap: 90%;
  padding: 10px;
font-weight: 600;
font-size: 
20px;
    margin-left: 15px;
    margin-top: 40px;
}
</style>