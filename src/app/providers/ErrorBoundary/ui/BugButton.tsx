import Button from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
  const [error, setError] = useState(false);
  const throwN = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwN}>bug</Button>;
};

export default BugButton;
