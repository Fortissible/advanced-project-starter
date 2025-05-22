package com.example.androidkotlincompose.core.network

import com.example.androidkotlincompose.core.stores.ITokenProvider
import kotlinx.serialization.json.Json
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.kotlinx.serialization.asConverterFactory
import java.util.concurrent.TimeUnit

private val json = Json {
    prettyPrint = true
    isLenient = true
    ignoreUnknownKeys = true
}
private val contentType = "application/json".toMediaType()

object RetrofitClient {
    fun create(
        baseUrl: String,
        tokenProvider: ITokenProvider
    ): Retrofit {
        val okHttpClient = OkHttpClient.Builder()

            .addInterceptor(AuthInterceptor(tokenProvider))
            .addInterceptor(RetryInterceptor(maxRetries = 3))
            .connectTimeout(30, TimeUnit.SECONDS)
            .readTimeout(30, TimeUnit.SECONDS)
            .writeTimeout(30, TimeUnit.SECONDS)
            .build()

        return Retrofit.Builder()
            .baseUrl(baseUrl)
            .client(okHttpClient)
            .addConverterFactory(json.asConverterFactory(contentType))
            .build()
    }
}