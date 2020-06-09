import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit2, FiBook } from 'react-icons/fi';


import api from '../services/api';

interface Book {
  id: number,
  titulo: string,
  autor: string,
  editora: string,
  area: string
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    api.get('/books')
      .then(response => {
        setBooks(response.data);
      })
  }, [books]);

  async function handleDeleteBook(id: Number) {
    try {
      await api.delete(`books/${id}`);
      setBooks(books.filter(book => book.id !== id));
    } catch (err) {
      alert('Erro ao deletar livro, tente novamente');
    }
  }

  async function handleUpdateBook(id: Number) {
    localStorage.setItem('id', `${id}`);
  }

  return (
    <div>
      <h3>
        <Link to="/editBook" >
          <FiBook /> Cadastrar
        </Link>
      </h3>
      <table>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Editora</th>
          <th>Área</th>
        </tr>
        {books.map(book => (
          <tr key={book.id}>
            <td>{book.titulo}</td>
            <td>{book.autor}</td>
            <td>{book.editora}</td>
            <td>{book.area}</td>
            <td>
              <button onClick={() => handleDeleteBook(book.id)} type="button">
                <FiTrash2 />
              </button>
            </td>
            <td>
              <Link to="/editBook" onClick={() => handleUpdateBook(book.id)} >
                <FiEdit2 />
              </Link>
            </td>
          </tr>
        )
        )}
      </table>
    </div>
  );
}

export default Books;