-- Create the Regions table
CREATE TABLE regions (
    region_id SERIAL PRIMARY KEY,
    region_name VARCHAR(255) NOT NULL
);

-- Create the Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    preferred_region_id INT REFERENCES regions(region_id)
);

-- Create the Categories table
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Create the Posts table
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text TEXT,
    user_id INT REFERENCES users(user_id),
    location VARCHAR(255),
    region_id INT REFERENCES regions(region_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the PostCategories table (Associative table)
CREATE TABLE post_categories (
    post_id INT REFERENCES posts(post_id),
    category_id INT REFERENCES categories(category_id),
    PRIMARY KEY (post_id, category_id)
);
