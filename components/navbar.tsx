"use client"
import {Menu, Sparkles} from "lucide-react";
import Link from "next/link"
import {Poppins} from "next/font/google"
import {cn} from "@/lib/utils"
import {UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/theme-toggle";
import {MobileSidebar} from "@/components/mobilesidebar"

const font =Poppins({
    weight:"600",
    subsets:["latin"]
})
export const Navbar=()=>{
    return(
        <div
            className="fixed h-16 w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <MobileSidebar></MobileSidebar>
                <Link href='/'>
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
                        FamCampaion.ai
                    </h1>
                </Link>


            </div>
            <div className="flex items-center gap-x-3">

                <ModeToggle/>
                <UserButton afterSignOutUrl="/"></UserButton>
            </div>
        </div>

    );
};