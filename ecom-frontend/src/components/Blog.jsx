import React, { useState, useEffect } from 'react';
import './Blog.css';
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react';

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Données fictives des articles
    const dummyArticles = [
        {
            id: 1,
            title: "Comment choisir le canapé parfait pour votre salon",
            excerpt: "Découvrez nos conseils d'experts pour sélectionner le canapé qui correspondra parfaitement à votre espace et à votre style de vie.",
            image: "https://i.pinimg.com/736x/40/2c/1c/402c1c6575815181d521099035a063a2.jpg",
            date: "15 mars 2025",
            author: "Marie Dupont",
            category: "conseils",
            tags: ["salon", "canapé", "décoration"]
        },
        {
            id: 2,
            title: "Tendances design d'intérieur pour 2025",
            excerpt: "Explorez les tendances émergentes en matière de design d'intérieur qui définiront l'année 2025.",
            image: "https://i.pinimg.com/736x/9d/9d/e1/9d9de1a253fb9402e3d15f4aa0ae0771.jpg",
            date: "2 mars 2025",
            author: "Thomas Martin",
            category: "tendances",
            tags: ["design", "tendances", "2025"]
        },
        {
            id: 3,
            title: "5 façons d'intégrer le bois dans votre intérieur",
            excerpt: "Le bois apporte chaleur et authenticité à n'importe quel espace. Voici comment l'incorporer avec style dans votre maison.",
            image: "https://i.pinimg.com/736x/02/f2/06/02f20673beed23df0a05b2ece8e0d530.jpg",
            date: "18 février 2025",
            author: "Sophie Bernard",
            category: "conseils",
            tags: ["bois", "matériaux", "décoration"]
        },
        {
            id: 4,
            title: "Aménager un petit espace : astuces et solutions",
            excerpt: "Maximisez l'espace dans votre petit appartement avec ces idées d'aménagement ingénieuses et ces meubles multifonctionnels.",
            image: "https://i.pinimg.com/736x/0f/78/8a/0f788ab005dd5af572493e6db5990638.jpg",
            date: "5 février 2025",
            author: "Lucas Petit",
            category: "astuces",
            tags: ["petit espace", "optimisation", "rangement"]
        },
        {
            id: 5,
            title: "Le retour du style Art Déco dans nos intérieurs",
            excerpt: "Découvrez comment le glamour et l'élégance de l'Art Déco font leur grand retour dans le design d'intérieur contemporain.",
            image: "https://i.pinimg.com/736x/c6/38/f7/c638f7838e7d7ea3554e43594b39b1fc.jpg",
            date: "26 janvier 2025",
            author: "Marie Dupont",
            category: "tendances",
            tags: ["art déco", "style", "histoire"]
        },
        {
            id: 6,
            title: "Créez un espace de travail productif à la maison",
            excerpt: "Avec l'essor du télétravail, aménager un bureau à domicile fonctionnel et inspirant devient essentiel. Suivez nos conseils.",
            image: "https://i.pinimg.com/736x/b5/8f/bf/b58fbfb5616b0002ad888aa4992df7d9.jpg",
            date: "12 janvier 2025",
            author: "Thomas Martin",
            category: "astuces",
            tags: ["bureau", "travail", "productivité"]
        }
    ];

    useEffect(() => {
        // Simuler le chargement des articles depuis une API
        setTimeout(() => {
            setArticles(dummyArticles);
        }, 500);
    }, []);

    const categories = [
        { id: 'all', name: 'Tous les articles' },
        { id: 'conseils', name: 'Conseils' },
        { id: 'tendances', name: 'Tendances' },
        { id: 'astuces', name: 'Astuces & DIY' }
    ];

    const filteredArticles = articles
        .filter(article => activeCategory === 'all' || article.category === activeCategory)
        .filter(article => 
            searchQuery === '' || 
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    const popularTags = ["décoration", "salon", "design", "tendances", "bois", "petit espace", "bureau"];

    return (
        <section className="blog-section">
            <div className="blog-header">
                <h1 className="section-title">Notre Blog</h1>
                <p className="section-subtitle">
                Découvrez nos derniers articles, conseils et inspirations pour créer l'intérieur parfait.
                </p>
            </div>

            <div className="blog-container">
                <aside className="blog-sidebar">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Rechercher un article..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search size={20} className="search-icon" />
                    </div>

                    <div className="category-filter">
                        <h3>Catégories</h3>
                        <ul>
                            {categories.map((cat) => (
                                <li
                                    key={cat.id}
                                    className={activeCategory === cat.id ? 'active' : ''}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="popular-tags">
                        <h3>Tags populaires</h3>
                        <div className="tags">
                            {popularTags.map((tag, index) => (
                                <span key={index} className="tag">
                                    <Tag size={14} /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>

                <div className="blog-articles">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article) => (
                            <div key={article.id} className="article-card">
                                <img src={article.image} alt={article.title} className="article-image" />
                                <div className="article-content">
                                    <h2 className="article-title">{article.title}</h2>
                                    <div className="article-meta">
                                        <span><Calendar size={16} /> {article.date}</span>
                                        <span><User size={16} /> {article.author}</span>
                                    </div>
                                    <p className="article-excerpt">{article.excerpt}</p>
                                    <button className="read-more">
                                        Lire la suite <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-articles">Aucun article ne correspond à votre recherche.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;
