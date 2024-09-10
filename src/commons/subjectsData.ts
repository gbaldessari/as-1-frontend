import { Subject } from "./subjects.types";

export const subjects: Subject[] = [
    {
      id: '1',
      code: 'PROG101',
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
      code: 'PROG101',
      name: 'Programación',
      professor: 'Dra. María Sánchez',
      section: 'B',
      blocks: [
        { day: 'Martes', block: 'C' },
        { day: 'Martes', block: 'D' },
      ],
    },
    {
      id: '3',
      code: 'MEC101',
      name: 'Mecánica',
      professor: 'Dr. Carlos López',
      section: 'A',
      blocks: [
        { day: 'Lunes', block: 'C' },
        { day: 'Martes', block: 'D' },
      ],
    },
    {
      id: '4',
      code: 'MEC101',
      name: 'Mecánica',
      professor: 'Dra. Patricia Romero',
      section: 'B',
      blocks: [
        { day: 'Miércoles', block: 'E' },
        { day: 'Viernes', block: 'F' },
      ],
    },
    {
      id: '5',
      code: 'ALG201',
      name: 'Álgebra II',
      professor: 'Dr. Luis Martínez',
      section: 'A',
      blocks: [
        { day: 'Martes', block: 'E' },
        { day: 'Jueves', block: 'G' },
        { day: 'Jueves', block: 'F' },
      ],
    },
    {
      id: '6',
      code: 'ALG201',
      name: 'Álgebra II',
      professor: 'Dra. Laura Gómez',
      section: 'B',
      blocks: [
        { day: 'Lunes', block: 'A' },
        { day: 'Lunes', block: 'B' },
        { day: 'Martes', block: 'B' },
      ],
    },
    {
      id: '7',
      code: 'QUIM101',
      name: 'Química',
      professor: 'Dr. Pedro Suárez',
      section: 'A',
      blocks: [
        { day: 'Miércoles', block: 'A' },
        { day: 'Viernes', block: 'B' },
      ],
    },
    {
      id: '8',
      code: 'QUIM101',
      name: 'Química',
      professor: 'Dra. Carla Rivas',
      section: 'B',
      blocks: [
        { day: 'Jueves', block: 'C' },
        { day: 'Viernes', block: 'D' },
      ],
    },
    {
      id: '9',
      code: 'CALC201',
      name: 'Cálculo II',
      professor: 'Dr. Sergio Fernández',
      section: 'A',
      blocks: [
        { day: 'Lunes', block: 'D' },
        { day: 'Miércoles', block: 'E' },
        { day: 'Viernes', block: 'D' },
      ],
    },
    {
      id: '10',
      code: 'CALC201',
      name: 'Cálculo II',
      professor: 'Dra. Ana Torres',
      section: 'B',
      blocks: [
        { day: 'Jueves', block: 'F' },
        { day: 'Jueves', block: 'E' },
        { day: 'Viernes', block: 'F' },
      ],
    },
    {
      id: '11',
      code: 'COM101',
      name: 'Comunicación Efectiva',
      professor: 'Dra. Isabel Vega',
      section: 'A',
      blocks: [
        { day: 'Miércoles', block: 'C' },
      ],
    },
    {
      id: '12',
      code: 'COM101',
      name: 'Comunicación Efectiva',
      professor: 'Dr. Jorge Pérez',
      section: 'B',
      blocks: [
        { day: 'Jueves', block: 'D' },
      ],
    },
    {
      id: '13',
      code: 'DFC101',
      name: 'Diálogo, Fe y Cultura',
      professor: 'Dr. Juan García',
      section: 'A',
      blocks: [
        { day: 'Lunes', block: 'E' },
      ],
    },
    {
      id: '14',
      code: 'DFC101',
      name: 'Diálogo, Fe y Cultura',
      professor: 'Dra. Carmen Muñoz',
      section: 'B',
      blocks: [
        { day: 'Martes', block: 'F' },
      ],
    },
    {
      id: '15',
      code: 'ING201',
      name: 'Inglés II',
      professor: 'Dr. Diego Castillo',
      section: 'A',
      blocks: [
        { day: 'Jueves', block: 'E' },
        { day: 'Miércoles', block: 'F' },
      ],
    },
    {
      id: '16',
      code: 'ING201',
      name: 'Inglés II',
      professor: 'Dra. Sara Mendoza',
      section: 'B',
      blocks: [
        { day: 'Lunes', block: 'G' },
        { day: 'Martes', block: 'H' },
      ],
    }
  ];
  