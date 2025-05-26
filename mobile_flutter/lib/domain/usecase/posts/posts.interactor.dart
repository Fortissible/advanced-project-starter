import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/data/repository/posts/posts_repository.dart';
import 'package:mobile_flutter/domain/entity/posts.entity.dart';
import 'package:mobile_flutter/domain/usecase/posts/posts.usecase.dart';

class PostsInteractor implements PostsUseCase {

  final IPostsRepository postsRepository;

  PostsInteractor({
    required this.postsRepository
  });

  @override
  Future<Either<Failure, List<PostEntity>>> getPosts() => postsRepository.getPosts();
}