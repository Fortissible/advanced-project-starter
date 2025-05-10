import { Controller } from 'react-hook-form';
import { useLoginViewModel } from './login.view-model';

export default function LoginView() {
  const { handleGoToRegister, loginForm, loginMutation, t } =
    useLoginViewModel();

  return (
    <div className="flex min-w-screen min-h-screen items-center justify-center bg-white">
      <div className="w-full px-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Login
        </h1>

        {/* Username */}
        <div className="mb-4">
          <Controller
            control={loginForm.control}
            name="username"
            render={({ field }) => (
              <input
                type="text"
                placeholder="Username"
                className={`border px-4 py-2 rounded w-full ${
                  loginForm.errors.username
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                {...field}
              />
            )}
          />
          {loginForm.errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {loginForm.errors.username.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <Controller
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <input
                type="password"
                placeholder="Password"
                className={`border px-4 py-2 rounded w-full ${
                  loginForm.errors.password
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                {...field}
              />
            )}
          />
          {loginForm.errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {loginForm.errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="mb-4">
          <button
            onClick={loginForm.handleSubmit((req) => loginMutation.login(req))}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? t('login.login-loading-title') : 'Login'}
          </button>
        </div>

        {/* Register */}
        <div>
          <button
            onClick={handleGoToRegister}
            className="w-full text-blue-600 border border-blue-600 py-2 rounded hover:bg-blue-50"
          >
            {t('login.register-btn')}
          </button>
        </div>
      </div>
    </div>
  );
}
