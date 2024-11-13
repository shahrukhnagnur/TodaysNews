import React, { createContext, useEffect, useState } from 'react';

const News = createContext();

const NewsProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [category, setcategory] = useState("general")
    const fetchNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f36af5c63ee54fc2879c1baf97a7b48f`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data.articles) {
                setNews(data.articles);
                console.log(data)
            } else {
                setError('Failed to load news articles');
            }
        } catch (err) {
            setError('Failed to load the data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [category]);

    return (
        <News.Provider value={{ news, loading, error,setcategory }}>
            {children}
        </News.Provider>
    );
};

export { NewsProvider, News };
