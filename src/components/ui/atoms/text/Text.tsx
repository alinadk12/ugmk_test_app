import React from 'react';
import Typography from '@mui/material/Typography';

type TextProps = {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <Typography variant="body1">{children}</Typography>
  );
}

export default Text;
