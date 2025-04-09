import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users') // The base route for this controller will be '/users'
export class UsersController {
  @Get() // Handles GET requests to '/users'
  getAllUsers() {
    return { message: 'List of all users' };
  }

  @Get(':id') // Handles GET requests to '/users/:id'
  getUserById(@Param('id') id: string) {
    return { message: `User with ID ${id}` };
  }

  @Post() // Handles POST requests to '/users'
  createUser(@Body() userData: any) {
    return { message: 'User created', data: userData };
  }
}