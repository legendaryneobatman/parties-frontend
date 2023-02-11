import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async createPost(post: Post): Promise<Post> {
    return await this.postsRepository.save({
      title: post.title,
      subtitle: post.subtitle,
      text: post.text,
    });
  }
}
