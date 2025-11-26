CREATE DATABASE	accidentesFasecolda;

USE accidentesFasecolda;

CREATE TABLE accidentes(
	idAccidente INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	placa VARCHAR(50) NOT NULL,
	fecha DATE NOT NULL,
	severidad VARCHAR(50) NOT NULL ,
	muertos INT NOT NULL,
	heridos INT NOT NULL
);


INSERT INTO accidentes (placa, fecha, severidad, muertos, heridos)
VALUES
('ABC123', '2025-01-10', 'soloLatas', 0, 0),
('XYZ789', '2025-02-05', 'heridos', 0, 2),
('ABC123', '2025-03-15', 'muertos', 1, 0),
('XYZ789', '2025-04-20', 'heridos', 0, 3),
('ABC123', '2025-05-25', 'soloLatas', 0, 0);

SELECT 
    placa,
    severidad,
    COUNT(*) AS total_accidentes,
    SUM(heridos) AS total_heridos,
    SUM(muertos) AS total_muertos
FROM accidentes
WHERE placa = 'XYZ789'  
GROUP BY placa, severidad
ORDER BY severidad;



CREATE DATABASE validaciones;

USE validaciones;

CREATE TABLE cotizaciones(
	idCotizacion INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	placa VARCHAR(50) NOT NULL,
	ccCliente INT NOT NULL,
	resultado VARCHAR(50) NOT NULL
);


select * from cotizaciones;

