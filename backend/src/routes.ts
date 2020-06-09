import express, { request, response } from 'express';
import BooksController from './controllers/BooksController';

const routes = express.Router();

const booksController = new BooksController();
routes.get('/books', booksController.index);
routes.get('/books/:id', booksController.show);
routes.post('/books', booksController.create);
routes.delete('/books/:id', booksController.delete);
routes.put('/books/:id', booksController.update);

export default routes;