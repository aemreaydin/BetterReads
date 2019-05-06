import express from 'express';
import path from 'path';
import createError from 'http-errors';
import router from './routes/index';

const app = express();
const PORT = 3000;

// Set Pug
app.set('view engine', 'pug');
if (app.get('env') === 'development')
    app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
// Use the static files
app.use(express.static('public'));
// Use the routes folder
app.use('/', router);
// When someone tries to access a page that doesn't exist this will get called
app.use((req, res, next) => {
    return next(createError(404, 'The page you are looking for is not available'));
});
// After the function above gets called this will create the error page
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.locals.status = status;
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(status);
    res.render('error');
});
// Listen on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default app;