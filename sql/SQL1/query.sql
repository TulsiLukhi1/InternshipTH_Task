select stu.student_id ,stu.student_name,sub.subject_name,count(exm.subject_name) as attended_exams
from Students as stu
cross join 
Subjects as sub
left join Examinations as exm on 
stu.student_id = exm.student_id and sub.subject_name = exm.subject_name
group by stu.student_id,sub.subject_name
order by stu.student_id, sub.subject_name