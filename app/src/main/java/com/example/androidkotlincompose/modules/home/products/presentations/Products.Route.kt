package com.example.androidkotlincompose.modules.home.products.presentations

import com.example.androidkotlincompose.app.navigations.ScreenRoute

object ProductsRoute : ScreenRoute {
    override val routeId = "products"
    override val route = routeId

    override fun withArgs(vararg args: String) = route
}