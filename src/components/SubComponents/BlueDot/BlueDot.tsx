import styles from './BlueDot.module.scss';

type BlueDotProps = {
  className?: string;
  size?: number;
};

export const BlueDot = ({ className = '', size = 8 }: BlueDotProps) => (
  <span
    className={`${styles.dot} ${className}`.trim()}
    style={{ width: size, height: size, minWidth: size, minHeight: size }}
    aria-hidden="true"
  />
);
