import React, { useContext, useState } from 'react';
import { News } from './context';

const Home = () => {
    const { news, loading, error, setcategory } = useContext(News);
    const [search, setsearch] = useState('');
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const limitText = (text, wordLimit) => {
        if (!text) return ''; 
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    const handlesearch = (e) => {
        e.preventDefault();
        setcategory(search);
    };

    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-12">
                        <form action="" onSubmit={handlesearch}>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search any content"
                                onChange={(e) => setsearch(e.target.value)} 
                            />
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {news.map((article, index) => (
                        <div key={index} className="col-md-4 my-4">
                            <div className="card px-4" style={{ height: 500, position: 'relative' }}>
                                <img 
                                    src={article.urlToImage} 
                                    className="card-img-top" 
                                    alt="..."  
                                    height={200}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{limitText(article.title, 20)}</h5>
                                    <p className="card-text">{limitText(article.description, 20)}</p>
                                </div>
                                <a 
                                    href={article.url} 
                                    target="_blank" 
                                    className="btn btn-primary fixed-btn"
                                >
                                    Checkout
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
