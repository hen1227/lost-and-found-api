import { DataTypes } from "sequelize";
import sequelize from "./Sequelize.js";

const LostItemModel = sequelize.define('LostItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lostItem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastSeen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Lost', 'Found', 'Pending'),
        allowNull: false,
        defaultValue: 'Lost',
    }
});

export default LostItemModel;
