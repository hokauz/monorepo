import Stepper from '../components/Stepper';
import styles from './App.module.scss';
import clsx from 'clsx';

const steps = [{}, {}, {}];

const steps2 = [
  {
    label: 'Step 1',
    description: 'This is the first step',
  },
  {
    label: 'Step 2',
    description: 'This is the second step',
  },
  {
    label: 'Step 3',
    description: 'This is the third step',
  },
];

const App = () => {
  return (
    <div>
      <div className={styles.flex}>
        <div className={clsx(styles.container, styles['container--horizontal'])}>
          <Stepper steps={steps} />
        </div>
        <div className={clsx(styles.container, styles['container--horizontal'])}>
          <Stepper steps={steps2} />
        </div>
        <div className={clsx(styles.container, styles['container--horizontal'])}>
          <Stepper steps={steps2} currentStep={1}/>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={clsx(styles.container, styles['container--vertical'])}>
          <Stepper variant='vertical' steps={steps} />
        </div>
        <div className={clsx(styles.container, styles['container--vertical'])}>
          <Stepper variant='vertical' steps={steps2} />
        </div>
        <div className={clsx(styles.container, styles['container--vertical'])}>
          <Stepper variant='vertical' steps={steps2} currentStep={1} />
        </div>
      </div>
    </div>
  );
};

export default App;
