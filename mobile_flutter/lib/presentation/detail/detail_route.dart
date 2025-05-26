import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/detail/detail_page.dart';
import 'package:mobile_flutter/presentation/detail/detail_page_route_arg.dart';

class DetailRoute {
  static MaterialPageRoute route(RouteSettings? settings, DetailPageRouteArg arguments) {
    return MaterialPageRoute(
      builder: (_) => DetailPage(arguments: arguments),
      settings: settings,
    );
  }
}