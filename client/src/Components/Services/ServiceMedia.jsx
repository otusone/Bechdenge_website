import React from 'react';

const ServiceMedia = () => {
    return (
        <div className="w-full max-w-5xl mx-auto mt-10 aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Promo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default ServiceMedia;
