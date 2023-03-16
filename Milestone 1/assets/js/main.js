'use strict'

// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

const { createApp } = Vue;

createApp({
    data() {
        return {
            searchBar: "",
            sendMsg: "",
        }
    },
    methods: {
        // a 
    }
}).mount("#app")