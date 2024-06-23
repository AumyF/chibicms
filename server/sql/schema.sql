create table post (
    id uuid primary key,
    created_at timestamp not null,
    content text not null
);
