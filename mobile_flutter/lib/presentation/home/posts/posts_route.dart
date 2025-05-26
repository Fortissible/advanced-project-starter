import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/home/posts/posts_page.dart';

class PostsRoute {
  static MaterialPageRoute route(RouteSettings? settings) {
    return MaterialPageRoute(
        builder: (context) => const PostsPage(),
        settings: settings
    );
  }
}