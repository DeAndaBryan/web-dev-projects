<script setup lang="ts">
  import { useSession } from '@/model/session';
import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import LoginBadge from './LoginBadge.vue'

  const session = useSession(); 
  const isDropdownActive = ref(false);
  const isMenuActive = ref(false);

  function toggleMenu() {
    isMenuActive.value = !isMenuActive.value;
    }

</script>

<template>
    <nav class="navbar is-black">
        <div class="container">
        <div class="navbar-brand">
          <RouterLink to="/" class="navbar-item" href="">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
            
          </RouterLink>
          <div class="navbar-burger" :class="{'is-active': isMenuActive}" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{'is-active': isMenuActive}">
          <div class="navbar-start">
            <RouterLink class="navbar-item" to="/myActivity">
                <span class="icon">
                    <i class="fas fa-running"></i>
                </span>
                My Activity
            </RouterLink>
            <RouterLink to="/Statistics" class="navbar-item">
                <span class="icon">
                    <i class="fas fa-chart-line"></i>
                </span>
                &nbsp Statistics
            </RouterLink>
            <RouterLink class="navbar-item" to="/friends">
                <span class="icon">
                    <i class="fas fa-user-group"></i>
                </span>
                &nbsp Friends Activity
            </RouterLink>
            <RouterLink class="navbar-item" to="/PRZone">
                <span class="icon">
                    <i class="fas fa-weight"></i>
                </span>
                &nbsp PR Zone
            </RouterLink>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Admin
              </a>
              <div class="navbar-dropdown">
                <RouterLink class="navbar-item" to="/admin" v-if="session.user?.isAdmin == true">
                  Users
                </RouterLink>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <LoginBadge />
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                
              </div>
            </div>
          </div>
        </div>
    </div>
    </nav>
</template>



<style scoped>

</style>