import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/detail/detail_page_route_arg.dart';

class DetailPage extends StatelessWidget {
  final DetailPageRouteArg arguments;

  const DetailPage({super.key, required this.arguments});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('${arguments.type.name} ID: ${arguments.id}', style: const TextStyle(fontSize: 18))),
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Title: ${arguments.title}', style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const SizedBox(height: 10),
            Text('Description: ${arguments.desc}'),
          ],
        ),
      ),
    );
  }
}
