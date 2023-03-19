import { reactive } from "vue";
import { useRouter } from "vue-router";

const session = reactive({
    user : null as User | null,
})

interface User {
    name: string;
    photo?: string;
    email?: string;
    admin?: boolean;
}

export function useSession(){
    return session;
}

export function login(users: User){
    session.user = {
        name: users.name,
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