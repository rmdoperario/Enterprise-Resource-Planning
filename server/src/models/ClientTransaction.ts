import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Client from './Client';

interface ClientTransactionAttributes {
  client_transaction_id: number;
  client_id: number;
  transaction_id: string;
  transaction_date: Date;
  transaction_amount: number;
  remarks: string;
}

class ClientTransaction extends Model<ClientTransactionAttributes> implements ClientTransactionAttributes {
  public client_transaction_id!: number;
  public client_id!: number;
  public transaction_id!: string;
  public transaction_date!: Date;
  public transaction_amount!: number;
  public remarks!: string;
}

ClientTransaction.init(
  {
    client_transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Client,
        key: 'client_id',
      },
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    transaction_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'ClientTransaction',
    tableName: 'client_transactions',
    timestamps: true,
  }
);

// Set up associations
Client.hasMany(ClientTransaction, {
  foreignKey: 'client_id',
  as: 'transactions',
});

ClientTransaction.belongsTo(Client, {
  foreignKey: 'client_id',
  as: 'client',
});

export default ClientTransaction;