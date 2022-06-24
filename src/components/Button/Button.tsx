import React from 'react';

import {Button as ButtonComponent, ButtonProps} from '@chakra-ui/react';

const Button = (props: {smth?: any} & ButtonProps) => <ButtonComponent {...props} />;

export default Button;
