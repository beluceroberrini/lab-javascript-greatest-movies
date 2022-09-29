// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(director =>{
        let obj = director.director;
        //console.log(obj);
          return obj;

    })

    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0) return 0;
    
     let Steven = moviesArray.filter(person =>{
        return person.director === 'Steven Spielberg' && person.genre.includes('Drama');
    });

   // console.log(Steven);    
    return Steven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;

    let sum = moviesArray.reduce((total, elem) => {
        if(elem.score !== undefined){
            return total + elem.score / moviesArray.length
        }else {
            return total;
        }
    },0)
    console.log(sum)
    return Number(sum.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramas = moviesArray.filter(person =>{
        
        return person.genre.includes('Drama');
    });
    
    let aveDrama = scoresAverage(dramas);
    return aveDrama;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = structuredClone(moviesArray);
        newArray.sort((a, b)=>{
        if(a.year > b.year){
            return 1            
        }else if(a.year < b.year){
            return -1;
        }else{
            if(a.title > b.title){
                return 1;
            }else if(a.title < b.title){
                return -1;
            }else{
                return 0;
            }
        }
    })

    return newArray;


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = structuredClone(moviesArray);

     let titles = newArray.map(movies =>{
            return movies.title;
        })
       
        let first = titles.slice(0,20);
       // console.log(first);
        
        let alph = first.sort();
        console.log(alph)
         return alph;
    
        
        
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = structuredClone(moviesArray);
    


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
