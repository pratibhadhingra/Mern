import express, { Request, Response, NextFunction } from "express"
import dotenv from 'dotenv';
import './db/conn';
import router from './router/auth'

const app = express();

app.use(express.json())

app.use(router)

dotenv.config({ path: './config.env'});

const PORT = process.env.PORT;

const middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('Hello middleware');
    next();
}

app.get('/', (req: Request, res: Response) => {
    res.send('hello')
});

app.get('/about',middleware, (req: Request, res: Response) => {
    res.send('hello about')
});

app.get('/contact', (req: Request, res: Response) => {
    res.send('hello contact')
});

app.get('/signin', (req: Request, res: Response) => {
    res.send('hello signin')
});

app.get('/signup', (req: Request, res: Response) => {
    res.send('hello signup')
});


app.listen(PORT, () => {
    console.log("running server on",PORT)
})