import React from 'react'

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

function  CitizenChatBot() {
    const steps = [
        {
            id: '0',
            message: 'Hey! ',
     
            // This calls the next id
            // i.e. id 1 in this case
            trigger: '1',
        }, {
            id: '1',
     
            // This message appears in
            // the bot chat bubble
            message: 'How can i help you?',
            trigger: '2'
        }, {
            id: '2',
     
            // Here we want the user
            // to enter input
            user: true,
            trigger: '3',
        }, {
            id: '3',
            message: " hi {previousValue}, how can I help you?",
          
            trigger: 4
        }, {
            id: '4',
            options: [
                 
                // When we need to show a number of
                // options to choose we create alist
                // like this
                { value: 1, label: 'View Courses' },
                { value: 2, label: 'Read Articles' },
     
            ],
            end: true
        }
    ];
     
    // Creating our own theme
    const theme = {
        background: '#ffffff',
        headerBgColor: '#58d0e7',
        headerFontSize: '20px',
        botBubbleColor: '#58d0e7',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#176ae6',
        userFontColor: 'white',
        botanimation: 'animate-bounce'
    };
     
    // Set some properties of the bot
    const config = {
        botAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Outreachy-bot-avatar.svg/1646px-Outreachy-bot-avatar.svg.png",
        floating: true,
    };
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="ChatBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}

export default CitizenChatBot