import {
  DetailRouteParams,
  DetailType,
} from '@src/modules/detail/detail.route';
import usePostsViewModel from '@src/modules/home/views/posts/posts.view-model';
import clsx from 'clsx';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type PostItemProps = {
  id: string;
  title: string;
  handleToDetail: ({ id, title, type }: DetailRouteParams) => void;
};

const PostItem = memo(({ handleToDetail, title, id }: PostItemProps) => {
  return (
    <div
      onClick={() => handleToDetail({ id, title, type: DetailType.posts })}
      className="bg-pink-200 p-5 m-2 rounded cursor-pointer"
    >
      <p className="text-2xl">{title}</p>
    </div>
  );
});

export default function PostView() {
  const { handleToDetail, data, t } = usePostsViewModel();
  const num: number = 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <p
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        {t('posts.title')}
      </p>
      <div className="w-full max-w-lg">
        {data?.posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            id={post.id.toString()}
            handleToDetail={handleToDetail}
          />
        ))}
      </div>
    </div>
  );
}
