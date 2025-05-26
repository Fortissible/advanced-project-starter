import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/auth/register/register_page.dart';

class RegisterRoute {
  static MaterialPageRoute route(RouteSettings? settings) {
    return MaterialPageRoute(
        builder: (context) => const RegisterPage(),
        settings: settings
    );
  }
}