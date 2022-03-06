import React from 'react';
import ChatRecipients from "../../components/chat-page/ChatRecipients";
import ChatPageLayout from "../../components/chat-page/ChatPageLayout";
import ChatBox from "../../components/chat-page/ChatBox";

export default function ChatPage() {
    return (
        <ChatPageLayout>
            <ChatRecipients/>
            <ChatBox/>
        </ChatPageLayout>
    )
}
