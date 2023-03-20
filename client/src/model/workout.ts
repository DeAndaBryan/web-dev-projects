import data from "../data/workouts.json";

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