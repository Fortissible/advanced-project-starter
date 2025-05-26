import 'package:flutter/material.dart';

import 'login_page.dart';

class LoginRoute {
  static MaterialPageRoute route(RouteSettings? settings) {
    return MaterialPageRoute(
      builder: (context) => const LoginPage(),
      settings: settings,
    );
  }
}