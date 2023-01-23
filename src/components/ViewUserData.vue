<template>
  <table class="card">
    <thead>
      <tr>
        <th>Sr. No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Sum</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in users" :key="index">
        <td>{{ (index += 1) }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.sum }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.showUser;
    },
  },
};
</script>

<style scoped>
table,
tr,
th,
td {
  margin: 1rem auto;
  border: 1px solid #333;
  font-family: "Courier New", Courier, monospace;
  border-collapse: collapse;
  border-radius: 5px;
  padding: 0.5rem;
}
</style>
