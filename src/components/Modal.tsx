"use client";

import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    contentRef.current?.focus();
    return () => {
      previouslyFocused?.focus();
    };
  }, []);

  const modalNode = (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div
        ref={contentRef}
        className="modal-content"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className="modal-header">
          <Image 
            src={item.logo} 
            alt={`${item.company} logo`}
            width={60}
            height={60}
          />
          <div>
            <h2 id="modal-title">{item.title}</h2>
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
              className="btn btn-primary"
            >
              View Project
            </a>
          )}
          <span className="dates">{item.dates}</span>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  if (typeof document !== "undefined") {
    return createPortal(modalNode, document.body);
  }
  return null;
}
