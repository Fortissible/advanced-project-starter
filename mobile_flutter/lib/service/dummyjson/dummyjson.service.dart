import 'package:mobile_flutter/data/remote_data_source/posts/posts.remote_data_source.dart';
import 'package:mobile_flutter/data/remote_data_source/users/users.remote_data_source.dart';

class DummyJsonApiService {
  final PostsRemoteDataSource posts;
  final UsersRemoteDataSource users;

  DummyJsonApiService({
    required this.posts,
    required this.users
  });
}