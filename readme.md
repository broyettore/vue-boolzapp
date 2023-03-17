# WhatsApp v2

In this project, my goal is to recreate WhatsApp as we know it.

The app will have an interface similar to the real version with an eye on the small details.

The app will also simulate the working of the real version, in particular regarding how data is handled. This part will be achieved with Vue.js .
This implies having fake contacts with corresponding chats and messages. A search bar for contacts, a text field to send messages and many other options.

## Milestone 1 Interface

* Focus is on the interface with the goal being a typical whatsapp chat. 
* Contact list informations will be created and inserted with Vue.js.
* User's messages and contact's messages will be differentiated with css classes.

## Milestone 2 Chat boxes

* When clicking a contact in the list, the corresponding chat should open and contain only conversations with contact selected. 

## Milestone 3 Simulate Conversation

* The text field can now take user's input, meaning user can now write something and send it. the message will be displayed differently from the messages received
* To recreate a real conversation, everytime the user sends a text an answer ("ok") should follow 1s after.

## Milestone 4 Filter Contact List

* the search bar in the contact list can now  filter the list based on user's input.
* When a contact is filtered, it should naturally trigger the opening of its corresponding chat box with the user.