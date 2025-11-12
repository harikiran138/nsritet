'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface DepartmentData {
  name: string;
  shortName: string;
  target: number;
  icon: string;
  color: string;
}

const departments: DepartmentData[] = [
  {
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    target: 120,
    icon: '🖥️',
    color: '#3B82F6',
  },
  {
    name: 'Computer Science & Artificial Intelligence',
    shortName: 'CSM',
    target: 60,
    icon: '💻',
    color: '#8B5CF6',
  },
  {
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    target: 120,
    icon: '📡',
    color: '#EC4899',
  },
  {
    name: 'Electrical & Electronics Engineering',
    shortName: 'EEE',
    target: 30,
    icon: '⚡',
    color: '#F59E0B',
  },
];

const StyledWrapper = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f7f7f7 0%, #ececec 100%);
  border-radius: 12px;
  margin: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #0f172a, #334155);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 50px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 40px;
  }
`;

const CardsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const Card = styled(motion.div)<{ color: string }>`
  background: white;
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border-top: 4px solid ${(props) => props.color};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${(props) => props.color}05, transparent);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const DepartmentName = styled.p`
  font-size: 0.9rem;
  color: #999;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  margin: 30px 0;
  perspective: 1000px;
`;

const FlipNumber = styled.div<{ isFlipping: boolean }>`
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a202c;
  min-width: 60px;
  text-align: center;
  position: relative;
  transform-style: preserve-3d;
  transition: ${(props) => (props.isFlipping ? 'none' : 'all 0.3s ease')};

  @media (max-width: 768px) {
    font-size: 2.5rem;
    min-width: 45px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    min-width: 35px;
  }
`;

const Label = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 600;
  margin-top: 15px;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Flip Counter Component
interface FlipCounterProps {
  target: number;
  duration: number;
  isVisible: boolean;
}

const FlipCounter: React.FC<FlipCounterProps> = ({ target, duration, isVisible }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const incrementStep = Math.ceil(target / (duration / 50));
    const interval = setInterval(() => {
      setIsFlipping(true);
      setCurrentNumber((prev) => {
        const newValue = prev + incrementStep;
        if (newValue >= target) {
          setIsFlipping(false);
          clearInterval(interval);
          return target;
        }
        return newValue;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  const formatNumber = (num: number): string => {
    return String(num).padStart(3, '0');
  };

  return (
    <NumbersContainer>
      {formatNumber(currentNumber).split('').map((digit, index) => (
        <FlipNumber key={index} isFlipping={isFlipping}>
          {digit}
        </FlipNumber>
      ))}
    </NumbersContainer>
  );
};

// Main Component
interface AdmissionsFlipNumbersProps {
  duration?: number;
}

const AdmissionsFlipNumbers: React.FC<AdmissionsFlipNumbersProps> = ({ duration = 2000 }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <StyledWrapper ref={ref}>
      <Container>
        <Title variants={titleVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          Admissions 2025
        </Title>
        <Subtitle variants={titleVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          Department-wise Admission Intake
        </Subtitle>
        <CardsContainer
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {departments.map((dept) => (
            <Card key={dept.shortName} color={dept.color} variants={itemVariants}>
              <IconWrapper>{dept.icon}</IconWrapper>
              <DepartmentName>{dept.shortName}</DepartmentName>
              <FlipCounter target={dept.target} duration={duration} isVisible={inView} />
              <Label>Seats</Label>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#999',
                  marginTop: '10px',
                  fontWeight: '500',
                }}
              >
                {dept.name}
              </p>
            </Card>
          ))}
        </CardsContainer>
      </Container>
    </StyledWrapper>
  );
};

export default AdmissionsFlipNumbers;
