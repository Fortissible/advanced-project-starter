import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/home/github_search/github_search_page.dart';

class GithubSearchRoute {
  static MaterialPageRoute route(RouteSettings? settings) {
    return MaterialPageRoute(
        builder: (context) => const GithubSearchPage(),
        settings: settings
    );
  }
}