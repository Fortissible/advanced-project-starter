package com.example.androidkotlincompose.ui.components.molecule.listitem

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun ListItem(itemId: String, title: String = "Dummy Title", index: Int, onItemClicked: (itemId: String) -> Unit, imageUrl: String? = null, detail: String? = null) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onItemClicked(itemId) },
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(title, style = MaterialTheme.typography.titleMedium)
            Text(text = detail ?: "Tap to view detail", style = MaterialTheme.typography.bodyMedium)
        }
    }
}