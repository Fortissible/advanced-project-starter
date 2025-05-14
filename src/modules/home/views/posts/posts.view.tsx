import usePostsViewModel from '@src/modules/home/views/posts/posts.view-model';
import { ListItem } from '@ui/molecules/list-item.molecule';
import { LoadingIndicator } from '@ui/molecules/loading-indicator.molecule';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function PostView() {
  const { handleToDetail, usePosts, t } = usePostsViewModel();
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
      {usePosts.isPending ? (
        <LoadingIndicator />
      ) : (
        <div className="w-full max-w-lg">
          {usePosts.data?.posts.map((post) => (
            <ListItem
              key={post.id}
              title={post.title}
              id={post.id.toString()}
              handleToDetail={handleToDetail}
            />
          ))}
        </div>
      )}
    </div>
  );
}
