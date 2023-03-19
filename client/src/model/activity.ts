import activity from "../data/activity.json";

export interface Activity {
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

export function getActivity(): Activity[] {
    return activity.activity;
}