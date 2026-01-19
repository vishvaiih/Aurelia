import React from "react";
import { Box, Typography, MenuItem} from "@mui/material";
import { Funnel } from "lucide-react";
import TextField from "@mui/material/TextField";

function Filters() {
    const option = [
        "Featured",
        "Newest",
        "Price : Low to High",
        "Price : High to Low",
      ];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", color: "#54514e" }}>
        <Funnel style={{ marginRight: "10px", color: "#2a2622" }} size={20} />
        <Typography sx={{ fontFamily: "serif", fontSize: "15px" }}>
          Filters
        </Typography>
      </Box>

      <Box>
        <Box>
          <TextField
            select
            color="warning"
            name="Filter"
            defaultValue="Featured"
            sx={{
              width: "180px",

              "& .MuiInputBase-root": {
                height: "38px",
                boxShadow: "0px 0px 4px 0px #e0dbd1",
                borderRadius: "10px",
              },
              "& .MuiInputBase-input": {
                height: "38px",
                padding: "0 14px",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
              },
            }}
          >
            {option.map((itm) => (
              <MenuItem
                value={itm}
                sx={{
                  "&:hover": {
                    backgroundColor: "#456882",
                    borderRadius: "10px",
                    margin: " 0px 5px",
                    color: "white",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#456882 !important",
                    borderRadius: "10px",
                    margin: " 0px 5px",
                    color: "white",
                  },
                }}
              >
                {itm}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </Box>
  );
}

export default Filters;
