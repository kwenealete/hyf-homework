
let fs = require('fs');
let mysql = require('mysql');

let config = JSON.parse(fs.readFileSync("config-secret.json"))

let connection = mysql.createConnection({
   host: config.host,
   user: config.user,
   password: config.password,
   port: config.port,
   database: config.database
});

connection.connect((error) => {
    if (error){
        throw new Error('Sorry unable to connect to the database. Check your connection and try again.')
    }
   });

const findDatabaseTasks = function(newTitle) {
    connection.query('select * from user join user_task on user.id = user_task.user_id join task on user_task.task_id = task.id where task.title like ?',
    [newTitle],(err,results,fields)=>{
      if(err){
        throw ('not working')
      }
      console.log(results);
    });

};

// executable function
findDatabaseTasks('%database%')

const findUserTasks = function(userName) {
    connection.query('select * from user' + '\njoin user_task on user.id = user_task.user_id' + 
        '\nwhere user.name like ?',
        [userName], (err, results, fields) => {
        if(err){
            throw ('check username and try again');
        }
        console.log(results);
    })
};

// executable function
findUserTasks('donald duck')

const findUserTasksstatus = function(userName) {
    connection.query('select user.name, task.title, status.name from user join user_task on user.id = user_task.user_id join task on user_task.task_id = task.id' +
    '\njoin status on task.status_id=status.id where user.name like ?', 
[userName], (err, results, fields) => {
    if(err) {
        throw 'check your data and try again'
    };
    console.log(results);
});
  
};

// executable function
findUserTasksstatus('%pavel%')

const addNewTask = function(title, description, created, updated, due_date, status_id) {
    connection.query('insert into task (title, description, created, updated, due_date, status_id) values(?, ?, ?, ?, ?, ?)',
[title, description, created, updated, due_date, status_id], (err, results, fields) => {
    if (err){
        throw 'sorry verify your data fields and try again'
    };
    console.log(results);
});
  
};

// executable function
addNewTask('New assignment', 'connecting Database to node', new Date ('2019-02-22 19:48:30'), new Date ('2019-12-23 12:12:12'), null, 2);

 const changeTaskTitle = function(newTitle, targetId) {
     connection.query('update task set title = ? where id = ? ', 
    [newTitle, targetId], (err, results, fields) => {
        if (err) {
            throw 'Maybe Id does not match or exist, try again'
        };
        console.log(results);
    });
};
    // executable function
    changeTaskTitle('Final project', 18);
  
 

const changeTaskDueDate = function(setDate, targetId) {
    connection.query('update task set due_date = ? where id = ?',
[setDate, targetId], (err, results, fields) => {
    if (err) {
        throw 'check data and try again';
    };
    console.log(results);
})
  
};

// executable function
changeTaskDueDate('2019-12-29 23:23:37');

const changeTaskStatus = function(statusID, targetId) {
    connection.query('update task set status_id = ? where id = ?', 
[statusID, targetId], (err, results, fields) => {
    if (err) {
        throw 'Unsuccessful, try again';
    };
    console.log(results);
});
  
};

// executable function
changeTaskStatus(3, 11)

const markTaskAsCompleted = function(taskID, targetId) {
    connection.query('update task set status_id = ? where id = ?', 
[taskID, targetId], (err, results, fields) => {
    if (err) {
        throw ' sorry Unsuccessful, try again';
    };
    console.log(results);
});
  
};

// executable function
markTaskAsCompleted(3, 8);

const deleteTask = function(taskID) {
    connection.query('delete from task where id = ?',
[taskID], (err, results, fields) => {
    if(err) {
        throw 'Ooppps! sorry try again';
    };
    console.log(results);
});
  
};

// executable function
deleteTask(4);


const deleteUser = function(taskID) {
    connection.query('delete from user where id = ?',
[taskID], (err, results, fields) => {
    if(err) {
        throw 'Ooppps! sorry try again';
    };
    console.log(results);
});
  
};

// executable function
deleteUser(10);
