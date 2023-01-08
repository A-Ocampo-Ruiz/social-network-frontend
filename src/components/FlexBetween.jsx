import { Box } from "@mui/system";
import { styled } from "@mui/system";

// reusing CSS as a component:
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
