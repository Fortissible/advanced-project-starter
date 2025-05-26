import 'package:dio/dio.dart';
import 'package:mobile_flutter/core/network/interceptor.network.dart';

class DioClient {
  late Dio _dio;

  DioClient({required Future<String?> Function() tokenProvider}) {
    _dio = Dio(BaseOptions(
      connectTimeout: const Duration(seconds: 30),
      receiveTimeout: const Duration(seconds: 30),
      contentType: 'application/json',
    ));

    _dio.interceptors.addAll([
      AuthInterceptor(tokenProvider),
      RetryInterceptor()
    ]);
  }

  void updateConfig({required String baseUrl}) {
    _dio.options.baseUrl = baseUrl;
  }

  Dio get dio => _dio;
}