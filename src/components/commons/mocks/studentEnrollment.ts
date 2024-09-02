import { Subject } from './subjectsData';

export const enrolledSubjects: Subject[] = [
  {
    id: '1',
    code: 'CS101',
    name: 'Programación',
    professor: 'Dr. Juan Pérez',
    section: 'A',
    blocks: [
      { day: 'Lunes', block: 'A' },
      { day: 'Lunes', block: 'B' },
    ],
  },
  {
    id: '3',
    code: 'PH201',
    name: 'Física II',
    professor: 'Dr. Carlos López',
    section: 'A',
    blocks: [
      { day: 'Lunes', block: 'C' },
      { day: 'Martes', block: 'D' },
    ],
  },
  {
    id: '5',
    code: 'MA202',
    name: 'Álgebra II',
    professor: 'Dr. Pedro Jiménez',
    section: 'A',
    blocks: [
      { day: 'Martes', block: 'E' },
      { day: 'Jueves', block: 'G' },
    ],
  },
];
