import { api } from './session'
export interface User{
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    picture: string;
    admin: boolean;
}

export function getUsers(): Promise<DataListEnvelope<Users>> {
    return api('users')
  }
  
  export function getUser(id: string): Promise<DataEnvelope<Users>> {
    return api('users/' + id)
  }
  
  export function deleteUser(id: string) {
    return api('users/delete/' + id, null, 'DELETE')
  }