-- Create the Teams table
CREATE TABLE Teams (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(255) NOT NULL
);

-- Create the Referees table
CREATE TABLE Referees (
    referee_id SERIAL PRIMARY KEY,
    referee_name VARCHAR(255) NOT NULL
);

-- Create the Players table
CREATE TABLE Players (
    player_id SERIAL PRIMARY KEY,
    player_name VARCHAR(255) NOT NULL,
    team_id INT REFERENCES Teams(team_id)
);

-- Create the Goals table
CREATE TABLE Goals (
    goal_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES Players(player_id),
    match_id INT REFERENCES Matches(match_id),
    goal_time INT NOT NULL
);

-- Create the Lineups table
CREATE TABLE Lineups (
    lineup_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES Players(player_id),
    match_id INT REFERENCES Matches(match_id),
    is_starter BOOLEAN NOT NULL
);

-- Create the Matches table
CREATE TABLE Matches (
    match_id SERIAL PRIMARY KEY,
    home_team_id INT REFERENCES Teams(team_id),
    away_team_id INT REFERENCES Teams(team_id),
    match_date DATE NOT NULL,
    referee_id INT REFERENCES Referees(referee_id)
);

-- Create the Results table
CREATE TABLE Results (
    result_id SERIAL PRIMARY KEY,
    match_id INT REFERENCES Matches(match_id),
    home_team_goals INT NOT NULL,
    away_team_goals INT NOT NULL
);

-- Create the Seasons table
CREATE TABLE Seasons (
    season_id SERIAL PRIMARY KEY,
    season_name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);
