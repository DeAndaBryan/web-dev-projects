import { ref } from "vue";
import data from "../data/workouts.json";
import { useSession } from "./session";

const work = ref([] as Workout[]);
work.value = data.workouts;
const session = useSession();

export interface Workout {
    id: number;
    fullname: string;
    name: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image: string;
    distance: number;
    duration: number;
}
export function getWorkout(): Workout[] {
    return data.workouts;
}
export function addWorkout(workout:Workout, date : Date) {

   
    
    work.value.push({
        id : session.user?.id? session.user?.id : 0,
        fullname: session.user?.name? session.user?.name : "Guest",
        name: workout.name,
        description: workout.description,
        date: JSON.stringify(date),
        time: workout.time,
        location: workout.location,
        image: workout.image,
        distance: workout.distance,
        duration: workout.duration,
    });
}




