import React from 'react';
import './About.css';
import { Award, Users, Clock, Truck } from 'lucide-react';

const About = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Marie Dupont',
            role: 'Fondatrice & CEO',
            image: 'https://i.pinimg.com/736x/5a/73/05/5a7305111aa12593f2a7260fb13c7c74.jpg',
            bio: "Marie a fondé notre entreprise en 2010 avec une vision claire : rendre le design d'intérieur accessible à tous."
        },
        {
            id: 2,
            name: 'Thomas Martin',
            role: 'Directeur du Design',
            image: 'https://i.pinimg.com/736x/70/05/f4/7005f4df2c6ebff821d88fee942e3c64.jpg',
            bio: "Thomas apporte plus de 15 ans d'expérience dans le design d'intérieur et une passion pour les meubles durables."
        },
        {
            id: 3,
            name: 'Sophie XUI',
            role: 'Responsable Clientèle',
            image: 'https://i.pinimg.com/736x/be/99/2d/be992df7e83f32b07130797d9131ccb1.jpg',
            bio: "Sophie veille à ce que chaque client bénéficie d'une expérience exceptionnelle et personnalisée."
        },
        {
            id: 4,
            name: 'Lucas Petit',
            role: 'Responsable Logistique',
            image: 'https://i.pinimg.com/736x/cc/be/6c/ccbe6cd5dafdc9e5cfb99080e1e0e41a.jpg',
            bio: "Lucas supervise notre chaîne d'approvisionnement pour garantir des livraisons rapides et sans problème."
        }
    ];

    const milestones = [
        {
            year: '2010',
            title: 'Création de l\'entreprise',
            description: 'Notre aventure a commencé dans un petit atelier parisien.'
        },
        {
            year: '2013',
            title: 'Premier magasin physique',
            description: 'Ouverture de notre premier show-room à Paris.'
        },
        {
            year: '2016',
            title: 'Expansion nationale',
            description: 'Ouverture de trois nouveaux magasins à Lyon, Bordeaux et Lille.'
        },
        {
            year: '2018',
            title: 'Lancement du e-commerce',
            description: 'Notre boutique en ligne voit le jour pour servir toute la France.'
        },
        {
            year: '2021',
            title: 'Engagement écologique',
            description: 'Lancement de notre première collection de meubles 100% durables.'
        },
        {
            year: '2023',
            title: 'Expansion internationale',
            description: 'Début de nos expéditions dans toute l\'Europe.'
        }
    ];

    return (
        <section className="about-section">
            <div className="about-header">
                <h1 className="section-title">À propos de nous</h1>
                <p className="section-subtitle">
                    Découvrez l'histoire de notre entreprise, notre équipe et notre mission pour créer des espaces de vie exceptionnels.
                </p>
            </div>

            <div className="about-story">
                <div className="about-image">
                    <img src="https://i.pinimg.com/736x/6b/0d/69/6b0d6930e87b9e51bb5ed6b372dd7a65.jpg" alt="Notre atelier" />
                </div>
                <div className="about-content">
                    <h2>Notre histoire</h2>
                    <p>
                        Fondée en 2010, notre entreprise est née d'une passion pour le design d'intérieur et d'une vision claire : rendre les meubles de qualité accessibles à tous. Ce qui a commencé comme un petit atelier dans le cœur de Paris s'est transformé en une marque reconnue à travers la France.
                    </p>
                    <p>
                        Nous croyons que chaque espace de vie mérite d'être à la fois fonctionnel et esthétique. C'est pourquoi nous travaillons avec des designers talentueux et des artisans qualifiés pour créer des pièces qui allient beauté, durabilité et confort.
                    </p>
                    <p>
                        Aujourd'hui, notre équipe continue de s'agrandir, mais notre engagement envers la qualité et le service client reste inébranlable. Chaque meuble que nous créons raconte une histoire et est conçu pour devenir une partie intégrante de votre foyer pour les années à venir.
                    </p>
                </div>
            </div>

            <div className="values-section">
                <h2>Nos valeurs</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">
                            <Award size={32} />
                        </div>
                        <h3>Qualité</h3>
                        <p>Nous ne faisons jamais de compromis sur la qualité. Chaque meuble est fabriqué avec les meilleurs matériaux et une attention méticuleuse aux détails.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <Users size={32} />
                        </div>
                        <h3>Service client</h3>
                        <p>Notre équipe dévouée est toujours prête à vous aider, que vous ayez besoin de conseils ou d'assistance après votre achat.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <Clock size={32} />
                        </div>
                        <h3>Durabilité</h3>
                        <p>Nous concevons des meubles faits pour durer, en utilisant des matériaux durables et des méthodes de production respectueuses de l'environnement.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <Truck size={32} />
                        </div>
                        <h3>Livraison fiable</h3>
                        <p>Nous garantissons une livraison rapide et sécurisée, avec un suivi en temps réel pour votre tranquillité d'esprit.</p>
                    </div>
                </div>
            </div>

            <div className="timeline-section">
                <h2>Notre parcours</h2>
                <div className="timeline">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">{milestone.year}</div>
                                <h3>{milestone.title}</h3>
                                <p>{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="team-section">
                <h2>Notre équipe</h2>
                <p>Rencontrez les personnes passionnées qui rendent notre mission possible.</p>
                
                <div className="team-grid">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-card">
                            <div className="team-image">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <span className="team-role">{member.role}</span>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;