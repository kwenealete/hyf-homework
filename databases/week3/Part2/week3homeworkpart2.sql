use studentClass;


 CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `start` DATETIME NOT NULL,
  `end` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` text NULL DEFAULT NULL,
  `phone` int(12) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_status` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


#####  class
insert into class(id, name, start, end) values(1, 'Engineering', now(), '2022-09-28');
insert into class(id, name, start, end) values(2, 'Medicine', now(), '2026-09-28');
insert into class(id, name, start, end) values(3, 'History', now(), '2022-09-28');
insert into class(id, name, start, end) values(4, 'Science', now(), '2022-11-23');
insert into class(id, name, start, end) values(5, 'Business Administration', now(), '2020-09-18');
insert into class(id, name, start, end) values(6, 'Accounting', now(), '2032-09-28');
insert into class(id, name, start, end) values(7, 'Data Science', now(), '2023-09-28');

### students
insert into student (id, name, email, phone, class_id) values (1, 'Monya', 'monya@example.com', '22211617', 1);
insert into student (id, name, email, phone, class_id) values (4, 'Peter', 'peter@example.com', '22215917', 7);