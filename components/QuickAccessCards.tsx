'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// === Department Targets ===
const departments = [
  { name: 'CSE', icon: '🖥️', target: 420 },
  { name: 'CSM', icon: '💻', target: 310 },
  { name: 'ECE', icon: '📡', target: 280 },
  { name: 'EEE', icon: '⚡', target: 190 },
];

// === Styled Components ===
const StyledWrapper = styled.section`
  background: linear-gradient(135deg, #f7f7f7, #ececec);
  padding: 5rem 1.25rem;
  text-align: center;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);

  .title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-weight: 700;
    color: #333;
    letter-spacing: -0.5px;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    background: white;
    border-radius: 1.25rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    width: 280px;
    padding: 2rem 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  .numbers-container {
    height: 200px;
    position: relative;
    text-align: center;
    display: flex;
    gap: 15px;
    margin-bottom: 1.5rem;
    justify-content: center;
  }

  .nums {
    box-shadow: 8px 8px 15px rgba(42, 42, 42, 0.2),
      -8px -8px 15px rgba(255, 255, 255, 0.5);
    display: inline-block;
    height: 200px;
    perspective: 1000px;
    position: relative;
    width: 80px;
    border-radius: 20px;
  }

  .nums:before {
    border-bottom: 1px solid #d2d2d2;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    transform: translate3d(0, -1px, 0);
    top: 50%;
    width: 100%;
    z-index: 1000;
  }

  .nums:after {
    backface-visibility: hidden;
    background: #e0e0e0;
    border-radius: 0 0 20px 20px;
    bottom: 0;
    color: #333;
    content: "0";
    display: block;
    font-size: 100px;
    font-weight: 700;
    height: calc(50% - 1px);
    left: 0;
    line-height: 0;
    overflow: hidden;
    position: absolute;
    text-align: center;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05),
      0 2px 4px rgba(0, 0, 0, 0.08);
    width: 100%;
    z-index: 0;
  }

  .num {
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    border-radius: 20px;
    font-size: 100px;
    font-weight: 700;
    height: 100%;
    left: 0;
    position: absolute;
    transform: rotateX(0);
    transform-style: preserve-3d;
    top: 0;
    width: 100%;
  }

  .num:before,
  .num:after {
    backface-visibility: hidden;
    color: #333;
    display: block;
    height: 50%;
    left: 0;
    overflow: hidden;
    position: absolute;
    text-align: center;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05),
      0 2px 4px rgba(0, 0, 0, 0.08);
    width: 100%;
  }

  .num:before {
    background: #e0e0e0;
    border-radius: 20px 20px 0 0;
    content: attr(data-num);
    line-height: 1.38;
    top: 0;
    z-index: 1;
  }

  .num:after {
    background: #e0e0e0;
    border-bottom: 1px solid #d2d2d2;
    border-radius: 0 0 20px 20px;
    content: attr(data-num-next);
    height: calc(50% - 1px);
    line-height: 0;
    top: 0;
    transform: rotateX(180deg);
  }

  .nums-one .num:nth-of-type(1) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 0s;
    z-index: 10;
  }
  .nums-one .num:nth-of-type(2) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 1s;
    z-index: 9;
  }
  .nums-one .num:nth-of-type(3) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 2s;
    z-index: 8;
  }
  .nums-one .num:nth-of-type(4) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 3s;
    z-index: 7;
  }
  .nums-one .num:nth-of-type(5) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 4s;
    z-index: 6;
  }
  .nums-one .num:nth-of-type(6) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 5s;
    z-index: 5;
  }
  .nums-one .num:nth-of-type(7) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 6s;
    z-index: 4;
  }
  .nums-one .num:nth-of-type(8) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 7s;
    z-index: 3;
  }
  .nums-one .num:nth-of-type(9) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 8s;
    z-index: 2;
  }
  .nums-one .num:nth-of-type(10) {
    animation: num-one 10s ease-in forwards;
    animation-delay: 9s;
    z-index: 1;
  }

  .nums-ten .num:nth-of-type(1) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 9s;
    z-index: 10;
  }
  .nums-ten .num:nth-of-type(2) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 19s;
    z-index: 9;
  }
  .nums-ten .num:nth-of-type(3) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 29s;
    z-index: 8;
  }
  .nums-ten .num:nth-of-type(4) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 39s;
    z-index: 7;
  }
  .nums-ten .num:nth-of-type(5) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 49s;
    z-index: 6;
  }
  .nums-ten .num:nth-of-type(6) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 59s;
    z-index: 5;
  }
  .nums-ten .num:nth-of-type(7) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 69s;
    z-index: 4;
  }
  .nums-ten .num:nth-of-type(8) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 79s;
    z-index: 3;
  }
  .nums-ten .num:nth-of-type(9) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 89s;
    z-index: 2;
  }
  .nums-ten .num:nth-of-type(10) {
    animation: num-ten 100s ease-in forwards;
    animation-delay: 99s;
    z-index: 1;
  }

  @keyframes num-one {
    0% {
      transform: rotateX(0);
      z-index: 50;
    }
    10% {
      transform: rotateX(-180deg);
      z-index: 50;
    }
    90% {
      transform: rotateX(-180deg);
      z-index: 1;
    }
    90.0001% {
      transform: rotateX(0);
    }
    100% {
      transform: rotateX(0);
    }
  }

  @keyframes num-ten {
    0% {
      transform: rotateX(0);
      z-index: 50;
    }
    1% {
      transform: rotateX(-180deg);
      z-index: 50;
    }
    90% {
      transform: rotateX(-180deg);
      z-index: 1;
    }
    90.0001% {
      transform: rotateX(0);
    }
    100% {
      transform: rotateX(0);
    }
  }

  .department-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    
    .title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .cards-container {
      gap: 1.5rem;
    }

    .card {
      width: 100%;
      max-width: 300px;
    }

    .nums {
      width: 70px;
      height: 160px;
    }

    .nums:after {
      font-size: 80px;
    }

    .num {
      font-size: 80px;
    }

    .numbers-container {
      height: 160px;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 1.75rem;
    }

    .card {
      width: 100%;
      padding: 1.5rem 1rem;
    }

    .nums {
      width: 60px;
      height: 140px;
    }

    .nums:after {
      font-size: 70px;
    }

    .num {
      font-size: 70px;
    }

    .numbers-container {
      height: 140px;
      gap: 10px;
    }
  }
`;

