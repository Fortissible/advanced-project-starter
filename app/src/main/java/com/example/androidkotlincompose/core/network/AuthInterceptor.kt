package com.example.androidkotlincompose.core.network

import com.example.androidkotlincompose.core.stores.ITokenProvider
import kotlinx.coroutines.runBlocking
import okhttp3.Interceptor
import okhttp3.Response

class AuthInterceptor(
    private val tokenProvider: ITokenProvider
):Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val defaultReq = chain.request()

        val token = runBlocking {
            tokenProvider.getAccessToken()
        }
        val reqBuilder = defaultReq.newBuilder()
        token?.let { accessToken ->
            reqBuilder.addHeader("Authorization", "Bearer $accessToken")
        }

        val newReq = reqBuilder.build()

        return chain.proceed(newReq)
    }
}