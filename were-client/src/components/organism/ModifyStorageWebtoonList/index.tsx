'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import TextButton from '@/components/atoms/TextButton';
import { IStorageWebtoon } from '@/types/webtoon';
import styles from './index.module.scss';
import DraggableItem from './draggableItem';

interface Props {
  webtoonInfos: IStorageWebtoon[];
  selectIndex: number;
  handleCompleteButton: () => void;
  handleCancelButton: () => void;
}

/**
 * 드래그 시 스타일
 * @param draggableStyle : 드래그 중 스타일
 * @returns 기본 드래그 스타일 적용
 */
const getItemStyle = (draggableStyle: any) => ({
  userSelect: 'none',
  ...draggableStyle,
});

const ModifyStorageWebtoonList = ({ webtoonInfos, selectIndex, handleCompleteButton, handleCancelButton }: Props) => {
  const [webtoonInfoState, setWebtoonInfoState] = useState<IStorageWebtoon[]>(webtoonInfos);
  const [isHover, setIsHover] = useState<boolean[]>([]);
  const [selectWebtoons, setSelectWebtoons] = useState<IStorageWebtoon[]>([]);
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

  /** 개별 아이콘 클릭 시 삭제 기능 */
  const handleDeleteClick = (webtoonId: number) => {
    setWebtoonInfoState(webtoonInfoState.filter(webtoon => webtoon.id !== webtoonId));
  };

  /** 전체 선택 */
  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectWebtoons([]);
    } else {
      setSelectWebtoons([...webtoonInfos]);
    }
    setIsAllSelected(!isAllSelected);
  };

  /** 개별 선택 */
  const handleWebtoonToggle = (webtoon: IStorageWebtoon) => {
    const isSelected = selectWebtoons.some(item => item === webtoon);

    if (isSelected) {
      setSelectWebtoons(selectWebtoons?.filter(item => item !== webtoon));
    } else {
      setSelectWebtoons([...selectWebtoons, webtoon]);
    }
  };

  /** 선택 삭제 버튼 기능 */
  const handleDeleteButton = () => {
    const updatedWebtoonInfoState = webtoonInfoState.filter(webtoon => !selectWebtoons.includes(webtoon));
    setWebtoonInfoState(updatedWebtoonInfoState);
    setSelectWebtoons([]); // 선택 해제
  };

  /** 드래그 후 재배열 */
  const reorder = (list: IStorageWebtoon[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  /**
   * 드래그 기능
   * @param result : 드래그 후 놔둘 위치
   * @returns
   * 해당 위치가 드래그가 가능한 위치면 배치
   * 아니면 원위치
   */
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;

    const newItem = reorder(webtoonInfoState, source.index, destination.index);
    setWebtoonInfoState(newItem);
  };

  /** 전체 선택 상태 관리 */
  useEffect(() => {
    if (selectIndex >= 0 && selectIndex < webtoonInfos.length) {
      const selectedWebtoon = webtoonInfos[selectIndex];
      setSelectWebtoons([selectedWebtoon]);
    } else {
      setSelectWebtoons([]);
    }
  }, [selectIndex, webtoonInfos]);

  /** 선택하고 들어온 index 관리 */
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
            <TextButton size="small" design="inverse" onClick={handleCancelButton}>
              취소
            </TextButton>
            <TextButton size="small" design="primary" onClick={handleDeleteButton}>
              선택 삭제
            </TextButton>
          </div>
        </div>
      </div>
      <DragDropContext onDragEnd={(result: any) => handleDragEnd(result)}>
        <Droppable droppableId="droppableId">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} className={clsx(styles.webtoonInfoList)}>
              {webtoonInfoState.map((webtoonInfo, index) => (
                <DraggableItem
                  key={webtoonInfo.id}
                  webtoonInfo={webtoonInfo}
                  index={index}
                  isHover={isHover}
                  handleIconOver={handleIconOver}
                  handleIconLeave={handleIconLeave}
                  handleDeleteClick={handleDeleteClick}
                  getItemStyle={getItemStyle}
                  selectWebtoons={selectWebtoons}
                  handleWebtoonToggle={handleWebtoonToggle}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className={styles.completeButton}>
        <TextButton size="small" design="primary" onClick={handleCompleteButton}>
          완료
        </TextButton>
      </div>
    </div>
  );
};

export default ModifyStorageWebtoonList;
