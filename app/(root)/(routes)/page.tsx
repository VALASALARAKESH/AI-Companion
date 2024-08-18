import {UserButton} from "@clerk/nextjs";

const RootPage=()=>{
    return(
        <div>
            <UserButton afterSignOutUrl="/">

            </UserButton>
        </div>
    );
}
export default RootPage;