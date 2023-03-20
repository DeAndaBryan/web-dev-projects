<script setup lang="ts">
import { useSession } from '@/model/session';
import { ref } from 'vue';
import { getWorkout } from '@/model/workout';
import type { Workout } from '@/model/workout';

defineProps<{ workouts: Workout }>();

const workout = getWorkout();
const session = useSession();
</script>

<template>
    <div class="container" v-if="session.user">
        <h1 class="title">My Activity</h1>
        <div class="columns">
            <div class="column is-half is-offsset-one-quarter media">
                <button class="button is-primary is-fullwidth">Add Activity</button>
                <form>

                </form>
                <br>
                <div v-for="workouts in workout">
                <div class="box" v-if="session.user.id == workouts.id">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img :src="workouts.image" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ workouts.fullname }}</strong> <small>@johnsmith</small> <small>{{workouts.date}}</small>
                                    <br>
                                    {{ workouts.description }}
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item" aria-label="reply">
                                        <span class="icon is-small">
                                            <i class="fas fa-reply" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="retweet">
                                        <span class="icon is-small">
                                            <i class="fas fa-retweet" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="like">
                                        <span class="icon is-small">
                                            <i class="fas fa-heart" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .columns{
        display: flex;
    }
</style>