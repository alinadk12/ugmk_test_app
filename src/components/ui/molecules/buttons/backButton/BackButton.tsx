import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import TextButton from 'src/components/ui/atoms/buttons/TextButton';

import styles from './BackButton.module.css';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const backClickHandler = useCallback(() => navigate('/'), [navigate]);

  return (
    <div className={styles.wrapper}>
      <TextButton onClick={backClickHandler}>
        <ArrowBackIcon fontSize="small" />
        <span className={styles.text}>вернуться</span>
      </TextButton>
    </div>
  );
}

export default BackButton;
