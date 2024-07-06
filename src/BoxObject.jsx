import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BoxObject({ image, link, title }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ width: '100%', height: 140, objectFit: 'cover' }}
        image={image}
        title={title}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component="a" href={link} target="_blank" rel="noopener noreferrer">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
