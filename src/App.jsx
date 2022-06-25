import { useState } from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostsList";
import { getPosts } from "./redux/features/postSlice";
import { useDispatch } from "react-redux";
import {
  Stack,
  Button,
  CssBaseline,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Abc } from "@mui/icons-material";
import Dark from "@mui/icons-material/Bedtime";
import Light from "@mui/icons-material/BedtimeOff";

const theme = {
  palette: {
    mode: "light",
  },
};
function App() {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const URL = "https://jsonplaceholder.typicode.com/posts";

  return (
    <ThemeProvider
      theme={createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode: `${checked ? "dark" : "light"}`,
        },
      })}
    >
      <div className='App'>
        <CssBaseline />
        <Navbar />
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
            />
          }
          label={
            checked ? <Dark color='secondary' /> : <Light color='secondary' />
          }
        />

        <Stack
          spacing={3}
          direction={{ xs: "column", sm: "row" }}
          p={3}
          justifyContent='center'
          alignContent='center'
        >
          <Button
            onClick={() => dispatch(getPosts(URL))}
            variant='contained'
            color='success'
          >
            fetch users sucess
          </Button>
          <Button
            onClick={() => dispatch(getPosts(URL + "s"))}
            color='error'
            variant='contained'
          >
            fetch users failed
          </Button>
        </Stack>
        <PostList />
      </div>
    </ThemeProvider>
  );
}

export default App;
