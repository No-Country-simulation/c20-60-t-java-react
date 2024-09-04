-- Creación de tablas
CREATE TABLE mascota (
  id SERIAL,
  nombre VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE DEFAULT NOW(),
  tamanio VARCHAR(25) NOT NULL,
  peso INT NOT NULL,
  raza VARCHAR(100),
  descripcion TEXT,
  observacion TEXT,
  vacunado BOOLEAN DEFAULT FALSE,
  esteriliza BOOLEAN DEFAULT FALSE,
  refugio_nombre TEXT NOT NULL
);

CREATE TABLE refugio (
  nombre TEXT NOT NULL,
  direccion TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono INT NOT NULL
);

CREATE TABLE imagen (
  id SERIAL,
  url TEXT NOT NULL,
  orden INT NOT NULL,
  mascota_id INT NOT NULL
);

CREATE TABLE peticion (
  id SERIAL,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono INT NOT NULL,
  mascota_id INT NOT NULL
);

-- Creacion de PK's y FK's
ALTER TABLE refugio ADD PRIMARY KEY (nombre);

ALTER TABLE mascota ADD PRIMARY KEY (id);
ALTER TABLE mascota ADD CONSTRAINT mascota_refugio_fk FOREIGN KEY (refugio_nombre) REFERENCES refugio (nombre) ON DELETE CASCADE;

ALTER TABLE imagen ADD PRIMARY KEY (id);
ALTER TABLE imagen ADD CONSTRAINT imagen_mascota_fk FOREIGN KEY (mascota_id) REFERENCES mascota (id) ON DELETE CASCADE;

ALTER TABLE peticion ADD PRIMARY KEY (id);
ALTER TABLE peticion ADD CONSTRAINT peticion_mascota_fk FOREIGN KEY (mascota_id) REFERENCES mascota (id) ON DELETE CASCADE;

-- SEED TABLES
INSERT INTO refugio (nombre, direccion, email, telefono)
VALUES ('patitas peludas', 'buenos aires, capital', 'patitas@gmail.com', 1122334452);

INSERT INTO mascota (nombre, tamanio, peso, raza, refugio_nombre) VALUES
('Roco', 'pequeño', 23, 'labrador', 'patitas peludas'),
('Ramnses', 'grande', 35, 'gran danes', 'patitas peludas'),
('Bianca', 'pequeño', 8, 'caniche', 'patitas peludas');

