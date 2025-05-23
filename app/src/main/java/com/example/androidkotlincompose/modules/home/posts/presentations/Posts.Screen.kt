package com.example.androidkotlincompose.modules.home.posts.presentations

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavController
import com.example.androidkotlincompose.modules.detail.presentations.DetailRoute
import com.example.androidkotlincompose.ui.components.template.listpage.ListPage
import com.example.androidkotlincompose.ui.components.template.listpage.ListPageCommonData
import org.koin.androidx.compose.koinViewModel

@Composable
fun PostsScreen(navController: NavController){
    val viewModel: PostsViewModel = koinViewModel()
    val postsUIState by viewModel.postsUIState.collectAsStateWithLifecycle()

    ListPage(
        datas = postsUIState.data.map { post ->
            ListPageCommonData(
                id = post.id.toString(),
                title = post.title,
                detail = post.detail
            )
        },
        title = "Posts",
        onItemClicked = {
            navController.navigate(DetailRoute.withArgs("post", "1"))
        },
        isLoading = postsUIState.isLoading,
        isEmpty = postsUIState.isEmpty,
        error = postsUIState.error
    )
}