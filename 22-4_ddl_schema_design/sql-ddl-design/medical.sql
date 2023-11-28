CREATE TABLE Doctor (
    doctor_id SERIAL PRIMARY KEY,
    doctor_name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255),
    contact_details VARCHAR(255)
);

CREATE TABLE Patient (
    patient_id SERIAL PRIMARY KEY,
    patient_name VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    contact_details VARCHAR(255)
);

CREATE TABLE Visit (
    visit_id SERIAL PRIMARY KEY,
    doctor_id INT REFERENCES Doctor(doctor_id),
    patient_id INT REFERENCES Patient(patient_id),
    visit_date DATE,
    diagnosis VARCHAR(255),
    treatment VARCHAR(255)
);

CREATE TABLE Disease (
    disease_id SERIAL PRIMARY KEY,
    disease_name VARCHAR(255) NOT NULL,
    description TEXT,
    treatment VARCHAR(255)
);

CREATE TABLE Diagnosis (
    diagnosis_id SERIAL PRIMARY KEY,
    visit_id INT REFERENCES Visit(visit_id),
    disease_id INT REFERENCES Disease(disease_id),
    severity VARCHAR(50),
    notes TEXT
);
