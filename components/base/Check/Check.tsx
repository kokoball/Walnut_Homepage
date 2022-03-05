import React, { useEffect, useState } from 'react';
import * as S from './Style';

interface CheckProps {
  checkAnimation: boolean;
  src: string;
  wait: number;
}

const Check = React.memo(({ checkAnimation, src, wait }: CheckProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (checkAnimation) {
      setTimeout(() => {
        setVisible(true);
      }, wait);
    } else {
      setVisible(false);
    }
  }, [checkAnimation]);

  return <>{visible && <S.CheckContainer src={src + `?a=${Math.random()}`} />}</>;
});

export default Check;
