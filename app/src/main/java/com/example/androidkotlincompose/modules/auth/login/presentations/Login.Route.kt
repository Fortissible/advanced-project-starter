package com.example.androidkotlincompose.modules.auth.login.presentations

import com.example.androidkotlincompose.app.navigations.ScreenRoute

object LoginRoute : ScreenRoute {
    override val routeId = "login"
    override val route = routeId

    override fun withArgs(vararg args: String) = route
}