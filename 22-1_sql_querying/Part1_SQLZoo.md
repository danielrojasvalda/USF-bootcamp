## SQL Exercise

### Part 0 SELECT basics

#### 1. The example uses a WHERE clause to show the population of 'France'. Note that strings should be in 'single quotes';
        SELECT population FROM world
          WHERE name = 'Germany';

#### 2. Checking a list The word IN allows us to check if an item is in a list. The example shows the name and population for the countries 'Brazil', 'Russia', 'India' and 'China'.
        SELECT name, population FROM world
          WHERE name IN ('Sweden', 'Norway', 'Denmark');

#### 3. Which countries are not too small and not too big? BETWEEN allows range checking (range specified is inclusive of boundary values). The example below shows countries with an area of 250,000-300,000 sq. km. Modify it to show the country and the area for countries with an area between 200,000 and 250,000.
        SELECT name, area FROM world 
          WHERE area BETWEEN 200000 AND 250000;

### Part 1 SELECT name

#### 1. You can use WHERE name LIKE 'B%' to find the countries that start with "B". The % is a wild-card it can match any characters. Find the country that start with Y
        SELECT name FROM world
          WHERE name LIKE 'Y%';

#### 2. Find the countries that end with y
        SELECT name FROM world
          WHERE name LIKE '%y';

#### 3. Luxembourg has an x - so does one other country. List them both. Find the countries that contain the letter x
        SELECT name FROM world
          WHERE name LIKE '%x%'

#### 4. Iceland, Switzerland end with land - but are there others? Find the countries that end with land
        SELECT name FROM world
          WHERE name LIKE '%land'

#### 5. Columbia starts with a C and ends with ia - there are two more like this. Find the countries that start with C and end with ia
        SELECT name FROM world
          WHERE name LIKE 'C%' and name LIKE '%ia'

#### 6. Greece has a double e - who has a double o? Find the country that has oo in the name
        SELECT name FROM world
          WHERE name LIKE '%oo%'

#### 7. Bahamas has three a - who else? Find the countries that have three or more a in the name
        SELECT name
          FROM world
          WHERE LEN(name) - LEN(REPLACE(name, 'a', '')) >= 3;

#### 8. India and Angola have an n as the second character. You can use the underscore as a single character wildcard. SELECT name FROM world WHERE name LIKE '_n%' ORDER BY name. Find the countries that have "t" as the second character.
        SELECT name FROM world
          WHERE name LIKE '_t%'
          ORDER BY name

#### 9. Lesotho and Moldova both have two o characters separated by two other characters. Find the countries that have two "o" characters separated by two others.
        SELECT name
          FROM world
          WHERE name LIKE '%o__o%';

#### 10. Cuba and Togo have four characters names.
Find the countries that have exactly four characters.
        SELECT name
          FROM world
          WHERE LEN(name) = 4;

#### 11. The capital of Luxembourg is Luxembourg. Show all the countries where the capital is the same as the name of the country Find the country where the name is the capital city.
        SELECT name, capital
          FROM world
          WHERE name = capital;

#### 12. The capital of Mexico is Mexico City. Show all the countries where the capital has the country together with the word "City". Find the country where the capital is the country plus "City".
        SELECT name, capital
          FROM world
          WHERE capital LIKE CONCAT(name, ' City');

#### 13. Find the capital and the name where the capital includes the name of the country.
        SELECT name, capital
          FROM world
          WHERE capital LIKE CONCAT('%', name, '%');

### Part 2 SELECT from World

#### 1. Read the notes about this table. Observe the result of running this SQL command to show the name, continent and population of all countries.
        SELECT name, continent, population FROM world;

#### 2. How to use WHERE to filter records. Show the name for the countries that have a population of at least 200 million. 200 million is 200000000, there are eight zeros.
        SELECT name FROM world
          WHERE population >= 200000000;

#### 3. Give the name and the per capita GDP for those countries with a population of at least 200 million.
        SELECT name, gdp/population
          FROM world
          WHERE population >= 200000000;

#### 4. Show the name and population in millions for the countries of the continent 'South America'. Divide the population by 1000000 to get population in millions.
        SELECT name, population / 1000000 AS population_in_millions
          FROM world
          WHERE continent = 'South America';

#### 5. Show the name and population for France, Germany, Italy
        SELECT name, population
          FROM world
          WHERE name IN ('France', 'Germany', 'Italy');

#### 6. Show the countries which have a name that includes the word 'United'
        SELECT name
          FROM world
          WHERE name LIKE '%United%';

#### 7. Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million. Show the countries that are big by area or big by population. Show name, population and area.
        SELECT name, population, area
          FROM world
          WHERE area > 3000000 OR population > 250000000;

#### 8. Exclusive OR (XOR). Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. Show name, population and area. Australia has a big area but a small population, it should be included .Indonesia has a big population but a small area, it should be included. China has a big population and big area, it should be excluded. United Kingdom has a small population and a small area, it should be excluded
        SELECT name, population, area
          FROM world
          WHERE (area > 3000000) OR (population > 250000000);

