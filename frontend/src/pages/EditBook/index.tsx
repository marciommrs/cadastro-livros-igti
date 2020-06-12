import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

const EditBook = () => {
  const history = useHistory();
  const id_param = localStorage.getItem('id');

  const [id, setId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [area, setArea] = useState('');

  const [acao, setAcao] = useState('');

  useEffect(() => {
    if (id_param) {
      api.get(`/books/${id_param}`)
        .then(response => {
          setId(response.data.id);
          setTitulo(response.data.titulo);
          setAutor(response.data.autor);
          setEditora(response.data.editora);
          setArea(response.data.area);
          setAcao('Alterar');
        })
    } else {
      setAcao('Cadastrar');
    }
  }, [id_param]);

  async function handleInsertBook(e: any) {
    e.preventDefault();
    const data = { titulo, autor, editora, area };
    try {
      await api.post('/books/', data);
      localStorage.clear();
      history.push('/books');
    } catch (err) {
      alertify.error('Ocorreu um erro ao cadastrar o livro.');
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
    localStorage.clear();
  }

  return (
    <div className="register-container">
      <header>
        <h2>Cadastro de Livros</h2>
        <Link to="/books" onClick={handleBack}> <FiArrowLeft /> Voltar </Link>
      </header>
      <div className="content">
        <form>
          <div className="input-group">
            <label htmlFor="titulo" >Título</label>
            <input value={titulo} onChange={e => setTitulo(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="autor">Autor</label>
            <input value={autor} onChange={e => setAutor(e.target.value)}/>
          </div>
          <div className="input-group">
            <label htmlFor="Editora">editora</label>
            <input value={editora} onChange={e => setEditora(e.target.value)}/>
          </div>
          <div className="input-group">
            <label htmlFor="area">Área</label>
            <input value={area} onChange={e => setArea(e.target.value)}/>
          </div>
        <button onClick={acao === 'Cadastrar'?handleInsertBook:handleUpdateBook} className="button" type="submit">{acao}</button>
        </form>
      </div>
    </div>
  );
}

export default EditBook;