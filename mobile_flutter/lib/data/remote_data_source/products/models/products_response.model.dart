// To parse this JSON data, do
//
//     final productsResponse = productsResponseFromJson(jsonString);

import 'dart:convert';

List<ProductsResponse> productsResponseFromJson(dynamic jsonList) {
  print("RAW DATA: $jsonList");
  try {
    return List<ProductsResponse>.from(
      (jsonList as List).map((x) => ProductsResponse.fromJson(x)),
    );
  } catch (error) {
    print("ERROR PARSING JSON: ${error.toString()}");
    return [];
  }
}

String productsResponseToJson(List<ProductsResponse> data) => json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class ProductsResponse {
  int id;
  String title;
  double price;
  String description;
  String category;
  String image;
  Rating rating;

  ProductsResponse({
    required this.id,
    required this.title,
    required this.price,
    required this.description,
    required this.category,
    required this.image,
    required this.rating,
  });

  factory ProductsResponse.fromJson(Map<String, dynamic> json) => ProductsResponse(
    id: json["id"],
    title: json["title"],
    price: json["price"].toDouble(),
    description: json["description"],
    category: json["category"],
    image: json["image"],
    rating: Rating.fromJson(json["rating"]),
  );

  Map<String, dynamic> toJson() => {
    "id": id,
    "title": title,
    "price": price,
    "description": description,
    "category": category,
    "image": image,
    "rating": rating.toJson(),
  };
}

class Rating {
  double rate;
  int count;

  Rating({
    required this.rate,
    required this.count,
  });

  factory Rating.fromJson(Map<String, dynamic> json) => Rating(
    rate: json["rate"].toDouble(),
    count: json["count"],
  );

  Map<String, dynamic> toJson() => {
    "rate": rate,
    "count": count,
  };
}
