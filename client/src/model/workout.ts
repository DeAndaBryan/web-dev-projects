import type { DataListEnvelope, DataEnvelope } from './fetch';
import { api } from './session'
export interface Workout {
    _id?: string;
    id?: string;
    weight?: number;
    sets?: number;
    reps?: number;
    type: string;
    name: string;
    comment?: string;
    date: string;
    time?: string;
    location: string;
    image?: string;
    userPhoto?: string;
    userName?: string;
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



