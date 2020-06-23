-- SQLite
select 
  posts.*,
  users.id,
  users.email

  from posts
    join users on posts.user_id = users.id