package com.example.androidkotlincompose.core.di

import com.example.androidkotlincompose.apiservices.dummyjson.DummyJsonApiService
import com.example.androidkotlincompose.core.env.EnvConfig
import com.example.androidkotlincompose.core.network.RetrofitClient
import com.example.androidkotlincompose.core.stores.ITokenProvider
import com.example.androidkotlincompose.core.stores.TokenProviderImpl
import com.example.androidkotlincompose.modules.home.posts.data.PostsRepositoryImpl
import com.example.androidkotlincompose.modules.home.posts.data.source.local.PostsLocalDataSource
import com.example.androidkotlincompose.modules.home.posts.data.source.remote.PostsRemoteDataSource
import com.example.androidkotlincompose.modules.home.posts.domain.repository.IPostsRepository
import com.example.androidkotlincompose.modules.home.posts.domain.usecase.PostsInteractor
import com.example.androidkotlincompose.modules.home.posts.domain.usecase.PostsUseCase
import com.example.androidkotlincompose.modules.home.posts.presentations.PostsViewModel
import kotlinx.coroutines.Dispatchers
import org.koin.core.qualifier.named
import org.koin.dsl.module
import retrofit2.Retrofit

val appModules = module {
    // Dispatcher
    single {
        Dispatchers.IO
    }

    // DummyJson Retrofit
    try {
        single(named("dummyJsonRetrofit")) {
            RetrofitClient.create(EnvConfig.dummyJsonBaseUrl, TokenProviderImpl())
        }
    } catch (e: Exception) {
        e.printStackTrace()
        throw Exception("ERROR: DUMMY JSON RETROFIT ${e.message}")
    }

    // FakeAPI Retrofit
    single(named("fakeApiRetrofit")) {
        RetrofitClient.create(EnvConfig.fakeApiBaseUrl, TokenProviderImpl())
    }

    // GitHub Search Retrofit
    single(named("githubSearchRetrofit")) {
        RetrofitClient.create(EnvConfig.githubSearchBaseUrl, TokenProviderImpl())
    }

    // API Service
    /* Create other API Service here */
    single {
        get<Retrofit>(named("dummyJsonRetrofit")).create(DummyJsonApiService::class.java)
    }

    // RemoteDS
    single<PostsRemoteDataSource> { PostsRemoteDataSource(get(), get()) }
    // LocalDS
    single<PostsLocalDataSource> { PostsLocalDataSource() }

    // Repository
    single<IPostsRepository> { PostsRepositoryImpl(get(), get()) }

    // UseCase
    single<PostsUseCase> { PostsInteractor(get())  }

    // ViewModel
    single { PostsViewModel(get()) }
}