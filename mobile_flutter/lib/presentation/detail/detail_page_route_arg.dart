enum DetailType {
  posts,
  users,
  products,
  githubSearch
}

class DetailPageRouteArg {
  final int id;
  final String title;
  final String desc;
  final DetailType type;

  DetailPageRouteArg({
    required this.id,
    required this.title,
    required this.desc,
    required this.type
  });
}
