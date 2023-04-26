// Add JavaScript code here
const form = document.getElementById('songRequests');

const printSong = (event) => {
  let name = document.getElementById('name').value;
  let song = document.getElementById('song').value;
  let artist = document.getElementById('artist').value;

  console.log("The request comes from: " + name)
  console.log("The name of the song is: " + song)
  console.log("The artist of the song is: " + artist)
  console.log(name + song + artist);
  event.preventDefault();
}

form.addEventListener('submit', printSong);

