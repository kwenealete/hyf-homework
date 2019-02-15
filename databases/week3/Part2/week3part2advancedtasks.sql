### creating name index

create index name_index
on student(name);

##### Adding new column to table 

alter table class
add column status enum('closed','started','completed');