import data from "../data/users.json";
export interface User{
    name: string;
    photo: string;
    admin: boolean;
}

export function getUsers(): User[]{
    return data.User;
}