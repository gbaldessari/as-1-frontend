import React, { useState } from 'react';
import { Subject } from '../../../commons/subjects.types';
import { datosAsignaturas } from '../../../commons/mocks/datosAsignaturas';
import { projectionPageStyles } from './projection.styles';

const ProjectionPage: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [previewSubjects, setPreviewSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handleSubjectSelection = (subjectId: string) => {
    const selected = datosAsignaturas.find(subj => subj.id === subjectId) || null;
    setSelectedSubject(selected);

    if (selected && !previewSubjects.find(s => s.id === selected.id)) {
      setPreviewSubjects([selected]);
    }
  };

  const confirmPreviewSubject = () => {
    if (selectedSubject && !selectedSubjects.find(s => s.id === selectedSubject.id)) {
      setSelectedSubjects([...selectedSubjects, selectedSubject]);
    }
    setPreviewSubjects([]);
    setSelectedSubject(null);
  };

  const checkConflicts = () => {
    const blockUsage: { [key: string]: Subject[] } = {};

    [...selectedSubjects, ...previewSubjects].forEach(subject => {
      subject.blocks.forEach(({ day, block }) => {
        const key = `${day}-${block}`;
        if (!blockUsage[key]) {
          blockUsage[key] = [];
        }
        blockUsage[key].push(subject);
      });
    });

    for (let key in blockUsage) {
      if (blockUsage[key].length > 1) {
        return true;
      }
    }

    return false;
  };

  const isDisabledSubject = (subject: Subject) => {
    return (
      !!selectedSubjects.find(s => s.id === subject.id) ||
      !!selectedSubjects.find(s => s.code === subject.code)
    );
  };

  const renderScheduleTable = () => {
    const blocks: { [key: string]: Subject[] } = {};

    ['A', 'B', 'C', 'C2', 'D', 'E', 'F', 'G', 'H'].forEach(block => {
      ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].forEach(day => {
        blocks[`${day}-${block}`] = [];
      });
    });

    [...selectedSubjects, ...previewSubjects].forEach(subject => {
      subject.blocks.forEach(({ day, block }) => {
        blocks[`${day}-${block}`].push(subject);
      });
    });

    return (
      <table style={projectionPageStyles.scheduleTable as React.CSSProperties}>
        <thead>
          <tr>
            <th>Bloque</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
          </tr>
        </thead>
        <tbody>
          {['A', 'B', 'C', 'C2', 'D', 'E', 'F', 'G', 'H'].map(block => (
            <tr key={block}>
              <td>{block}</td>
              {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map(day => (
                <td key={day} style={projectionPageStyles.scheduleTableCell as React.CSSProperties}>
                  {blocks[`${day}-${block}`].length > 0
                    ? blocks[`${day}-${block}`].map(subj => (
                      <div key={subj.id}>
                        {subj.name} ({subj.section})
                      </div>
                    ))
                    : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const hasConflicts = checkConflicts();
  const canSaveSchedule = selectedSubjects.length > 0 && !hasConflicts;

  const saveSchedule = () => {
    console.log('Horario guardado:', selectedSubjects);
    alert('Horario guardado exitosamente.');
  };

  return (
    <div style={projectionPageStyles.container}>
      <div style={projectionPageStyles.header as React.CSSProperties}>
        <h2>{"Proyección de Horario"}</h2>
        <p>{"Selecciona las asignaturas para crear una proyección de horario"}</p>
        <div>
          <select
            value={selectedSubject?.id || ''}
            onChange={(e) => handleSubjectSelection(e.target.value)}
            style={projectionPageStyles.selectBox}
          >
            <option value="">Seleccionar asignatura</option>
            {datosAsignaturas.map(subject => (
              <option key={subject.id} value={subject.id} disabled={isDisabledSubject(subject)}>
                {subject.name} - {subject.section} ({subject.code})
              </option>
            ))}
          </select>
        </div>
      </div>

      {hasConflicts && (
        <div style={projectionPageStyles.error as React.CSSProperties}>
          Hay conflictos en los bloques seleccionados.
        </div>
      )}

      <div style={projectionPageStyles.scheduleArea as React.CSSProperties}>
        {renderScheduleTable()}
      </div>

      <button
        onClick={confirmPreviewSubject}
        disabled={!selectedSubject || previewSubjects.length === 0 || hasConflicts}
        style={{
          ...projectionPageStyles.button,
          ...(selectedSubject && previewSubjects.length > 0 && !hasConflicts
            ? {}
            : projectionPageStyles.buttonDisabled),
        }}
      >
        Guardar Proyección
      </button>

      <button
        onClick={saveSchedule}
        disabled={!canSaveSchedule}
        style={{
          ...projectionPageStyles.saveScheduleButton,
          ...(canSaveSchedule
            ? {}
            : projectionPageStyles.saveScheduleButtonDisabled),
        }}
      >
        Guardar Horario
      </button>
    </div>
  );
};

export default ProjectionPage;
