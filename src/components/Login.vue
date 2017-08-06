<template>
  <div class="login">
    <div>
      <button @click="$parent.signIn" v-if="!$parent.user">sign in</button>
      <button @click="$parent.signOut" v-if="$parent.user">sign out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
