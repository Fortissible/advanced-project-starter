import 'package:flutter/material.dart';
import 'package:mobile_flutter/core/navigation/navigation_helper.dart';
import 'package:mobile_flutter/core/navigation/route_helper.dart';
import 'package:mobile_flutter/presentation/home/github_search/github_search_page.dart';
import 'package:mobile_flutter/presentation/home/posts/posts_page.dart';
import 'package:mobile_flutter/presentation/home/products/products_page.dart';
import 'package:mobile_flutter/presentation/home/users/users_page.dart';

class HomeBottomNav extends StatefulWidget {
  const HomeBottomNav({super.key});

  @override
  State<HomeBottomNav> createState() => _HomeBottomNavState();
}

class _HomeBottomNavState extends State<HomeBottomNav> {
  int _currentIndex = 0;

  final List<Widget> _pages = const [
    PostsPage(),
    UsersPage(),
    ProductsPage(),
    GithubSearchPage(),
  ];

  final List<String> _titles = const [
    'Posts',
    'Users',
    'Products',
    'GithubSearch',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_titles[_currentIndex]),
        actions: [
          Padding(
            padding: EdgeInsets.only(right: 16),
            child: ElevatedButton(
              onPressed: () {
                NavigationHelper.navigateAndRemoveUntil(
                  RouteNames.login,
                  (Route<dynamic> route) => false,
                );
              },
              child: Icon(Icons.logout),
            ),
          ),
        ],
      ),
      body: IndexedStack(index: _currentIndex, children: _pages),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (newIndex) {
          setState(() {
            _currentIndex = newIndex;
          });
        },
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.article), label: 'Posts'),
          BottomNavigationBarItem(icon: Icon(Icons.group), label: 'Users'),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart),
            label: 'Products',
          ),
        ],
      ),
    );
  }
}
