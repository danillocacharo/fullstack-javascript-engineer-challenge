import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, PrimaryKey } from 'sequelize-typescript';
import { UserType } from '../user-type/user-type.entity';

@Table({
  tableName: 'user',
  timestamps: true
})
export class User extends Model<User> {
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
    field: 'nickname',
    type: DataType.STRING(255),
    allowNull: false,
    unique: true
  })
  nickname: string;

  @Column({
    field: 'name',
    type: DataType.STRING(255),
    allowNull: false
  })
  name: string;

  @Column({
    field: 'phone',
    type: DataType.STRING(255),
  })
  phone: string;

  @Column({
    field: 'email',
    type: DataType.STRING(255),
    allowNull: true,
    unique: true
  })
  email: string;

  @ForeignKey(() => UserType)
  @Column
  user_type_id: number

  @BelongsTo(() => UserType)
  user_type: UserType

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