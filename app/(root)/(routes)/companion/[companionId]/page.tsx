import prismadb from "@/lib/prismadb";
import {CompanionForm} from "./components/companion-form";
import {ObjectId} from "mongodb";


interface CompanionIdPageProps {
    params: {
        companionId: string;
    };
};


const CompanionIdPage = async ({
 params}:CompanionIdPageProps) => {
    let companion = null;

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