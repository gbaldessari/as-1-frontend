export const mallaCurricular = [
  {
    semestre: 1,
    asignaturas: [
      { curso: 'Matemáticas I', codigo: 'MAT101', créditos: 4, prerequisitos: [] },
      { curso: 'Física General', codigo: 'FISG101', créditos: 3, prerequisitos: ['MAT101'] },
      { curso: 'Química General', codigo: 'QUI101', créditos: 4, prerequisitos: [] },
      { curso: 'Programación I', codigo: 'PROG101', créditos: 5, prerequisitos: [] },
      { curso: 'Introducción a la Ingeniería', codigo: 'ING101', créditos: 2, prerequisitos: [] },
    ],
  },
  {
    semestre: 2,
    asignaturas: [
      { curso: 'Matemáticas II', codigo: 'MAT102', créditos: 4, prerequisitos: ['MAT101'] },
      { curso: 'Física II', codigo: 'FIS102', créditos: 3, prerequisitos: ['FISG101'] },
      { curso: 'Algoritmos', codigo: 'ALG101', créditos: 5, prerequisitos: ['PROG101'] },
      { curso: 'Química Orgánica', codigo: 'QUI102', créditos: 4, prerequisitos: ['QUI101'] },
      { curso: 'Ética Profesional', codigo: 'ETP101', créditos: 2, prerequisitos: [] },
    ],
  },
  {
    semestre: 3,
    asignaturas: [
      { curso: 'Cálculo Multivariable', codigo: 'MAT201', créditos: 4, prerequisitos: ['MAT102'] },
      { curso: 'Electromagnetismo', codigo: 'FIS201', créditos: 3, prerequisitos: ['FIS102'] },
      { curso: 'Estructuras de Datos', codigo: 'EDS101', créditos: 5, prerequisitos: ['ALG101'] },
      { curso: 'Programación II', codigo: 'PROG201', créditos: 5, prerequisitos: ['ALG101'] },
      { curso: 'Mecánica Clásica', codigo: 'MEC101', créditos: 3, prerequisitos: ['FISG101'] },
    ],
  },
  {
    semestre: 4,
    asignaturas: [
      { curso: 'Cálculo Vectorial', codigo: 'MAT202', créditos: 4, prerequisitos: ['MAT201'] },
      { curso: 'Termodinámica', codigo: 'TER101', créditos: 4, prerequisitos: [] },
      { curso: 'Bases de Datos', codigo: 'BD101', créditos: 5, prerequisitos: ['ALG101'] },
      { curso: 'Teoría de Circuitos', codigo: 'TC101', créditos: 4, prerequisitos: ['FIS201'] },
      { curso: 'Sistemas Operativos', codigo: 'SO101', créditos: 5, prerequisitos: ['BD101'] },
    ],
  },
  {
    semestre: 5,
    asignaturas: [
      { curso: 'Ecuaciones Diferenciales', codigo: 'MAT301', créditos: 4, prerequisitos: ['MAT201'] },
      { curso: 'Análisis de Algoritmos', codigo: 'ALG201', créditos: 5, prerequisitos: ['EDS101'] },
      { curso: 'Redes de Computadoras', codigo: 'RED101', créditos: 4, prerequisitos: ['ALG101'] },
      { curso: 'Ingeniería de Software I', codigo: 'IS101', créditos: 5, prerequisitos: ['ALG201'] },
      { curso: 'Arquitectura de Computadoras', codigo: 'ARQ101', créditos: 4, prerequisitos: [] },
    ],
  },
  {
    semestre: 6,
    asignaturas: [
      { curso: 'Estadística', codigo: 'EST101', créditos: 4, prerequisitos: [] },
      { curso: 'Investigación de Operaciones', codigo: 'IO101', créditos: 3, prerequisitos: [] },
      { curso: 'Lenguajes de Programación', codigo: 'LP101', créditos: 5, prerequisitos: ['PROG201'] },
      { curso: 'Desarrollo Web', codigo: 'DW101', créditos: 4, prerequisitos: ['ALG201'] },
      { curso: 'Simulación de Sistemas', codigo: 'SIM101', créditos: 4, prerequisitos: [] },
    ],
  },
  {
    semestre: 7,
    asignaturas: [
      { curso: 'Ingeniería de Software II', codigo: 'IS201', créditos: 5, prerequisitos: ['IS101'] },
      { curso: 'Sistemas Distribuidos', codigo: 'SD101', créditos: 4, prerequisitos: ['SO101'] },
      { curso: 'Seguridad Informática', codigo: 'SEG101', créditos: 4, prerequisitos: [] },
      { curso: 'Administración de Proyectos', codigo: 'AP101', créditos: 3, prerequisitos: [] },
      { curso: 'Inteligencia Artificial', codigo: 'IA101', créditos: 5, prerequisitos: ['ALG101'] },
    ],
  },
  {
    semestre: 8,
    asignaturas: [
      { curso: 'Gestión de Datos', codigo: 'GD101', créditos: 4, prerequisitos: ['BD101'] },
      { curso: 'Computación Gráfica', codigo: 'CG101', créditos: 4, prerequisitos: [] },
      { curso: 'Minería de Datos', codigo: 'MD101', créditos: 5, prerequisitos: ['ALG101'] },
      { curso: 'Ética en TI', codigo: 'ETTI101', créditos: 2, prerequisitos: ['ETP101'] },
      { curso: 'Taller de Innovación', codigo: 'TI101', créditos: 3, prerequisitos: [] },
    ],
  },
  {
    semestre: 9,
    asignaturas: [
      { curso: 'Optimización', codigo: 'OPT101', créditos: 4, prerequisitos: ['IO101'] },
      { curso: 'Big Data', codigo: 'BD102', créditos: 5, prerequisitos: ['GD101'] },
      { curso: 'Redes Avanzadas', codigo: 'RA101', créditos: 4, prerequisitos: ['RED101'] },
      { curso: 'Desarrollo de Aplicaciones Móviles', codigo: 'DAM101', créditos: 5, prerequisitos: ['DW101'] },
      { curso: 'Machine Learning', codigo: 'ML101', créditos: 5, prerequisitos: ['IA101'] },
    ],
  },
  {
    semestre: 10,
    asignaturas: [
      { curso: 'Proyecto Final de Grado', codigo: 'PFG101', créditos: 30, prerequisitos: ['DAM101'] },
    ],
  },
];
