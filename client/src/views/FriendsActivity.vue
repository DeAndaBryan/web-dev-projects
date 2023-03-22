<script setup lang="ts">
import { useSession } from '@/model/session';
import { ref } from 'vue';
import { getWorkout } from '@/model/workout';
import type { Workout } from '@/model/workout';
import { getUserId } from '@/model/users';
import { addWorkout } from '@/model/workout';

defineProps<{ workouts: Workout }>();

const workout = getWorkout();
const session = useSession();
const isModalActive = ref(false);
const newWorkout: Workout = ({} as any) as Workout;
const date = new Date();

function toggleModal() {isModalActive.value = !isModalActive.value}
</script>

<template>
    <div class="container" v-if="session.user">
        <h1 class="title">Friends Activity</h1>
        <div class="columns " >
            <div class="column is-half is-offset-one-quarter media">
                <button  v-if="session.user" class="button is-info is-fullwidth"  @click="toggleModal">Add Workout</button>
                <br>
                <form @submit.prevent="addWorkout(newWorkout, date)" class="modal " :class="{ 'is-active': isModalActive }" >
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head"> 
                            Workout
                        </header>
                        <section class="modal-card-body">
                            <div class="field">
                                <label class="label">Date</label>
                                <div class="control">
                                    <input v-model="newWorkout.date" class="input" type="Date" placeholder="Date" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Distance</label>
                                <div class="control">
                                    <input v-model="newWorkout.distance" class="input" type="text" placeholder="Distance" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Duration</label>
                                <div class="control">
                                    <input v-model="newWorkout.duration" class="input" type="text" placeholder="Duration" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Location</label>
                                <div class="control">
                                    <input v-model="newWorkout.location" class="input" type="text" placeholder="Location" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Image</label>
                                <div class="control">
                                    <input v-model="newWorkout.image" class="input" type="text" placeholder="Image" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Description</label>
                                <div class="control">
                                    <input v-model="newWorkout.description" class="input" type="text" placeholder="Description" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">type</label>
                                <div class="select is-full-width">
                                    <select v-model="newWorkout.name" >
                                        <option value="Running">Walking</option>
                                        <option value="Running">Running</option>
                                        <option value="Biking">Biking</option>
                                        <option value="Swimming">Swimming</option>
                                    </select>
                                </div>
                            </div>
                                
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success" type="submit" @click="toggleModal" >Submit</button>
                            <RouterLink to="/MyActivity" class="button"  @click="toggleModal">Cancel</RouterLink>
                        </footer>
                    </div>
                </form>
                <br>
                <div v-for="workouts in workout">
                <div class="box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img :src="getUserId(workouts.id)?.photo" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ workouts.fullname }}</strong> <small>{{ getUserId(workouts.id)?.handle }}</small> <small>{{workouts.date}}</small>
                                    <br>
                                    Activity: {{ workouts.name }} for: {{ workouts.duration }} Hr/s
                                    <br>
                                    Location: {{ workouts.location }} -> {{ workouts.distance }} Mi
                                    <br>
                                    {{ workouts.description }}
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
    <h1 v-else>
        Please login to view this page
    </h1>
</template>

<style scoped>
    .container {
        margin-top: 2rem;
    }
    .title {
        text-align: center;
    }
    .modal {
        display: none;
    }
    .modal.is-active {
        display: block;
    }
    .media-left img{
        border-radius: 50%;
    }
    .content img{
        border-radius: 10px;
        box-shadow: black 0px 0px 7px;
    }
</style>