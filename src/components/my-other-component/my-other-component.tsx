import { Component, h } from '@stencil/core';
import moment from "moment";

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: true
})
export class MyOtherComponent {
  render() {
    console.log(moment);
    return <div>Hello, World! I'm the other component</div>;
  }
}
