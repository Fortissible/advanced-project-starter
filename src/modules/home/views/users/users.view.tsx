import {
  DetailRouteParams,
  DetailType,
} from '@src/modules/detail/detail.route';
import useUserViewModel from '@src/modules/home/views/users/users.view-model';
import clsx from 'clsx';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type UserItemProps = {
  title: string;
  userId: string;
  handleToDetail: ({ id, title, type }: DetailRouteParams) => void;
};

const UserItem = memo(({ handleToDetail, title, userId }: UserItemProps) => {
  return (
    <div
      onClick={() =>
        handleToDetail({ id: userId, title, type: DetailType.users })
      }
      className="bg-pink-200 p-5 m-2 rounded cursor-pointer"
    >
      <p className="text-2xl">{title}</p>
    </div>
  );
});

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
        <div className="flex min-w-screen items-center justify-center bg-white">
          <div className="flex w-screen justify-center items-center px-8">
            <div className="pr-4">Loading...</div>
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500" />
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg">
          {useUsers.data?.users.map((user) => (
            <UserItem
              key={user.id}
              title={user.firstName}
              userId={user.id.toString()}
              handleToDetail={handleToDetail}
            />
          ))}
        </div>
      )}
    </div>
  );
}
