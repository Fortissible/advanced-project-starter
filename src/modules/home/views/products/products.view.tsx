import useProductViewModel from '@src/modules/home/views/products/products.view-model';
import { ListItem } from '@ui/molecules/list-item.molecule';
import { LoadingIndicator } from '@ui/molecules/loading-indicator.molecule';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function ProductView() {
  const { handleToDetail, useProducts, t } = useProductViewModel();
  const num: number = 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <p
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        {t('products.title')}
      </p>
      {useProducts.isPending ? (
        <LoadingIndicator />
      ) : (
        <div className="w-full max-w-lg">
          {useProducts.data?.map((product) => (
            <ListItem
              key={product.id}
              title={product.title}
              id={product.id.toString()}
              handleToDetail={handleToDetail}
            />
          ))}
        </div>
      )}
    </div>
  );
}
