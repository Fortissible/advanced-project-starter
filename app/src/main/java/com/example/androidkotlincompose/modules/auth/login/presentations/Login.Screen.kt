package com.example.androidkotlincompose.modules.auth.login.presentations

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.navigation.NavController
import com.example.androidkotlincompose.modules.home.HomeRoute

@Composable
fun LoginScreen(navController: NavController) {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text("Login Screen", style = MaterialTheme.typography.headlineLarge)
        Button(onClick = {
            navController.navigate(HomeRoute.route) {
                popUpTo(LoginRoute.route) { inclusive = true } // Remove Auth from backstack
            }
        }) {
            Text("Go to Home")
        }
    }
}