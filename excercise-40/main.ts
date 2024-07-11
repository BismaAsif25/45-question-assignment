// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title,
//   and it should return a Object containing these two pieces of information.
//    Use the function to make three dictionaries representing different albums.
//  Print each return value to show that Objects are storing the album information correctly.
//   Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//    If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.





function make_album(artistName:string,album_title:string){
   return{
    artistName,
    album_title,
   }
    
       
    }
    

let album1 = make_album('artist1','1989',)
let album2 = make_album('artist2','album2024')
let album3 = make_album('artist3','divide')

console.log(album1)
console.log(album2)
console.log(album3)


function make_album_with_tracks(artistName: string, album_title: string, numberoftracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artistName,
        title: album_title,
    };

    if (numberoftracks !== undefined) {
        album.tracks = numberoftracks;
    }

    return album;
}

// Example usage of make_album_with_tracks function
let album4 = make_album_with_tracks('artist1', '1989', 14);
let album5 = make_album_with_tracks('artist2', 'album2024');
let album6 = make_album_with_tracks('artist3', 'divide', 289);

console.log(album4);
console.log(album5);
console.log(album6);

