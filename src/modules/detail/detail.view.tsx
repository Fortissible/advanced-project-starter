import clsx from 'clsx';
import { Trans } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import useDetailViewModel from './detail.view-model';

export default function DetailView() {
  const { detailId, detailTitle, detailType, handleGoBack, t } =
    useDetailViewModel();
  const num: number = 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <p
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        <Trans
          components={{
            bold: <span className="font-bold" />,
          }}
          i18nKey="detail.title"
          values={{ detailId, detailType }}
        />
      </p>
      <p
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        {detailTitle}
      </p>
      <button
        onClick={handleGoBack}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {t('detail.back-btn')}
      </button>
    </div>
  );
}
