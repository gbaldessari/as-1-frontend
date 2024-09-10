import { useState } from "react";
import { timeBlocks } from "../../commons/commonComponents";
import { ejemploHorarios } from "../../commons/ejemploHorarios";
import { schedulePageStyles } from "./schedule.page.styles";
import { Block, Subject } from "../../commons/subjects.types";

const SchedulePage: React.FC = () => {
    const [schedule, setSchedule] = useState(ejemploHorarios);
    const [selectedSubject, setSelectedSubject] = useState<Subject>();

    const handleClickBlock = (subject: Subject) => {
        setSelectedSubject(subject);
    };

    const closeOverlay = () => {
        setSelectedSubject(undefined);
    };

    return (
        <div style={schedulePageStyles.container}>
            <section style={schedulePageStyles.scheduleArea}>
                <table style={schedulePageStyles.scheduleTable}>
                    <thead>
                        <tr>
                            <th style={{width: '10%'}}>Bloque</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miércoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Sábado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateScheduleRows(schedule, handleClickBlock)}
                    </tbody>
                </table>
            </section>
            {selectedSubject && (
                <div style={schedulePageStyles.overlay as React.CSSProperties}>
                <div style={schedulePageStyles.overlayContent as React.CSSProperties}>
                    <h2>{selectedSubject.name}</h2>
                    <p>Profesor: {selectedSubject.professor}</p>
                    <p>Código: {selectedSubject.code}</p>
                    <p>Sección: {selectedSubject.section}</p>
                    <button
                        style={schedulePageStyles.overlayButton as React.CSSProperties}
                        onClick={closeOverlay}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = schedulePageStyles.overlayButtonHover.backgroundColor)
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = schedulePageStyles.overlayButton.backgroundColor)
                        }
                    >
                        Cerrar
                    </button>
                </div>
            </div>
            )}
        </div>
    );
};

export default SchedulePage;

const generateScheduleRows = (schedule: any, handleClickBlock: any) => {
    return timeBlocks.map(({ label, start, end }) => (
        <tr key={label}>
            <td style={schedulePageStyles.scheduleTableCell}>{`${label} (${start}-${end})`}</td>
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day) => {
                const classBlock = schedule?.find((subject: Subject) =>
                    subject.blocks.find((block: Block) => block.block === label && block.day === day)
                );
                return (
                    <td
                        key={day}
                        style={classBlock ? { ...schedulePageStyles.scheduleTableCell, ...schedulePageStyles.classBlockCell } : schedulePageStyles.scheduleTableCell}
                        onClick={() => classBlock && handleClickBlock(classBlock)}
                    >
                        {classBlock ? classBlock.name : ''}
                    </td>
                );
            })}
        </tr>
    ));
};
