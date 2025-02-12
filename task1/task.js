export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {


    //console.log(`allMovies`, allMovies)
    /*{
        title: 'Inception',
        genres: [ 'Sci-Fi', 'Thriller' ],
        actor_ids: [ 1, 2, 3 ]
      },*/
    //console.log(`allActors`, allActors)
    /*{ id: 1, name: 'Leonardo DiCaprio' },*/
    //console.log(`actorName`, actorName)
    /*Leonardo DiCaprio*/
    //console.log(`genre`, genre)
    /*Sci-Fi*/


    //1. Search based on actorName, in allActors
    let currentActor = allActors.filter((actor) => actor.name === actorName)[0]; 

    //console.log(`currentActor`, currentActor);
    
    // Test error: ✖ It should return an empty array if no actor found with the given name.
    if (!currentActor || currentActor.name === "") {
        return [];
    }

    //2. Search based on genre, in allMovies
    let currentMovie = allMovies.filter((movie) => movie.genres.includes(genre)) //needs .includes, otherwise it'll never be equal if it has multiple
    //console.log(`currentMovie`, currentMovie)

    //3. CrossCheck the results
    const finalValue = []

    for (let index = 0; index < currentMovie.length; index++) {
        if (currentMovie[index].actor_ids.includes(currentActor.id)) {
            finalValue.push(currentMovie[index].title)
        }
    }


    //4, format and return

    //It should return `['Inception', 'Interstellar']`.
    //console.log(`finalValue`, finalValue)
    return finalValue
}