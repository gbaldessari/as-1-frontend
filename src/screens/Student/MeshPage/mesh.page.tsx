import React, { useState } from 'react';
import { mallaCurricular } from '../../../commons/mocks/mallaCurricular';
import { meshPageStyles } from './mesh.styles';

const MeshPage: React.FC<{}> = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [highlightedSubjects, setHighlightedSubjects] = useState<string[]>([]);

  const findDependentSubjects = (subjectCode: string, malla: typeof mallaCurricular): string[] => {
    let dependents: string[] = [];
    
    malla.forEach(semestreData => {
      semestreData.asignaturas.forEach(asignatura => {
        if (asignatura.prerequisitos.includes(subjectCode)) {
          dependents.push(asignatura.codigo); // Guardamos el código
          dependents = [...dependents, ...findDependentSubjects(asignatura.codigo, malla)];
        }
      });
    });

    return dependents;
  };

  const handleSubjectClick = (subjectCode: string) => {
    if (selectedSubject === subjectCode) {
      setSelectedSubject(null);
      setHighlightedSubjects([]);
    } else {
      setSelectedSubject(subjectCode);
      const allDependents = findDependentSubjects(subjectCode, mallaCurricular);
      setHighlightedSubjects([subjectCode, ...allDependents]);
    }
  };

  return (
    <div style={meshPageStyles.pageContainer}>
      <div style={meshPageStyles.header as React.CSSProperties}>
        <h1 style={meshPageStyles.pageTitle as React.CSSProperties}>Malla Curricular</h1>
      </div>
      
      <div style={meshPageStyles.gridContainer}>
        {mallaCurricular.map((semestreData, index) => (
          <div style={meshPageStyles.semestreColumn} key={index}>
            <h2 style={meshPageStyles.semestreTitle as React.CSSProperties}>Semestre {semestreData.semestre}</h2>
            {semestreData.asignaturas.map((asignatura, idx) => (
              <div
                key={idx}
                onClick={() => handleSubjectClick(asignatura.codigo)} // Usamos el código aquí
                style={{
                  ...meshPageStyles.asignatura,
                  backgroundColor: 
                    selectedSubject === asignatura.codigo 
                      ? '#FF5733'
                      : highlightedSubjects.includes(asignatura.codigo)
                        ? '#FFAA0A'
                        : '#555',
                }}
              >
                <p style={meshPageStyles.asignaturaText}><strong>{asignatura.curso}</strong></p>
                <p style={meshPageStyles.asignaturaText}>Créditos: {asignatura.créditos}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeshPage;
