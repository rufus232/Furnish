import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);
    const mapRef = useRef(null);
    const mapInitializedRef = useRef(false);

    // Coordonnées de l'adresse
    const address = "25 Rue Claude Tillier, 75012 Paris, France";
    const mapCenter = { lat: 48.8472, lng: 2.3916 }; // Coordonnées approximatives pour Paris 12ème

    // Fonction pour initialiser la carte
    const initializeMap = () => {
        if (!mapRef.current || mapInitializedRef.current || !window.google) return;
        
        mapInitializedRef.current = true;
        
        const map = new window.google.maps.Map(mapRef.current, {
            center: mapCenter,
            zoom: 15,
            mapTypeControl: false,
        });
        
        const geocoder = new window.google.maps.Geocoder();
        
        geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const location = results[0].geometry.location;
                map.setCenter(location);
                
                new window.google.maps.Marker({
                    map: map,
                    position: location,
                    title: 'Mon Meuble',
                    animation: window.google.maps.Animation.DROP
                });
            }
        });
        
        setMapLoaded(true);
    };

    useEffect(() => {
        const loadGoogleMapsScript = () => {
            if (window.google && window.google.maps) {
                initializeMap();
                return;
            }
    
            const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
            if (existingScript) {
                existingScript.onload = () => initializeMap();
                return;
            }
    
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC7OqZ90weeR4nzRqgn4XruyVYwePxQ9sE&loading=async`;
            script.async = true;
            script.defer = true;
            script.onload = () => initializeMap();
    
            document.head.appendChild(script);
        };
    
        loadGoogleMapsScript();
    
        return () => {
            mapInitializedRef.current = false;
        };
    }, []);
    

    // Effet pour initialiser la carte si mapRef change ou si Google Maps est chargé après le rendu du composant
    useEffect(() => {
        if (window.google && window.google.maps && mapRef.current && !mapInitializedRef.current) {
            initializeMap();
        }
    }, [mapRef.current]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simuler l'envoi du formulaire
        setTimeout(() => {
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setTimeout(() => setSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <section className="contact-section">
            <div className="contact-header">
                <h1 className="section-title">Contactez-nous</h1>
                <p className="section-subtitle">
                    Nous sommes là pour répondre à toutes vos questions et vous aider dans vos achats.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Informations de contact</h2>
                    <p>N'hésitez pas à nous contacter directement ou à nous rendre visite.</p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <MapPin size={24} className="contact-icon" />
                            <div>
                                <h3>Notre adresse</h3>
                                <p>{address}</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <Phone size={24} className="contact-icon" />
                            <div>
                                <h3>Téléphone</h3>
                                <p>+33 1 23 45 67 89</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <Mail size={24} className="contact-icon" />
                            <div>
                                <h3>Email</h3>
                                <p>contact@monmeuble.com</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-hours">
                        <h3>Heures d'ouverture</h3>
                        <p>Lundi - Vendredi: 9h00 - 19h00</p>
                        <p>Samedi: 10h00 - 18h00</p>
                        <p>Dimanche: Fermé</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Envoyez-nous un message</h2>
                    
                    {submitted ? (
                        <div className="success-message">
                            <p>Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nom complet</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Votre nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="votre.email@exemple.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="subject">Sujet</label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Sujet de votre message"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Écrivez votre message ici..."
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-button">
                                <Send size={18} />
                                Envoyer le message
                            </button>
                        </form>
                    )}
                </div>
            </div>
            
            <div className="map-container">
                <h2>Nous trouver</h2>
                <div className="google-map">
          <LoadScript googleMapsApiKey="AIzaSyC7OqZ90weeR4nzRqgn4XruyVYwePxQ9sE">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={mapCenter}
              zoom={15}
            >
              <Marker
                position={mapCenter}
                title="Mon Meuble"
              />
            </GoogleMap>
          </LoadScript>
        </div>
            </div>
        </section>
    );
};

export default Contact;