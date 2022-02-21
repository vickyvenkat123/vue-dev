<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Department</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label>Department:</label>
            <input
              type="text"
              v-model="employe.department"
              class="form-control"
            />
            <br />
            <div class="form-group">
              <input
                type="button"
                class="btn btn-primary"
                @click="addDepartment()"
                value="Add "
                v-if="!$route.params.id"
              /> <input
                type="button"
                class="btn btn-primary"
                @click="updateDepartment()"
                value="update "
                v-if="$route.params.id"
              />
            </div>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "department",
  data() {
    return {
      employe: { designation: "" },
    };
  },
   mounted() {
    console.log(this.$route.params.id);
    if (this.$route.params.id) {
      this.editDept(this.$route.params.id);
    }


  },
  methods: {
    addDepartment(){
     axios
        .post("http://localhost:3000/departmen/", this.employe)
        .then((response) => {
          console.log(response.data, "post");
          this.$router.replace("/dept");
          console.log("department update");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateDepartment() {
      axios
        .put("http://localhost:3000/departmen/"+ this.$route.params.id, this.employe)
        .then((response) => {
          console.log(response.data, "post");
          this.$router.replace("/dept");
          console.log("department update");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editDept(){
         console.log(this.employe);
      let uri = "http://localhost:3000/departmen/" + this.$route.params.id;
      axios
        .get(uri, this.employe)
        .then((response) => {
              
          this.employe= response.data
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  components: {
    name: "AddItem",
  },
};
</script>
<style scoped>
.form-control {
  width: 80% !important;
  color: black;
}
.container {
  width: 30% !important;
  font-size: 16px;
}

.card-header {
  text-align: center;
}
</style>