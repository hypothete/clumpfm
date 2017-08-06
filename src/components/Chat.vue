<template>
  <div class="chat">
    <div v-for="msg in $parent.messages"><b>{{msg.displayName}}</b>: {{msg.data}}</div>
    <input type="text" v-model="newMessage" @keyup.enter="sendMessage" />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      newMessage: ''
    }
  },
  methods: {
    sendMessage () {
      if (this.newMessage.length) {
        this.$parent.$firebaseRefs.messages.push({
          user: this.$parent.user.uid,
          displayName: this.$parent.user.displayName,
          data: this.newMessage
        });
        this.newMessage = '';
      }
    }
  }
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
