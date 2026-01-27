import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Truck } from "lucide-react";

function ProductDetailRight() {
  return (
    <>
      <Box sx={{ minHeight: "90vh", width: "50%", border: "2px solid" }}>
        <Box
          sx={{
            width: "95%",
            border:"2px solid black",
            // borderBottom: "1px solid #e7e2da",
            minHeight: "79vh",
            margin: "0px auto",
          }}
        >
          <Box sx={{ display: "flex", color: "#7e7367", alignItems: "center" }}>
            <Typography sx={{ textTransform: "capitalize", fontSize: "15px" }}>
              GOLD
            </Typography>
            <Box
              sx={{
                height: "5px",
                width: "5px",
                borderRadius: "100%",
                backgroundColor: "#7e7367",
                margin: "0% 1%",
              }}
            ></Box>
            <Typography sx={{ textTransform: "capitalize", fontSize: "15px" }}>
              RINGS
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "33px",
              fontFamily: "serif",
              color: "#2a2622",
              letterSpacing: "1%",
            }}
          >
            Eternal Gold Ring
          </Typography>

          <Box sx={{ display: "flex", margin: "2% 0%" }}>
            <Rating
              name="read-only"
              value={5}
              readOnly
              sx={{
                marginRight: "3%",
                "& .MuiRating-iconFilled": {
                  color: "#d9a521",
                },
              }}
            />

            <Typography sx={{ color: "#7e7367", fontSize: "15px" }}>
              (128 reviews)
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "30px", color: "#daa520" }}>
              $1,299
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#7e7367",
                margin: "0% 2%",
                textDecoration: "line-through",
              }}
            >
              $1,599
            </Typography>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#dc2828",
                borderRadius: "30px",
                textTransform: "capitalize",
                padding: "1px 10px",
                fontSize: "15px",
              }}
            >
              Save $300
            </Button>
          </Box>

          <Typography sx={{color:"#7e7367",margin:"3% 0%"}}>
            A stunning 18K gold ring featuring intricate filigree work and a
            timeless design that symbolizes eternal love. 
          </Typography>

          <Box sx={{height:"12vh",backgroundColor:"#f6f5f2",borderRadius:"25px",display:"flex",alignItems:"center"}}>
              <Box sx={{width:"50%",paddingLeft:"10px"}}>
                <Typography sx={{color:"#897f70"}}>Material</Typography>
                <Typography sx={{color:"#2a2622"}}>18K Yellow Gold</Typography>
              </Box>
              <Box sx={{width:"50%"}}>
                <Typography sx={{color:"#897f70"}}>Weight</Typography>
                <Typography>5.2g</Typography>
              </Box>

          </Box>

          <Box sx={{margin:"5% 0%",display:"flex",alignItems:"center"}}>
              <Button sx={{border:"1px solid #e7e2da",color:"black",display:"flex",justifyContent:"space-between",width:"23%",borderRadius:"10px",marginRight:"2%"}}>
                 <Typography sx={{fontSize:"20px"}}>-</Typography>
                 <Typography sx={{fontSize:"20px"}}>1</Typography>
                 <Typography sx={{fontSize:"20px"}}>+</Typography>
              </Button>
              <Box sx={{color:"#00aa5c",display:"flex"}}>
                <DoneOutlinedIcon/>
                 <Typography >In Stock</Typography>
              </Box>
          </Box>

          <Box>
              <Button sx={{color:"#2a2622",textTransform:"capitalize",border:"1px solid #b68a1b",backgroundColor:"#d8aa33",width:"82%",height:"9vh",borderRadius:"10px",marginRight:"3%"}}>
                <LocalMallOutlinedIcon style={{width:"18px",height:"18px",marginRight:"3%"}}/>
                <Typography>Add to Cart</Typography>
              </Button>
              <Button sx={{border:"1px solid #e1e1df",color:"#2a2622",width:"14%",height:"9vh",borderRadius:"10px"}}>
                   <FavoriteBorderOutlinedIcon style={{width:"18px",height:"18px"}}/>
              </Button>
          </Box>
        </Box>

        <Box sx={{minHeight:"25vh",border:"2px solid", width: "95%",margin:"0px auto"}}>

            <Box sx={{width:"33%"}}>
                <Truck style={{color:"#d9a520"}} />
                <Typography>Free Shipping</Typography>
                <Typography sx={{color:"Orders over $500"}}>Orders over $500</Typography>
            </Box>

            <Box>
                
            </Box>

        </Box>
      </Box>
    </>
  );
}

export default ProductDetailRight;
