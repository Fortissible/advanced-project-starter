import {
  DetailRouteParams,
  DetailType,
} from '@src/modules/detail/detail.route';
import useProductViewModel from '@src/modules/home/views/products/products.view-model';
import clsx from 'clsx';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type ProductItemProps = {
  title: string;
  userId: string;
  handleToDetail: ({ id, title, type }: DetailRouteParams) => void;
};

const ProductItem = memo(
  ({ handleToDetail, title, userId }: ProductItemProps) => {
    return (
      <div
        onClick={() =>
          handleToDetail({
            id: userId,
            title,
            type: DetailType.products,
          })
        }
        className="bg-pink-200 p-5 m-2 rounded cursor-pointer"
      >
        <p className="text-2xl">{title}</p>
      </div>
    );
  },
);

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
      <div className="w-full max-w-lg">
        {useProducts.data?.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            userId={product.id.toString()}
            handleToDetail={handleToDetail}
          />
        ))}
      </div>
    </div>
  );
}
