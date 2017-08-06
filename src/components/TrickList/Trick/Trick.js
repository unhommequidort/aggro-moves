import React from "react";
import VideoModal from './VideoModal/VideoModal';
import { Item, Checkbox } from 'semantic-ui-react';
import './Trick.css';

const Trick = (props) => {
  return(
    <Item className="trick-item">
      <Item.Content>
        <Item.Header as='a'>{props.trick.title}</Item.Header>
        <Item.Description>
          <p>{props.trick.description}</p>
          <p>Points: {props.trick.points}</p>
          <Checkbox checked={props.trick.landed} label={'I landed the ' + props.trick.title} />
        </Item.Description>
      </Item.Content>
      <br />
      <VideoModal video={props.trick.videoCode} title={props.trick.title} />
    </Item>
  );
}

export default Trick;
