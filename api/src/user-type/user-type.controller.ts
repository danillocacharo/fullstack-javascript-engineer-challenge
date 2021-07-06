import { Controller, Get, Param, Post, Put, Delete, Body, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { UserType } from './user-type.entity';
import { UserTypeService } from './user-type.service';
import { ApiParam, ApiTags, ApiBody } from '@nestjs/swagger';
import { UpdateOptions, DestroyOptions } from 'sequelize/types';

@ApiTags('user-type')
@Controller('user-type')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) {}

  // @UseGuards(AuthGuard('oauth'))
  @Get()
  async getAll(): Promise<UserType[]> {
    return this.userTypeService.getAll();
  }

  // @UseGuards(AuthGuard('oauth'))
  @Get(':id')
  @ApiParam({ name: 'id' })
  async getById(@Param('id') id: string): Promise<UserType> {
    return this.userTypeService.getById(id);
  }

  // @UseGuards(AuthGuard('oauth'))
  @Post()
  async create(@Body() usertype: UserType): Promise<UserType> {
    return this.userTypeService.create(usertype);
  }

  // @UseGuards(AuthGuard('oauth'))
  @Put(':id')
  @ApiParam({ name: 'id' })
  async update(@Param('id') id: string, @Body() usertype: UserType): Promise<UpdateOptions[]> {
    return this.userTypeService.update(id, usertype);
  }

  // @UseGuards(AuthGuard('oauth'))
  @Delete(':id')
  @ApiParam({ name: 'id' })
  async delete(@Param('id') id: string): Promise<DestroyOptions[]> {
    return this.userTypeService.delete(id);
  }

}
