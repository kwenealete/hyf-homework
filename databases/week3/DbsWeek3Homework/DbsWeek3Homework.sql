select *
from task;

############ findDatabaseTasks

select *
from user join user_task on user.id = user_task.user_id 
join task on user_task.task_id = task.id
where task.description like "%database%" or task.title like "%database%";


############ findUserTasks 
select *
from user join user_task on user.id = user_task.user_id 
where user.name like "donald duck"; 

############ findUserTasksStatus
select user.name, task.title, status.name
from user join user_task on user.id = user_task.user_id
join task on user_task.task_id = task.id
join status on task.status_id=status.id
where user.name like "%Pavel%";


############ AddNewTask

insert into task (title, description, created, updated, due_date, status_id) values ('Wash clothes', 'Title says it all.', now() , now() , null, 2);

############ changeTaskTitle
update task
set title = 'Dry-cleaning service'
where id = 1 ;

############ changeTaskDueDate
update task
set due_date = '2019-03-30 23:59:59'
where id = 5;

############ changeTaskStatus
update task
set status_id = 1
where id = 2;

############ markTaskAsCompleted
 update task
 set status_id = 3
 where id = 10;
 
 ############ deleteTask
 delete from task
 where id = 7;
 
 ############ deleteUser
 delete from user
 where id = 9;
select * from user;
