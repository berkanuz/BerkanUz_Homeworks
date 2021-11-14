import Layout from "./Layout";
import {useParams} from "react-router-dom";
import { useState } from "react";
import { Button, CircularProgress,Grid,TextField,Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useMemesContext } from "../Contexts/MemesContext";


const Image = styled.img((props) => ({
    maxHeight: 400,
    border: "1px solid #333",
    borderRadius: props.borderRadius,
  }));
  

const SelectedCaps = () => {

    const {id} = useParams();
    const [generatedMeme, setGeneratedMeme] = useState();

  const formik = useFormik({
    initialValues: {
      text0: "",
      text1: "",
    },
    onSubmit: ({ text0, text1 }) => {
        const url = `https://api.imgflip.com/caption_image?template_id=${id}&username=BerkanUz&password=1234berkan&text0=${text0}&text1=${text1}`;
        fetch(url)
          .then((response) => response.json())
          .then((result) => setGeneratedMeme(result.data.url));
      },
    });
    const { getMemeById } = useMemesContext();

  const meme = getMemeById(id);

  if (!meme)
    return (
      <Layout>
        <CircularProgress />
      </Layout>
    );

  if (generatedMeme)
    return (
      <Layout>
        <Image src={generatedMeme} />
      </Layout>
    );

    return (
        <Layout>
          <Grid container direction="row">
            <Grid item md={6}>
              <Typography variant="h2">{meme.name}</Typography>
              <Image src={meme.url} alt={meme.name} borderRadius={35} />
            </Grid>
            <Grid item md={6}>
              <form onSubmit={formik.handleSubmit}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item>
                    <TextField
                      id="text0"
                      name="text0"
                      label="text0"
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="text1"
                      name="text1"
                      label="text1"
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item>
                    <Button type="submit">Generate Meme</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Layout>
      );
    };

export default SelectedCaps;