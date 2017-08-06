import React from "react";
import { Card, Icon } from "semantic-ui-react";
import "./User.css";

const userImg = "/assets/images/users/june/IMG_20170527_113645_393-01.jpg";

function User(props) {

  const extra = (
    <a>
      <Icon name="lightning" />
      {props.points}
    </a>
  );

  return (
    <div className="User">
      <Card
        image={userImg}
        header={props.name}
        meta="Beginner"
        description="Junie is a third grader living in Kansas City who enjoys reading graphic novels and hanging with her cats."
        extra={extra}
      />
    </div>
  );
}

export default User;
