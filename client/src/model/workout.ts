import type { DataListEnvelope, DataEnvelope } from './fetch';
import { api } from './session'
export interface Workout {
    id: string;
    weight: number;
    reps: number;
    type: string;
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

export function getWorkouts(): Promise<DataListEnvelope<Workout>>{
    return api('workouts')
}

export function getWorkout(id: string): Promise<DataEnvelope<Workout>>{
    return api('workouts/' + id)
}

export function deleteWorkout(id: string){
    return api('workouts/delete/' + id, null, 'DELETE')
}

export function updateWorkout(workout: Workout){
    return api('workouts/update/' + workout.id, workout, 'PATCH')
}

export function createWorkout(workout: Workout){
    return api('workouts/create', workout, 'POST')
}



