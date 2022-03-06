import React, {useState} from 'react';
import ChatRecipients from "../../components/chat-page/ChatRecipients";
import ChatPageLayout from "../../components/chat-page/ChatPageLayout";
import ChatBox from "../../components/chat-page/ChatBox";

export default function ChatPage() {
    const [currentChat, setCurrentChat] = useState(null); // This is going to be controlled by state later
    const [chatIsOpen, setChatIsOpen] = useState(false);

    return (
        <ChatPageLayout>
            <ChatRecipients
                currentChat={currentChat}
                setCurrentChat={setCurrentChat}
                chatIsOpen={chatIsOpen}
                setChatIsOpen={setChatIsOpen}
            />
            <ChatBox
                currentChat={currentChat}
                setCurrentChat={setCurrentChat}
                chatIsOpen={chatIsOpen}
                setChatIsOpen={setChatIsOpen}
            />
        </ChatPageLayout>
    )
}
