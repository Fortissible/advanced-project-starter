import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/domain/entity/posts.entity.dart';

abstract class PostsUseCase {
  Future<Either<Failure, List<PostEntity>>> getPosts();
}