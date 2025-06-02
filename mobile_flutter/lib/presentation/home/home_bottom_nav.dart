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

  final List<String> _titles = const [
    'Posts',
    'Users',
    'Products',
    'GithubSearch',
  ];

  Widget _buildPage(int index) {
    switch (index) {
      case 0:
        return const PostsPage();
      case 1:
        return const UsersPage();
      case 2:
        return const ProductsPage();
      case 3:
        return const GithubSearchPage();
      default:
        return const SizedBox.shrink();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_titles[_currentIndex]),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: ElevatedButton(
              onPressed: () {
                NavigationHelper.navigateAndRemoveUntil(
                  RouteNames.login,
                      (Route<dynamic> route) => false,
                );
              },
              child: const Icon(Icons.logout),
            ),
          ),
        ],
      ),
      body: _buildPage(_currentIndex), // Only builds the current page
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.black, // icon and label when selected
        unselectedItemColor: Colors.black, // icon and label when not selected
        selectedLabelStyle: const TextStyle(color: Colors.black),
        unselectedLabelStyle: const TextStyle(color: Colors.black),
        currentIndex: _currentIndex,
        onTap: (newIndex) {
          setState(() {
            _currentIndex = newIndex;
          });
        },
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.article, color: Colors.black,), label: 'Posts'),
          BottomNavigationBarItem(icon: Icon(Icons.group, color: Colors.black), label: 'Users'),
          BottomNavigationBarItem(
              icon: Icon(Icons.shopping_cart, color: Colors.black), label: 'Products'),
          BottomNavigationBarItem(
              icon: Icon(Icons.search, color: Colors.black), label: 'GithubSearch'),
        ],
      ),
    );
  }
}

