console.log("testing");


let numbers = [1, 2, 3, 4];
let newNumbers = [];




newNumber = numbers.filter(numbers=> numbers%2 !==0).map(numbers=>numbers*2);

console.log("The doubled numbers are " + newNumber);




fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")

    .then(Response =>Response.json())
    .then(movies =>{
        console.log(movies)

        const movieTag = movies.map((movie)=>{
            let myMovies = {...movie}
            if(myMovies.rating>=7){
                 myMovies.tag = "good";
            }
            else if(myMovies.rating>=4 && myMovies.rating<7){
                 myMovies.tag = "average";
            }
            else if(myMovies.rating<4){
                 myMovies.tag = "bad";
            }

            return myMovies;

        })
        console.log(movieTag);
      
     
       

       const averageRating = movies.map(movies=> movies.rating).reduce((x, y) => x +y, 0)/movies.length

       console.log("Average rating is " + averageRating);

       const goodMovies = movies.filter(movies=> movies.rating >= 7)
       console.log(goodMovies)

       const averageMvies = movies.filter(movies=>(movies.rating >= 4 && movies.rating<7))
       console.log(averageMvies);

       const badMovies = movies.filter(movies=>(movies.rating < 4))
       console.log(badMovies);

       console.log ("The total number of good movies is " +goodMovies.length + "\n" + "The total number of average movies is " +averageMvies.length + "\n" +
       "The total number of bad movies is " +badMovies.length)

       let words = [the = 0, dog = 0, who = 0, is = 0, not = 0, a = 0, man = 0];

       movies.map(movies=>{
           movies.title.split(" ")
           .filter((keywords)=>{
               if(keywords.toLowerCase()==="the") the++;
               if(keywords.toLowerCase()==="dog") dog++;
               if(keywords.toLowerCase()==="who") who++;
               if(keywords.toLowerCase()==="is") is++;
               if(keywords.toLowerCase()==="not") not++;
               if(keywords.toLowerCase()==="a") a++;
               if(keywords.toLowerCase()==="man") man++;
            })
       })

       console.log("the number of various words are: " + "the ="+the + "\n" + "dog ="+dog + "\n" + "who ="+who + "\n" + "is ="+is + "\n" + "not ="+not + "\n" + 
       "a ="+a + "\n" + "man ="+man + "\n");



                   

         const oldMovies = movies.filter(movies => (movies.year >= 1980 && movies.year <=1989))
         console.log( "The total number of movies between 1980-1989 is " +oldMovies.length);

        

         



         

         


    });

    

    
    
