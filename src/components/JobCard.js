import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid2,
  Button,
} from "@mui/material";

function JobCard({ job }) {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#333", // Dark card background
        color: "#fff", // White text
        maxWidth: 345,
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)", // Slight shadow
        "&:hover": {
          boxShadow: "0 6px 12px rgba(0,0,0,0.4)", // Shadow on hover
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {job.title} - {job.city}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          Posted: {new Date(job.postedDate).toLocaleDateString()} | Experience:{" "}
          {job.yrsXPExpected}+ years
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Salary: ${job.salaryLow} - ${job.salaryHigh}
        </Typography>

        {/* Skills Section */}
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: "#f44336", mt: 2 }}
        >
          Skills:
        </Typography>
        <Grid2 container spacing={1} sx={{ mt: 1 }}>
          {job.skills.slice(0, 4).map((skill, index) => (
            <Grid2 item key={index}>
              <Chip
                label={skill}
                size="small"
                sx={{ backgroundColor: "#f44336", color: "#fff" }} // Red chips with white text
              />
            </Grid2>
          ))}
        </Grid2>

        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#ff9800" }} // Orange button
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
