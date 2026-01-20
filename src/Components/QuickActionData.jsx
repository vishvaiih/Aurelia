import React from 'react'
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useNavigate } from "react-router-dom";

function QuickActionData({itm}) {
    const Items = styled(Paper)(({ theme }) => ({
        backgroundColor: "#f7f6f3",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles("dark", {
          backgroundColor: "#1A2027",
        }),
      }));

       const navigation = useNavigate();
  return (
    <Grid size={{ xs: 4, sm: 6, md: 6 }}>
                  <Items
                    sx={{
                      minHeight: "6vh",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (itm.route) {
                        navigation(itm.route);
                      }
                    }}
                  >
                    <Box sx={{ marginRight: "15px" }}>
                      <Avatar
                        sx={{
                          backgroundColor: "#f4eedd",
                          color: "#d9a520",
                          height: "7vh",
                          width: "7vh",
                        }}
                      >
                        {itm.icon}
                      </Avatar>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#2a2622",
                          fontSize: "17px",
                          fontWeight: "500",
                        }}
                      >
                        {itm.title}
                      </Typography>
                      <Typography sx={{ color: "#827b90", fontSize: "15px" }}>
                        {itm.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "auto",
                      }}
                    >
                      <ChevronRightOutlinedIcon />
                    </Box>
                  </Items>
                </Grid>
  )
}

export default QuickActionData
