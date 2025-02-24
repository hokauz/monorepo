import React, { useEffect, useState } from 'react';
import { StepperDirection } from '../types';
import { StepperContext } from './Stepper.context';

interface StepperProviderProps {
  children: React.ReactNode;
  currentStep?: number;
  steps?: number;
  direction?: StepperDirection;
  compact?: boolean;
}

function StepperProvider({
  children,
  steps = 0,
  currentStep = 0,
  direction = 'horizontal',
  compact = false,
}: StepperProviderProps) {
  const [activeStep, setActiveStep] = useState(currentStep);

  useEffect(() => {
    setActiveStep(currentStep);
  }, [currentStep]);

  const value = {
    compact,
    activeStep,
    isHorizontal: direction === 'horizontal',
    isVertical: direction === 'vertical',
    isLastStep: activeStep === steps - 1,
    isFirstStep: activeStep === 0,
    steps: steps,
    direction,
  };

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
}

export { StepperProvider };
