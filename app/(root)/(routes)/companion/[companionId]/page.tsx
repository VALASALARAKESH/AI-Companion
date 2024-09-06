import prismadb from "@/lib/prismadb";
import {CompanionForm} from "./components/companion-form";
import {ObjectId} from "mongodb";
import {auth, redirectToSignIn} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";


interface CompanionIdPageProps {
    params: {
        companionId: string;
    };
};


const CompanionIdPage = async ({
 params}:CompanionIdPageProps) => {
    let companion = null;
    const {userId}=auth();
    if(!userId){
        return NextResponse.redirect("/sign-in");
    }

    if (params.companionId !== 'new') {
        companion = await prismadb.companion.findUnique({
            where: {
                id: params.companionId,
            },
        });
    }


    const categories = await prismadb.category.findMany();
    return (

        <CompanionForm
        initialData={companion}
        categories={categories}
        />
    );
}

export default CompanionIdPage;