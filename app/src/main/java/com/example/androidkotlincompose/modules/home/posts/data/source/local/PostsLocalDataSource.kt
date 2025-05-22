package com.example.androidkotlincompose.modules.home.posts.data.source.local

import com.example.androidkotlincompose.core.models.StorageResult

class PostsLocalDataSource {
    suspend fun getPosts(): StorageResult<String> {
        return StorageResult.Error("Local Data Source Not Implemented Yet!")
    }
}