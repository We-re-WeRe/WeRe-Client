import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import clsx from 'clsx';
import StorageWebtoonInfo from '@/components/molecules/StorageWebtoonInfo';
import IconButton from '@/components/atoms/IconButton';
import { IStorageWebtoon } from '@/types/webtoon';
import { IconDelete } from '../../../../public/assets';
import styles from './index.module.scss';

interface Props {
  webtoonInfo: IStorageWebtoon;
  index: number;
  isHover: boolean[];
  handleIconOver: (index: number) => void;
  handleIconLeave: (index: number) => void;
  handleDeleteClick: (webtoonId: number) => void;
  getItemStyle: (draggableStyle: any) => React.CSSProperties;
  selectWebtoons: IStorageWebtoon[];
  handleWebtoonToggle: (webtoon: IStorageWebtoon) => void;
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
    <Draggable key={webtoonInfo.id} draggableId={webtoonInfo.id.toString()} index={index}>
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
            id={webtoonInfo.id.toString()}
          />
          <StorageWebtoonInfo webtoon={webtoonInfo} reviewShow={false} />
          <div
            className={clsx(styles.deleteIcon)}
            onMouseOver={() => handleIconOver(index)}
            onFocus={() => handleIconOver(index)}
            onMouseLeave={() => handleIconLeave(index)}
          >
            {isHover[index] ? (
              <div className={clsx(styles.hoverDelete)}>
                <IconButton size={26} type="delete" onClick={() => handleDeleteClick(webtoonInfo.id)} />
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
