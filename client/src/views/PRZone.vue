<script setup lang="ts">
import { useSession } from '@/model/session';
import { getUser } from '@/model/users';
import { getWorkouts, type Workout, createWorkout } from '@/model/workout';
import router from '@/router';
import { ref } from 'vue';


const session = useSession();
const isModalActive = ref(false);
const workout = ref<Workout[]>([]);
const workoutType = 'PR'
const user = session.user
const weight = ref(0)
const reps = ref(0)
const location = ref('')
const photo = ref('')
const comments = ref('')
const name = ref('')

function addWokrout(name: string, weight: number, reps: number, location: string, photo: string, comments: string){
    createWorkout({
    id: user?._id,
    weight: weight,
    reps: reps,
    location: location,
    image: photo,
    comment: comments,
    name: name,
    type: workoutType,
    userPhoto: user?.picture,
    userName: user?.username,
    date: ''
})
    toggleModal()
    router.push('/PRZone')
}

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
                <form @submit.prevent="addWokrout(name, weight, reps, location, photo, comments)" class="modal" :class="{'is-active' : isModalActive}">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <header class="modal-card-head"> 
                            Log new PR
                        </header>
                        <section class="modal-card-body">
                            <div class="field">
                                <label class="label">Username</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Date" :value=session.user.username disabled >
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">
                                    User Photo
                                </label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Photo" :value=session.user.picture disabled >
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">
                                    Type
                                </label>
                                <div class="select is-full-width">
                                    <select>
                                        <option value="PR" selected >PR</option>
                                        <option value="Workout" selected disabled>Workout</option>
                                    </select>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">
                                    Workout Type
                                </label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Bench?" v-model="name">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">
                                    Weight
                                </label>
                                <div class="control">
                                    <input class="input" type="number" placeholder="Weight" v-model="weight">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">
                                    Reps
                                </label>
                                <div class="control">
                                    <input class="input" type="number" placeholder="Reps" v-model="reps">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">
                                    Location
                                </label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Location" v-model="location">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">
                                    Phto?
                                </label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Workout Photo" v-model="photo">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">
                                    Comments
                                </label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Comment" v-model="comments"></textarea>
                                </div>
                            </div>
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success" type="submit">Save changes</button>
                            <button class="button" @click="toggleModal()">Cancel</button>
                        </footer>
                    </div>
                </form>
            </div>
        </div>
        <br>
        <div v-for="workouts in workout">
            <div v-if="workouts.type = workoutType">
                <div class="box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img :src="workouts.userPhoto" alt="Image">
                            </figure>>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ workouts.userName }}</strong> <small>{{ workouts.date }}</small>
                                    <br>
                                    Weight: {{ workouts.weight }} for: {{ workouts.reps }}
                                    <br>
                                    Location: {{ workouts.location }}
                                    <br>
                                    {{ workouts.comment }}
                                    <br>
                                </p>
                                <figure v-if="workouts.image?.length > 1 && workouts.image !== undefined" class="image is-256x256">
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
</template>

<style scoped></style>