'use strict';

import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

require('styles/chat/ChatMessage.css');


class ChatMessageComponent extends React.Component {

  getIsLeft = () => {
    return this.props.isLeft ? 'chipl' : 'chipr';
  };

  render() {
    return (
      <div className="message-wrapper">
        <Chip
          className={this.props.align}
        >
          {this.props.content}
        </Chip>
        <br/>
      </div>
    );
  }
}

ChatMessageComponent.displayName = 'ChatChatMessageComponent';

// Uncomment properties you need
// ChatMessageComponent.propTypes = {};
// ChatMessageComponent.defaultProps = {};

export default ChatMessageComponent;
