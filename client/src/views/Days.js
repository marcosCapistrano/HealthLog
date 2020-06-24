import React from 'react';
import {
  Container,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';

export const Days = () => {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h6'>Selecione um dia:</Typography>
      <InputLabel id='label'>Dia</InputLabel>
      <Select labelId='label' id='select' value=''>
        <MenuItem value='10'>Ten</MenuItem>
        <MenuItem value='20'>Twenty</MenuItem>
      </Select>
      <Typography variant='h6'>Criar um novo dia:</Typography>
      <InputLabel id='label'>Peso</InputLabel>
      <TextField></TextField>
      <Button>Add</Button>
    </Container>
  );
};

export default Days;
