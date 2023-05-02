<script setup lang="ts">
import { addMessage, useSession } from '@/model/session';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { type User, getUser, updateUser, createUser } from '@/model/users';
import router from '@/router';
import AdminView from './AdminView.vue';

const session = useSession();
const route = useRoute();
const user = ref<User>({} as User)
let error = ref(false);

if (route.params.id !== undefined && route.params.id !== '') {
  getUser(route.params.id as string).then((data) => {
    user.value = data ? data.data : {} as User
    console.log("got this as product for admin", user.value)
  })
}

function save() {
  if (user.value._id) {
    updateUser(user.value).then((response) => {
      addMessage('User updated', 'success')
    })
  } else {
    createUser(user.value).then((data) => {
      addMessage('User created', 'success')
    })
  }
  router.push('/admin')
}

function cancel() {
  addMessage("Canceled User", 'info')
  router.push(AdminView)
}

</script>
<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box has-background-grey-darker">
          <form @submit.prevent class="add-user">
            <h1 class="title has-text-light" v-if="!user._id">Add New User</h1>
            <h1 class="title has-text-light" v-if="user._id">Edit User</h1>

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

            <p class="admin-status has-text-light">Admin Status</p>

            <div class="control has-text-light">
              <label class="radio has-text-light">
                <input type="radio" name="answer" value="true" v-model="user.isAdmin" />
                true
              </label>
              <label class="radio has-text-light">
                <input type="radio" name="answer" value="false" v-model="user.isAdmin" checked />
                false
              </label>
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
          <p class="help is-danger" v-if="error">User already exists</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.field {
  margin-bottom: 1.5rem;
}
.button {
  margin-top: 2rem;
}
.container {
  margin-top: 2rem;
}
</style>