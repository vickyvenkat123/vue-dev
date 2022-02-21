<template>
  <div id="header-page">
    <div class="container-fluid">
      <h5>Vue.Js</h5>
      <!-- <h5>Employee  Department</h5> -->
      <div class="column">
        <p>
          <router-link to="/employedetails">Employee</router-link>
          <router-link to="/dept">Department</router-link>

          <!-- <label @click='toggleShow'>User</label> -->
          <!-- <img  class="user-icon" src="../assets/user-icon.jpg" alt="imageNotFound"> -->
          <!-- <li class="drop"><a v-on:click="display_drop_menu()">Menu 2 dropdown 
						<ul class="drop_menu">
							<a>Sub menu 1</a>
							<a>Sub menu 2</a>
							<a>Sub menu 3</a>
						</ul>
					</li> -->

          <b-dropdown id="dropdown-1" :text=name class="user-dropdown">
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item @click="logout()">LogOut</b-dropdown-item>
          </b-dropdown>
          <img
            class="user-icon"
            src="../assets/user-icon.jpg"
            alt="imageNotFound"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:localStorage.getItem("username"),
    }
  },
  components: {},
 methods:{
    logout(){
 this.$router.replace("/login");
  },

 }
};
</script>

<style>
.container-fluid {
  display: flex;
  background-color: rgb(181, 111, 247);
  flex-direction: row;
  column-gap: 40%;
  /* padding: 8px; */
  color: white;
}
a {
  gap: 50px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
}
a:hover {
  color: white;
  cursor: pointer;
}
.user-icon {
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 10px;
}
.user-dropdown button {
  margin-left: 30em;
  margin-top: 10px;
  cursor: pointer;
  border-color: rgb(181, 111, 247) !important;
  background: rgb(181, 111, 247) !important;
}
h5 {
  margin-top: 10px;
}
.button {
  background-color: rgb(181, 111, 247);
}
</style>