import clsx from 'clsx';
import type { StepperDirection } from '../types';
import styles from '../Stepper.module.scss';

function StepContainer({ direction, label, description }: { direction: StepperDirection; label?: string; description?: string }) {
  const classes = clsx(styles[`step-${direction}__container`]);
  return (
    <div className={classes}>
      {label && <div className={styles[`step-${direction}__label`]}>{label}</div>}
      {description && <div className={styles[`step-${direction}__description`]}>{description}</div>}
    </div>
  );
}

export { StepContainer };