#### 9. Show the name and population in millions and the GDP in billions for the countries of the continent 'South America'. Use the ROUND function to show the values to two decimal places. For Americas show population in millions and GDP in billions both to 2 decimal places. Millions and billions Missing decimals
        SELECT name, ROUND(population / 1000000.0, 2) AS population_in_millions,
            ROUND(gdp / 1000000000.0, 2) AS gdp_in_billions
          FROM world
          WHERE continent = 'South America' OR continent = 'Americas';

#### 10. Show the name and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros). Round this value to the nearest 1000. Show per-capita GDP for the trillion dollar countries to the nearest $1000.
      
        SELECT name,
            ROUND(gdp / population * 1000, -3) AS per_capita_gdp
          FROM world
          WHERE gdp >= 1000000000000;

#### 11. Greece has capital Athens. Each of the strings 'Greece', and 'Athens' has 6 characters. Show the name and capital where the name and the capital have the same number of characters. You can use the LENGTH function to find the number of characters in a string For Microsoft SQL Server the function LENGTH is LEN      
      SELECT name, capital
        FROM world
        WHERE LENGTH(name) = LENGTH(capital);

#### 12. The capital of Sweden is Stockholm. Both words start with the letter 'S'. Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word. You can use the function LEFT to isolate the first character. You can use <> as the NOT EQUALS operator.
      SELECT name, capital
        FROM world
        WHERE LEFT(name, 1) = LEFT(capital, 1)
        AND name <> capital;
#### 13. Equatorial Guinea and Dominican Republic have all of the vowels (a e i o u) in the name. They don't count because they have more than one word in the name. Find the country that has all the vowels and no spaces in its name. You can use the phrase name NOT LIKE '%a%' to exclude characters from your results. The query shown misses countries like Bahamas and Belarus because they contain at least one 'a'
      SELECT name
        FROM world
        WHERE
          name LIKE '%a%' AND
          name LIKE '%e%' AND
          name LIKE '%i%' AND
          name LIKE '%o%' AND
          name LIKE '%u%' AND
          name NOT LIKE '% %';

### Part 3 SELECT from Nobel Tutorial

#### 1. Change the query shown so that it displays Nobel prizes for 1950.
      SELECT yr, subject, winner
        FROM nobel
        WHERE yr = 1950

#### 2. Show who won the 1962 prize for literature.
      SELECT winner
        FROM nobel
        WHERE yr = 1962
        AND subject = 'literature'

#### 3. Show the year and subject that won 'Albert Einstein' his prize.
      SELECT yr, subject 
        FROM nobel
        WHERE winner = 'Albert Einstein' 

#### 4. Give the name of the 'peace' winners since the year 2000, including 2000.
      SELECT winner
        FROM nobel
        WHERE subject = 'peace' AND yr >= 2000;

#### 5. Show all details (yr, subject, winner) of the literature prize winners for 1980 to 1989 inclusive.
      SELECT yr, subject, winner
        FROM nobel
        WHERE subject = 'literature' AND yr BETWEEN 1980 AND 1989;

#### 6. Show all details of the presidential winners: Theodore Roosevelt, Thomas Woodrow Wilson, Jimmy Carter, Barack Obama
      SELECT *
        FROM nobel
        WHERE winner IN ('Theodore Roosevelt', 'Woodrow Wilson', 'Jimmy Carter', 'Barack Obama');

#### 7. Show the winners with first name John
      SELECT winner
        FROM nobel
        WHERE winner like 'John%'

#### 8. Show the year, subject, and name of physics winners for 1980 together with the chemistry winners for 1984.
      SELECT yr, subject, winner
        FROM nobel
        WHERE (subject = 'physics' AND yr = 1980)
        OR (subject = 'chemistry' AND yr = 1984);

#### 9. Show the year, subject, and name of winners for 1980 excluding chemistry and medicine
      SELECT yr, subject, winner
        FROM nobel
        WHERE yr = 1980
        AND subject NOT IN ('chemistry', 'medicine');

#### 10. Show year, subject, and name of people who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004)
      SELECT yr, subject, winner
        FROM nobel
        WHERE (subject = 'Medicine' AND yr < 1910)
        OR (subject = 'Literature' AND yr >= 2004);

#### 11. Find all details of the prize won by PETER GRÜNBERG
      SELECT *
        FROM nobel
        WHERE winner = 'Peter Grünberg';

#### 12. Find all details of the prize won by EUGENE O'NEILL
      SELECT *
        FROM nobel
        WHERE winner = 'Eugene O''Neill';

#### 13. Knights in order List the winners, year and subject where the winner starts with Sir. Show the the most recent first, then by name order.
      SELECT winner, yr, subject
        FROM nobel
        WHERE winner LIKE 'Sir%'
        ORDER BY yr DESC, winner;

#### 14. The expression subject IN ('chemistry','physics') can be used as a value - it will be 0 or 1. Show the 1984 winners and subject ordered by subject and winner name; but list chemistry and physics last.
      SELECT winner, subject
        FROM nobel
        WHERE yr = 1984
        ORDER BY 
        CASE WHEN subject IN ('chemistry', 'physics') THEN 1 ELSE 0 END,
        subject,winner

