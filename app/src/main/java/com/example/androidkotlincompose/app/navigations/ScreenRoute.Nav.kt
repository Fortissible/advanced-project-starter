package com.example.androidkotlincompose.app.navigations

interface ScreenRoute {
    val route: String          // Full route, e.g., "detail_screen/{itemId}"
    val routeId: String        // Route / Screen ID, e.g., "detail_screen"

    fun withArgs(vararg args: String): String
}
