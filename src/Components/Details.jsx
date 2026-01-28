import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

function Details({ selectedProduct }) {
  const [activeTab, setActiveTab] = useState("Details");
  console.log("selected", selectedProduct);

  const nav = ["Details", "Care Instruction", "Shipping & Returns"];

  const details = [
    `Material:${selectedProduct?.material} `,
    `Weight:${selectedProduct?.weight}`,
    `Category:${selectedProduct?.category}`,
    `Type:${selectedProduct?.type}`,
    "Each piece comes with a certificate of authenticity",
    "Beautifully packaged in our signature gift box",
  ];

  const careInstruction = [
    "Store in a cool, dry place away from direct sunlight",
    "Keep in the provided jewelry box or a soft pouch",
    "Clean gently with a soft, lint-free cloth",
    "Avoid contact with perfumes, lotions, and harsh chemicals",
    "Remove before swimming, showering, or exercising",
    "Have your jewelry professionally cleaned every 6-12 months",
  ];

  const shippingInformation = [
    "Free standard shipping on orders over $500",
"Express shipping available (2-3 business days)",
"International shipping to select countries",
"All orders are fully insured and require signature",
  ]

  const returnandexchange = [
    "30-day return policy for unworn items",
"Free returns on all domestic orders",
"Items must be in original condition with all packaging",
"Custom or personalized items are final sale",
  ]

  return (
    <>
      <Box
        sx={{ marginTop: "6%", minHeight: "50vh" }}
      >
        <Box sx={{ display: "flex", borderBottom: "1px solid #e7e2da" }}>
          {nav?.map((itm) => (
            <Typography
              onClick={() => setActiveTab(itm)}
              sx={{
                color: "#312622",
                fontSize: "15px",
                padding: "15px",
                borderBottom: activeTab == itm ? "2px solid #d9a520" : "none",
                backgroundColor: activeTab == itm ? "white" : "none",
                borderRadius: activeTab == itm ? "10px 10px 0px 0px" : "none",
                cursor: "pointer",
              }}
            >
              {itm}
            </Typography>
          ))}
        </Box>

        <Box sx={{ color: "#7e7367" }}>
          {activeTab == "Details" && (
            <>
              <Typography sx={{ margin: "2% 0%" }}>
                A stunning 18K gold ring featuring intricate filigree work and a
                timeless design that symbolizes eternal love.
              </Typography>

              {details?.map((itm) => (
                <Typography sx={{ marginBottom: "1%" }}>{itm}</Typography>
              ))}
            </>
          )}

          {activeTab == "Care Instruction" && (
            <>
              <Typography
                sx={{
                  margin: "2% 0%",
                  color: "#2a2636",
                  fontFamily: "serif",
                  fontSize: "15px",
                }}
              >
                Caring for Your Jewelry
              </Typography>

              {careInstruction?.map((itm) => (
                <Typography sx={{ marginBottom: "1%" }}>{itm}</Typography>
              ))}
            </>
          )}

          {activeTab == "Shipping & Returns" && (
             <>
             <Typography
               sx={{
                 margin: "2% 0%",
                 color: "#2a2636",
                 fontFamily: "serif",
                 fontSize: "15px",
               }}
             >
               Shipping Information
             </Typography>

             {shippingInformation?.map((itm) => (
               <Typography sx={{ marginBottom: "1%" }}>{itm}</Typography>
             ))}

<Typography
               sx={{
                 margin: "2% 0%",
                 color: "#2a2636",
                 fontFamily: "serif",
                 fontSize: "15px",
               }}
             >
              Returns & Exchanges
             </Typography>

             {returnandexchange?.map((itm) => (
               <Typography sx={{ marginBottom: "1%" }}>{itm}</Typography>
             ))}


           </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Details;
