import 'package:dio/dio.dart';
import 'package:mobile_flutter/core/common_models/network.model.dart';
import 'package:mobile_flutter/data/remote_data_source/users/models/users_response.model.dart';

class UsersRemoteDataSource {
  final Dio _dio;

  UsersRemoteDataSource(this._dio);

  Future<NetworkResult<UsersResponse>> getUsers() async {
    try {
      final response = await _dio.get('users');
      final data = UsersResponse.fromJson(response.data);

      if (data.users.isEmpty) {
        return NetworkResult.empty();
      }

      return NetworkResult.success(data);
    } catch (e) {
      return NetworkResult.error(e.toString());
    }
  }
}