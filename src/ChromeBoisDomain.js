import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (ev) => {
    /*
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
     drawChromeBoiAtCoords(ev.clientX, ev.clientY)
  }

  /*
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   handleToggle = () => {
     toggleCycling()
   }

  /* Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */
   handleKeyPress = (ev) => {
     const letter = ev.key
     if (letter === 'a') {
       const type = '+'
       resize(type)
     } else if (letter === 's') {
       const type = '-'
       resize(type)
     }
   }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleToggle}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
