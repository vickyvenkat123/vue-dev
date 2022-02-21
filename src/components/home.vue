<template>
  <div class="home-page">
    <div class="employesdata">
      <div class="employe-taitle-header"></div>
      <div class="employe-table">
        <div class="employe-table-header">
         
            <!-- <router-link to="/employedetails" id="add">Employee List</router-link> -->
             <!-- <router-link to="/desi" id="add">Designation </router-link>
              <router-link to="/dept" id="add">Department </router-link> -->
            <!-- <b-button @click="modalShow = !modalShow"> Department</b-button>
            <b-modal v-model="modalShow">
              <department @filter="filterItems"></department>
            </b-modal> -->

          <!-- <div>
            <b-button @click="designationModalShow = !designationModalShow">
              Designation</b-button
            >
            <b-modal v-model="designationModalShow">
              <designation @filter="designationFilter"></designation>
            </b-modal>
          </div> -->
        </div>
      </div>
    </div>
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
            <td>{{ item.department }}</td>
            <td>{{ item.designation }}</td>
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

    <router-view />
  </div>
</template>

<script>
import axios from "axios";

import designation from "./designation.vue";
export default {
  components: {  designation },

  data() {
    return {
      DepartmentodalShow: false,
      DesignationodalShow: false,
      items: [
        {
          name: "",
          email: "",
          password: "",
          contact: "",
          gender: "",
          address: "",
          department: "",
          designation: "",
        },
      ],

      search: "",
      modalShow: false,
      designationModalShow: false,
    };
  },

  created() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      let uri = "http://localhost:3000/employees";
      axios.get(uri).then((response) => {
        this.items = response.data;
        console.log(response.data);
      });
    },
    filterItems(value) {
      this.modalShow = false;
      let filteredData = this.items.filter((e) => e.designation == value);
      console.log(filteredData);
      this.items = filteredData;
    },
    designationFilter(value) {
      this.designationModalShow = false;
      let designationFilteredData = this.items.filter(
        (e) => e.department == value
      );
      console.log(designationFilteredData);
      this.items = designationFilteredData;
    },
    deleteItem(id) {
      let uri = "http://localhost:3000/employees/";
      axios.delete(uri + id).then((response) => {
        console.log(response);
        alert("Are you sure you want to delete this item?");
        this.fetchItems();
      });
    },
    updateItem(id) {
      this.$router.replace("/create/" + id);
    },
  },

  computed: {
    item() {
      if (this.search) {
        return this.items.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.search;
      }
    },
  },
};
</script>

<style scoped>
.employe-table-header {
  position: absolute;
  margin-top: 20px;

  font-family: sans-serif;
  font-size: 20px;
  display: flex;
  gap: 30px;
}

#department,
#designation {
  padding: 5px;
  width: 100%;
  text-decoration: none;
  border-radius: 5px;
  background-color: white;
}
.table {
  margin-top: 10px;
  width: 90% !important;
  margin-left: 50px;
}
.search-bar {
  border-radius: 10px;
  border-color: blue;
}
#add {
  text-decoration: none;
  color: blue !important;
}
p {
    display: flex;
    margin-left: 35px;
}
.container{
  display: flex;
    /* background-color: rgb(181, 111, 247); */
  flex-direction: row;
  column-gap: 90%;
  padding: 10px;
font-weight: 600;
font-size: 
20px;
    margin-left: 15px;
    margin-top: 40px;
}
</style>