package com.example.androidkotlincompose.core.stores

class TokenProviderImpl: ITokenProvider {
    override suspend fun getAccessToken(): String? = try {
        "A DUMMY TOKEN"
    } catch (e: Exception) {
        e.printStackTrace()
        throw Exception("ERROR: TOKEN PROVIDER ERROR ${e.message}")
    }
}