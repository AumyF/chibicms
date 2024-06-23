import { Sql } from "postgres";

export const getPostQuery = `-- name: GetPost :one
select
    id, created_at, content
from
    post
where
    id = $1
limit
    1`;

export interface GetPostArgs {
    id: string;
}

export interface GetPostRow {
    id: string;
    createdAt: Date;
    content: string;
}

export async function getPost(sql: Sql, args: GetPostArgs): Promise<GetPostRow | null> {
    const rows = await sql.unsafe(getPostQuery, [args.id]).values();
    if (rows.length !== 1) {
        return null;
    }
    const row = rows[0];
    return {
        id: row[0],
        createdAt: row[1],
        content: row[2]
    };
}

export const listPostsQuery = `-- name: ListPosts :many
select
    id, created_at, content
from
    post
order by
    created_at`;

export interface ListPostsRow {
    id: string;
    createdAt: Date;
    content: string;
}

export async function listPosts(sql: Sql): Promise<ListPostsRow[]> {
    return (await sql.unsafe(listPostsQuery, []).values()).map(row => ({
        id: row[0],
        createdAt: row[1],
        content: row[2]
    }));
}

export const createPostQuery = `-- name: CreatePost :one
insert into
    post (id, created_at, content)
values
    ($1, $2, $3)
returning
    id, created_at, content`;

export interface CreatePostArgs {
    id: string;
    createdAt: Date;
    content: string;
}

export interface CreatePostRow {
    id: string;
    createdAt: Date;
    content: string;
}

export async function createPost(sql: Sql, args: CreatePostArgs): Promise<CreatePostRow | null> {
    const rows = await sql.unsafe(createPostQuery, [args.id, args.createdAt, args.content]).values();
    if (rows.length !== 1) {
        return null;
    }
    const row = rows[0];
    return {
        id: row[0],
        createdAt: row[1],
        content: row[2]
    };
}

export const updatePostQuery = `-- name: UpdatePost :exec
update post
set
    content = $2
where
    id = $1`;

export interface UpdatePostArgs {
    id: string;
    content: string;
}

export async function updatePost(sql: Sql, args: UpdatePostArgs): Promise<void> {
    await sql.unsafe(updatePostQuery, [args.id, args.content]);
}

export const deletePostQuery = `-- name: DeletePost :exec
delete from post
where
    id = $1`;

export interface DeletePostArgs {
    id: string;
}

export async function deletePost(sql: Sql, args: DeletePostArgs): Promise<void> {
    await sql.unsafe(deletePostQuery, [args.id]);
}

