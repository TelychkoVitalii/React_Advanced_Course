import { PureComponent} from "react";
import { createPortal } from "react-dom";

export default class MyPortal extends PureComponent {
  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}