import { Controller, Get, Param, Post, Put, Delete, Body, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UpdateOptions, DestroyOptions } from 'sequelize/types';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(AuthGuard('oauth'))
  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  // @UseGuards(AuthGuard('oauth'))
  @Get(':id')
  @ApiParam({ name: 'id' })
  async getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  // @UseGuards(AuthGuard('oauth'))
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  // @UseGuards(AuthGuard('oauth'))
  @Put(':id')
  @ApiParam({ name: 'id' })
  async update(@Param('id') id: string, @Body() user: User): Promise<UpdateOptions[]> {
    return this.userService.update(id, user);
  }

  // @UseGuards(AuthGuard('oauth'))
  @Delete(':id')
  @ApiParam({ name: 'id' })
  async delete(@Param('id') id: string): Promise<DestroyOptions[]> {
    return this.userService.delete(id);
  }

}
