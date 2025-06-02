import 'package:flutter/material.dart';
import 'package:mobile_flutter/core/navigation/navigation_helper.dart';
import 'package:mobile_flutter/core/navigation/route_helper.dart';
import 'package:mobile_flutter/presentation/detail/detail_page_route_arg.dart';
import 'package:mobile_flutter/presentation/home/posts/posts_provider.dart';
import 'package:provider/provider.dart';

class PostsPage extends StatefulWidget {
  const PostsPage({super.key});

  @override
  State<PostsPage> createState() => _PostsPageState();
}

class _PostsPageState extends State<PostsPage> {
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<PostsProvider>().getPosts();
    });

    // Or use the future delay but this is not recommended
    // Future.microtask(() {
    //   context.read<PostsProvider>().getPosts();
    // });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start, // Align header left
        children: [
          Text(
            'Posts List',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
          Consumer<PostsProvider>(
            builder: (ctx, postsProvider, child) {
              if (postsProvider.state == GetPostsState.loading) {
                return Center(child: CircularProgressIndicator());
              } else if (postsProvider.state == GetPostsState.done) {
                return Expanded(
                  child: ListView.builder(
                    itemCount: postsProvider.posts.length, // Replace with your data length
                    itemBuilder: (context, index) {
                      return ListTile(
                        leading: CircleAvatar(child: Text('${index + 1}')),
                        title: Text(postsProvider.posts[index].title),
                        subtitle: Text(postsProvider.posts[index].body),
                        onTap: () {
                          NavigationHelper.navigateTo(
                            RouteNames.detail,
                            arguments: DetailPageRouteArg(
                              id: postsProvider.posts[index].id,
                              title: postsProvider.posts[index].title,
                              desc: postsProvider.posts[index].body,
                              type: DetailType.posts,
                            ),
                          );
                        },
                      );
                    },
                  ),
                );
              } else {
                return Center(child: Text("Error Happened"));
              }
            },
          ),
        ],
      ),
    );
  }
}
