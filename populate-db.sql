CREATE TABLE "Courses"
(
    id       integer not null
        constraint id
            primary key autoincrement,
    major_id integer not null,
    name     text    not null
);

CREATE TABLE "Friends"
(
    user_a_id integer not null
        constraint Friend_A
            references Users,
    user_b_id integer not null
        constraint Friend_B
            references Users,
    accepted  integer not null,
    id        integer not null
        constraint id
            primary key autoincrement,
    constraint users
        unique (user_a_id, user_b_id)
);

CREATE TABLE Majors
(
    id   integer not null
        constraint id
            primary key autoincrement,
    name text    not null
);

CREATE TABLE Messages
(
    id        integer not null
        constraint id
            primary key autoincrement,
    content   text    not null,
    timestamp integer not null,
    sender_id integer not null
        constraint sender_id
            references Users,
    friend_id integer not null
        constraint friend_id
            references Friends (id)
    opened    integer not null,
);

CREATE TABLE User_Courses
(
    user_id   integer not null,
    course_id integer not null,
    constraint id
        primary key (user_id, course_id)
);

CREATE TABLE "Users"
(
    id         integer not null
        constraint id
            primary key autoincrement,
    first_name text    not null,
    last_name  text    not null,
    birth_date integer not null,
    email      text    not null,
    major_id   integer not null
        constraint major_id
            references Majors,
    hobbies    text    not null
    , photo_path text not null
)