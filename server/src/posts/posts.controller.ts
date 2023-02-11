import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-pos.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  getAll() {
    return this.postsService.getAllPosts();
  }

  @Post()
  create(@Body() postDto: CreatePostDto) {
    return this.postsService.createPost(postDto);
  }
}
