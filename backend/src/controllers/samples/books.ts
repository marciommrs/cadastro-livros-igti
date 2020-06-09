export interface Book {
  id: number,
  titulo: string,
  autor: string,
  editora: string,
  area: string
}

const books = <Book[]>[
  {
    id: 1,
    titulo: 'Vue.js - Construa aplicações incríveis',
    autor: 'Caio Incau',
    editora: 'Casa do Código',
    area: 'Informática'
  },
  {
    id: 2,
    titulo: 'Amazon AWS - Descomplicando a computação na nuvem',
    autor: 'Jonathan Lamim Antunes',
    editora: 'Casa do Código',
    area: 'Informática'
  },
  {
    id: 3,
    titulo: 'ECMAScript 6: Entre de cabeça no futuro do JavaScript',
    autor: ' Diego Martins de Pinho',
    editora: 'Casa do Código',
    area: 'Informática'
  },
  {
    id: 4,
    titulo: 'Memórias póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    editora: 'Penguin',
    area: 'Romance'
  },
];

export default books;