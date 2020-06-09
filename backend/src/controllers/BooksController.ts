import { Request, Response } from 'express';
import books from './samples/books';

let sequence = 5;

class BooksController {

  async index(request: Request, response: Response) {
    return response.json(books);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const book = books.find(book => book.id == Number(id));
    return response.json(book);
  }

  async create(request: Request, response: Response) {
    const data = request.body;
    const book = {
      id: ++sequence,
      titulo: data.titulo,
      autor: data.autor,
      editora: data.editora,
      area: data.area
    };
    books.push(book);
    return response.json(book);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    var index = books.findIndex(book => book.id == Number(id));
    books.splice(index, 1);
    return response.json("Registro excluído");
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { titulo, autor, editora, area } = request.body;

    let book = books.find(book => book.id == Number(id));
    if (book) {
      book.titulo = titulo;
      book.autor = autor;
      book.editora = editora;
      book.area = area;
      return response.json({
        message: "Registro alterado.",
        book
      });
    }
    return response.json("Registro não encontrado.");
  }
}

export default BooksController;