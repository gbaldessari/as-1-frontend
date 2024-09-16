import { useState } from "react";
import { timeBlocks } from "../../../commons/timeBlocks";
import { ejemploHorarios } from "../../../commons/mocks/ejemploHorarios";
import { scheduleStyles } from "./schedule.styles";
import { Block, Subject } from "../../../commons/subjects.types";

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
        <div style={scheduleStyles.container}>
            <div style={scheduleStyles.bar as React.CSSProperties}>
                <h1>Horario</h1>
            </div>
            <section style={scheduleStyles.scheduleArea}>
                <table style={scheduleStyles.scheduleTable}>
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>Bloque</th>
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
                <div style={scheduleStyles.overlay as React.CSSProperties}>
                    <div style={scheduleStyles.overlayContent as React.CSSProperties}>
                        <h2>{selectedSubject.name}</h2>
                        <p>Profesor: {selectedSubject.professor}</p>
                        <p>Código: {selectedSubject.code}</p>
                        <p>Sección: {selectedSubject.section}</p>
                        <button
                            style={scheduleStyles.overlayButton as React.CSSProperties}
                            onClick={closeOverlay}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = scheduleStyles.overlayButtonHover.backgroundColor)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = scheduleStyles.overlayButton.backgroundColor)
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
            <td style={scheduleStyles.scheduleTableCell}>{`${label} (${start}-${end})`}</td>
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day) => {
                const classBlock = schedule?.find((subject: Subject) =>
                    subject.blocks.find((block: Block) => block.block === label && block.day === day)
                );
                return (
                    <td
                        key={day}
                        style={classBlock ? { ...scheduleStyles.scheduleTableCell, ...scheduleStyles.classBlockCell } : scheduleStyles.scheduleTableCell}
                        onClick={() => classBlock && handleClickBlock(classBlock)}
                    >
                        {classBlock ? classBlock.name : ''}
                    </td>
                );
            })}
        </tr>
    ));
};
