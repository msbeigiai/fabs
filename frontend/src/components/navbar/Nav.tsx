import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#ffffff36] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <MenuIcon sx={{ fontSize: "2.2rem" }} />
          </IconButton>
        </div>
      </div>
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          className="font-brittany logo font-semibold text-4xl list-none"
          onClick={() => navigate("/")}
        >
          Faze Abbaspour
        </li>
      </div>

      <Button
        variant="contained"
        sx={{
          background: "#c776df",
          borderRadius: 100,
          color: "#000",
          py: 1,
          fontFamily: "afsaneh",
          fontSize: 20,
          ":hover": {
            bgcolor: "#bb6fd2",
            color: "white",
          },
        }}
      >
        ورود / ثبت نام
      </Button>
    </Box>
  );
};

export default Nav;
