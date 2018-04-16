CREATE TABLE links(
  id serial,
  url character varying(1000), 
  tag character varying(50)
);

-- CREATE TABLE habitats(
--   id serial,
--   name character varying(50),
--   climate character varying(50),
--   temperature int
-- );

-- CREATE TABLE lives(
--   id serial,
--   monster character varying(50),
--   habitat character varying(50)
-- );

INSERT INTO links(url, tag)
VALUES 
('fluffy', 'aggressive'),
-- ('dodil', 'slippery'),
-- ('zebra', 'transparent'),
-- ('saiga', 'patient');

-- INSERT INTO habitats(name, climate, temperature)
-- VALUES 
-- ('desert', 'dry', 98),
-- ('tundra', 'frozen', 2),
-- ('plains', 'hot', 112),
-- ('bay', 'temperate', 75);

-- INSERT INTO lives(monster, habitat)
-- VALUES 
-- ('fluffy', 'tundra'),
-- ('dodil', 'plains'),
-- ('saiga', 'bay'),
-- ('zebra', 'desert');
