package com.example.androidkotlincompose.modules.home.githubsearch.presentations

import com.example.androidkotlincompose.core.navigations.ScreenRoute

object GithubSearchRoute : ScreenRoute {
    override val routeId = "github_search"
    override val route = routeId

    override fun withArgs(vararg args: String) = route
}