package com.example.androidkotlincompose.modules.home.posts.domain.usecase

import com.example.androidkotlincompose.core.models.Resource
import com.example.androidkotlincompose.modules.home.posts.domain.models.Post
import com.example.androidkotlincompose.modules.home.posts.domain.repository.IPostsRepository

class PostsInteractor (
    private val repository: IPostsRepository
) : PostsUseCase {
    override suspend fun getPosts(): Resource<List<Post>> =
        repository.getPosts()
}