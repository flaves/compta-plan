import React, { useState, useEffect, useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Select from 'react-select';

import Pagination from '../shared/pagination';
import BlogArticle from './blogArticle';

import mq from '../../styles/mq';

import ArticleType from '../../types/article';
import CategoryType from '../../types/category';

interface PaginatedArticlesProps {
    categories: CategoryType[];
    articles: ArticleType[];
}

const PaginatedArticlesContainer = styled.section`
    margin-top: 50px;
`;

const Container = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 0 16px;
  ${mq('sm')} {
    max-width: 1280px;
    padding: 0 24px;
  }
`;

const ArticlesHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Articles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
    ${mq('sm')} {
        justify-content: space-between;
    }
    @keyframes Anim {
        0% {
            opacity: 0;
            transform: translateX(-20px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;


const PaginatedArticles = ({ articles, categories }: PaginatedArticlesProps):JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(articles?.length);
    const [currentCategory, setCurrentCategory] = useState<any>({ label: 'Tous les articles', value: 'all'});
    const [currentArticles, setCurrentArticles] = useState([]);
    let currentPageRef = useRef(null);

    let PageSize = 9;
    const setCurrentTable = useCallback((articles) => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const filteredArticles = articles?.slice(firstPageIndex, lastPageIndex);
        setCurrentArticles(filteredArticles);
    }, [currentPage])
    
    const selectCategories = categories?.map(category => ({
        label: category?.name,
        value: category?.id
    }))
    selectCategories.unshift({ label: 'Tous les articles', value: 'all' })

    const triggerAnim = () => {
        currentPageRef.current.style.animation = "Anim 0.3s ease-in-out";
    }

    const handleChange = (selectedOption: any) => {
        setCurrentCategory(selectedOption);
        setCurrentPage(1);
    };

    useEffect(() => {
        setCurrentTable(articles);
        triggerAnim();
    }, [])

    useEffect(() => {
        if(currentCategory?.value === 'all') {
            setCurrentTable(articles);
            setTotalCount(articles?.length);
            triggerAnim();
        } else {
           const filteredArticles = articles?.filter(article => article?.category?.id === currentCategory?.value);
           setTotalCount(filteredArticles?.length);
           setCurrentTable(filteredArticles);
           triggerAnim();
        }
    }, [currentCategory, currentPage])

    return (
        <PaginatedArticlesContainer>
           <Container>
                <ArticlesHeader>
                    <Select
                        isSearchable={false}
                        placeholder="Filtrer par catégories"
                        value={currentCategory}
                        //@ts-ignore
                        onChange={handleChange}
                        //@ts-ignore
                        options={selectCategories}
                        css={css`
                            width: 300px;
                            .css-1s2u09g-control {
                                border: 1px solid rgba(149, 149, 149);
                                cursor: pointer;
                            }
                            .css-1okebmr-indicatorSeparator {
                                display: none;
                            }
                            .css-tlfecz-indicatorContainer svg {
                                fill: rgba(149, 149, 149);
                            }
                        `}
                    />
                    <Pagination
                        // className="pagination-bar"
                        siblingCount={1}
                        currentPage={currentPage}
                        totalCount={totalCount}
                        pageSize={PageSize}
                        onPageChange={(page: any) => {setCurrentPage(page); triggerAnim()}}
                    />
                </ArticlesHeader>
                <Articles ref={currentPageRef} onAnimationEnd={() => {
                    if (currentPageRef.current) {
                        currentPageRef.current.style.animation = "";
                    }
                }}>
                    {currentArticles?.map((article: ArticleType) => (
                        <BlogArticle key={article?.id} article={article} />
                    ))}
                </Articles>
           </Container>
        </PaginatedArticlesContainer>
    );
};


export default PaginatedArticles;
