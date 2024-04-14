import { Container, Grid } from '@mui/material';

import Profile from './components/Profile';

function App() {

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Profile />
        </Grid>
        <Grid item xs={8}>
          asdasd
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
