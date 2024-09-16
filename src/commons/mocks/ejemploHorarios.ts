import { Subject } from "../subjects.types";

export const ejemploHorarios: Subject[] = [
  {
    id: '1',
    code: 'PROG101',
    name: 'Programación',
    professor: 'Juan Pérez',
    section: 'A',
    blocks: [
      { day: 'Lunes', block: 'A' },
      { day: 'Lunes', block: 'B' },
    ],
  },
  {
    id: '3',
    code: 'MEC101',
    name: 'Mecánica',
    professor: 'Carlos López',
    section: 'A',
    blocks: [
      { day: 'Lunes', block: 'C' },
      { day: 'Martes', block: 'D' },
    ],
  },
  {
    id: '5',
      code: 'ALG201',
      name: 'Álgebra II',
      professor: 'Luis Martínez',
      section: 'A',
      blocks: [
        { day: 'Martes', block: 'E' },
        { day: 'Jueves', block: 'G' },
        { day: 'Jueves', block: 'F' },
      ],
  },
  {
    id: '7',
      code: 'QUIM101',
      name: 'Química',
      professor: 'Pedro Suárez',
      section: 'A',
      blocks: [
        { day: 'Miércoles', block: 'A' },
        { day: 'Viernes', block: 'B' },
      ],
  },
  {
    id: '9',
      code: 'CALC201',
      name: 'Cálculo II',
      professor: 'Sergio Fernández',
      section: 'A',
      blocks: [
        { day: 'Lunes', block: 'D' },
        { day: 'Miércoles', block: 'E' },
        { day: 'Viernes', block: 'D' },
      ],
  },
  {
    id: '11',
      code: 'COM101',
      name: 'Comunicación Efectiva',
      professor: 'Isabel Vega',
      section: 'A',
      blocks: [
        { day: 'Miércoles', block: 'C' },
      ],
  },
  {
    id: '13',
      code: 'DFC101',
      name: 'Diálogo, Fe y Cultura',
      professor: 'Juan García',
      section: 'A',
      blocks: [
        { day: 'Lunes', block: 'E' },
      ],
  },
  {
    id: '15',
      code: 'ING201',
      name: 'Inglés II',
      professor: 'Diego Castillo',
      section: 'A',
      blocks: [
        { day: 'Jueves', block: 'E' },
        { day: 'Miércoles', block: 'F' },
      ],
  }
];