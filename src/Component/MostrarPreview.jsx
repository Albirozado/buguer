import React, { useState, useEffect, useMemo } from 'react';
import { getPreview, deletePost } from '../api/FirebaseAPI';
import styles from "../StylesSheets/LayoutStyles.module.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function MostrarPreview() {
  const [preview, setPreview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const Img = styled('img')({
    margin: '0 auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',

  });

  useMemo(() => {
    getPreview(setPreview);
  }, []);

  useEffect(() => {
    if (preview.length > 0) {
      setIsLoading(false);
    }
  }, [preview]);

  return (
    <div>
      {isLoading ? (
        <div className={styles.StackPro}  style={{padding: "1rem 3%" }}>
          <Stack spacing={1} sx={{ maxWidth: "100%"}}>
            <Skeleton variant="rounded" sx={{ bgcolor: 'grey.800', maxWidth: "100%"}} animation="wave"  width={500} height={100}/>
            <Skeleton variant="rounded" sx={{ bgcolor: 'grey.800', maxWidth: "100%"}} animation="wave" width={500} height={100} />
          </Stack>     
        </div> ) : (
        preview.map((post) => (
            
        <div className={styles.PreviePrincipalContent}>
          

          <Paper
          sx={{
            
            p: 1.5,
            maxWidth: 500,
            alignItems: "center",
            boxShadow: 0,
            display: "block",
            bgcolor: "transparent",
            border: "solid 1px grey"


          }}
          key={post.id}
          className={styles.contente}
          style={{marginTop: "1rem"}}
        >
          <Grid container spacing={2} justify="center"  alignItems="center" columns={{ xs: 1, sm: 12, md: 12 }}>
            <Grid item md={5} container maxWidth="100%" direction="column">
              <div className={styles.boxPreviewImage}>
                <Img alt="complex" src={post.postImage} className={styles.image}  />
              </div>
            </Grid>
            
              <Grid item md={7}  container direction="column" spacing={0}>
        
                  <h2 className={styles.produtoNomePreview}>
                    {post.nomeDoProduto}
                  </h2>
                  <p className={styles.paragrafoPreview}>
                    {post.produtoDescri}
                  </p>
                  <span className={styles.precoPreview}>{post.produtoPreco}MTN</span>
                    
                    
                  
                  <Button variant="solid" color="error" sx={{mt: 1,color: "#FD7E05",}} style={{border:"solid 1px #FD7E05"}} onClick={()=>deletePost(post.id)}>
                    <span className={styles.deletar}>

                  deletar
                    </span>
                  </Button>  

            </Grid>
          </Grid>
        </Paper>

        </div>

          
          

    
        ))
      )}
    </div>
  );
}
