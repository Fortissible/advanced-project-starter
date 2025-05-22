package com.example.androidkotlincompose.core.models

sealed class NetworkResult<out T> {
    data class Success<out T>(val data: T) : NetworkResult<T>()
    data class Error(val message: String) : NetworkResult<Nothing>()
    data object Empty : NetworkResult<Nothing>()
}