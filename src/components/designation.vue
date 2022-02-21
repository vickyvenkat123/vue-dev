<template>
  <!-- <div class="container"> -->
  <div class="card">
    <div class="card-header">
      <h3>Designation</h3>
    </div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label class="des"> Designation:</label>
          <select class="form-control" id="desig" v-model="designation">
            <option class="dep"></option>
            <option class="dep">React</option>
            <option class="dep">Angular</option>
            <option class="dep">Vue</option>
            <option class="dep">Node</option>
            <option class="dep">sales</option>
            <option class="dep">Manager</option>
          </select>
        </div>
        <br />
        <div class="form-group">
          <input
            type="button"
            class="btn btn-primary"
            @click="addDesignation(designation)"
            value="Add "
          />
        </div>
      </form>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  name: "designation",
  data() {
    return {
      designation: "",
    };
  },
  methods: {
    addDesignation(designation) {
      console.log(designation);
      this.$emit("filter", designation);
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