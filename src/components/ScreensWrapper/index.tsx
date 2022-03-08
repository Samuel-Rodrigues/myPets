import React, {FC} from 'react';

import ScreensWrapper from './ScreensWrapper';

const ScreensWrapperContainer: FC = ({children}) => {
  return <ScreensWrapper>{children}</ScreensWrapper>;
};

export default ScreensWrapperContainer;
