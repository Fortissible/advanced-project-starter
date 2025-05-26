import 'dart:math';

import 'package:dio/dio.dart';
import 'package:mobile_flutter/core/auth/provider.auth.dart';

class AuthInterceptor extends Interceptor {
  final Future<String?> Function() tokenProvider;

  AuthInterceptor(this.tokenProvider);

  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
    final token = await tokenProvider();
    if (token != null && token.isNotEmpty) {
      options.headers['Authorization'] = 'Bearer $token';
    }
    super.onRequest(options, handler);
  }
}

class RetryInterceptor extends Interceptor {
  final int maxRetries;
  final Duration retryDelay;

  RetryInterceptor({
    this.maxRetries = 3,
    this.retryDelay = const Duration(seconds: 1),
  });

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) async {
    RequestOptions requestOptions = err.requestOptions;
    int attempt = requestOptions.extra['retry_attempt'] ?? 0;

    if (attempt >= maxRetries) {
      return handler.next(err);
    }

    await Future.delayed(retryDelay * pow(2, attempt).toInt());

    requestOptions.extra['retry_attempt'] = attempt + 1;
    final response = await Dio().fetch(requestOptions);
    return handler.resolve(response);
  }
}