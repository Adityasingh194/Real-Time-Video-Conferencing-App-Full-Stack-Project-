import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Snackbar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../contexts/AuthContext";

const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = React.useState(0); // 0=login, 1=signup

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setUsername("");
        setPassword("");
        setName("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
      }
    } catch (err) {
      const msg = err.message || "Something went wrong";
      setError(msg);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <CssBaseline />

        {/* Fullscreen Form */}
        <Grid
          item
          xs={12}
          component={Paper}
          elevation={6}
          square
          sx={{
            maxWidth: 400,
            width: "100%",
            p: 4,
            m: 2,
            borderRadius: 2,
            backgroundColor: "#ffffff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              {formState === 0 ? "Sign In" : "Sign Up"}
            </Typography>

            {/* Toggle Buttons */}
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Button
                variant={formState === 0 ? "contained" : "outlined"}
                onClick={() => setFormState(0)}
              >
                Login
              </Button>
              <Button
                variant={formState === 1 ? "contained" : "outlined"}
                onClick={() => setFormState(1)}
              >
                Register
              </Button>
            </Box>

            <Box component="form" noValidate sx={{ width: "100%" }}>
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              )}
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message={message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </ThemeProvider>
  );
}
