package com.example.androidkotlincompose.ui.components.template.listpage

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.androidkotlincompose.ui.components.molecule.listitem.ListItem


data class ListPageCommonData(
    val id: String,
    val title: String,
    val detail: String?
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ListPage(
    isLoading: Boolean,
    isEmpty: Boolean,
    error: String?,
    datas: List<ListPageCommonData>,
    title: String,
    onItemClicked: (itemId: String) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(title)
        AnimatedVisibility(
            isLoading
        ) {
            CircularProgressIndicator()
        }
        AnimatedVisibility(
            isEmpty
        ) {
            Text("No Data Found!")
        }
        AnimatedVisibility(
            !error.isNullOrEmpty()
        ) {
            Text("Something not right :(")
        }
        AnimatedVisibility(
            !isLoading && error.isNullOrEmpty()
        ) {
            LazyColumn(
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                itemsIndexed(items = datas) { index, data ->
                    ListItem(
                        data.id,
                        data.title,
                        index,
                        onItemClicked,
                        detail = data.detail
                    )
                }
            }
        }
    }
}
