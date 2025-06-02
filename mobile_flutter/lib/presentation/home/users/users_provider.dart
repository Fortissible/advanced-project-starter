import 'package:flutter/widgets.dart';
import 'package:mobile_flutter/domain/entity/users.entity.dart';
import 'package:mobile_flutter/domain/usecase/users/users.usecase.dart';

enum GetUsersState { init, loading, done, error }
class UsersProvider extends ChangeNotifier {
  final UsersUseCase useCase;

  UsersProvider({
    required this.useCase
  });

  GetUsersState _state = GetUsersState.init;
  List<UserEntity> _users = [];
  String? _errorMessage;

  // Getters
  GetUsersState get state => _state;
  List<UserEntity> get users => _users;
  String? get errorMessage => _errorMessage;

  Future<void> getUsers() async {
    _state = GetUsersState.loading;
    notifyListeners();

    final result = await useCase.getUsers();

    result.fold(
          (failure) {
        _errorMessage = failure.message;
        _state = GetUsersState.error;
      },
          (data) {
        _users = data;
        _state = GetUsersState.done;
      },
    );

    notifyListeners();
  }
}