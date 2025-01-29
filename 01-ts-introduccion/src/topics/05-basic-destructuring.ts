interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details {
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "Demons",
    details: {
        author: "Imagine Dragons",
        year: 2020
    }
};

console.log('Song:', audioPlayer.song);
console.log('Author:', audioPlayer.details.author);

const { author:songAuthor } = audioPlayer.details;
console.log('Song Author:', songAuthor);


const dbz: string[] = ['goku', 'Veggeta', 'Gohan'];

console.log(dbz[0]);
console.log(dbz[1]);
console.log(dbz[2]);
console.log(dbz[3] || 'no existe');

export{}