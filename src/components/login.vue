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
    <div class="login-footer">
      <!-- <p><span>Forget Password</span></p> -->
 <button type="button" class="forget" @click="forgetPassword()">Forget Password</button>
    </div><br><br>
    <div class="footer-singUp">
    <!-- <span> Not a Member?<a href="./create">SignUp</a></span> -->
    <p>Not a member?<button type="button" class="Signup" @click="signup()">SignUp</button></p>
    
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
  created: function () {
    document.body.style.backgroundColor = "blue";
  },
  destroyed: function () {
    document.body.style.backgroundColor = null;
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
    },
    signup(){
this.$router.push("/create")
    },
    forgetPassword(){
      this.$router.push("/forgetpassword")
    }
  },
};
</script>

<style>

form {
  width: 30%;
  padding: 40px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
}
.login-footer{
  float: right;
  font-weight: 500;
  font-size: 1rem;
}
.footer-singUp{
   font-weight: 500;
    font-size: 1rem;
    text-align: center;
}
.forget,.Signup{
  background-color: white;
  border:2px solid white ;
  color: blue !important;
}
p{
font-weight: 450;
}
</style>