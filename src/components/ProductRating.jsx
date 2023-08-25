
import { StarIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export const ProductRating = ({ rating }) => {
  return (
    <div className="flex gap-x-1" style={{ direction: "ltr" }}>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <StarIcon
            key={i}
            className={clsx('w-4', i < rating ? 'text-yellow-500' : 'text-gray-500')}
          />
        );
      })}
    </div>
  );
};