import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


const Profile = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
        redirect('/api/auth/login')
    }
    const user = await getUser();
    console.log(user);

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-7 mb-4'>Welcome to your profile, {user.given_name}!</h1>
            <p className="text-xl text-center">Here is your profile information.</p>
            <div className="mt-10 md:w-1/2 mx-auto px-3">
                <h2 className="text-xl md:text-2xl"><span className="font-semibold mr-3">Name:</span> {user.given_name} {user.family_name}</h2>
                <p className="text-xl md:text-2xl"><span className="font-semibold mr-3">Email:</span>  {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;