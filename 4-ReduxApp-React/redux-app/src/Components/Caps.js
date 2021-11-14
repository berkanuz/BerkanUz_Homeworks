import Layout from "./Layout";
import CardMem from "./CardMeme";
import { Grid } from "@mui/material";
import { useMemesContext } from "../Contexts/MemesContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";




const Caps = () => {

    const { memes } = useMemesContext();

    if (!memes) return (
        <Layout>
            <CircularProgress />
        </Layout>
    );
    return (
        <Layout>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {memes.map(meme => (
                    <Grid item md={4}>
                        <Link to={`/selected-caps/${meme.id}`}>
                            <CardMem img={meme.url} title={meme.name} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Layout>

    );
};

export default Caps;