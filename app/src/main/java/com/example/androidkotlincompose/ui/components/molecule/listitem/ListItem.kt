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
fun ListItem(title: String, index: Int, onItemClicked: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onItemClicked() },
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = "$title Item ${index + 1}", style = MaterialTheme.typography.titleMedium)
            Text(text = "Tap to view detail", style = MaterialTheme.typography.bodyMedium)
        }
    }
}