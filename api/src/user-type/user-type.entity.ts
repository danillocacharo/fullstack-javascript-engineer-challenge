import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';
// import { User } from '../user/user.entity';

@Table({
  tableName: 'user_type',
  timestamps: true
})
export class UserType extends Model<UserType> {
  @PrimaryKey
  @Column({
    field: 'id',
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true
  })
  id: string;

  @Column({
    field: 'description',
    type: DataType.STRING(255),
    allowNull: false,
    unique: true
  })
  description: string;

  @Column({
    field: 'active',
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  })
  active: boolean;

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: string;

  @Column({
    field: 'updated_at',
    type: DataType.DATE
  })
  updatedAt: string;
}