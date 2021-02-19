/* Schema Design */

/* user */
CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone BIGINT NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE,
    handle VARCHAR(30) NOT NULL UNIQUE,
    bio VARCHAR(150),
    is_verified BOOLEAN DEFAULT false,
    is_public BOOLEAN DEFAULT true 
);

CREATE TABLE IF NOT EXISTS user_follower (
    user_id VARCHAR(255) NOT NULL,
    follower_id VARCHAR(255) NOT NULL,
    is_accepted BOOLEAN DEFAULT false,
    PRIMARY KEY (user_id,follower_id),
    INDEX (user_id)   
);

/* POST */
CREATE TABLE IF NOT EXISTS post (
    id VARCHAR(255) PRIMARY KEY,
    created_at DATETIME NOT NULL,
    author_id VARCHAR(80) NOT NULL,
    description VARCHAR(255),
    p_img_url VARCHAR(255) NOT NULL,
    INDEX (author_id)
); 

/* User Following */
CREATE TABLE IF NOT EXISTS user_following (
    u_id VARCHAR(255) NOT NULL,
    following_id VARCHAR(255) NOT NULL,
    PRIMARY KEY (u_id, following_id),
    INDEX (u_id)
);

/* Comments */
CREATE TABLE IF NOT EXISTS comments (
    id VARCHAR(255) PRIMARY KEY,
    created_at DATETIME NOT NULL,
    post_id VARCHAR(255) NOT NULL,
    author_id VARCHAR(255) NOT NULL,
    description LONGTEXT NOT NULL,
    INDEX (post_id)
);