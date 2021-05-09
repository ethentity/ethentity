import React from "react";
import "shards-ui/dist/css/shards.min.css";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Progress,
  Badge,
  Button
} from "shards-react";
// import { useHistory } from "react-router-dom";

const IdentityCard = ({
  name,
  reward,
  progress,
  chunk1_status,
  chunk2_status,
  chunk3_status
}) => {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>{name}</CardHeader>
      <CardBody>
        <div className="container">
          <CardTitle>Reward: {reward} ETH</CardTitle>
        </div>
        <div className="container">
          <Progress theme="primary" striped value={progress} max={6} />
        </div>
        <p className="badges-container">
          <Badge theme={chunk1_status}>Chunk #1</Badge>
        </p>
        <p className="badges-container">
          <Badge theme={chunk2_status}>Chunk #2</Badge>
        </p>
        <p className="badges-container">
          <Badge theme={chunk3_status}>Chunk #3</Badge>
        </p>
      </CardBody>
      <CardFooter>Created 2 days ago</CardFooter>
    </Card>
  );
};

export default IdentityCard;
