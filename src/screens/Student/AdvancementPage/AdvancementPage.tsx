import React from 'react';
import { advancementPageStyles } from './advancementPage.styles';
import { avanceCurricular } from '../../../commons/mocks/avanceCurricular';

const AdvancementPage: React.FC<{}> = () => {
  const getAsignaturaStyle = (estado: string) => {
    switch (estado) {
      case 'Completado':
        return { ...advancementPageStyles.asignatura, backgroundColor: '#4CAF50' }; // Verde
      case 'En curso':
        return { ...advancementPageStyles.asignatura, backgroundColor: '#FFAA0A' }; // Amarillo
      default:
        return advancementPageStyles.asignatura; // Gris (pendiente)
    }
  };

  return (
    <div style={advancementPageStyles.pageContainer}>
      <div style={advancementPageStyles.header as React.CSSProperties}>
        <h1 style={advancementPageStyles.pageTitle}>Avance Curricular</h1>
      </div>

      <div style={advancementPageStyles.gridContainer}>
        {avanceCurricular.map((semestreData, index) => (
          <div style={advancementPageStyles.semestreColumn} key={index}>
            <h2 style={advancementPageStyles.semestreTitle}>Semestre {semestreData.semestre}</h2>
            {semestreData.asignaturas.map((asignatura, idx) => (
              <div style={getAsignaturaStyle(asignatura.estado)} key={idx}>
                <p style={advancementPageStyles.asignaturaText}><strong>{asignatura.curso}</strong></p>
                <p style={advancementPageStyles.asignaturaText}>Estado: {asignatura.estado}</p>
                <p style={advancementPageStyles.asignaturaText}>Créditos: {asignatura.créditos}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancementPage;