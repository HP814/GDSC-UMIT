import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Data from "./Data.json";
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function App() {
return (
    <div style={{ backgroundColor: '#caf4fa' }}>
      <div className="preText">
        <Typography variant="h2" align="center" gutterBottom style={{ marginTop: "50px", fontFamily: 'Roca One' }} >
          Events
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10vh', 
          }}
        >
          <Typography variant="h3" gutterBottom style={{ fontFamily: 'Roca One' }}>
            "We Inspire Learning💡💻""
          </Typography>
        </Box>
      </div>
      <div className="Container" >
        <Container maxWidth='1g'>
          <Grid container spacing={5} style={{ marginTop: "10px" , marginLeft:"1.2rem"}}>
            {Data.map((result, index) => (
              <Grid item xs={12} sm={4} ms={4} key={index}>
                <Card sx={{ maxWidth: 345 }} style={{ padding: "10px", marginBottom: "30px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={result.img}
                      alt="GDSC Events"
                      style={{ borderRadius: "5px" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {result.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {result.des}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="medium" onClick={() => (window.location.href = 'https://gdsc.community.dev/usha-mittal-institute-of-technology-mumbai/')}>
                      Join Us!
                    </Button> <Button variant="outlined" size="medium" onClick={() => (window.location.href = 'https://www.instagram.com/gdsc_umit?igsh=bTVxdHV0bG84OWI3')}>
                      Know More.
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30vh', 
          }}
        >
          <Typography variant="h5" gutterBottom style={{ fontFamily: 'Roca One' }}>
            "Ignite your curiosity and expand your knowledge with DSC-UMIT. For our upcoming event , join us now!🙌"
            </Typography>
           
<Button variant="contained" color="primary" size="large" onClick={() => (window.location.href = 'https://gdsc.community.dev/usha-mittal-institute-of-technology-mumbai/')} >
            Become A Member🤩.
          </Button>
        </Box>
        </div>
    </div>
  )
}

