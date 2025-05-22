package com.example.androidkotlincompose

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.navigation.compose.rememberNavController
import com.example.androidkotlincompose.core.navigations.NavigationHost
import com.example.androidkotlincompose.ui.theme.AndroidKotlinComposeTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            AndroidKotlinComposeTheme {
                val navController = rememberNavController()
                NavigationHost(navController)
            }
        }
    }
}