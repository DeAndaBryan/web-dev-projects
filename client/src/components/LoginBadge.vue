<script setup lang="ts">
    import { ref } from 'vue';
    import { useSession, useLogin, useLogout } from '@/model/session';
    import { getUsers, type User } from '@/model/users'

    const session = useSession();
    const logout = useLogout();
    const isDropdownActive = ref(false);
    const users = ref(getUsers());

    function logout2(){
        logout();
    }
</script>

<template>
    <div class="navbar-item" v-if="session.user">
        <img :src="session.user.picture">
        &nbsp {{ session.user.username }}
    </div>
    <div class="navbar-item" v-if="session.user">
        <div class="buttons">
            <a class="button" @click="logout2()">
                <strong>Logout</strong>
            </a>
        </div>
    </div>
    <div class="navbar-item" v-else>
                <div class="buttons">
                    <a class="button is-primary" @click="$router.push('/signup')">
                        <strong>Sign Up</strong>
                    </a>
                    <a class="button is-light" @click="$router.push('/login')">
                        Log in
                    </a>
                </div>
            </div>
</template>



<style scoped>
img{
    width: 30px;
    height: 40px;
    border-radius: 50%;
}
</style>