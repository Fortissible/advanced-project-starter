package com.example.androidkotlincompose.modules.home.posts.data

import com.example.androidkotlincompose.core.models.NetworkResult
import com.example.androidkotlincompose.core.models.Resource
import com.example.androidkotlincompose.core.models.StorageResult
import com.example.androidkotlincompose.modules.home.posts.data.source.local.PostsLocalDataSource
import com.example.androidkotlincompose.modules.home.posts.data.source.remote.PostsRemoteDataSource
import com.example.androidkotlincompose.modules.home.posts.domain.models.Post
import com.example.androidkotlincompose.modules.home.posts.domain.repository.IPostsRepository

class PostsRepositoryImpl(
    private val remoteDS: PostsRemoteDataSource,
    private val localDS: PostsLocalDataSource
) : IPostsRepository {

    override suspend fun getPosts(): Resource<List<Post>> {
        return try {
            // Try to get data locally
            val localPosts = localDS.getPosts()
            if (localPosts == StorageResult.Success("")) {
                // should call utils for mapEntityToModel when implemented
                Resource.Error("Not Implemented Yet!")
            } else {
                // Call remotely
                when (val remotePosts = remoteDS.getPosts()) {
                    is NetworkResult.Success -> {
                        // Move this to utils mapResponseToModel
                        val listPostModel = remotePosts.data.posts?.map { post ->
                            Post(
                                id = post?.id ?: 0,
                                title = post?.title ?: "",
                                detail = post?.body ?: ""
                            )
                        } ?: emptyList()
                        Resource.Success(listPostModel)
                    }

                    is NetworkResult.Empty -> Resource.Empty()
                    is NetworkResult.Error -> Resource.Error(remotePosts.message)
                }
            }
        } catch (e: Exception) {
            Resource.Error(e.message ?: "Unexpected error")
        }
    }
}