import { Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export interface InputFieldProps {
  city: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
}

export default function InputField({ city, handleChange, handleBlur }: InputFieldProps) {
  return (
    <TextField
      fullWidth
      id="city"
      name="city"
      placeholder="Ljubljana"
      value={city}
      onChange={handleChange}
      onBlur={handleBlur}
      aria-label="City Name"
      slotProps={{
        input: {
          endAdornment: (
            <Button type="submit">
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            </Button>
          ),
          sx: { borderRadius: '22px', backgroundColor: 'white', boxShadow: 3, fontSize: 20, paddingY: 0 }
        }
      }}
      variant="outlined"
      sx={{ '& fieldset': { fontSize: 100 } }}
    />
  );
}
