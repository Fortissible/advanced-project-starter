package com.example.androidkotlincompose.modules.home.posts.data.response

import kotlinx.serialization.Serializable

@Serializable
data class PostsResponse(
	val total: Int? = null,
	val limit: Int? = null,
	val skip: Int? = null,
	val posts: List<PostsItem?>? = null
)

@Serializable
data class Reactions(
	val dislikes: Int? = null,
	val likes: Int? = null
)

@Serializable
data class PostsItem(
	val reactions: Reactions? = null,
	val id: Int? = null,
	val title: String? = null,
	val body: String? = null,
	val userId: Int? = null,
	val views: Int? = null,
	val tags: List<String?>? = null
)