// === Flip Number Component ===
interface FlipNumberProps {
  target: number;
  isVisible: boolean;
}

const FlipNumber = ({ target, isVisible }: FlipNumberProps) => {
  const paddedTarget = String(target).padStart(3, '0');
  
  return (
    <div className="numbers-container">
      {paddedTarget.split('').map((digit, index) => (
        <div key={index} className="nums" data-digit={digit}>
          <div className="nums-ten">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="num"
                data-num={i}
                data-num-next={(i + 1) % 10}
              />
            ))}
          </div>
          <div className="nums-one">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="num"
                data-num={i}
                data-num-next={(i + 1) % 10}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// === Department Card Component ===
interface DepartmentCardProps {
  title: string;
  icon: string;
  target: number;
  isVisible: boolean;
}

const DepartmentCard = ({ title, icon, target, isVisible }: DepartmentCardProps) => (
  <div className="card">
    <span className="icon">{icon}</span>
    {isVisible && <FlipNumber target={target} isVisible={isVisible} />}
    <h3 className="department-name">{title}</h3>
  </div>
);

// === Main Section Component ===
export default function Admissions2025Section() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // === Trigger animation on scroll into view ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <StyledWrapper ref={sectionRef}>
      <h2 className="title">Admissions 2025</h2>
      <div className="cards-container">
        {departments.map((dept) => (
          <DepartmentCard
            key={dept.name}
            title={dept.name}
            icon={dept.icon}
            target={dept.target}
            isVisible={isVisible}
          />
        ))}
      </div>
    </StyledWrapper>
  );
}