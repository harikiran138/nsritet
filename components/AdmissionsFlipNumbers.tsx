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
  background: #ffffff;
  border-radius: 12px;
  margin: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/* ------------------ */
/* SMALL UPPERCASE HEADING (Bold + Black) */
/* ------------------ */
const SmallHeading = styled(motion.p)`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 800;         /* BOLD */
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;           /* PURE BLACK */
  margin-bottom: 10px;
`;

/* ------------------ */
/* LARGE MAIN TITLE (same as “Excellence in every aspect...”) */
/* ------------------ */
const BigTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.75rem;       /* ~44px */
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const CardsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const Card = styled(motion.div)<{ color: string }>`
  background: white;
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  border-top: 4px solid ${(props) => props.color};
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const DepartmentName = styled.p`
  font-size: 0.9rem;
  color: #777;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const FlipNumber = styled.div<{ isFlipping: boolean }>`
  font-size: 3.5rem;
  font-weight: 800;
  min-width: 50px;
  text-align: center;
  color: #0f172a;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    min-width: 40px;
  }
`;

const Label = styled.p`
  font-size: 1rem;
  color: #777;
  font-weight: 600;
`;

const FlipCounter = ({ target, duration, isVisible }: { target: number; duration: number; isVisible: boolean }) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const increment = Math.ceil(target / (duration / 50));
    const interval = setInterval(() => {
      setNum((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(interval);
          return target;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  const format = (n: number) => String(n).padStart(3, '0');

  return (
    <NumbersContainer>
      {format(num).split("").map((d, i) => (
        <FlipNumber key={i} isFlipping={false}>{d}</FlipNumber>
      ))}
    </NumbersContainer>
  );
};

const AdmissionsFlipNumbers = ({ duration = 2000 }: { duration?: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const fade = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <StyledWrapper ref={ref}>
      <Container>

        {/* --------------------------- */}
        {/* SMALL BLACK BOLD HEADING   */}
        {/* --------------------------- */}
        <SmallHeading
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Admissions 2025
        </SmallHeading>

        {/* --------------------------- */}
        {/* BIG MAIN HEADER TITLE       */}
        {/* --------------------------- */}
        <BigTitle
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Department-wise student intake capacity
        </BigTitle>

        <CardsContainer
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {departments.map((dept, i) => (
            <Card key={i} color={dept.color} variants={item}>
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
