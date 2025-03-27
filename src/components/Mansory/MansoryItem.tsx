import React, { useState } from 'react';
import styled from 'styled-components';

interface MansoryItemProps {
  item: {
    title: string;
    description?: string;
    imageUrl: string;
    link?: string;
    technologies?: string[];
  };
}

const MansoryItem: React.FC<MansoryItemProps> = ({ item }) => {
  
  const [isActive, setIsActive] = useState(false);

  const isMobile = () => window.innerWidth <= 768;

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile()) {
      if (!isActive) {
        e.preventDefault();
        setIsActive(true);  
      }
      
    }
    
  };

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      title={item.title}
      aria-label={`${item.title} ${item.description}`}
      onClick={handleClick}
    >
      <MansoryItemStyle>
        <img src={item.imageUrl} alt={item.title} />
        <div className="content__slate">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="tags">
            {item.technologies?.map((tech, index) => (
              <span key={index} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </MansoryItemStyle>
    </a>
  );
};


/* ---------------------------- Styles ---------------------------- */

const MansoryItemStyle = styled.div`
  margin: 1rem 0.2rem;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--button-index);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) =>
    theme.mode === 'light'
      ? '0 4px 12px 4px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.15), 0 -4px 8px rgba(0, 0, 0, 0.1)'
      : '0 4px 12px 4px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.08), 0 -4px 8px rgba(255, 255, 255, 0.05)'};

  transition: transform 0.3s ease;
  height: 390px;
  width: 100%;
  max-width: 376px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
  }

  .content__slate {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: start;
    height: 100%;
    width: 100%;
    padding: 1rem 10px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0;
    opacity: 0;
    transform: translateY(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 3;

    h3 {
      font-size: 1.5rem;
      margin: 0;
      line-height: 1.2;
      color: #fff;
      text-align: center;
    }

    p {
      font-size: 1rem;
      color: #e0e0e0;
      padding-left: 15px;
      padding-right: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .tags {
      margin-top: 5px;
      display: flex;
      gap: 0.5rem;
      justify-content: flex-start;
      padding-left: 15px;

      .tag {
        background: rgba(255, 255, 255, 0.3);
        padding: 0.3rem 0.6rem;
        border-radius: 5px;
        font-size: 0.85rem;
        text-transform: capitalize;
        color: white;
        max-width: 100%;
        word-break: break-word;
      }
    }
  }

  &:hover {
    transform: scale(1.05);

    .content__slate {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &.active {
    .content__slate {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default MansoryItem;
