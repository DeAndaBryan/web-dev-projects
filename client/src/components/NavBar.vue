<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar is-primary">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
            
          </a>
          <div class="navbar-burger" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" >
          <div class="navbar-start">
            <a class="navbar-item">
                <span class="icon">
                    <i class="fas fa-running"></i>
                </span>
                My Activity
            </a>
            <a class="navbar-item">
                <span class="icon">
                    <i class="fas fa-chart-line"></i>
                </span>
                &nbsp Statistics
            </a>
            <a class="navbar-item">
                <span class="icon">
                    <i class="fas fa-user-group"></i>
                </span>
                &nbsp Friends Activity
            </a>
            <a class="navbar-item">
                <span class="icon">
                    <i class="fas fa-magnifying-glass"></i>
                </span>
                &nbsp People Search
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Admin
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="">
                  Users
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign Up</strong>
                    </a>
                    <div class="dropdown is-active">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Log in</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a class="dropdown-item">
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
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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