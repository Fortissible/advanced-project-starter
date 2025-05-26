class NetworkResult<T> {
  final T? data;
  final String? error;
  final bool isEmpty;

  NetworkResult._({this.data, this.error, this.isEmpty = false});

  factory NetworkResult.success(T data) => NetworkResult._(data: data);
  factory NetworkResult.error(String message) => NetworkResult._(error: message);
  factory NetworkResult.empty() => NetworkResult._(isEmpty: true);
}