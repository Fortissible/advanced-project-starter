import 'package:get_it/get_it.dart';
import 'package:mobile_flutter/core/network/client.network.dart';
import 'package:mobile_flutter/data/remote_data_source/posts/posts.remote_data_source.dart';
import 'package:mobile_flutter/data/remote_data_source/products/products.remote_date_source.dart';
import 'package:mobile_flutter/data/remote_data_source/users/users.remote_data_source.dart';
import 'package:mobile_flutter/data/repository/posts/posts_repository.dart';
import 'package:mobile_flutter/data/repository/products/products_repository.dart';
import 'package:mobile_flutter/data/repository/users/users_repository.dart';
import 'package:mobile_flutter/domain/repository/posts_repository.dart';
import 'package:mobile_flutter/domain/repository/products_repository.dart';
import 'package:mobile_flutter/domain/repository/users_repository.dart';
import 'package:mobile_flutter/domain/usecase/posts/posts.interactor.dart';
import 'package:mobile_flutter/domain/usecase/posts/posts.usecase.dart';
import 'package:mobile_flutter/domain/usecase/products/products.interactor.dart';
import 'package:mobile_flutter/domain/usecase/products/products.usecase.dart';
import 'package:mobile_flutter/domain/usecase/users/users.interactor.dart';
import 'package:mobile_flutter/domain/usecase/users/users.usecase.dart';
import 'package:mobile_flutter/presentation/home/posts/posts_provider.dart';
import 'package:mobile_flutter/presentation/home/products/products_provider.dart';
import 'package:mobile_flutter/presentation/home/users/users_provider.dart';
import 'package:mobile_flutter/service/dummyjson/dummyjson.service.dart';
import 'package:mobile_flutter/service/fake_api_store/fake_api_store.service.dart';

final getItLocator = GetIt.instance;

Future<void> init() async {
  // Set the base url from Env configs
  // REGION REMOTE DATA SOURCE INJECTION
  final dummyJsonDioClient = DioClient(
    tokenProvider: () async {
      // Replace with actual token retrieval logic
      return 'your_token_here';
    },
  );
  dummyJsonDioClient.updateConfig(baseUrl: 'https://dummyjson.com/');
  getItLocator.registerLazySingleton<PostsRemoteDataSource>(
    () => PostsRemoteDataSource(dummyJsonDioClient.dio),
  );
  getItLocator.registerLazySingleton<UsersRemoteDataSource>(
    () => UsersRemoteDataSource(dummyJsonDioClient.dio),
  );

  final fakeApiStoreDioClient = DioClient(
    tokenProvider: () async {
      // Replace with actual token retrieval logic
      return 'your_token_here';
    },
  );
  fakeApiStoreDioClient.updateConfig(baseUrl: "https://fakestoreapi.com/");
  getItLocator.registerLazySingleton<ProductsRemoteDataSource>(
    () => ProductsRemoteDataSource(fakeApiStoreDioClient.dio),
  );
  // END REGION REMOTE DATA SOURCE INJECTION

  // REGION API SERVICE INJECTION
  getItLocator.registerLazySingleton<DummyJsonApiService>(
    () => DummyJsonApiService(posts: getItLocator(), users: getItLocator()),
  );
  getItLocator.registerLazySingleton<FakeApiStoreService>(
    () => FakeApiStoreService(products: getItLocator()),
  );
  // END REGION API SERVICE INJECTION

  // REGION REPOSITORY INJECTION
  getItLocator.registerLazySingleton<IPostsRepository>(
    () => PostsRepository(
      postsRemoteDataSource: getItLocator<DummyJsonApiService>().posts,
    ),
  );
  getItLocator.registerLazySingleton<IUsersRepository>(
    () => UsersRepository(
      usersRemoteDataSource: getItLocator<DummyJsonApiService>().users,
    ),
  );
  getItLocator.registerLazySingleton<IProductsRepository>(
    () => ProductsRepository(
      remoteDataSource: getItLocator<FakeApiStoreService>().products,
    ),
  );
  // END REGION REPOSITORY INJECTION

  // REGION USECASE INJECTION
  getItLocator.registerLazySingleton<PostsUseCase>(
    () => PostsInteractor(postsRepository: getItLocator()),
  );
  getItLocator.registerLazySingleton<UsersUseCase>(
    () => UsersInteractor(usersRepository: getItLocator()),
  );
  getItLocator.registerLazySingleton<ProductsUseCase>(
    () => ProductsInteractor(productsRepository: getItLocator()),
  );
  // END REGION USECASE INJECTION

  // REGION PROVIDER INJECTION
  getItLocator.registerFactory<PostsProvider>(
    () => PostsProvider(postsUseCase: getItLocator()),
  );
  getItLocator.registerFactory<UsersProvider>(
    () => UsersProvider(useCase: getItLocator()),
  );
  getItLocator.registerFactory<ProductsProvider>(
    () => ProductsProvider(useCase: getItLocator()),
  );
  // END REGION PROVIDER INJECTION
}
