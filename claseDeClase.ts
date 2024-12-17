class Album{
    title:string;
    songs:string[];
    constructor(title,songs:string[]){
        this.title=title;
        this.songs=songs;
    }
}

class NombreDeBanda{
    nombre:string
}

class Banda{
    name:NombreDeBanda;
    members:string[];
    albums:Album[];

    constructor(members:string[],Albums:Album[]){
        this.members=members;
        this.albums=Albums;
    }
}

function main(){
    const unAlbum = {
        title:"album de marce",
        songs:["una cancion"],
    };

    const unaBanda= new Banda(["Marce"],[unAlbum, unAlbum, unAlbum]);
    console.log(unaBanda.albums);
    console.log("otro cambio")

}
main();