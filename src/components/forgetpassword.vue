<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Designation</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label>Enter email</label>
            <input
              type="text"
              v-model="employe.email"
              class="form-control" placeholder="abc@gmail.com"
            />
            <br />
            <div class="form-group">
              <input
                type="button"
                class="btn btn-primary"
                @click="updatePassword()"
                value="send "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        employe:{
            email:""
        }
    }
},
methods:{
    updatePassword(){
         axios
        .post("http://localhost:3000/employees", this.employe)
        .then((response) => {
          console.log(response.data,"post");
           this.$router.replace('/employedetails');
              console.log("password update");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    }
}

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
.btn {
  float: center;
}
</style>