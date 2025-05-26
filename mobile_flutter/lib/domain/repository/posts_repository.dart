import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/data/remote_data_source/posts/posts.remote_data_source.dart';
import 'package:mobile_flutter/data/repository/posts/posts_repository.dart';
import 'package:mobile_flutter/domain/entity/posts.entity.dart';

class PostsRepository implements IPostsRepository {

  final PostsRemoteDataSource postsRemoteDataSource;

  PostsRepository({
    required this.postsRemoteDataSource
  });

  @override
  Future<Either<Failure, List<PostEntity>>> getPosts() async {
    try {
      final postsRes = await postsRemoteDataSource.getPosts();

      final postsData = postsRes.data?.posts;
      if (postsData == null) {
        return Right([]);
      }

      final listUserEntity = postsData.map(
              (postData) => PostEntity(
                  id: postData.id,
                  body: postData.body,
                  title: postData.title
              )
      ).toList();
      return Right(listUserEntity);
    } on SocketException catch (e){
      return Left(ConnectionFailure(e.message));
    }
  }
}