import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mobile_flutter/core/navigation/navigation_helper.dart';
import 'package:mobile_flutter/core/navigation/route_helper.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black12,
      body: Center(
        child: Column(
          spacing: 16,
          mainAxisSize: MainAxisSize.min, // ensures tight vertical space
          mainAxisAlignment: MainAxisAlignment.center, // centers content vertically
          crossAxisAlignment: CrossAxisAlignment.center, // centers content horizontally
          children: [
            Text(
                "Login mobile-flutter!",
                style: TextStyle(
                  color: Colors.white
                ),
            ),
            ElevatedButton(
              onPressed: () {
                NavigationHelper.navigateAndRemoveUntil(RouteNames.homeBottomNav, (Route<dynamic> route) => false);
              },
              child: Text('Login'),
            ),
            ElevatedButton(
              onPressed: () {
                NavigationHelper.navigateTo(RouteNames.register);
              },
              child: Text('Register'),
            ),
          ],
        ),
      ),
    );
  }
}