package com.example.androidkotlincompose.modules.home.users.presentations

import com.example.androidkotlincompose.app.navigations.ScreenRoute

object UsersRoute : ScreenRoute {
    override val routeId = "users"
    override val route = routeId

    override fun withArgs(vararg args: String) = route
}
