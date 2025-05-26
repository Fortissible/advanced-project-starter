import 'package:flutter/material.dart';
import 'package:mobile_flutter/core/navigation/navigation_helper.dart';
import 'package:mobile_flutter/core/navigation/route_helper.dart';
import 'package:mobile_flutter/core/navigation/route_observer.dart';
import 'package:mobile_flutter/di/injection.di.dart' as di;
import 'package:mobile_flutter/presentation/home/posts/posts_provider.dart';
import 'package:provider/provider.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await di.init();

  runApp(const MobileFlutter());
}

class MobileFlutter extends StatefulWidget {
  const MobileFlutter({super.key});

  @override
  State<MobileFlutter> createState() => _MobileFlutterState();
}

class _MobileFlutterState extends State<MobileFlutter> {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
            create: (_) => di.getItLocator<PostsProvider>()
        )
      ],
      child: MaterialApp(
        title: 'Mobile Flutter',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        ),
        initialRoute: RouteNames.login,
        navigatorKey: NavigationHelper.navigatorKey,
        navigatorObservers: [routeObserver],
        onGenerateRoute: RouteHelper.generateRoute,
      ),
    );
    // return MultiBlocProvider(
    //     providers: [],
    //     child: MultiProvider(
    //         providers: [],
    //         child: MaterialApp(
    //           title: 'Mobile Flutter',
    //           theme: ThemeData(
    //             colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
    //           ),
    //           initialRoute: RouteNames.login,
    //           navigatorKey: NavigationHelper.navigatorKey,
    //           navigatorObservers: [routeObserver],
    //           onGenerateRoute: RouteHelper.generateRoute,
    //         ),
    //     )
    // );
  }
}