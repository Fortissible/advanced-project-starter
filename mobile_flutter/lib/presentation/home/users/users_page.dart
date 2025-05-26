import 'package:flutter/material.dart';
import 'package:mobile_flutter/core/navigation/navigation_helper.dart';
import 'package:mobile_flutter/core/navigation/route_helper.dart';
import 'package:mobile_flutter/presentation/detail/detail_page_route_arg.dart';

class UsersPage extends StatelessWidget {
  const UsersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start, // Align header left
      children: [
        const Padding(
          padding: EdgeInsets.all(16.0),
          child: Text(
            'User List',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
        Expanded(
          child: ListView.builder(
            itemCount: 100, // Replace with your data length
            itemBuilder: (context, index) {
              return ListTile(
                leading: CircleAvatar(child: Text('${index + 1}')),
                title: Text('User Title #$index'),
                subtitle: Text('Subtitle or description'),
                onTap: () {
                  NavigationHelper.navigateTo(
                    RouteNames.detail,
                    arguments: DetailPageRouteArg(
                        id: index + 1,
                        title: 'User Title #$index',
                        desc: 'This is the user description for item #$index.',
                        type: DetailType.users
                    ),
                  );
                },
              );
            },
          ),
        ),
      ],
    );
  }
}