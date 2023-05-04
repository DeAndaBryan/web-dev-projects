<script setup lang="ts">
import { addMessage, useSession } from '@/model/session';
import { deleteWorkout, getWorkouts, type Workout } from '@/model/workout';
import { ref } from 'vue';
import GenModals from '@/components/GeneralModals.vue';
import { closeModal, confirm } from '@/model/generalModals'

const session = useSession();

const workout = ref<Workout[]>([]);

getWorkouts().then((data) => {
    workout.value = data.data
})

function delWorkout(id: string) {
  confirm('Are you sure you want remove this workout?', 'Delete Workout')
    .then(() => {
      console.log('DELETING WORKOUT: ' + id)
      deleteWorkout(id).then((res)=>{
        addMessage(`Deleted workout with id: ${id}`, 'success')
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
    <div class="container" v-if="session.user">
        <h1 class="title">My Activity</h1>
        <div class="columns ">
            <div class="column is-half is-offset-one-quarter media">
                <button v-if="session.user" class="button is-info is-fullwidth" @click="$router.push('/addworkout')">Add New
                    Workout</button>
            </div>
        </div>

        <div class="columns ">
            <div class="column is-half is-offset-one-quarter media">
                <div v-for="workouts in workout.slice().reverse()">
                    <div v-if="workouts.id == session.user._id">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image userPic is-64x64">
                                        <img :src="workouts.userPhoto" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>{{ workouts.userName }}</strong> <small>{{ workouts.date }}</small>
                                            <hr>
                                            <strong>Workout Type</strong>: {{ workouts.name }}
                                            <br>
                                            <strong>Weight</strong>: {{ workouts.weight }} lbs <strong>for</strong>:{{ workouts.sets }} set/s of {{
                                                workouts.reps }} rep/s
                                            <br>
                                            <strong>Location</strong>: {{ workouts.location }}
                                            <br>
                                            {{ workouts.comment }}
                                            <br>
                                        </p>
                                        <figure v-if="workouts.image ? true : false" class="image workoutPic is-256x256">
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
                                <div class="media-right">
                                    <button class="delete" @click="delWorkout(workouts._id)"></button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

.box {
    margin-bottom: 20px;
}

.workoutPic {
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    box-shadow: black 0px 0px 7px;
}

.userPic {
    border-radius: 50%;
}

hr {
    margin-top: 0px;
    margin-bottom: 10px;
}

.box {
    border-radius: 30px;
    box-shadow: black 0px 0px 6px;
    background-color: darkgray;
}
</style>