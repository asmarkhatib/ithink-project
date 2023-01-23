<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim="name" />
    </div>

    <div class="form-control">
      <label for="email">E-Mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>

    <div class="form-control">
      <label for="phone">Phone</label>
      <input type="number" id="phone" v-model.number="phone" />
    </div>

    <div class="form-control">
      <label for="input1">Input 1</label>
      <input type="text" id="input1" v-model.number="num1" />
    </div>

    <div class="form-control">
      <label for="input2">Input 2</label>
      <input type="text" id="input2" v-model.number="num2" />
    </div>

    <p class="errors" v-if="!isValid">
      Please enter a valid email and message should not be empty.
    </p>

    <div class="actions">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
    data() {
    return {
      name: "",
      email: "",
      phone: null,
      num1: null,
      num2: null,

      isValid: true,
    };
  },
methods: {
   submitForm() {
      if (
        this.name === "" ||
        this.email === "" ||
        !this.email.includes("@") ||
        this.phone === null ||
        this.num1 === null ||
        this.num2 === null
      ) {
        this.isValid = false;
        return;
      }
     let sum = Number(this.num1 + this.num2);

      let data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        sum: sum,
      };

      this.$store.dispatch("userInfo", data);
      
      this.$router.replace('/viewData')

      this.name = "";
      this.email = "";
      this.phone = null;
      this.num1 = null;
      this.num2 = null;
    },
  },
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;

  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}
</style>
