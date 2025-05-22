package com.example.androidkotlincompose.modules.home.posts.domain.usecase

import com.example.androidkotlincompose.core.models.Resource
import com.example.androidkotlincompose.modules.home.posts.domain.models.Post

interface PostsUseCase {
    suspend fun getPosts(): Resource<List<Post>>
}