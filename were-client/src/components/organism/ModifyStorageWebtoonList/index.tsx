'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';
import DraggableItem from './draggableItem';

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
  webtoonInfos: IWebtoon[];
}

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'var(--color-bg)' : 'var(--color-gray-2)',
});

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',
  width: '100%',
  background: isDragging ? 'var(--color-gray-2)' : 'var(--color-gray-1)',
  ...draggableStyle,
});

const ModifyStorageWebtoonList = ({ webtoonInfos }: Props) => {
  const [webtoonInfoState, setWebtoonInfoState] = useState<IWebtoon[]>(webtoonInfos);
  const [isHover, setIsHover] = useState<boolean[]>([]);
  const [selectWebtoons, setSelectWebtoons] = useState<IWebtoon[]>([]);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  /** 마우스 오버 */
  const handleIconOver = (index: number) => {
    const tmp = [...isHover];
    tmp[index] = true;
    setIsHover(tmp);
  };

  /** 마우스 리브 */
  const handleIconLeave = (index: number) => {
    const tmp = [...isHover];
    tmp[index] = false;
    setIsHover(tmp);
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectWebtoons([]);
    } else {
      setSelectWebtoons([...webtoonInfos]);
    }
    setIsAllSelected(!isAllSelected);
  };

  const handleWebtoonToggle = (webtoon: IWebtoon) => {
    const isSelected = selectWebtoons.some(item => item === webtoon);

    if (isSelected) {
      setSelectWebtoons(selectWebtoons?.filter(item => item !== webtoon));
    } else {
      setSelectWebtoons([...selectWebtoons, webtoon]);
    }
  };

  const reorder = (list: IWebtoon[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;

    const newItem = reorder(webtoonInfoState, source.index, destination.index);
    setWebtoonInfoState(newItem);
  };

  useEffect(() => {
    setIsAllSelected(selectWebtoons.length === webtoonInfos.length);
  }, [selectWebtoons, webtoonInfos]);

  return (
    <div className={clsx(styles.modifySection)}>
      <div className={clsx(styles.topSection)}>
        <div className={clsx(styles.allCheckboxWrapper)}>
          <label id="allSelect" className={clsx(styles.allCheckboxArea)}>
            <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} id="allSelect" />
            전체 선택
          </label>
        </div>
        <div className={clsx(styles.buttonWrapper)}>
          <div className={clsx(styles.buttonArea)}>
            <TextButton size="small" design="inverse">
              취소
            </TextButton>
            <TextButton size="small" design="primary">
              선택 삭제
            </TextButton>
          </div>
        </div>
      </div>
      <DragDropContext onDragEnd={(result: any) => handleDragEnd(result)}>
        <Droppable droppableId="droppableId">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              className={clsx(styles.webtoonInfoList)}
            >
              {webtoonInfoState.map((webtoonInfo, index) => (
                <DraggableItem
                  key={webtoonInfo.webtoonId}
                  webtoonInfo={webtoonInfo}
                  index={index}
                  isHover={isHover}
                  handleIconOver={handleIconOver}
                  handleIconLeave={handleIconLeave}
                  getItemStyle={getItemStyle}
                  selectWebtoons={selectWebtoons} // selectWebtoons 전달
                  handleWebtoonToggle={handleWebtoonToggle} // handleWebtoonToggle 전달
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ModifyStorageWebtoonList;
