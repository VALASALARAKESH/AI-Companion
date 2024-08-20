const {PrismaClient}=require("@prisma/client");
const db=new PrismaClient();

async  function main(){
    try {
        await db.category.createMany({
            data:[
                {name:"Famous People"},
                {name:"Movies & TV"},
                {name:"Musicians"},
                {name:"Sports"},
                {name:"Animals"},
                {name:"Philosophy"},
                {name:"Scientists"},
                {name:"Fictional Characters"},
            ]
        });
    }
    catch (error){
        console.error("Error seeding default categories",error);
    }
    finally {
        await db.$disconnect();
    }
};

main();