import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile_flutter/core/navigation/navigation_helper.dart';
import 'package:mobile_flutter/core/navigation/route_helper.dart';
import 'package:mobile_flutter/presentation/detail/detail_page_route_arg.dart';
import 'package:mobile_flutter/presentation/home/users/users_provider.dart';
import 'package:provider/provider.dart';

class UsersPage extends StatefulWidget {
  const UsersPage({super.key});

  @override
  State<UsersPage> createState() => _UsersPageState();
}

class _UsersPageState extends State<UsersPage> {
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<UsersProvider>().getUsers();
    });
  }

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
        Consumer<UsersProvider>(
          builder: (ctx, provider, child) {
            switch (provider.state) {
              case GetUsersState.init:
                return Center(child: Text("Processing..."));
              case GetUsersState.loading:
                return Center(child: CircularProgressIndicator());
              case GetUsersState.done:
                return Expanded(
                  child: ListView.builder(
                    itemCount: provider.users.length,
                    itemBuilder: (context, index) {
                      return ListTile(
                        leading: CircleAvatar(
                          child: Image.network(provider.users[index].image),
                        ),
                        title: Text(provider.users[index].name),
                        subtitle: Text(
                          "${provider.users[index].email} - ${provider.users[index].phone}",
                        ),
                        onTap: () {
                          NavigationHelper.navigateTo(
                            RouteNames.detail,
                            arguments: DetailPageRouteArg(
                              id: provider.users[index].id,
                              title: provider.users[index].name,
                              desc:
                                  "Details: ${provider.users[index].email} - ${provider.users[index].phone}",
                              type: DetailType.users,
                            ),
                          );
                        },
                      );
                    },
                  ),
                );
              case GetUsersState.error:
                return Center(child: Text("Error Happened..."));
            }
          },
        ),
      ],
    );
  }
}
