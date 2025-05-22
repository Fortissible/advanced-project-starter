package com.example.androidkotlincompose.modules.home.users.data.response

import kotlinx.serialization.Serializable
import kotlinx.serialization.SerialName

@Serializable
data class UsersResponse(

	@SerialName("total")
	val total: Int? = null,

	@SerialName("limit")
	val limit: Int? = null,

	@SerialName("skip")
	val skip: Int? = null,

	@SerialName("users")
	val users: List<User?>? = null
)

@Serializable
data class UserAddress(

	@SerialName("country")
	val country: String? = null,

	@SerialName("address")
	val address: String? = null,

	@SerialName("city")
	val city: String? = null,

	@SerialName("state")
	val state: String? = null
)

@Serializable
data class User(

	@SerialName("lastName")
	val lastName: String? = null,

	@SerialName("role")
	val role: String? = null,

	@SerialName("gender")
	val gender: String? = null,

	@SerialName("university")
	val university: String? = null,

	@SerialName("maidenName")
	val maidenName: String? = null,

	@SerialName("ein")
	val ein: String? = null,

	@SerialName("ssn")
	val ssn: String? = null,

	@SerialName("bloodGroup")
	val bloodGroup: String? = null,

	@SerialName("password")
	val password: String? = null,

	@SerialName("eyeColor")
	val eyeColor: String? = null,

	@SerialName("id")
	val id: Int? = null,

	@SerialName("email")
	val email: String? = null,

	@SerialName("image")
	val image: String? = null,

	@SerialName("address")
	val address: UserAddress? = null,

	@SerialName("ip")
	val ip: String? = null,

	@SerialName("userAgent")
	val userAgent: String? = null,

	@SerialName("birthDate")
	val birthDate: String? = null,

	@SerialName("firstName")
	val firstName: String? = null,

	@SerialName("macAddress")
	val macAddress: String? = null,

	@SerialName("phone")
	val phone: String? = null,

	@SerialName("age")
	val age: Int? = null,

	@SerialName("username")
	val username: String? = null
)
