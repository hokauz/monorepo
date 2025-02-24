type StepperDirection = 'vertical' | 'horizontal';

interface StepProps {
  label?: string;
  description?: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  error?: boolean;
  onClick?: () => void;
}


interface StepperProps {
  currentStep?: number;
  direction?: StepperDirection;
  compact?: boolean;
  children: React.ReactNode;
}

export type {
  StepProps,
  StepperProps,
  StepperDirection,
};
