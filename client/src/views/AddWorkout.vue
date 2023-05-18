<script setup lang="ts">
import { useSession } from '@/model/session';
import { getUser, getUsers } from '@/model/users';
import { getWorkouts, type Workout, createWorkout } from '@/model/workout';
import router from '@/router';
import { ref, defineComponent, computed } from 'vue';
import AutoComplete from 'primevue/autocomplete';

const session = useSession();
const isModalActive = ref(false);
const workout = ref<Workout[]>([]);
let type = ref('')
const user = session.user
const weight = ref(0)
const reps = ref(0)
const location = ref('')
const photo = ref('')
const comments = ref('')
const name = ref('')
const sets = ref(0)

let namedata = [ getUsers().then((res) => res.data.map((user) => user.username))]

const data = [
    "bdeanda",
    "jdoe",
    "michmsosa",
    "jdeanda"
];


const names = ref('');
    const selected = ref(null);
    
    const filteredDataArray = computed(() =>
      data.filter(
        (option) =>
          option.toString().toLowerCase().indexOf(name.value.toLowerCase()) >= 0
      )
    );

function addWokrout(name: string, weight: number, reps: number, location: string, photo: string, comments: string, sets: number) {
    createWorkout({
        id: user?._id,
        weight: weight,
        sets: sets,
        reps: reps,
        location: location,
        image: photo,
        comment: comments,
        name: name,
        type: type.value,
        userPhoto: user?.picture,
        userName: user?.username,
        date: new Date().toDateString()
    })
    history.back()
}

function cancel() {
    history.back()
}
</script>


<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half ">
                <div class="box has-background-grey-darker">
                    <form @submit.prevent class="add-workout">

                        <div class="field">
                            <label has-text-light class="label">Type of workout</label>
                            <div class="control">
                                <div class="select">
                                    <select v-model="type">
                                        <option>Regular</option>
                                        <option>PR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label has-text-light class="label">Name of the workout</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Name of the workout" v-model="name">
                            </div>
                        </div>

                        <div class="field">
                            <label has-text-light class="label">
                                Weight
                            </label>
                            <div class="control">
                                <input class="input" type="number" placeholder="Weight" v-model="weight">
                            </div>
                        </div>

                        <div class="field">
                            <label has-text-light class="label">
                                Sets
                            </label>
                            <div class="control">
                                <input class="input" type="number" placeholder="Sets" v-model="sets">
                            </div>

                            <div class="field">
                                <label has-text-light class="label">
                                    Reps
                                </label>
                                <div class="control">
                                    <input class="input" type="number" placeholder="Reps" v-model="reps">
                                </div>
                            </div>

                            <div class="field">
                                <label has-text-light class="label">
                                    Location
                                </label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Location" v-model="location">
                                </div>
                            </div>

                            <div class="field">
                                <label has-text-light class="label">
                                    Photo?
                                </label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Workout Photo" v-model="photo">
                                </div>
                            </div>

                            <div class="field">
                                <label has-text-light class="label">
                                    Comments
                                </label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Comment" v-model="comments"></textarea>
                                </div>
                            </div>

                            <section>
    <p class="content"><b>Selected:</b> {{ selected }}</p>
    <o-field label="Tag A Friend">
      <o-autocomplete
        v-model="names"
        rounded
        expanded
        placeholder="Enter name"
        icon="search"
        clearable
        :data="filteredDataArray"
        @select="(option: null) => (selected = option)"
      >
        <template #empty>No results found</template>
      </o-autocomplete>
    </o-field>
  </section>

                            <div class="field is-grouped">
                                <div class="control">
                                    <button class="button is-success"
                                        @click="addWokrout(name, weight, reps, location, photo, comments, sets)">Save
                                        changes</button>
                                </div>
                                <div class="control">
                                    <button @click="cancel()" class="button is-link is-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </div>
</template>



<style scoped>
.label {
    color: white;
}

.box {
    margin-top: 20px;
}
</style>