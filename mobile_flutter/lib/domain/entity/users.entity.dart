import 'package:equatable/equatable.dart';
import 'package:mobile_flutter/domain/entity/address.entity.dart';

class UserEntity extends Equatable {
  final int id;
  final String name;
  final int age;
  final String gender;
  final String email;
  final String phone;
  final String username;
  final String password;
  final String image;
  final AddressEntity address;

  const UserEntity({
    required this.id,
    required this.name,
    required this.address,
    required this.password,
    required this.username,
    required this.age,
    required this.email,
    required this.gender,
    required this.image,
    required this.phone,
  });

  @override
  List<Object?> get props => [
    id,
    name,
    age,
    gender,
    email,
    phone,
    username,
    password,
    image,
    address,
  ];
}
