// src/components/Carousel.tsx
"use client";

import React, { useState } from 'react';
import Modal from "./Modal";  // Import the Modal component

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

  const filtered = activeTag
    ? items.filter(i => i.tags.includes(activeTag))
    : items;

  const prev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const next = () => setCurrentIndex(i => Math.min(filtered.length - 3, i + 1));

  return (
    <section id={sectionId} className="container">
      <h2 className="section-title">{sectionTitle}</h2>

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
          {filtered.slice(currentIndex, currentIndex + 3).map(item => (
            <div key={item.id} className="card">
              <img src={item.logo} alt={`${item.company} logo`} />
              <h3>{item.company}</h3>

              {/* Clicking the title opens the modal */}
              <h4
                className="card-title"
                onClick={() => setSelected(item)}
                style={{ cursor: "pointer" }}  // give visual hint
              >
                {item.title}
              </h4>

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
