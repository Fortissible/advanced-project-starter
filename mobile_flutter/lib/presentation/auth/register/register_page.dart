import 'package:flutter/material.dart';

import '../../../core/navigation/navigation_helper.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black12,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          spacing: 16.0,
          children: [
            Text("Register mobile-flutter!"),
            ElevatedButton(
                onPressed: () {
                  NavigationHelper.goBack();
                },
                child: Text('Register Account')
            )
          ],
        ),
      ),
    );
  }
}