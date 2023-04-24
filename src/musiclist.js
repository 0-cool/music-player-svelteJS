import {writable} from "svelte/store";

export const musicList = writable([
    {
        image: "juan_luis.jpg",
        audio: "avispas.mp3",
        name: "Avispas",
        artist: "Juan Luis Guerra"
    },
    {
        image: "un_infeliz.jpg",
        audio: "un_infeliz.mp3",
        name: "Un Infeliz",
        artist: "Rochy RD"
    },
    {
        image: "yiyo.jpeg",
        audio: "evidencia.mp3",
        name: "Evidencia",
        artist: "Yiyo Sarante"
    },
    {
        image: "anthony_santos.jpg",
        audio: "te_vas_amor.mp3",
        name: "Te Vas Amor",
        artist: "Anthony Santos"
    },
    {
        image: "hector_acosta.jpeg",
        audio: "maria_cristina.mp3",
        name: "Maria Cristina",
        artist: "Hector Acosta"
    }
])