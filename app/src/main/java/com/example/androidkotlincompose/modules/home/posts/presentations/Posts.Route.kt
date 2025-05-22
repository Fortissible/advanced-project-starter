package com.example.androidkotlincompose.modules.home.posts.presentations

import com.example.androidkotlincompose.core.navigations.ScreenRoute

object PostsRoute : ScreenRoute {
    override val routeId = "posts"
    override val route = routeId

    override fun withArgs(vararg args: String) = route
}