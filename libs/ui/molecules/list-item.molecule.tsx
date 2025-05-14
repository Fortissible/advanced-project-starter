import {
  DetailRouteParams,
  DetailType,
} from '@src/modules/detail/detail.route';
import { memo } from 'react';

type ListItemProps = {
  id: string;
  title: string;
  handleToDetail: ({ id, title, type }: DetailRouteParams) => void;
};

export const ListItem = memo(({ handleToDetail, title, id }: ListItemProps) => {
  return (
    <div
      onClick={() => handleToDetail({ id, title, type: DetailType.posts })}
      className="bg-pink-200 p-5 m-2 rounded cursor-pointer"
    >
      <p className="text-2xl">{title}</p>
    </div>
  );
});
