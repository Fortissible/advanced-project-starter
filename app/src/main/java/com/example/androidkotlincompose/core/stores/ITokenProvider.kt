package com.example.androidkotlincompose.core.stores

interface ITokenProvider {
    suspend fun getAccessToken(): String?
}