<template>
  <!-- Default form login -->
  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
    <input type="email"
      id="defaultFormLoginEmailEx"
      v-model="user.usermail"
      class="form-control"
    />
    <br />
    <label for="defaultFormLoginPasswordEx" class="grey-text"
      >Your password</label
    >
    <input
      type="password"
      id="defaultFormLoginPasswordEx"
      v-model="user.password"
      class="form-control"
    />
    <div class="text-center mt-4">
      <button class="btn btn-primary" @click="getLoginData()">Login</button>
    </div>
  </form>
  <!-- Default form login -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        usermail: "",
        password: "",
      },
    };
  },
 


  mounted() {
    if (localStorage.usermail) {
      this.usermail = localStorage.usermail;
    }
    if (localStorage.password) {
      this.password = localStorage.password;
    }
  },
    
  methods: {
    getLoginData() {
      console.log(this.user.usermail);
      let URL = " http://localhost:3000/employees?email=" + this.user.usermail;
      axios
        .get(URL)
        .then((response) => {
          if (response.data.length > 0) {
            if (response.data[0].password == this.user.password) {
              localStorage.usermail = response.data[0].email;
                localStorage.username = response.data[0].name;
              localStorage.password = response.data[0].password;

              this.$router.replace("/employedetails");
            } else {
              alert("password incorrect");
            }
          } else {
            alert("user not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      console.log("now pretend I did more stuff...");
    },
   
  },
};
</script>

<style>
form {
  width: 30%;
  padding: 40px;
  margin: 0;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>