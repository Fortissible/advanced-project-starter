import 'package:get_it/get_it.dart';
import 'package:mobile_flutter/core/network/client.network.dart';
import 'package:mobile_flutter/data/remote_data_source/posts/posts.remote_data_source.dart';
import 'package:mobile_flutter/data/repository/posts/posts_repository.dart';
import 'package:mobile_flutter/domain/repository/posts_repository.dart';
import 'package:mobile_flutter/domain/usecase/posts/posts.interactor.dart';
import 'package:mobile_flutter/domain/usecase/posts/posts.usecase.dart';
import 'package:mobile_flutter/presentation/home/posts/posts_provider.dart';
import 'package:mobile_flutter/service/dummyjson/dummyjson.service.dart';

final getItLocator = GetIt.instance;

Future<void> init() async {
  final dioClient = DioClient(
    tokenProvider: () async {
      // Replace with actual token retrieval logic
      return 'your_token_here';
    },
  );

  // Set the base url from Env configs
  dioClient.updateConfig(baseUrl: 'https://dummyjson.com/');

  getItLocator.registerLazySingleton<PostsRemoteDataSource>(
      () => PostsRemoteDataSource(
        dioClient.dio
      )
  );
  
  getItLocator.registerLazySingleton<DummyJsonApiService>(
      () => DummyJsonApiService(posts: getItLocator())
  );
  
  getItLocator.registerLazySingleton<IPostsRepository>(
      () => PostsRepository(postsRemoteDataSource: getItLocator<DummyJsonApiService>().posts)
  );

  getItLocator.registerLazySingleton<PostsUseCase>(
      () => PostsInteractor(postsRepository: getItLocator())
  );
  
  getItLocator.registerFactory<PostsProvider>(
      () => PostsProvider(postsUseCase: getItLocator())
  );
}
