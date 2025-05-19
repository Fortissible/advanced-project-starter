package com.example.androidkotlincompose.modules.detail.presentations

import com.example.androidkotlincompose.app.navigations.ScreenRoute

object DetailRoute : ScreenRoute {
    override val routeId = "detail"
    override val route = "$routeId/{type}/{id}"
    override fun withArgs(vararg args: String) = "$routeId/${args[0]}/${args[1]}"
}