-- name: GetPost :one
select
    *
from
    post
where
    id = $1
limit
    1;

-- name: ListPosts :many
select
    *
from
    post
order by
    created_at;

-- name: CreatePost :one
insert into
    post (id, created_at, content)
values
    ($1, $2, $3)
returning
    *;

-- name: UpdatePost :exec
update post
set
    content = $2
where
    id = $1;

-- name: DeletePost :exec
delete from post
where
    id = $1;
