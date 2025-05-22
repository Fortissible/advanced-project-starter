package com.example.androidkotlincompose.modules.auth.login.presentations

import com.example.androidkotlincompose.core.navigations.ScreenRoute

object LoginRoute : ScreenRoute {
    override val routeId = "login"
    override val route = routeId

    override fun withArgs(vararg args: String) = route
}