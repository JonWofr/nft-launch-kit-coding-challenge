import classNames from 'classnames';
import useFadeIn from '../hooks/use-fade-in';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FadeIn = ({ children, className }: Props) => {
  const [divElementRef, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <div
      className={classNames(
        'transition-opacity duration-700',
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
        },
        className
      )}
      ref={divElementRef}
    >
      {children}
    </div>
  );
};
export default FadeIn;
