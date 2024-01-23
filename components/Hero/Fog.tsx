import React, { useState } from "react";
import "./fog.css"; // Make sure to import your styles

interface Episode {
  id: number;
  episodeNumber: number;
  title: string;
  duration: string;
  synopsis: string;
  showNotes: string[];
  followLinks: string[];
}

interface BoxProps {
  episodes: Episode[];
}

const Box: React.FC<BoxProps> = ({ episodes }) => {
  const [activeCell, setActiveCell] = useState<number | null>(null);

  const handleCellClick = (cellId: number) => {
    setActiveCell(cellId === activeCell ? null : cellId);
  };

  const handleContentClose = () => {
    setActiveCell(null);
  };

  return (
    <div className="container">
      {/* Render your content here */}
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className={`box__row-cell ${
            activeCell === episode.id ? "active" : ""
          }`}
          onClick={() => handleCellClick(episode.id)}
        >
          {/* Render episode details */}
          <p className="box__row-cell-info-ep">
            EP <span>{episode.episodeNumber}</span>
          </p>
          <p className="box__row-cell-info-title">{episode.title}</p>
          {/* Add other episode details as needed */}
        </div>
      ))}

      {/* Render box content */}
      {episodes.map((episode) => (
        <div
          key={`content_${episode.id}`}
          className={`box__content ${
            activeCell === episode.id ? "show-content" : ""
          }`}
        >
          {/* Render content details */}
          <h2 className="box__content-text-heading">
            SYNOPSIS - {episode.duration}
          </h2>
          <p className="box__content-text-par">{episode.synopsis}</p>
          <h2 className="box__content-text-heading">SHOW NOTES</h2>
          <ul className="box__content-text-list">
            {episode.showNotes.map((note, index) => (
              <li key={index} className="box__content-text-item">
                {note}
              </li>
            ))}
          </ul>
          <h2 className="box__content-text-heading">FOLLOW</h2>
          {episode.followLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a className="box__content-text-link" href={link} target="_blank">
                {link}
              </a>
              <br />
            </React.Fragment>
          ))}
        </div>
      ))}

      {/* Render close button */}
      <div
        className={`box__close ${activeCell ? "box-close-active" : ""}`}
        onClick={handleContentClose}
      >
        <span></span>
        <br />
        <span></span>
        <span></span>
        <br />
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Add other components as needed */}
      <div className="box__episodes">EPISODES</div>
      <div className="box__smokebg"></div>
      <div className="box__title">
        <h1 className="box__title-heading">
          LOREM
          <br />
          <span>IPSUM</span>
        </h1>
        <p className="box__title-par">egestas sapien</p>
      </div>
    </div>
  );
};

export default Box;
