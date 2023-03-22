import { reactive } from "vue";
import { useRouter } from "vue-router";

const session = reactive({
    user : null as User | null,
})

interface User {
    id?: number;
    name?: string;
    firstname?: string;
    lastname?: string;
    photo?: string;
    email?: string;
    admin?: boolean;
    handle?: string;
}

export function useSession(){
    return session;
}

export function login(users: User){
    session.user = {
        id: users.id,
        name: users.name,
        firstname: users.firstname,
        lastname: users.lastname,
        photo: users.photo,
        email: users.email,
        admin: users.admin,
        handle: users.handle
    }
}

export function useLogout() {
    const router = useRouter();

    return function(){
        console.log({router});
        session.user = null;

        router.push("/login");
    }
}