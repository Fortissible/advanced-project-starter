package com.example.androidkotlincompose.modules.home.posts.presentations

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavController
import com.example.androidkotlincompose.modules.detail.presentations.DetailRoute
import com.example.androidkotlincompose.ui.components.template.listpage.ListPage
import org.koin.androidx.compose.koinViewModel

@Composable
fun PostsScreen(navController: NavController){
    val viewModel: PostsViewModel = koinViewModel()
    val commentsUIState by viewModel.postsUIState.collectAsStateWithLifecycle()

    ListPage (
        test = "isLoading: ${commentsUIState.isLoading}",
        title = "Posts",
        onItemClicked = {
            navController.navigate(DetailRoute.withArgs("post", "1"))
        }
    )
}