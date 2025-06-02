import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/data/repository/users/users_repository.dart';
import 'package:mobile_flutter/domain/entity/users.entity.dart';
import 'package:mobile_flutter/domain/usecase/users/users.usecase.dart';

class UsersInteractor extends UsersUseCase {

  final IUsersRepository usersRepository;

  UsersInteractor({
    required this.usersRepository
  });

  @override
  Future<Either<Failure, List<UserEntity>>> getUsers() => usersRepository.getUsers();
}