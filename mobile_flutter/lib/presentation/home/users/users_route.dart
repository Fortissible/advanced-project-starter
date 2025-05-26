import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/home/users/users_page.dart';

class UsersRoute {
  static MaterialPageRoute route(RouteSettings? settings) {
    return MaterialPageRoute(
        builder: (context) => const UsersPage(),
        settings: settings
    );
  }
}