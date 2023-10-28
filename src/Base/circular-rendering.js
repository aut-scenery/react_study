import React from 'react';

export default class CircularRendering extends React.Component {
   state = {
     list: ['1', '2', '3']
   }

   render () {
    const newList = this.state.list.map((item, index) => <li key={index}>{item}</li>) 
     return (
      <div>
        <ul>
          {
            // this.state.list.map((item, index) => <li key={index}>{ item }</li>)
            newList
          }
        </ul>
      </div>
     )
   }
}