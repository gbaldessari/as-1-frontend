export interface Subject {
    id: string;
    code: string;
    name: string;
    professor: string;
    section: string;
    blocks: { day: string; block: string }[];
  }
  
  export const subjects: Subject[] = [
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
      id: '2',
      code: 'CS101',
      name: 'Programación',
      professor: 'Dra. Maria González',
      section: 'B',
      blocks: [
        { day: 'Miércoles', block: 'C' },
        { day: 'Viernes', block: 'A' },
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
      id: '4',
      code: 'PH201',
      name: 'Física II',
      professor: 'Dr. Ana Ruiz',
      section: 'B',
      blocks: [
        { day: 'Jueves', block: 'E' },
        { day: 'Viernes', block: 'B' },
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
    {
      id: '6',
      code: 'MA202',
      name: 'Álgebra II',
      professor: 'Dra. Laura Mendez',
      section: 'B',
      blocks: [
        { day: 'Miércoles', block: 'F' },
        { day: 'Sábado', block: 'G' },
      ],
    },
    {
      id: '7',
      code: 'CH101',
      name: 'Química',
      professor: 'Dr. José Martínez',
      section: 'A',
      blocks: [
        { day: 'Martes', block: 'B' },
        { day: 'Jueves', block: 'C' },
      ],
    },
    {
      id: '8',
      code: 'EN102',
      name: 'Inglés II',
      professor: 'Dra. Carla Suárez',
      section: 'A',
      blocks: [
        { day: 'Viernes', block: 'A' },
        { day: 'Sábado', block: 'F' },
      ],
    },
  ];
  