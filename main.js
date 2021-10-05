 // MANDATORY JS EXERCISES (create a different file for this exercise)
 //    1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
 //    2) Create an unordered list using JavaScript and save it in a variable
 //    3) Cycle the array and create a list-item via JavaScript for every element
 //    4) Insert the genere as text in the list-item
 //    5) Append the list items in the unordered list
 //    6) Append the unordered list in the document. The list should appear in the page.


 const writeHeader = function(title){
   console.log(`\n\n >-------------------== [${title.toUpperCase()}]==-----------------------<`);
 }

 writeHeader("TASK 1: ")

 let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

 writeHeader("TASK 2: ")

let unOrderedList = document.createElement('ul')


writeHeader("TASK 3: ")


let listItem = document.createElement('li')
for(let i = 0; i < genres.length; i++){
  genres[i] += listItem
}

writeHeader("TASK 4: ")
listItem.appendChild(genres[i])

writeHeader("TASK 5: ")

unOrderedList.appendChild(listItem)

writeHeader("TASK 6: ")

body.appendChild(unOrderedList)
