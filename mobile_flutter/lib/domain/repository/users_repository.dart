import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/data/remote_data_source/users/users.remote_data_source.dart';
import 'package:mobile_flutter/data/repository/users/users_repository.dart';
import 'package:mobile_flutter/domain/entity/address.entity.dart';
import 'package:mobile_flutter/domain/entity/users.entity.dart';

class UsersRepository implements IUsersRepository {

  final UsersRemoteDataSource usersRemoteDataSource;

  UsersRepository({
    required this.usersRemoteDataSource
  });

  @override
  Future<Either<Failure, List<UserEntity>>> getUsers() async {
    try {
      final usersRes = await usersRemoteDataSource.getUsers();

      final usersData = usersRes.data?.users;
      if (usersData == null) {
        return Right([]);
      }

      final listUserEntity = usersData.map(
              (user) => UserEntity(
                  id: user.id,
                  name: "${user.firstName} ${user.lastName}",
                  address: AddressEntity(
                      address: user.address.address,
                      city: user.address.city,
                      state: user.address.state,
                      country: user.address.country
                  ),
                  password: user.password,
                  username: user.username,
                  age: user.age,
                  email: user.email,
                  gender: user.gender,
                  image: user.image,
                  phone: user.phone
              )
      ).toList();
      return Right(listUserEntity);
    } on SocketException catch (e){
      return Left(ConnectionFailure(e.message));
    }
  }
}