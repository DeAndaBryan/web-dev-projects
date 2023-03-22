import data from "../data/users.json";
export interface User{
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    email: string;
    photo: string;
    admin: boolean;
    handle: string;
}

export function getUsers(): User[]{
    return data.User;
}

export function getUserId(id: number): User | null {
    for (let i = 0; i < data.User.length; i++) {
        if(data.User[i].id == id){
            return data.User[i];
        }
    }
    return null;
}