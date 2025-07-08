"use client";

import React from "react";

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

interface ModalProps {
  item: Item;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation() /* prevent closing when clicking inside */}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-header">
          <img src={item.logo} alt={`${item.company} logo`} />
          <div>
            <h2>{item.title}</h2>
            <h3>{item.company}</h3>
          </div>
        </div>

        <ul className="modal-details">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <div className="modal-tags">
          {item.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="modal-footer">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
          )}
          <span className="dates">{item.dates}</span>
        </div>
      </div>
    </div>
  );
}
