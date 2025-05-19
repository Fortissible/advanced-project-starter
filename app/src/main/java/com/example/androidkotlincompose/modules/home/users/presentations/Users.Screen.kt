package com.example.androidkotlincompose.modules.home.users.presentations

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.navigation.NavController
import com.example.androidkotlincompose.modules.detail.presentations.DetailRoute
import com.example.androidkotlincompose.ui.components.template.listpage.ListPage

@Composable
fun UsersScreen(navController: NavController){
    ListPage (
        title = "Users",
        onItemClicked = {
            navController.navigate(DetailRoute.withArgs("user", "3"))
        }
    )
}