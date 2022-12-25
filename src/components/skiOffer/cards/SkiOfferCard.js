import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { React } from "../../../common";

const SkiOfferCard = ({ entity, setSelectedEntity, selectedEntity }) => {
  const { name, price, _id, title } = entity;
  const selcted = _id.toString() === selectedEntity?._id.toString();

  return (
    <Card sx={{ backgroundColor: selcted ? "pink" : null }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">
          {price?.amount} {price?.currency}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setSelectedEntity(entity)}>
          Select
        </Button>
      </CardActions>
    </Card>
  );
};

export default SkiOfferCard;
