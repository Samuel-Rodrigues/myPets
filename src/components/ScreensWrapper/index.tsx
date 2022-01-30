import React, {FC} from 'react';

import ScreensWrapper from './ScreensWrapper';

type Props = {title: string};

const ScreensWrapperContainer: FC<Props> = ({title, children}) => {
  return <ScreensWrapper title={title}>{children}</ScreensWrapper>;
};

export default ScreensWrapperContainer;
