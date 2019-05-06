import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Books Page');
});

router.get('/:name', (req, res, next) => {
    res.send(`Page for ${req.params.name}`);
});

export default router;