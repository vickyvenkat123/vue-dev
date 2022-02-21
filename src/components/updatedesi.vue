<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Designation</h3>
      </div>
      <div class="card-body">
        <form>
          
          <div class="form-group">
    
                 <label>Designation:</label>
            <input type="text" v-model="employe.designation" class="form-control" />
          <br />
          <div class="form-group">
            <input type="button" class="btn btn-primary" @click="updateDesignation()" value="Add " />
        
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
  name:"designation",
    data() {
    return {
   employe:{ designation:'',
    }
    }
  },
  methods: {
  
   updateDesignation() {

      axios
        .post("http://localhost:3000/employees", this.employe)
        .then((response) => {
          console.log(response.data,"post");
      this.$router.replace('/desi');
              console.log("designation updatedesi");
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
<style>
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
.btn {
  float: center;
}
</style>