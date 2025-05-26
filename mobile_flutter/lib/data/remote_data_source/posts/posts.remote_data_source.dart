import 'package:dio/dio.dart';
import 'package:mobile_flutter/core/common_models/network.model.dart';
import 'package:mobile_flutter/data/remote_data_source/posts/models/posts_response.model.dart';

class PostsRemoteDataSource {
  final Dio _dio;

  PostsRemoteDataSource(this._dio);

  Future<NetworkResult<PostsResponse>> getPosts() async {
    try {
      final response = await _dio.get('posts');
      final data = PostsResponse.fromJson(response.data);

      if (data.posts.isEmpty) {
        return NetworkResult.empty();
      }

      return NetworkResult.success(data);
    } catch (e) {
      return NetworkResult.error(e.toString());
    }
  }
}
