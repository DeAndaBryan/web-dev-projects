<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/model/users';
import { api, useSession, useLogin } from '@/model/session';


const session = useSession();
const user = ref<User>({} as User)
const username = ref('');
const password = ref('');
let error = ref(false);
const login = useLogin();

async function loginUser() {
  const response = await api(
    'users/login',
    {
      username: username.value,
      password: password.value
    },
    'POST'
  ).then((response) => {
    if (response != undefined) {
      session.redirectUrl = '/home'
      login(response.data)
      error.value = false
    } else {
      error.value = true
    }
  })
}


</script>

<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box has-background-grey-darker">
          <h1 class="title has-text-light"><center>Login</center></h1>
          <form @submit.prevent="loginUser()">
            <div class="field">
              <label class="label has-text-light">Username</label>
              <div class="control">
                <input v-model="username" class="input has-background-dark has-text-light" type="text"
                  placeholder="Username" />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-light">Password</label>
              <div class="control">
                <input v-model="password" class="input has-background-dark has-text-light" type="password"
                  placeholder="Password" />
                <p class="help is-danger" v-if="error">Invalid username or password</p>
              </div>
            </div>
            <div class="field">
              <button type="submit" class="button is-light is-outlined">Login</button>
            </div>
          </form>
          <p>New User?</p>
          <div class="buttons">
            <router-link to="/signup" class="button is-light is-outlined">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  margin-top: 2rem;
}
p{
  margin-top: 2rem;
  margin-bottom: .5rem;
  color: white;
}
.help {
  text-shadow: 1px 1px 2px, 0 0 1em darkred;
  margin-top: 2rem;
  text-align: center;
  font-size: 18px;
  animation: fade 1.5s infinite;
  -webkit-animation: fade 1.5s infinite;
}

@keyframes fade {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fade {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}
</style>