<script setup lang="ts">
import { getUsers } from '@/model/users';
import { ref } from 'vue';

const users = ref(getUsers());

</script>

<template>
    <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">My Exercise</a></li>
                <li><a href="#">Admin</a></li>
                <li class="is-active"><a href="#" aria-current="page">Users</a></li>
            </ul>
        </nav>
        <button class="button is-primary">
            <span class="icon">
                <i class="fas fa-plus"></i>
            </span>
            Add User
        </button>

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Is Admin</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>
                        <img :src="user.photo" alt=" />">
                    </td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.admin }}</td>
                    <td>
                        <button class="button is-primary">
                            <span class="icon">
                                <i class="fas fa-edit"></i>
                            </span>
                        </button>
                        <button class="button is-danger">
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
</style>