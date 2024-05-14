import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import clsx from 'clsx';
import StorageWebtoonInfo from '@/components/molecules/StorageWebtoonInfo';
import IconButton from '@/components/atoms/IconButton';
import { StaticImageData } from 'next/image';
import { IconDelete } from '../../../../public/assets';
import styles from './index.module.scss';

interface IWebtoonReview {
  reviewStar: number;
  reviewContent: string;
  reviewLike: number;
  webtoonLink: string;
}

interface IWebtoon {
  webtoonId: string;
  webtoonThumbnail: string | StaticImageData;
  webtoonTitle: string;
  webtoonAuthor: string;
  webtoonLike: number;
  webtoonReviewInfo?: IWebtoonReview;
}

interface Props {
  webtoonInfo: IWebtoon;
  index: number;
  isHover: boolean[];
  handleIconOver: (index: number) => void;
  handleIconLeave: (index: number) => void;
  handleDeleteClick: (webtoonId: string) => void;
  getItemStyle: (draggableStyle: any) => React.CSSProperties;
  selectWebtoons: IWebtoon[];
  handleWebtoonToggle: (webtoon: IWebtoon) => void;
}

const DraggableItem = ({
  webtoonInfo,
  index,
  isHover,
  handleIconOver,
  handleIconLeave,
  handleDeleteClick,
  getItemStyle,
  selectWebtoons,
  handleWebtoonToggle,
}: Props) => {
  return (
    <Draggable key={webtoonInfo.webtoonId} draggableId={webtoonInfo.webtoonId} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(provided.draggableProps.style)}
          className={clsx(styles.webtoonInfoElement)}
        >
          <input
            type="checkbox"
            checked={selectWebtoons?.includes(webtoonInfo)}
            onChange={() => handleWebtoonToggle(webtoonInfo)}
            id={webtoonInfo.webtoonTitle}
          />
          <StorageWebtoonInfo
            webtoonThumbnail={webtoonInfo.webtoonThumbnail}
            webtoonTitle={webtoonInfo.webtoonTitle}
            webtoonAuthor={webtoonInfo.webtoonAuthor}
            webtoonLike={webtoonInfo.webtoonLike}
          />
          <div
            className={clsx(styles.deleteIcon)}
            onMouseOver={() => handleIconOver(index)}
            onFocus={() => handleIconOver(index)}
            onMouseLeave={() => handleIconLeave(index)}
          >
            {isHover[index] ? (
              <div className={clsx(styles.hoverDelete)}>
                <IconButton size={26} type="delete" onClick={() => handleDeleteClick(webtoonInfo.webtoonId)} />
              </div>
            ) : (
              <div>
                <IconDelete />
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
