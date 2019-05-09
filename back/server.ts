import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

const PORT = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE, HEAD, PATCH');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, apiKey, x-access-token, id-token',
  );
  next();
})

app.get('/todo', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send([
    { id: '1', name: 'first', description: 'first todo on the list' },
    { id: '2', name: 'second', description: 'second todo on the list' },
    { id: '3', name: 'third', description: 'third todo on the list' },
    { id: '4', name: 'fourth', description: 'fourth todo on the list' }
  ]);
});

app.listen(PORT, () => console.log('\x1b[32m', `listening to port: ${PORT}`));
