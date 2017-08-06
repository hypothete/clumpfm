<template>
  <div id="app">
    <header>
      <span>clump.fm</span>
    </header>
    <main>
      <div v-if="user">
        <div class="menu">
          <router-link to="/chat">Chat</router-link>
        </div>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import firebase from 'firebase';
import * as config from '../firebaseConfig.json';

let app = firebase.initializeApp(config);
let db = app.database();
let msgRef = db.ref('messages');

export default {
  name: 'app',
  data () {
    return {
      user: null
    };
  },
  firebase: {
    messages: msgRef.limitToLast(25)
  },
  methods: {
    signIn () {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    signOut () {
      let vm = this;
      firebase.auth().signOut().then(() => {
        vm.user = null;
      })
      .catch((e) => {
        console.error(e);
      });
    }
  },
  created () {
    let vm = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.user = user;
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
