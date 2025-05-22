package com.example.androidkotlincompose.modules.home

import com.example.androidkotlincompose.core.navigations.ScreenRoute

object HomeRoute : ScreenRoute {
    override val routeId = "home"
    override val route = routeId

    override fun withArgs(vararg args: String) = route
}