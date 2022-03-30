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
    margin: 50px 0 100px 0;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${mq('sm')} {
        flex-direction: row;
    }
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

const customStyles = {
    option: () => ({
        //Si je laisse pas _hover bg !! RED !! le hover fonctionne pas
        _hover: 'background-color: red;',
        padding: 10,
        cursor: 'pointer',
    }),
    control: () => ({
        border: '2px solid rgba(149, 149, 149, 0.8)',
        display: 'flex',
        cursor: 'pointer',
        borderRadius: '5px',
    }),
    singleValue: () => {
        const cursor = 'pointer';
        const transition = 'opacity 300ms';
        return { cursor, transition };
    }
}


const PaginatedArticles = ({ articles, categories }: PaginatedArticlesProps):JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(articles?.length);
    const [currentCategory, setCurrentCategory] = useState<any>({ label: 'Tous les articles', value: 'all'});
    const [currentArticles, setCurrentArticles] = useState([]);
    let currentPageRef = useRef(null);

    const params = new URLSearchParams(window.location.search);

    const updateURL = (pageNumber: number) => {
        if(typeof window !== 'undefined') {
            if(pageNumber === 1) {
                if(params.get('page') !== null) {
                    localStorage.removeItem('param')
                    params.delete('page');
                    window.history.pushState({}, '', window.location.href.split('?')[0]);
                }
            } else {
                params.set('page', pageNumber.toString())
                window.history.pushState({}, '', `?${params.toString()}`);
                //@ts-ignore
                localStorage.setItem('param', params.get('page'))
            }
        }
    }

    const cleanParams = () => {
        if (params.get('page') !== null){
            params.delete('page');
            window.history.pushState({}, '', window.location.href.split('?')[0]);
        }
    }

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
        //@ts-ignore
        currentPageRef.current.style.animation = "Anim 0.3s ease-in-out";
    }

    const handleChange = (selectedOption: any) => {
        setCurrentCategory(selectedOption);
        localStorage.setItem('category', JSON.stringify(selectedOption));
        setCurrentPage(1);
    };

    const setCategory = () => {
        if(!localStorage.getItem('category')) {
            localStorage.setItem('category', JSON.stringify(currentCategory));
            setCurrentCategory(JSON.parse(localStorage.getItem('category') as string));
        } else {
            setCurrentCategory(JSON.parse(localStorage.getItem('category') as string));
        }
    }

    const filterArticlesByCategory = () => {
        if (currentCategory?.value === 'all') {
            setCurrentTable(articles);
            setTotalCount(articles?.length);
            triggerAnim();
        } else {
            const filteredArticles = articles?.filter(article => article?.category?.id === currentCategory.value);
            setTotalCount(filteredArticles?.length);
            setCurrentTable(filteredArticles);
            triggerAnim();
        }
    } 

    useEffect(() => {
        setCategory();
        if (localStorage.getItem('param')) {
            setCurrentPage(Number(localStorage.getItem('param')))
        }
        setCurrentTable(articles);
        triggerAnim();
        updateURL(currentPage);
    }, [])

    useEffect(() => {
        filterArticlesByCategory();
        updateURL(currentPage);
    }, [currentCategory, currentPage])

    return (
        <PaginatedArticlesContainer>
           <Container>
                <ArticlesHeader>
                    <Select
                        styles={customStyles}
                        isSearchable={false}
                        placeholder="Filtrer par catégories"
                        value={currentCategory}
                        //@ts-ignore
                        onChange={handleChange}
                        //@ts-ignore
                        options={selectCategories}
                        css={css`
                            width: 300px;
                            font-family: Galano, sans-serif !important;
                            color: rgba(105, 105, 105, 1);
                            .css-319lph-ValueContainer {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                            }
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
                            .css-ad28gj-Option {
                                transition: 0.5s;
                                &:hover {
                                    background-color: hsla(34, 98%, 49%, 60%);
                                }
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
                        //@ts-ignore
                        currentPageRef.current.style.animation = "";
                    }
                }}>
                    {currentArticles?.map((article: ArticleType) => (
                        <BlogArticle key={article?.id} article={article} cleanParams={cleanParams} />
                    ))}
                </Articles>
           </Container>
        </PaginatedArticlesContainer>
    );
};


export default PaginatedArticles;
