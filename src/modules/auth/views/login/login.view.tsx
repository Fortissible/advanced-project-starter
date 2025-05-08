import { Controller } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import useLoginViewModel from './login.view-model';

export default function LoginView() {
  const { handleGoToRegister, loginForm, loginMutation, t } =
    useLoginViewModel();

  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <Text className="text-3xl font-bold text-blue-600 mb-6">Login</Text>

      {/* Username */}
      <View className="w-full mb-4">
        <Controller
          control={loginForm.control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Username"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              className={twMerge(
                'border border-gray-300 rounded px-4 py-2 w-full',
                loginForm.errors.username && 'border-red-500',
              )}
            />
          )}
        />
        {loginForm.errors.username && (
          <Text className="text-red-500 text-sm mt-1">
            {loginForm.errors.username.message}
          </Text>
        )}
      </View>

      {/* Password */}
      <View className="w-full mb-4">
        <Controller
          control={loginForm.control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              className={twMerge(
                'border border-gray-300 rounded px-4 py-2 w-full',
                loginForm.errors.password && 'border-red-500',
              )}
            />
          )}
        />
        {loginForm.errors.password && (
          <Text className="text-red-500 text-sm mt-1">
            {loginForm.errors.password.message}
          </Text>
        )}
      </View>

      {/* Submit */}
      <View className="w-full mb-4">
        <Button
          title={
            loginMutation.isPending ? t('login.login-loading-title') : 'Login'
          }
          onPress={loginForm.handleSubmit((req) => loginMutation.login(req))}
          disabled={loginMutation.isPending}
        />
      </View>

      {/* Register */}
      <View className="w-full">
        <Button title={t('login.register-btn')} onPress={handleGoToRegister} />
      </View>
    </View>
  );
}
