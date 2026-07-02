"use client";

import { useState } from "react";
import Image from "next/image";
import type { ContentItem } from "../types/content";
import Reveal from "./Reveal";
import TagList from "./TagList";
import Modal from "./Modal";

interface WorkSectionProps {
  items: ContentItem[];
}

export default function WorkSection({ items }: WorkSectionProps) {
  const [selected, setSelected] = useState<ContentItem | null>(null);

  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <span className="section-label">Experience</span>
            <h2 id="work-heading" className="section-title">
              Where I&apos;ve worked
            </h2>
            <p className="section-description">
              Six roles across insurance tech, healthcare, enterprise hardware,
              and research — each with measurable outcomes.
            </p>
          </header>
        </Reveal>

        <ul className="work-list">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <li>
                <button
                  type="button"
                  className="work-item"
                  onClick={() => setSelected(item)}
                  aria-label={`View details for ${item.title} at ${item.company}`}
                >
                  <div className="work-item-header">
                    <div className="work-item-meta">
                      <Image
                        src={item.logo}
                        alt=""
                        className="work-item-logo"
                        width={40}
                        height={40}
                      />
                      <div>
                        <p className="work-item-company">{item.company}</p>
                        <p className="work-item-role">{item.title}</p>
                      </div>
                    </div>
                    <time className="work-item-dates">{item.dates}</time>
                  </div>
                  <p className="work-item-highlight">{item.highlight}</p>
                  <TagList tags={item.tags} limit={5} />
                </button>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      {selected && (
        <Modal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
