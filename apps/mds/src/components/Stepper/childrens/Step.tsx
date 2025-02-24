import clsx from 'clsx';
import type { StepProps } from '../types';

import { StepMarker } from './StepMarker';
import { StepContainer } from './StepContainer';
import { StepConnector } from './StepConnector';
import { useStepperContext } from '../context/Stepper.context';

import styles from '../Stepper.module.scss';

function Step({ label, description, error, index, onClick }: StepProps & { index?: number }) {
  const indexNumber = index ?? 0;
  const { direction, isHorizontal, isVertical, activeStep, steps, compact } = useStepperContext();
  const classes = clsx(styles[`step-${direction}`]);
  const showConnector = indexNumber !== steps - 1;
  const showContainer = !compact && (!!label || !!description);
  const checked = indexNumber < activeStep;

  return (
    <div className={classes}>
      <div className={styles[`step-${direction}__indicator`]}>
        <StepMarker index={indexNumber} checked={checked} error={error} onClick={onClick} />

        {isHorizontal && showContainer && (
          <StepContainer direction={direction} label={label} description={description} />
        )}
        {isVertical && showConnector && <StepConnector direction={direction} active={checked} />}
      </div>

      {isHorizontal && showConnector && <StepConnector direction={direction} active={checked} />}
      {isVertical && showContainer && <StepContainer direction={direction} label={label} description={description} />}
    </div>
  );
}

export { Step };
