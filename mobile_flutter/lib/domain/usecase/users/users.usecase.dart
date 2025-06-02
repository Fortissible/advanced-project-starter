import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/domain/entity/users.entity.dart';

abstract class UsersUseCase {
  Future<Either<Failure, List<UserEntity>>> getUsers();
}