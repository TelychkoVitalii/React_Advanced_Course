import React, { PureComponent } from 'react';
import MyPortal from './MyPortal';
import injectSheet from 'react-jss';
import { styles } from "./ToolTip.styles";

class Tooltip extends PureComponent {
  state = {
    visible: false,
  };

  showTooltip = () => this.setState({ visible: true });
  hideTooltip = () => this.setState({ visible: false });

  render() {
    return (
      <span
        onMouseOver={this.showTooltip}
        onMouseOut={this.hideTooltip}
        className={this.props.classes.tooltipTriggerText}>
        {this.props.children}
        {this.state.visible && (
          <MyPortal>
            <div className={this.props.classes.tooltipBody}>
                {this.props.text}
            </div>
          </MyPortal>
        )}
      </span>
    );
  }
}

export const ToolTipWithPortal = injectSheet(styles)(({ classes }) => (
  <><Tooltip classes={classes} text="You hovered over the second one!">Something else to hover over</Tooltip> is what this is.</>
));
