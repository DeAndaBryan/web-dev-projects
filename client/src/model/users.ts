import type { DataListEnvelope, DataEnvelope } from './fetch';
import { api } from './session'
export interface User{
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    picture: string;
    isAdmin: boolean;
    token?: string;
}

export function getUsers(): Promise<DataListEnvelope<User>> {
    return api('users')
  }
  
  export function getUser(id: string): Promise<DataEnvelope<User>> {
    return api('users/' + id)
  }
  
  export function deleteUser(id: string) {
    return api('users/delete/' + id, null, 'DELETE')
  }
  export function loginUser(username: string, password: string) {
    return api('users/login', 
    { 
      "username": username,
      "password": password 
    },
      'POST'
      )
  }

  export function updateUser(user: User) {
    return api('users/update/' + user._id, user, 'PATCH')
  }

  export function createUser(user: User) {
    return api('users/create', user, 'POST')
  }