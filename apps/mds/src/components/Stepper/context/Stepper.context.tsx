import { createContext, useContext } from 'react';
import { StepperDirection } from '../types';

interface StepperContextData {
  activeStep: number;
  isLastStep: boolean;
  isFirstStep: boolean;
  steps: number;
  direction: StepperDirection;
  isHorizontal: boolean;
  isVertical: boolean;
  compact: boolean;
}

export const StepperContext = createContext<StepperContextData>({} as StepperContextData);

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  
  if (!context) {
    throw new Error('useStepperContext deve ser usado dentro de um StepperProvider');
  }
  
  return context;
};
