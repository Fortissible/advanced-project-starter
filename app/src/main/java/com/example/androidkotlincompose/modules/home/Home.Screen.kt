package com.example.androidkotlincompose.modules.home

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ExitToApp
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.createGraph
import com.example.androidkotlincompose.modules.auth.login.presentations.LoginRoute
import com.example.androidkotlincompose.modules.home.githubsearch.presentations.GithubSearchRoute
import com.example.androidkotlincompose.modules.home.githubsearch.presentations.GithubSearchScreen
import com.example.androidkotlincompose.modules.home.posts.presentations.PostsRoute
import com.example.androidkotlincompose.modules.home.posts.presentations.PostsScreen
import com.example.androidkotlincompose.modules.home.products.presentations.ProductsRoute
import com.example.androidkotlincompose.modules.home.products.presentations.ProductsScreen
import com.example.androidkotlincompose.modules.home.users.presentations.UsersRoute
import com.example.androidkotlincompose.modules.home.users.presentations.UsersScreen
import com.example.androidkotlincompose.ui.components.organism.bottomnavbar.BottomNavBar

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(parentNavController: NavHostController) {
    val childNavController = rememberNavController()

    Scaffold (
        modifier = Modifier
            .fillMaxSize(),
        topBar = {
            TopAppBar(
                title = { Text("Home") },
                actions = {
                    IconButton(onClick = {
                        parentNavController.navigate(LoginRoute.route) {
                            popUpTo(HomeRoute.route) { inclusive = true }
                        }
                    }) {
                        Icon(Icons.Default.ExitToApp, contentDescription = "Logout")
                    }
                }
            )
        },
        bottomBar = { BottomNavBar(childNavController) }
    ) { innerPadding ->
        NavHost(
            navController = childNavController,
            startDestination = PostsRoute.route,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(PostsRoute.route) { PostsScreen(parentNavController) }
            composable(UsersRoute.route) { UsersScreen(parentNavController) }
            composable(ProductsRoute.route) { ProductsScreen(parentNavController) }
            composable(GithubSearchRoute.route) { GithubSearchScreen(parentNavController) }
        }
    }
}