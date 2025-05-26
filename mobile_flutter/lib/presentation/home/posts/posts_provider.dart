import 'package:flutter/material.dart';
import 'package:mobile_flutter/domain/entity/posts.entity.dart';
import 'package:mobile_flutter/domain/usecase/posts/posts.usecase.dart';

enum GetPostsState { init, loading, done, error }

class PostsProvider extends ChangeNotifier {
  final PostsUseCase postsUseCase;

  GetPostsState _state = GetPostsState.init;
  List<PostEntity> _posts = [];
  String? _errorMessage;

  // Getters
  GetPostsState get state => _state;
  List<PostEntity> get posts => _posts;
  String? get errorMessage => _errorMessage;

  PostsProvider({required this.postsUseCase});

  Future<void> getPosts() async {
    _state = GetPostsState.loading;
    notifyListeners();

    final result = await postsUseCase.getPosts();

    result.fold(
          (failure) {
        _errorMessage = failure.message;
        _state = GetPostsState.error;
      },
          (data) {
        _posts = data;
        _state = GetPostsState.done;
      },
    );

    notifyListeners();
  }
}