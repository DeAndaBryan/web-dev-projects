<script setup lang="ts">
import { useSession } from '@/model/session';
import { getUsers } from '@/model/users';  // No need to import User as a value
import { getWorkouts, type Workout, createWorkout } from '@/model/workout';
import router from '@/router';
import { ref, defineComponent, computed } from 'vue';
import AutoComplete from 'primevue/autocomplete';

const session = useSession();
const isModalActive = ref(false);
const workout = ref<Workout[]>([]);
let type = ref('');
const user = session.user;
const weight = ref(0);
const reps = ref(0);
const location = ref('');
const photo = ref('');
const comments = ref('');
const name = ref('');
const sets = ref(0);

let namedata = [getUsers().then((res) => res.data.map((user) => user.username))];

const data = ["bdeanda", "jdoe", "michmsosa", "jdeanda"];

const names = ref('');
const selected = ref(null);

const filteredDataArray = computed(() =>
    data.filter(
        (option) =>
            option.toString().toLowerCase().indexOf(name.value.toLowerCase()) >= 0
    )
);

function addWorkout(
    name: string,
    weight: number,
    reps: number,
    location: string,
    photo: string,
    comments: string,
    sets: number
) {
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
        date: new Date().toDateString(),
    });
    history.back();
}

function cancel() {
    history.back();
}
</script>
