import {auth} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import React from "react";
import {ChatClient} from "@/app/(chat)/(routes)/chat/[chatId]/components/client";


interface ChatIdPageProps {
    params: {
        chatId: string;
    };
}

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
    const { userId } = auth();
    if (!userId) {
        return NextResponse.redirect("/sign-in");
    }

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.chatId,
        },
        include: {
            messages: {
                orderBy: {
                    createdAt: "asc",
                },
                where: {
                    userId,
                },
            },
            _count: {
                select: {
                    messages: true,
                },
            },
        },
    });

    if (!companion) {
        return NextResponse.redirect("/");
    }

    return <ChatClient companion={companion} />;
};

export default ChatIdPage;