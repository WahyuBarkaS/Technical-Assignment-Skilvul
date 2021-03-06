create database skilvul_music_streaming;

use skilvul_music_streaming;

-- create user
CREATE TABLE user(
    user_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    password varchar(255) NOT NULL
);

-- create singer
CREATE TABLE singer(
    singer_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL
);

-- create album
CREATE TABLE album(
    album_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    singer_id int NOT NULL,
    CONSTRAINT fk_album_singer_id FOREIGN KEY(singer_id) REFERENCES singer(singer_id)
);

-- create track
CREATE TABLE track(
    track_id int AUTO_INCREMENT PRIMARY KEY,
    title varchar(255) NOT NULL,
    singer_id int NOT NULL,
    album_id int NOT NULL,
    CONSTRAINT fk_track_singer_id FOREIGN KEY(singer_id) REFERENCES singer(singer_id),
    CONSTRAINT fk_track_album_id FOREIGN KEY(album_id) REFERENCES album(album_id)
);

-- create playlist
CREATE TABLE playlist(
    playlist_id int AUTO_INCREMENT PRIMARY KEY,
    user_id int NOT NULL,
    CONSTRAINT fk_playlist_user_id FOREIGN KEY(user_id) REFERENCES user(user_id)
);

-- create playlist_track
CREATE TABLE playlist_track(
    playlist_id int NOT NULL,
    track_id int NOT NULL,
    CONSTRAINT fk_playlist_track_playlist FOREIGN KEY(playlist_id) REFERENCES playlist(playlist_id),
    CONSTRAINT fk_playlist_track_track FOREIGN KEY(track_id) REFERENCES track(track_id)
);