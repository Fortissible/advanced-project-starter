package com.example.androidkotlincompose.core.env

import io.github.cdimascio.dotenv.Dotenv
import io.github.cdimascio.dotenv.dotenv

object EnvConfig {
    // Directory on assets and instead of .env filename is env
    val dotenv = dotenv {
        directory = "/assets"
        filename = "env"
    }

    val dummyJsonBaseUrl = try {
        dotenv["KOTLIN_COMPOSE_DUMMYJSON_BASE_URL"]
            ?: error("Missing KOTLIN_COMPOSE_DUMMYJSON_BASE_URL")
    } catch (e: Exception) {
        e.printStackTrace()
        throw Exception("ERROR: ENV CONFIG ${e.message}")
    }
    val fakeApiBaseUrl = dotenv["KOTLIN_COMPOSE_FAKEAPISTORE_BASE_URL"]
        ?: error("Missing KOTLIN_COMPOSE_DUMMYJSON_BASE_URL")
    val githubSearchBaseUrl = dotenv["KOTLIN_COMPOSE_GITHUB_SEARCH_BASE_URL"]
        ?: error("Missing KOTLIN_COMPOSE_DUMMYJSON_BASE_URL")
    val appEnv = dotenv["KOTLIN_COMPOSE_APP_ENV"]
        ?: error("Missing KOTLIN_COMPOSE_DUMMYJSON_BASE_URL")
}