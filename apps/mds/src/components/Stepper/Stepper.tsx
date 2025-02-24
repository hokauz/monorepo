import React from 'react';
import clsx from 'clsx';

import type { StepperProps, StepProps } from './types';

import { StepperProvider } from './context/Stepper.provider';

import styles from './Stepper.module.scss';

function Stepper({ direction = 'horizontal', currentStep = 0, compact = false, children }: StepperProps) {
  const classes = clsx(styles.stepper, styles[`stepper--${direction}`]);
  const steps = React.Children.toArray(children) as React.ReactElement<StepProps & { index: number }>[];

  return (
    <div className={classes}>
      <StepperProvider steps={steps.length} currentStep={currentStep} direction={direction} compact={compact}>
        {steps.map((step, index) => {
          if (React.isValidElement(step)) {
            return React.cloneElement(step, { index });
          }

          return null;
        })}
      </StepperProvider>
    </div>
  );
}

export { Stepper };
