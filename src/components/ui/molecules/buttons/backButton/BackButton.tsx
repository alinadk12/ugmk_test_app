import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextButton from '../../../atoms/buttons/TextButton';
import useStyles from './styles';

const BackButton: React.FC = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const backClickHandler = useCallback(() => navigate(-1), [navigate]);

  return (
    <div className={styles.wrapper}>
      <TextButton onClick={backClickHandler}>
        <ArrowBackIcon fontSize="small" />
        <span className={styles.text}>back</span>
      </TextButton>
    </div>
  );
}

export default BackButton;
