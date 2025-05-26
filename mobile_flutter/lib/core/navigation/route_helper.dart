import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/auth/login/login_route.dart';
import 'package:mobile_flutter/presentation/auth/register/register_route.dart';
import 'package:mobile_flutter/presentation/detail/detail_page.dart';
import 'package:mobile_flutter/presentation/detail/detail_page_route_arg.dart';
import 'package:mobile_flutter/presentation/home/github_search/github_search_route.dart';
import 'package:mobile_flutter/presentation/home/home_bottom_nav_route.dart';
import 'package:mobile_flutter/presentation/home/posts/posts_route.dart';
import 'package:mobile_flutter/presentation/home/products/products_page.dart';
import 'package:mobile_flutter/presentation/home/products/products_route.dart';
import 'package:mobile_flutter/presentation/home/users/users_route.dart';

part 'route_names.dart';

class RouteHelper {
  static Route<dynamic>? generateRoute(RouteSettings? settings) {
    final routeName = settings?.name;
    final arguments = settings?. arguments;

    switch(routeName) {
      case RouteNames.login:
        return LoginRoute.route(settings);
      case RouteNames.register:
        return RegisterRoute.route(settings);
    /**
     * Uncomment only when implement bottom nav using manual navigation
     * Currently implementing bottom nav with IndexedStack()
     */
    // case RouteNames.posts:
      //   return PostsRoute.route(settings);
      // case RouteNames.products:
      //   return ProductsRoute.route(settings);
      // case RouteNames.users:
      //   return UsersRoute.route(settings);
      // case RouteNames.githubSearch:
      //   return GithubSearchRoute.route(settings);
      case RouteNames.homeBottomNav:
        return HomeBottomNavRoute.route(settings);
      case RouteNames.detail:
        if (arguments is DetailPageRouteArg) {
          return MaterialPageRoute(
              builder: (context) => DetailPage(
                  arguments: arguments
              ),
              settings: settings
          );
        }
      default:
        // Android Page Router
        return MaterialPageRoute(
            builder: (_) => const Scaffold(
              body: Center(
                child: Text('Page not found'),
              ),
            )
        );
    }

    return null;
  }
}