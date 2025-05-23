package com.example.androidkotlincompose.modules.home.products.presentations

import androidx.compose.runtime.Composable
import androidx.navigation.NavController
import com.example.androidkotlincompose.modules.detail.presentations.DetailRoute
import com.example.androidkotlincompose.ui.components.template.listpage.ListPage

@Composable
fun ProductsScreen(navController: NavController){
    ListPage (
        title = "Product",
        onItemClicked = {
            navController.navigate(DetailRoute.withArgs("product", "2"))
        },
        isLoading = false,
        isEmpty = true,
        error = null,
        datas = emptyList()
    )
}