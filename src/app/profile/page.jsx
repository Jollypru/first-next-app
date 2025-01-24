import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


const Profile = async() => {
    const {isAuthenticated, getUser} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated){
        redirect('/api/auth/login')
    }
    const user = await getUser();
    
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-7'>Welcome to your profile!</h1>
        </div>
    );
};

export default Profile;