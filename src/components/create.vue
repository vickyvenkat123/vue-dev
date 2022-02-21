<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employe</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label>Employe Name:</label>
            <input type="text" v-model="employe.name" class="form-control" />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" v-model="employe.email" class="form-control" />
            <div class="form-group">
              <label for="adr"> Password:</label>
              <input
                type="password"
                id="adr"
                class="form-control"
                name="password"
                placeholder="Password"
                v-model="employe.password"
              />
            </div>
          </div>
          <div class="form-group">
            <label>Contact:</label>
            <input
              type="number"
              v-model="employe.contact"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label class="dep"> Gender</label>
            <select class="form-control" id="dept" v-model="employe.gender">
              <option class="dep"></option>
              <option class="dep">Male</option>
              <option class="dep">Female</option>
            </select>
          </div>
          <!-- <label for=""></label>
          Gender:<input type="radio" v-model="employe.male" id="Male" value="HTML" />  
          <label id="html">Male</label>
          <input type="radio" v-model="employe.female" id="female" value="CSS" />
            <label for="css">Female</label><br /> -->
          <div class="form-group">
            <label for="adr"> Address:</label>
            <input
              type="text"
              id="adr"
              v-model="employe.address"
              class="form-control"
              name="address"
            />
          </div>
          <div class="form-group">
            <label class="dep"> Designation</label>
            <select class="form-control" id="dept" v-model="employe.department">
              <option class="dep"></option>
              <!-- <option class="dep">React</option>
              <option class="dep">Angular</option>
              <option class="dep">Vue</option>
              <option class="dep">Node</option>
              <option class="dep">Sales</option>
              <option class="dep">account</option>
              <option class="dep">Executive</option>
              <option class="dep">HR</option>
              <option class="dep">Manager</option> -->
            </select>
          </div>
          <div class="form-group">
            <label class="des"> Department:</label>
            <select
              class="form-control"
              id="desig"
              v-model="employe.designation"
            >
              <option class="des" v-for="dept in deptList" :key="dept.id">
                {{ dept.department }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <input
              type="button"
              class="btn btn-primary"
              @click="addNewEmployee"
              value="submit "
               v-if="!$route.params.id"
            />
            <input
              type="button"
              class="btn btn-primary"
              @click="updateEmployee"
              v-if="$route.params.id"
              value="Save "
            />
          </div>
        </form>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      deptList: [],
      id: "",
      employe: {
        name: "",
        email: "",
        password: "",
        contact: "",
        gender: "",
        address: "",
        department: "",
        designation: "",
      },
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    if (this.$route.params.id) {
      this.fetchItems(this.$route.params.id);
    }
    this.fetchdept();
  },
  methods: {
    fetchItems(id) {
      let uri = "http://localhost:3000/employees/" + id;
      axios.get(uri).then((response) => {
        this.employe = response.data;
        console.log(response.data);
      });
    },
    fetchdept() {
      let uri = "http://localhost:3000/departmen";
      axios.get(uri).then((response) => {
        this.deptList = response.data;
        console.log(response.data);
      });
    },

    addNewEmployee() {
      console.log(this.employe);
      axios
        .post("http://localhost:3000/employees", this.employe)
        .then((response) => {
          console.log(response.data, "post");
          this.$router.replace("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateEmployee() {
      console.log(this.employe);
      let uri = "http://localhost:3000/employees/" + this.$route.params.id;
      axios
        .put(uri, this.employe)
        .then((response) => {
          this.$router.push("/home");
          alert("Are you to update");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    name: "AddItem",
  },
};
</script>
<style scoped>
.form-control {
  width: 80% !important;
}
.container {
  width: 30% !important;
  font-size: 16px;
}
#Male {
  font-size: 14px;
  margin: 7px;
}
.card-header {
  text-align: center;
}
.dep,
.des {
  width: 40%;
}
.btn {
  float: center;
}
</style>