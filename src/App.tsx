import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';

import { router } from 'src/routes/router';
import Loader from 'src/components/ui/atoms/loader/Loader';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
