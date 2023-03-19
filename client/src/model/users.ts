import data from "../data/users.json";
export interface User{
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    email: string;
    photo: string;
    admin: boolean;
}

export function getUsers(): User[]{
    return data.User;
}

export function getUserId(id: number): User | null{
    for (const user of data.User) {
        if (user.id == id) {
            return user;
        }
    }
    return null;
}