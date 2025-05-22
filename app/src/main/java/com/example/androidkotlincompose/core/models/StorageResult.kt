package com.example.androidkotlincompose.core.models

sealed class StorageResult<out T> {
    data class Success<out T>(val data: T) : StorageResult<T>()
    data class Error(val message: String) : StorageResult<Nothing>()
    data object Empty : StorageResult<Nothing>()
}