import { Box, Skeleton, useTheme } from "@mui/material";
import { style } from "./styles";

import React from 'react'

const TableSkeleton = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 1, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={50}
          sx={style.root(theme)}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={50}
          sx={style.root(theme)}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={50}
          sx={style.root(theme)}
        />
      </Box>
    </Box>
  );
}

export default TableSkeleton