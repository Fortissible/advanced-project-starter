package com.example.androidkotlincompose.apiservices.dummyjson

import com.example.androidkotlincompose.modules.home.posts.data.response.PostsResponse
import com.example.androidkotlincompose.modules.home.users.data.response.UsersResponse
import retrofit2.Response
import retrofit2.http.GET

interface DummyJsonApiService {
    @GET("posts")
    suspend fun getPosts(): Response<PostsResponse>

    @GET("users")
    suspend fun getUsers(): Response<UsersResponse>
}