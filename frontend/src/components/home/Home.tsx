import { Button, Grid, Stack } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <div className="pb-10">
      <div className="">
        <div className="banner  relative flex flex-col justify-center items-end">
          <Grid container spacing={2} justifyItems={"start"}>
            <Grid item md={7}></Grid>
            <Grid item md={5}>
              <h1 className="text-5xl w-[25vw] font-bold ml-24 leading-snug">
                اینحا به روش ساده یاد می گیریم اثر هنری خلق کنیم.
              </h1>
            </Grid>
            <Grid item md={7}></Grid>
            <Grid item md={5}>
              <Stack
                spacing={1}
                direction="column"
                maxWidth={"220px"}
                mt={"10px"}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "#c776df",
                    borderRadius: 1,
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
                  دیدن همه دوره ها
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "#7ef8ff",
                    borderRadius: 1,
                    color: "#000",
                    py: 1,
                    fontFamily: "afsaneh",
                    fontSize: 20,
                    ":hover": {
                      bgcolor: "#7ef8ff",
                      color: "white",
                    },
                  }}
                >
                  مطالب آموزشی
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
