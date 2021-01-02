/* Schema Design */
CREATE TABLE IF NOT EXISTS user (
    uid VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone BIGINT NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE,
    handle VARCHAR(30) NOT NULL UNIQUE,
    bio VARCHAR(150),
    is_verified BOOLEAN DEFAULT false,
    is_public BOOLEAN DEFAULT true 
)

CREATE TABLE IF NOT EXISTS post (
    pid VARCHAR(255) PRIMARY KEY,
    created_at DATETIME NOT NULL,
    author_id INDEX NOT NULL CHAR,
    description 
)