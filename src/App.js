import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Grid2,
} from "@mui/material";
import JobCard from "./components/JobCard";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import jobs from "./jobs/jobs";

function App() {
  const [page, setPage] = useState(1);
  const jobsPerPage = 5;

  // Custom dark theme with orange accents
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212", // Background color
      },
      primary: {
        main: "#ff9800", // Orange accent color
      },
      text: {
        primary: "#fff", // White text color
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#ff9800", // Button color
            color: "#fff",
            "&:hover": {
              backgroundColor: "#e68900", // Darker on hover
            },
          },
        },
      },
    },
  });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Get the jobs for the current page
  const paginatedJobs = jobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Container sx={{ py: 5 }}>
        <Grid2 container spacing={3}>
          {paginatedJobs.map((job) => (
            <Grid2
              item
              key={job.id}
              xs={12}
              sm={6}
              md={4} // 3 items per row for desktop
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <JobCard job={job} />
            </Grid2>
          ))}
        </Grid2>
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
