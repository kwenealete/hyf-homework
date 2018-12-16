// Declaring an array of 10 books

const myArray = ['1984_george_orwell', 'harry_potter_jk_rowling', 'the_lord_of_the_rings_j.r.r_tolkien', 'pride_and_prejudice_jane_austen', 'little_women_may_alcott', 'jane_eyre_charlotte_bronte', 'animal_farm', 'of_mice_and_men', 'romeo_and_juliet', 'a_tale_of_two_cities'];

let booksRead = [
     {id : myArray[0],
     title : "1984",
     language : "English",
     author : "George Orwell",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/1984.jpg'
     },

     {id : myArray[1],
     title : "Harry Potter",
     language : "English",
     author : "JK Rowling",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/harry_potter_and_the_Sorcerers_stone_adult_usa.jpg'
     },

     {id : myArray[2],
     title : "The Lord Of The Rings",
     language : "English",
     author : "J.R.R Tolkien",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/9780618640157_custom-s6-c30.jpg'
     },
        
     {id : myArray[3],
     title : "Pride and Prejudice",
     language : "English",
     author : "Jane Austen",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/pride_and_prejudice_book_cover_by_fourblackbirds-d533108.png'
     },       
     

     {id : myArray[4],
     title : "Little Women",
     language : "English",
     author : "Louisa May Alcott",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/9780147514011.jpg'
     },

     {id : myArray[5],
     title : "Jane Eyre",
     language : "English",
     author : "Charlotte Bronte",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/cvr9781416500247_9781416500247_hr.jpg'
     },
            
            
     {id : myArray[6],
     title : "Animal Farm",
     language : "English",
     author : "George Orwell",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/animal_farm_cover2014.jpg'
    
     },

     {id : myArray[7],
     title : "Of Mice and Men",
     language : "English",
     author : "John Steinbeck",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/bookcover2.jpg'
     },


     {id : myArray[8],
     title : "Romeo and Juliet",
     language : "English",
     author : "William Shakespeare",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/cvr9781451621709_9781451621709_hr.jpg'
     },
        
            
     {id : myArray[9],
     title : "A Tale Of Two Cities",
     language : "English",
     author : "Charles Dickens",
     imagesrc :'https://cdn.lifehack.org/wp-content/uploads/2015/03/twocities.jpg'
     },          
]



function books() {

    const ul = document.createElement('ul');

    for(i=0;i<myArray.length;i++){

      const li = document.createElement('li');

      const h2 = document.createElement('h2');

      const p = document.createElement('p');

      const x = document.createElement('p');

      const img = document.createElement('img');

      p.innerHTML = booksRead[i].language;

      x.innerHTML = booksRead[i].author;

      h2.innerHTML = booksRead[i].title;

      img.setAttribute('src',booksRead[i].imagesrc);

      li.appendChild(h2);

      li.appendChild(p);

      li.appendChild(x);

      li.appendChild(img);

      ul.appendChild(li);
    }
    document.getElementById('goodbooks').appendChild(ul);
  }
  books();