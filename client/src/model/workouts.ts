import { reactive, ref } from "vue";
import { getWorkout, type Workout } from "@/model/workout";

const userWorkout = ref([] as Workout[]);
export const workout = reactive(getWorkout());

export function userWorkouts() {
    return userWorkout;
}

