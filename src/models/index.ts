import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize('postgres://testuser:testpassword@localhost:5432/taskdb', {
    dialect: 'postgres'
});

export default sequelize;