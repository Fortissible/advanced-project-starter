package com.example.androidkotlincompose.core.network

import okhttp3.Interceptor
import okhttp3.Response
import okio.IOException
import kotlin.math.pow

class RetryInterceptor(
    private val maxRetries: Int = 3,
    private val retryDelay: Long = 1000L
): Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        var attempt = 0
        var res: Response
        var req = chain.request()

        while (true) {
            try {
                res = chain.proceed(req)
                if (res.isSuccessful || attempt >= maxRetries) {
                    return res
                }
            } catch(e: IOException) {
                if (attempt >= maxRetries) {
                    throw e
                }
            }

            attempt++
            Thread.sleep(retryDelay * (2.0.pow(attempt)).toLong())
        }
    }
}