package com.example.androidkotlincompose.app.navigations

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.navArgument
import com.example.androidkotlincompose.modules.auth.login.presentations.LoginRoute
import com.example.androidkotlincompose.modules.auth.login.presentations.LoginScreen
import com.example.androidkotlincompose.modules.detail.presentations.DetailRoute
import com.example.androidkotlincompose.modules.detail.presentations.DetailScreen
import com.example.androidkotlincompose.modules.home.HomeRoute
import com.example.androidkotlincompose.modules.home.HomeScreen

@Composable
fun NavigationHost(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = LoginRoute.route
    ) {
        composable(LoginRoute.route) {
            LoginScreen(navController)
        }
        composable(HomeRoute.route) {
            HomeScreen(navController)
        }
        composable(
            route = DetailRoute.route,
            arguments = listOf(
                navArgument("type") { type = NavType.StringType },
                navArgument("id") { type = NavType.StringType },
            )
        ) { backStackEntry ->
            val id = backStackEntry.arguments?.getString("id") ?: ""
            val type = backStackEntry.arguments?.getString("type") ?: ""

            DetailScreen(type, id, navController)
        }
    }
}
