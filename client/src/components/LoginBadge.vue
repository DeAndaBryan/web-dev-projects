<script setup lang="ts">
    import { ref } from 'vue';
    import { useSession, login, useLogout } from '@/model/session';
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
        Welcome, {{ session.user.name }}
    </div>
    <div class="navbar-item" v-if="session.user">
        <div class="button">
            <a class="buttons" @click="logout2()">
                <strong>Logout</strong>
            </a>
        </div>
    </div>
    <div class="navbar-item" v-else>
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign Up</strong>
                    </a>
                    <div class="dropdown" :class="{'is-active': isDropdownActive}" >
                        <div class="dropdown-trigger">
                            <button class="button" :class="{'is-active': isDropdownActive}" @click="$event => isDropdownActive = !isDropdownActive" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Log in</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content" v-for="user in users">
                                <div class="dropdown-item">
                                    <a class="buttons" @click="login(user)">
                                        {{ user.name }}
                                    </a>
                                </div>
                                <!--<a class="dropdown-item" @click="login()">
                                    Moshe
                                </a>
                                <a class="dropdown-item">
                                    Kamala Harris
                                </a>
                                <a class="dropdown-item">
                                    John Smith
                                </a>
                                <hr class="dropdown-divider">
                                <a class="dropdown-item">
                                    Other Account
                                </a>-->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>



<style scoped>

</style>