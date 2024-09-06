"use client"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {auth} from "@clerk/nextjs/server";
import {useUser} from "@clerk/nextjs";
import React from "react";
import {Companion} from "@prisma/client"



export const UserAvatar = () => {
    const {user}=useUser();

    return (
        <Avatar >
            <AvatarImage src={user?.imageUrl}></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>

        </Avatar>
    )
}
export default UserAvatar;