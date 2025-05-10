import RouteNames from '@src/configs/router/router.names';
import clsx from 'clsx';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

const HEADER_HEIGHT = 64; // px
const TAB_BAR_HEIGHT = 56; // px

const tabs = [
  { label: 'Posts', path: RouteNames.Posts },
  { label: 'Products', path: RouteNames.Products },
  { label: 'Users', path: RouteNames.Users },
];

export default function NavLayout() {
  const [isEnabled, setIsEnabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fixed Top Header */}
      <header
        className="fixed top-0 w-full flex justify-between items-center p-4 bg-gray-100 border-b z-20"
        style={{ height: `${HEADER_HEIGHT}px` }}
      >
        <div className="text-xl font-semibold">Top Header</div>
        <div className="flex items-center space-x-4">
          <span>ID</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isEnabled}
              onChange={() => setIsEnabled((prev) => !prev)}
              className="sr-only"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full relative transition">
              <div
                className={clsx(
                  'absolute w-5 h-5 bg-yellow-400 rounded-full top-0.5 left-0.5 transition-transform',
                  isEnabled ? 'translate-x-5' : '',
                )}
              />
            </div>
          </label>
          <span>EN</span>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Scrollable content between header and footer */}
      <main
        className="flex-1 overflow-y-auto"
        style={{
          paddingTop: `${HEADER_HEIGHT}px`,
          paddingBottom: `${TAB_BAR_HEIGHT}px`,
        }}
      >
        <Outlet />
      </main>

      {/* Fixed Bottom Tab Bar */}
      <nav
        className="fixed bottom-0 left-0 w-full border-t z-20 flex justify-around bg-gray-100 shadow-md"
        style={{ height: `${TAB_BAR_HEIGHT}px` }}
      >
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={clsx(
                'flex-1 text-center',
                'py-3 text-sm',
                isActive
                  ? 'text-blue-600 font-bold border-t-2 border-blue-600'
                  : 'text-gray-600',
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
