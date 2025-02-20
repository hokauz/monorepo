import clsx from 'clsx';
import styles from './Stepper.module.scss';

type StepVariant = 'vertical' | 'horizontal';

interface StepProps {
  label?: string;
  description?: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  error?: boolean;
}

interface InnerStepProps extends StepProps {
  currentStep: number;
  variant: StepVariant;
  isHorizontal?: boolean;
  isVertical?: boolean;
  index: number;
  len: number;
}

interface StepperProps {
  currentStep?: number;
  variant?: StepVariant;
  steps: StepProps[];
}

function Marker({ index, checked, error }: { index: number; checked: boolean; error?: boolean }) {
  const confirmedCheck = !error && checked;
  
  const classes = clsx(styles['marker'], {
    [styles['marker--checked']]: confirmedCheck,
    [styles['marker--error']]: error,
  });

  return <div className={classes}>{index + 1}</div>;
}

function Container({ variant, label, description }: { variant: StepVariant; label?: string; description?: string }) {
  const classes = clsx(styles[`step-${variant}__container`]);
  return (
    <div className={classes}>
      {label && <div className={styles[`step-${variant}__label`]}>{label}</div>}
      {description && <div className={styles[`step-${variant}__description`]}>{description}</div>}
    </div>
  );
}

function Connector({ variant, active = false }: { variant: StepVariant; active?: boolean }) {
  const classesLine = clsx({
    [styles[`step-${variant}__line`]]: true,
    [styles[`step-${variant}__line--active`]]: active,
  });
  return (
    <div className={styles[`step-${variant}__connector`]}>
      <div className={classesLine}></div>
    </div>
  );
}

function Step({ variant, index, len, label, description, isHorizontal, isVertical, currentStep, error }: InnerStepProps) {
  const classes = clsx(styles[`step-${variant}`]);
  const showConnector = index !== len - 1;
  const showContainer = !!label || !!description;
  const checked = index < currentStep;
  
  return (
    <div className={classes}>
      <div className={styles[`step-${variant}__indicator`]}>
        <Marker index={index} checked={checked} error={error} />

        {isHorizontal && showContainer && <Container variant={variant} label={label} description={description} />}
        {isVertical && showConnector && <Connector variant={variant} active={checked} />}
      </div>

      {isHorizontal && showConnector && <Connector variant={variant} active={checked} />}
      {isVertical && showContainer && <Container variant={variant} label={label} description={description} />}
    </div>
  );
}

function Stepper({ variant = 'horizontal', steps, currentStep = 0 }: StepperProps) {
  const classes = clsx(styles.stepper, styles[`stepper--${variant}`]);
  const isHorizontal = variant === 'horizontal';
  const isVertical = variant === 'vertical';

  return (
    <div className={classes}>
      {steps.map((step, index) => (
        <Step
          key={`step-${index}`}
          {...step}
          index={index}
          len={steps.length}
          variant={variant}
          isVertical={isVertical}
          isHorizontal={isHorizontal}
          currentStep={currentStep}
        />
      ))}
    </div>
  );
}

export default Stepper;
