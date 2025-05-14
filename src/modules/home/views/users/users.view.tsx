import useUserViewModel from '@src/modules/home/views/users/users.view-model';
import { ListItem } from '@ui/molecules/list-item.molecule';
import { LoadingIndicator } from '@ui/molecules/loading-indicator.molecule';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function UserView() {
  const { handleToDetail, useUsers, t } = useUserViewModel();
  const num: number = 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <p
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        {t('users.title')}
      </p>
      {useUsers.isPending ? (
        <LoadingIndicator />
      ) : (
        <div className="w-full max-w-lg">
          {useUsers.data?.users.map((user) => (
            <ListItem
              key={user.id}
              title={user.firstName}
              id={user.id.toString()}
              handleToDetail={handleToDetail}
            />
          ))}
        </div>
      )}
    </div>
  );
}
