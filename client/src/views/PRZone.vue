<script setup lang="ts">
import { useSession } from '@/model/session';
import { getUser } from '@/model/users';
import { getWorkouts, type Workout } from '@/model/workout';
import { ref } from 'vue';


const session = useSession();
const isModalActive = ref(false);
const workout = ref<Workout[]>([]);
const workoutType = 'PR'

function toggleModal() { isModalActive.value = !isModalActive.value }
getWorkouts().then((data) => {
    workout.value = data.data
});

</script>

<template>
    <div class="container" v-if="session.user">
        <h1 class="title">PR Zone</h1>
        <div class="columns ">
            <div class="column is-half is-offset-one-quarter media">
                <button v-if="session.user" class="button is-info is-fullwidth" @click="toggleModal">Add New PR</button>
                <br>
                <div v-for="workouts in workout">
                    <div v-if="workouts.type = workoutType">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img src="{{getUser(workouts.id).then((data) => {
                                        return data.data.picture
                                    })}}" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>{{ workouts.name }}</strong> <small>{{ workouts.date }}</small>
                                            <br>
                                            Activity: {{ workouts.weight }} for: {{ workouts.reps }} Hr/s
                                            <br>
                                            Location: {{ workouts.location }}
                                            <br>
                                            {{ workouts.description }}?
                                            <br>


                                        </p>
                                        <figure class="image is-256x256">
                                            <img :src="workouts.image" alt="Image">
                                        </figure>
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
    </div>
</template>

<style scoped></style>