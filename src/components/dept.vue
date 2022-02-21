<template>
  <div>
    <div class="container">
      <p class="table-title">Department List</p>

      <router-link to="/addDepartment" id="departmenr">Add  </router-link>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Department</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.id }}</td>
          <td>{{ item.department }}</td>

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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [
        {
          department: "",
        },
      ],
    };
  },

  created() {
    this.fetchItems();

  },

  methods: {
    fetchItems() {
      let uri = "http://localhost:3000/departmen";
      axios.get(uri).then((response) => {
        this.items = response.data;
        console.log(response.data);
      });
    },
     deleteItem(id) {
      let uri = "http://localhost:3000/departmen/";
      axios.delete(uri + id).then((response) => {
        console.log("delete item");
        alert("Are you sure you want to delete this item?");
        this.fetchItems();

      });
    },
     updateItem(id) {
      this.$router.replace("/addDepartment/" + id);
    },
  },
};
</script>

<style scoped>
.table-hover{
  width: 60% ;
  margin-left: 20%;
  text-align: center;
}
#departmenr {
  text-decoration: none;
  color: blue !important;
}
.table-title {
  display: flex;
  margin-left: 25% !important;

}
.container {
  display: flex;
  flex-direction: row;
  column-gap: 50% !important;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  margin-left: 15px;
  margin-top: 40px;
}
</style>