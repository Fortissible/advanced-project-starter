package com.example.androidkotlincompose.modules.home.posts.domain.repository

import com.example.androidkotlincompose.core.models.Resource
import com.example.androidkotlincompose.modules.home.posts.domain.models.Post

interface IPostsRepository {
    suspend fun getPosts(): Resource<List<Post>>
}