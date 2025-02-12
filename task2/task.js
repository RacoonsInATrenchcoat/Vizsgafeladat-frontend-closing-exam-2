export function findUniqueGenres(genres) {

//console.log (`genres`,genres)
//1, Create an emtpy array
    const fillerArray = []

//2, Go over each input array and push

for (let i = 0; i < genres.length; i++) { //loop 1 of each array

    let currentGenre = genres[i];
    //console.log (`currentGenre`,currentGenre)

    for (let n = 0; n < currentGenre.length; n++) { //loop 2 inside the array for items
        fillerArray.push(currentGenre[n])
        }
    
}
//console.log (`fillerArray`,fillerArray)

//3, Remove duplicates
const finalValue = fillerArray.reduce(function (acc, curr) {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);

//console.log (`finalValue`,finalValue)

//4, Return the value
/*
- It should return `["Sci-Fi", "Drama", "Action", "Comedy", "Thriller", "Crime"]`
- `"Drama"` appears twice in the first and in the 3rd movie. It should be listed once in the result array.  
- `"Action"` appears twice in the same movie, it should be listed once in the result array.
*/
return finalValue
}