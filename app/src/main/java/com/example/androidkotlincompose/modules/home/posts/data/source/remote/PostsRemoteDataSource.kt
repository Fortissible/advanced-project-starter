package com.example.androidkotlincompose.modules.home.posts.data.source.remote

import com.example.androidkotlincompose.apiservices.dummyjson.DummyJsonApiService
import com.example.androidkotlincompose.core.models.NetworkResult
import com.example.androidkotlincompose.modules.home.posts.data.response.PostsResponse
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext

class PostsRemoteDataSource(
    private val apiService: DummyJsonApiService,
    private val dispatcher: CoroutineDispatcher
) {
    suspend fun getPosts(): NetworkResult<PostsResponse> {
        return withContext(dispatcher) {
            try {
                val response = apiService.getPosts()
                if (response.isSuccessful) {
                    val body = response.body()
                    if (body == null) {
                        NetworkResult.Error("Response body was null")
                    } else if (body.posts.isNullOrEmpty()) {
                        NetworkResult.Empty
                    } else {
                        NetworkResult.Success(body)
                    }
                } else {
                    NetworkResult.Error(response.message())
                }
            } catch(e: Exception) {
                NetworkResult.Error(e.message ?: "Something went wrong!")
            }
        }
    }
}