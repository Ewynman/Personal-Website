"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { ContentItem } from "../types/content";
import TagList from "./TagList";

interface ModalProps {
  item: ContentItem;
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
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={contentRef}
        className="modal-content"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="modal-header">
          <Image
            src={item.logo}
            alt=""
            width={48}
            height={48}
          />
          <div>
            <h2 id="modal-title">{item.title}</h2>
            <h3>{item.company}</h3>
          </div>
        </div>

        <ul className="modal-details">
          {item.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        <TagList tags={item.tags} />

        <div className="modal-footer">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View project
            </a>
          ) : (
            <span />
          )}
          <time className="dates">{item.dates}</time>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(modalNode, document.body);
}
