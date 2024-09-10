import React, { useState } from 'react';
import { Subject } from '../../commons/subjects.types';
import { subjects } from '../../commons/subjectsData';
import { projectionPageStyles } from './projection.page.styles';

const ProjectionPage: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [previewSubjects, setPreviewSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handleSubjectSelection = (subjectId: string) => {
    const selected = subjects.find(subj => subj.id === subjectId) || null;
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

    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].forEach(block => {
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
      <table style={projectionPageStyles.scheduleTable}>
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
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(block => (
            <tr key={block}>
              <td>{block}</td>
              {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map(day => (
                <td key={day} style={projectionPageStyles.scheduleTableCell}>
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

  return (
    <div style={projectionPageStyles.container}>
      <div style={projectionPageStyles.header}>
        <h2>Proyección de Horario</h2>
        <p>Selecciona las asignaturas para crear un horario proyectado</p>
      </div>

      <div>
        <select
          value={selectedSubject?.id || ''}
          onChange={(e) => handleSubjectSelection(e.target.value)}
        >
          <option value="">Seleccionar asignatura</option>
          {subjects.map(subject => (
            <option key={subject.id} value={subject.id} disabled={isDisabledSubject(subject)}>
              {subject.name} - {subject.section} ({subject.code})
            </option>
          ))}
        </select>
      </div>

      {hasConflicts && (
        <div style={projectionPageStyles.error}>
          Hay conflictos en los bloques seleccionados.
        </div>
      )}

      <div style={projectionPageStyles.scheduleArea}>
        {renderScheduleTable()}
      </div>

      <button
        onClick={confirmPreviewSubject}
        disabled={!selectedSubject || previewSubjects.length === 0 || hasConflicts}
      >
        Guardar Proyección
      </button>

      <button
        onClick={() => setSelectedSubjects([...selectedSubjects, ...previewSubjects])}
        disabled={hasConflicts || selectedSubjects.length === 0}
      >
        Guardar Horario
      </button>
    </div>
  );
};

export default ProjectionPage;
