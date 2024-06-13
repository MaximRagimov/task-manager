import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import sequelize from "./models";

const app = express();

app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500).json({error: err.message});
});

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
}).catch (err => {
    console.error('Unable to connect to the database: ', err);
});