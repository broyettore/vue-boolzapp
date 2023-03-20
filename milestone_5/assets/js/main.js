'use strict'

// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

const { createApp } = Vue;

createApp({
    data() {
        return {
            searchBar: "",
            sendMsg: "",
            answer: null,
            timer: 1,
            current: 0,
            newDate: new Date(),
            myProfile : {
                io: `assets/images/avatar_2.jpg`,
                nome: "Roy"
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'assets/images/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55', 
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                             isShow: false,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'assets/images/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                             isShow: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                             isShow: false,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'assets/images/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                             isShow: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                             isShow: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'assets/images/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                             isShow: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'assets/images/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                             isShow: false,
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'assets/images/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                             isShow: false,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'assets/images/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                             isShow: false,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'assets/images/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                             isShow: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                             isShow: false,
                        }
                    ],
                }
            ]
            
        }
    },
    methods: {
        openChat(index, event) {
            if(this.searchBar === ""){
                this.current = index;
              } else {
                this.current = this.contacts.indexOf(this.searchUser()[index]);
                console.log(this.current)
              }
        },

        getStatus(property){
            if (property === "sent") {
                return "sent"
            } else {
                return "received"
            }
          },

          sendText() {
            if (this.sendMsg.trim().toLowerCase() !== "") {
                this.searchUser()[this.current].messages.push({date: '10/01/2020 15:30:55', message: this.sendMsg, status: "sent"});
                this.sendMsg = "";

                this.answer = setTimeout(() => {
                    this.sendMsg = "ok",
                    this.searchUser()[this.current].messages.push({date: '10/01/2020 15:31:55', message: this.sendMsg, status: "received"});
                    this.sendMsg = "";
                }, this.timer * 1000);
            }
          },

          searchUser() {
            if (this.searchBar !== "") {
                return this.contacts.filter(element => element.name.toLowerCase().includes(this.searchBar.toLowerCase()));
            } else {
                return this.contacts
            }
          },

          toggleDel(element) {
            return element.isShow = !element.isShow;
          },

          delMsg(element) {
            this.searchUser()[this.current].messages.splice(element, 1);
          },

           currentTime () {
            console.log(this.newDate)
            if (this.newDate.getMinutes() < 10) {
                return this.newDate.getHours() + ":" +  0 + this.newDate.getMinutes()
            } else {
                return this.newDate.getHours() + ":" + this.newDate.getMinutes()
            }
          }
    }
}).mount("#app")