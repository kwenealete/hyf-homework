show tables;

########## execise 1


select count(id)
from task;

########## execise 2

select count(id)
from task
where task.due_date is null;

########## execise 3

select *
from task join  status 
where status.name = 'DONE';

########## execise 4

select *
from task join status
where status.name  not like '%done%';

########## execise 5

select *
from task order by task.created desc;

########## execise 6

select max(task.created)
from task;

########## execise 7

select task.title, task.due_date
from task where task.description  or task.title like '%database%';

########## execise 8

select task.title, status.name
from task join status on task.status_id = status.id;

########## execise 9

select status.name, count(task.status_id)
from task join status on task.status_id = status.id
group by task.status_id ;

########## execise 10

select status.name, count(task.status_id)
from task join status on task.status_id = status.id
group by task.status_id 
order by count(task.status_id) desc;