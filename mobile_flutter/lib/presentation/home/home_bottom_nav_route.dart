import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/home/home_bottom_nav.dart';

class HomeBottomNavRoute {
  static MaterialPageRoute route(RouteSettings? settings) {
    return MaterialPageRoute(
      builder: (context) => const HomeBottomNav(),
      settings: settings,
    );
  }
}