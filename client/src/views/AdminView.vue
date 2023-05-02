<script setup lang="ts">
import { deleteUser, getUsers, type User } from '@/model/users';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import GenModals from '@/components/GeneralModals.vue';
import { closeModal, confirm } from '@/model/generalModals'
import { addMessage } from '@/model/session'

const users = ref<User[]>([])

getUsers().then((data) => {
  users.value = data.data
})

function delUser(id: string) {
  confirm('Are you sure you want remove this user?', 'Delete User')
    .then(() => {
      console.log('DELETING USER: ' + id)
      deleteUser(id).then((res)=>{
        const index = users.value.findIndex(u => u._id === id)
        users.value.splice(index, 1)
        addMessage(`Deleted user with id: ${id}`, 'success')
      })
      closeModal()
    })
    .catch(() => {
      console.log("didn't do it to: " + id)
    })
}

</script>

<template>
    <gen-modals></gen-modals>
    <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">My Exercise</a></li>
                <li><a href="#">Admin</a></li>
                <li class="is-active"><a href="#" aria-current="page">Users</a></li>
            </ul>
        </nav>
        <button @click="$router.push('/admin/adduser')" class="button add-user is-primary">
            <span class="icon">
                <i class="fas fa-plus"></i>
            </span>
            Add User
        </button>

        <table class="table is-fullwidth is-bordered is-striped is-narrow is-hoverable is-primary">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Is Admin</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>
                        <img :src="user.picture" alt=" />">
                    </td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.password }}</td>
                    <td>{{ user.isAdmin }}</td>
                    <td>
                        <button @click="$router.push('/admin/edituser/'+user._id)" class="button is-primary">
                            <span class="icon">
                                <i class="fas fa-edit"></i>
                            </span>
                        </button>
                        <button @click="delUser(user._id)" class="button is-danger">
                            <span class="icon">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    img {
        width: 50px;
        height: 50px;
    }
    .add-user {
        float: right;
        margin-bottom: 10px;
    }
    
</style>