import { useEffect, useState } from "react";
import { scheduleService } from "../../../services/student/student.service";
import { Block, Subject } from "../../../commons/subjects.types";
import { scheduleStyles } from "./schedulePage.styles";
import { timeBlocks } from "../../../commons/timeBlocks";
import Cookies from 'js-cookie';

const SchedulePage: React.FC = () => {
	const [schedule, setSchedule] = useState<Subject[]>([]); // Initialize as an empty array
	const [selectedSubject, setSelectedSubject] = useState<Subject>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const accessToken = Cookies.get('token') || '';

	useEffect(() => {
		const fetchSchedule = async () => {
			setLoading(true);
			setError(null);
			const payload = {
				token: accessToken
			};
			const response = await scheduleService(payload);
			console.log(response); // Log the response data for debugging

			if (response.success) {
				if (Array.isArray(response.data)) { // Ensure the data is an array
					setSchedule(response.data);
				} else {
					setError('Unexpected data format'); // Handle unexpected format
				}
			} else {
				setError(response.error ?? null);
			}
			setLoading(false);
		};

		fetchSchedule();
	}, []);

	const handleClickBlock = (subject: Subject) => {
		setSelectedSubject(subject);
	};

	const closeOverlay = () => {
		setSelectedSubject(undefined);
	};

	return (
		<div style={scheduleStyles.container}>
			<header style={scheduleStyles.header as React.CSSProperties}>
				<h1>Horario</h1>
			</header>

			{loading && <p>Cargando horario...</p>}
			{error && <p>Error al cargar el horario: {error}</p>}

			{!loading && !error && (
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
			)}

			{selectedSubject && (
				<div style={scheduleStyles.overlay as React.CSSProperties}>
					<div style={scheduleStyles.overlayContent as React.CSSProperties}>
						<h2>{selectedSubject.name}</h2>
						<p>Profesor: {selectedSubject.professor}</p>
						<p>Código: {selectedSubject.code}</p>
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

const generateScheduleRows = (schedule: Subject[], handleClickBlock: any) => {
	return timeBlocks.map(({ label, start, end }) => (
		<tr key={label}>
			<td style={scheduleStyles.scheduleTableCell}>{`${label} (${start}-${end})`}</td>
			{['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day) => {
				const classBlock = schedule.find((subject: Subject) =>
					subject.blocks?.find((block: Block) => block.block === label && block.day === day)
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

export default SchedulePage;
