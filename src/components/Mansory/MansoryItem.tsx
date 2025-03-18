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
  // Функція для випадкової висоти
  const randomHeight = () => {
    const heights = ['398px', '405px', '395px'];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  const [height] = useState(randomHeight());

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      title={item.title}
      aria-label={`${item.title} ${item.description}`}
    >
      <MansoryItemStyle style={{ height }}>
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

const MansoryItemStyle = styled.div`
  margin: 1rem 0;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--button-index);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  max-width: 400px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
    
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
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
      }
    }
  }

  &:hover {
    transform: scale(1.05);

    .overlay {
      opacity: 1;
    }

    .content__slate {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;



export default MansoryItem;