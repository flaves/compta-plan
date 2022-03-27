import React from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { usePagination, DOTS } from '../../hooks/usePagination';

import mq from '../../styles/mq';

export interface PaginationProps {
  onPageChange: (page: any) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  /* background-color: hsl(87, 0%, 87%); */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 0 0 10px 0;
`;

const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 0px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  width: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  &:hover {
      background-color: ${({ theme }) => theme.color.primary};
  }
  ${mq('sm')} {
    margin: auto 20px;
  }
`;

const ArrowLeft = styled.div`
cursor: pointer;
transform: rotate(-135deg) translate(-50%);
  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }
`;
const ArrowRight = styled.div`
cursor: pointer;
transform: rotate(45deg);
  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    &:hover {
        border-right: 0.12em solid red;
        border-top: 0.12em solid red;
    }
  }
  &::before:hover {
    border-right: 0.12em solid red;
    border-top: 0.12em solid red;
  }
`;

const Dots = styled.div`
    padding-top: 5px;
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`;


const disabled = css`
    pointer-events: none;
    &:hover {
        cursor: default;
        background-color: transparent;
    }
`;

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const { color } = useTheme();

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <PaginationContainer>
      <PaginationItem onClick={onPrevious} css={currentPage === 1 ? disabled : css``}>
        <ArrowLeft />
      </PaginationItem>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <Dots>&#8230;</Dots>;
        }

        return (
          <PaginationItem onClick={() => onPageChange(pageNumber)} css={pageNumber === currentPage && css`background-color: ${color.primary};`}>
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem onClick={onNext} css={currentPage === lastPage && disabled}>
        <ArrowRight />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
