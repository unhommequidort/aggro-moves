import React, { Component } from "react";
import { Button, Modal, Embed } from "semantic-ui-react";

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });
  render() {
    const { open, dimmer } = this.state;
    //const videoUrl = "https://www.youtube-nocookie.com/embed/" + this.props.video + "?rel=0&amp;controls=0&amp;showinfo=0?ecver=1";

    return (
      <div className="VideoModal">
        <Button onClick={this.show("blurring")}>Watch Tutorial</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>
            {this.props.title} tutorial
          </Modal.Header>
          <Modal.Content>
            <Embed
              id={this.props.video}
              source='youtube'
            />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleDimmer;
