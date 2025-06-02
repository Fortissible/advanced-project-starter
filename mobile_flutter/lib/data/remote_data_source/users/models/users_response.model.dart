// To parse this JSON data, do
//
//     final welcome = welcomeFromJson(jsonString);

import 'dart:convert';

UsersResponse welcomeFromJson(String str) => UsersResponse.fromJson(json.decode(str));

String welcomeToJson(UsersResponse data) => json.encode(data.toJson());

class UsersResponse {
  List<User> users;
  int total;
  int skip;
  int limit;

  UsersResponse({
    required this.users,
    required this.total,
    required this.skip,
    required this.limit,
  });

  factory UsersResponse.fromJson(Map<String, dynamic> json) => UsersResponse(
    users: List<User>.from(json["users"].map((x) => User.fromJson(x))),
    total: json["total"],
    skip: json["skip"],
    limit: json["limit"],
  );

  Map<String, dynamic> toJson() => {
    "users": List<dynamic>.from(users.map((x) => x.toJson())),
    "total": total,
    "skip": skip,
    "limit": limit,
  };
}

class User {
  int id;
  String firstName;
  String lastName;
  int age;
  String gender;
  String email;
  String phone;
  String username;
  String password;
  String image;
  Address address;

  User({
    required this.id,
    required this.firstName,
    required this.lastName,
    required this.age,
    required this.gender,
    required this.email,
    required this.phone,
    required this.username,
    required this.password,
    required this.image,
    required this.address,
  });

  factory User.fromJson(Map<String, dynamic> json) => User(
    id: json["id"],
    firstName: json["firstName"],
    lastName: json["lastName"],
    age: json["age"],
    gender: json["gender"],
    email: json["email"],
    phone: json["phone"],
    username: json["username"],
    password: json["password"],
    image: json["image"],
    address: Address.fromJson(json["address"]),
  );

  Map<String, dynamic> toJson() => {
    "id": id,
    "firstName": firstName,
    "lastName": lastName,
    "age": age,
    "gender": gender,
    "email": email,
    "phone": phone,
    "username": username,
    "password": password,
    "image": image,
    "address": address.toJson()
  };
}

class Address {
  String address;
  String city;
  String state;
  String country;

  Address({
    required this.address,
    required this.city,
    required this.state,
    required this.country,
  });

  factory Address.fromJson(Map<String, dynamic> json) => Address(
    address: json["address"],
    city: json["city"],
    state: json["state"],
    country: json["country"],
  );

  Map<String, dynamic> toJson() => {
    "address": address,
    "city": city,
    "state": state,
    "country": country,
  };
}