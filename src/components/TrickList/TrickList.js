import React from "react";
import { Item, Divider } from 'semantic-ui-react';
import './TrickList.css';
import Trick from './Trick/Trick';

const TrickList = (props) => {

  return(
    <div className="TrickList">
      <Item.Group>
        {props.tricks.map((trick) => {
          return (
            <div key={trick.title}>
              <Trick trick={trick} />
              <Divider />
            </div>
          );
        })}
      </Item.Group>
    </div>
  );
}

export default TrickList;
