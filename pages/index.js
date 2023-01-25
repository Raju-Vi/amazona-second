import Layout from "../components/Layout";
import { Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import useStyels from "../utils/styles";
import data from "../utils/data";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

const Home = () => {
  const classes = useStyels();
  return (
    <Layout>
      <h1 className={classes.title}>Products</h1>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid key={product.name} item md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                />
              </CardActionArea>

              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
