"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Modal from "./Modal"; 

interface Item {
  id: number;
  logo: string;
  company: string;
  title: string;
  dates: string;
  highlight: string;
  tags: string[];
  details: string[];
  url?: string;
}

interface CarouselProps {
  items: Item[];
  sectionId: string;
  sectionTitle: string;
}

export default function Carousel({ items, sectionId, sectionTitle }: CarouselProps) {
  const [selected, setSelected] = useState<Item | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  const handleCardClick = (item: Item) => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      setSelected(item);
    }
  };

  return (
    <section 
      id={sectionId} 
      ref={sectionRef}
      className={`section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        
        <div className="cards-grid">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="card"
              onClick={() => handleCardClick(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(item);
                }
              }}
            >
              <div className="card-header">
                <Image 
                  src={item.logo} 
                  alt={`${item.company} logo`} 
                  className="card-logo"
                  width={50}
                  height={50}
                />
                <div className="card-badge">{item.dates}</div>
              </div>
              
              <h3 className="card-title">{item.company}</h3>
              <h4 className="card-subtitle">{item.title}</h4>
              
              <p className="card-highlight">{item.highlight}</p>
              
              <div className="card-tags">
                {item.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              
              {item.url && (
                <div className="card-link">
                  <span>View Project →</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <Modal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
