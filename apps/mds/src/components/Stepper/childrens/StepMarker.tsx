import clsx from 'clsx';
import styles from '../Stepper.module.scss';

function StepMarker({ index, checked, error, onClick }: { index: number; checked: boolean; error?: boolean; onClick?: () => void }) {
  const confirmedCheck = !error && checked;
  
  const classes = clsx(styles.marker, {
    [styles['marker--checked']]: confirmedCheck,
    [styles['marker--error']]: error,
  });

  return <div className={classes} onClick={onClick}>{index + 1}</div>;
}

export { StepMarker };