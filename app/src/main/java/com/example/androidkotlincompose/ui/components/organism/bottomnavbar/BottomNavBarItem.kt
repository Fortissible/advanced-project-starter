package com.example.androidkotlincompose.ui.components.organism.bottomnavbar

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.MailOutline
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.ui.graphics.vector.ImageVector
import com.example.androidkotlincompose.modules.home.githubsearch.presentations.GithubSearchRoute
import com.example.androidkotlincompose.modules.home.posts.presentations.PostsRoute
import com.example.androidkotlincompose.modules.home.products.presentations.ProductsRoute
import com.example.androidkotlincompose.modules.home.users.presentations.UsersRoute

data class BottomNavBarItem(
    val title: String,
    val icon: ImageVector,
    val route: String
)

val bottomNavItems = listOf(
    BottomNavBarItem(
        title = "Posts",
        icon = Icons.Default.MailOutline,
        route = PostsRoute.route
    ),
    BottomNavBarItem(
        title = "Products",
        icon = Icons.Default.ShoppingCart,
        route = ProductsRoute.route
    ),
    BottomNavBarItem(
        title = "Users",
        icon = Icons.Default.Person,
        route = UsersRoute.route
    ),
    BottomNavBarItem(
        title = "GithubSearch",
        icon = Icons.Default.Search,
        route = GithubSearchRoute.route
    )
)
