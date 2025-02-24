import clsx from 'clsx';
import type { StepperDirection } from '../types';
import styles from '../Stepper.module.scss';

function StepConnector({ direction, active = false }: { direction: StepperDirection; active?: boolean }) {
  const classesLine = clsx({
    [styles[`step-${direction}__line`]]: true,
    [styles[`step-${direction}__line--active`]]: active,
  });
  return (
    <div className={styles[`step-${direction}__connector`]}>
      <div className={classesLine} />
    </div>
  );
}

export { StepConnector };

