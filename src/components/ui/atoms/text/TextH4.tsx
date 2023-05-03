import React from 'react';
import Typography from '@mui/material/Typography';

type TextH4Props = {
  children: React.ReactNode;
}

const TextH4: React.FC<TextH4Props> = ({ children }) => {
  return (
    <Typography variant="h4">{children}</Typography>
  );
}

export default TextH4;
