// Step 1: Save the like button element in a variable 
var likePost= document.querySelector('#post');
const likeBtn = document.querySelector('#like-btn');


// Step 2: Create function to add likes. This function makes it so that the "0" goes up when you press the button. We'll talk more about functions in a later class! 
// const addLike = () => {
//   const likeCount = document.getElementById('like-count');
//   let currentCount = parseInt(likeCount.textContent); //declare currentcount =0 unless parseInt(...)
//   likeCount.textContent = currentCount + 1;
//   console.log('like button pressed');
// }
const addLike = () => {
  const likeCount = document.getElementById('like-count');
  let currentCount = likeCount.textContent;           //declare currentcount =0 unless parseInt(...)
  currentCount = parseInt(currentCount) + 1;         //use let not var
  likeCount.textContent = currentCount;
  console.log('like button pressed');
}
// Step 3: Create an event listener that increases the likes when the user presses the like button

// addLike.addEventListener(“Like”, myFunction);
// function myFunction(){
//   Like.addLike();
// }

likeBtn.addEventListener('click', addLike); //click detected add like
likePost.addEventListener('click', addLike); //click on likePost=#post then  add like

// Step 4 (If time): Can you make it so that the number of likes increases when the user double taps the image? Hint: you will have to use a different kind of event! 
  //1: Save the image in a variable 
  //2: Add an event listener (addEventListener)


//post ==double click then 
