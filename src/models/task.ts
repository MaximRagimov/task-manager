import { DataTypes, Model} from "sequelize";
import sequelize from "./index";

class Task extends Model {
    public id!: number;
    public title!: string;
    public description?: string;
    public status!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,255]
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('выполняется', 'выполнено'),
        allowNull: false,
        defaultValue: 'выполняется'
    }
}, {
    sequelize,
    modelName: 'Task',
    tableName: 'taskdb'
});

export default Task;