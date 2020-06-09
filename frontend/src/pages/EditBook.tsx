import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../services/api';

const EditBook = () => {
  const history = useHistory();
  const id_param = localStorage.getItem('id');

  const [id, setId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [area, setArea] = useState('');

  useEffect(() => {
    api.get(`/books/${id_param}`)
      .then(response => {
        setId(response.data.id);
        setTitulo(response.data.titulo);
        setAutor(response.data.autor);
        setEditora(response.data.editora);
        setArea(response.data.area);
      })
  }, []);

  async function handleInsertBook(e: any) {
    e.preventDefault();
    const data = { titulo, autor, editora, area };
    try {
      await api.post('/books/', data);
      localStorage.clear();
      history.push('/books');
    } catch (err) {
      alert('Ocorreu um erro ao atualizar o livro.');
    }
  }

  async function handleUpdateBook(e: any) {
    e.preventDefault();
    const data = { titulo, autor, editora, area };
    try {
      await api.put(`/books/${id}`, data);
      localStorage.clear();
      history.push('/books');
    } catch (err) {
      alert('Ocorreu um erro ao atualizar o livro.');
    }
  }

  function handleBack(e: any) {
    e.preventDefault();
    localStorage.clear();
    history.push('/books');
  }


  return (
    <div>

      <form>
        <label htmlFor="titulo">Título</label>
        <input placeholder="Titulo" value={titulo} onChange={e => setTitulo(e.target.value)}/>
        <br/>
        <label htmlFor="autor">Autor</label>
        <input placeholder="Autor" value={autor} onChange={e => setAutor(e.target.value)}/>
        <br/>
        <label htmlFor="editora">editora</label>
        <input placeholder="Editora" value={editora} onChange={e => setEditora(e.target.value)}/>
        <br/>
        <label htmlFor="area">Área</label>
        <input placeholder="Área" value={area} onChange={e => setArea(e.target.value)}/>
        <br/>        
        <button onClick={handleInsertBook} className="button" type="submit" hidden={id_param != null}>Cadastrar</button>
        <button onClick={handleUpdateBook} className="button" type="submit" hidden={id_param == null}>Alterar</button>
        <button type="button" onClick={handleBack}>Voltar</button>
      </form>
    </div>
  );
}

export default EditBook;