<script setup lang="ts">
import { addMessage } from '@/model/session';
import { createUser, type User } from '@/model/users';
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let error = ref(false);
const user = ref<User>({} as User)
const route = useRoute();

function save(){
    createUser(user.value).then((data) => {
      if(data === true){
        addMessage('User created', 'success')
        alert("User created")
        router.push('/login')
      } else {
        addMessage('User already exists', 'danger')
        error.value = true;
      }
    })
}

function cancel(){
    addMessage("Canceled User", 'info')
    route.redirectedFrom ? router.push(route.redirectedFrom) : router.push('/login')
}

</script>

<template>
    <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box has-background-grey-darker">
            <h1 class="title sign-up has-text-light"><center>Sign Up</center></h1>
          <form @submit.prevent class="add-user">

            <div class="field">
              <label class="label has-text-light">Picture</label>
              <div class="control">
                <input class="input" type="text" placeholder="Picture URL" v-model="user.picture" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-light">First Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="First Name" v-model="user.firstName" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-light">Last Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Last Name" v-model="user.lastName" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-light">Username</label>
              <div class="control">
                <input class="input" type="text" placeholder="Username" v-model="user.username" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-light">Email</label>
              <div class="control">
                <input class="input" type="text" placeholder="Email" v-model="user.email" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-light">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="user.password" />
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button type="submit" @click="save()" class="button is-link is-primary">Submit</button>
              </div>
              <div class="control">
                <button @click="cancel()" class="button is-link is-danger">Cancel</button>
              </div>
            </div>
          </form>
          <p class="help is-danger" v-if="error">User already exists / Invalid Credentials</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.sign-up {
    margin-bottom: 1rem;
}
.container {
  margin-top: 2rem;
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