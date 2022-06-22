import React, {ReactNode} from 'react';
import {Card} from 'react-native-elements';

interface Props {
  children?: ReactNode | ReactNode[];
}

const DetailsWrapper = ({children}: Props) => {
  return <Card>{children}</Card>;
};

export default DetailsWrapper;
