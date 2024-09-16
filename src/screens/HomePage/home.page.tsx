import React, { useState } from 'react';
import { homeStyles } from './home.styles';
import { timeBlocks } from '../../commons/timeBlocks';
import { ejemploHorarios } from '../../commons/mocks/ejemploHorarios';
import { loginService } from '../../services/auth/auth.service';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const HomePage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const result = await loginService({ email, password });
            if (result.success) {
                Cookies.set('token', result.data.accessToken);
                navigator('/student/schedule');
            } else {
                console.error('Error en el login:', result.error);
            }
        } catch (error) {
            console.error('Error en handleSubmit:', error);
        }
    };
    return (

        <div style={homeStyles.container}>
            <nav style={homeStyles.homebar as React.CSSProperties}>
                <div style={homeStyles.logo as React.CSSProperties}>
                    <h1 style={{ marginBottom: '5rem' }}>Educa Nexo 2.0</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit} style={homeStyles.loginForm as React.CSSProperties}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={homeStyles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={homeStyles.input}
                        />
                        <button type="submit" style={homeStyles.button}>Login</button>
                    </form>
                </div>
            </nav>
            <header style={homeStyles.header}>
                <h1 style={homeStyles.headerTitle}>Gestión de Horarios Universitarios</h1>
                <p style={homeStyles.headerSubtitle}>
                    Organiza y visualiza tus horarios de clases de manera fácil y eficiente.
                </p>
            </header>
            <section style={homeStyles.schedulePreview}>
                <table style={homeStyles.scheduleTable}>
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
                        {generateScheduleRows(ejemploHorarios)}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

const generateScheduleRows = (schedule: any) => {
    return timeBlocks.map(({ label, start, end }) => (
        <tr key={label}>
            <td style={homeStyles.scheduleTableCell}>{`${label} (${start}-${end})`}</td>
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day) => {
                const classBlock = schedule?.find((subject: any) =>
                    subject.blocks.find((block: any) => block.block === label && block.day === day)
                );
                return (
                    <td key={day} style={classBlock ? { ...homeStyles.scheduleTableCell, ...homeStyles.classBlockCell } : homeStyles.scheduleTableCell}>
                        {classBlock ? classBlock.name : ''}
                    </td>
                );
            })}
        </tr>
    ));
};

export default HomePage;
