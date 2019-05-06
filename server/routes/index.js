import express from 'express';
import books from './books';
import authors from './authors';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.use('/books', books);
router.use('/authors/', authors);

export default router;