// src/components/Carousel.tsx
"use client";

import React, { useEffect, useState } from 'react';
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
  url?: string
}

interface CarouselProps {
  items: Item[];
  sectionId: string;
  sectionTitle: string;
}

export default function Carousel({ items, sectionId, sectionTitle }: CarouselProps) {
  const allTags = Array.from(new Set(items.flatMap(i => i.tags)));
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Modal state
  const [selected, setSelected] = useState<Item | null>(null);

  // Mobile detection for rendering all items for horizontal scroll
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const filtered = activeTag
    ? items.filter(i => i.tags.includes(activeTag))
    : items;

  const prev = () => setCurrentIndex((index: number) => Math.max(0, index - 1));
  const next = () => setCurrentIndex((index: number) => Math.min(filtered.length - 3, index + 1));

  const visibleItems = isMobile
    ? filtered
    : filtered.slice(currentIndex, currentIndex + 3);

  return (
    <section id={sectionId} className="container">
      <h2 className="section-title">{sectionTitle}</h2>
      {sectionId === 'work' && (
        <p className="section-subtitle">Click a card to view more details</p>
      )}

      {/* Tag filters (unchanged) */}
      <div className="tags">
        <button
          className={!activeTag ? 'active' : ''}
          onClick={() => { setActiveTag(null); setCurrentIndex(0); }}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={activeTag === tag ? 'active' : ''}
            onClick={() => { setActiveTag(tag); setCurrentIndex(0); }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper">
        <button onClick={prev} disabled={currentIndex === 0} className="arrow">
          ←
        </button>

        <div className="card-container">
          {visibleItems.map(item => (
            <div
              key={item.id}
              className="card"
              onClick={() => setSelected(item)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelected(item);
                }
              }}
            >
              <img src={item.logo} alt={`${item.company} logo`} />
              <h3>{item.company}</h3>

              <h4 className="card-title">{item.title}</h4>

              <div className="dates">{item.dates}</div>
              <p>{item.highlight}</p>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          disabled={currentIndex + 3 >= filtered.length}
          className="arrow"
        >
          →
        </button>
      </div>

      {/* Render the modal when an item is selected */}
      {selected && (
        <Modal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
