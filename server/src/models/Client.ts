import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface ClientAttributes {
  client_id: number;
  client_name: string;
  contact_number: string;
  email: string;
  address: string;
  status: string;
  date_created: Date;
}

class Client extends Model<ClientAttributes> implements ClientAttributes {
  public client_id!: number;
  public client_name!: string;
  public contact_number!: string;
  public email!: string;
  public address!: string;
  public status!: string;
  public date_created!: Date;
}

Client.init(
  {
    client_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
    timestamps: true,
  }
);

export default Client;