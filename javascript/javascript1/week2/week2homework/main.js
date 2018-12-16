//step 1: Recap/read
//warmup part 1
//Warmup Part 2

console.log('=== step 3: warmup Part 2 ===')

function emptyObject(){
    let copen = {};

    copen.time = 12;

    return copen;
}


let timeObject = emptyObject();

console.log(timeObject);




let sampleArray = [{'color':'green'}, {'color':'red'}, {'color':'yellow'}];

function myArray(color1, color2, color3){

    sampleArray[0].color = color1;

    sampleArray[1].color = color2;

    sampleArray[2].color = color3;

    return sampleArray;
}


let colorObjects = myArray('green', 'red', 'yellow');

console.log(colorObjects);


// loging out each color using the for loop

for(let i = 0; i < sampleArray.length; i++){

    console.log(sampleArray[i].color);
}

// getting day of meeting

let weekDays = ['sunday', 'monday' , 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

let day9;



//Smart-ease-goes global!!!

console.log('==== step 3: smart ease ====')


const notes = [];

function addNote(note, noteId){

    notes.push({"note": note, "noteId": noteId});

    return notes;
}
addNote("my name is Monya", 1);
addNote("I am a student of HYF", 2);
addNote("It's an amazing school with great teachers", 3);

console.log(notes);


function getNoteFromId(id){

    for(i=0; i<notes.length, i++;){
        if(id==notes[i].noteId){
            console.log(notes[i])
        }
        else{
            console.log("The Id number  " + id + "is not available");
        }
    }
    
}


function showAllnotes(){
    for(i=0;i<notes.length;i++){
        console.log("The note with id: " + notes[i].noteId + " has the following note text: "+ notes[i].note);
}}


let activities = [];

function addActivity(date, activity, duration){

    activities.push({"date": date,
                     "activity": activity,
                    "duration": duration})

                    return activities;
}

 addActivity("22-2-2019", "football", 90);
 addActivity("20-12-2010", "coding", 360);
 addActivity("12-2-2018", "ps4", 60);

console.log(activities);

let storage = 0;
function showStatus(activities){
    if(activities==0){
        console.log("Add some activities before calling show status");
    }
    else
    for(i=0; i<activities.length; i++){
        storage += activities[i].duration
        {
            console.log ("You have " + activities.length + " activities" + " with a duration of " +storage + "mins.");          
        }

        
    }
}
 showStatus(activities);

 function usageLimit(duration){
     let limit = storage-duration;
     for(i=0; i<activities.length;i++){
         if(duration>storage){
             console.log("You have reached your limit. No more smartphoning for you");
         }
         else{
             console.log("you still have " + limit  + "mins left.");
         }
     }

 }


 usageLimit(20222)


 
