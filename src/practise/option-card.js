import React from "react";
import styles from '../css/option-card.module.css';
import Film from "./Film";
// import Cinema from "./Cinema";
import Cinema from './Cinema-con'
import My from "./My";
console.log(styles)
export default class OptionCard extends React.Component {
  state = {
    current: 0,
    cards: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      }
    ]
  }

  // 更改选项卡
  handlerClick (index) {
    console.log(index)
    this.setState({
      current: index
    })
  }

  showCard () {
    switch (this.state.current) {
      case 0:
        return <Film />
      case 1:
        return <Cinema />
      case 2:
        return <My />
      default:
        break;
    }
  }
  
  render () {
    return (
      <div>
        <div>
          {
            this.showCard()
          }
        </div>
        <ul className={styles.bottomUl}>
          {
            this.state.cards.map(
              (card, index) => 
              <li 
                key={card.id}
                className={this.state.current === index ? styles.active : ''}
                onClick={() => this.handlerClick(index)}>
                  { card.text }
              </li>
              )
          }
        </ul>
      </div>
    )
  }
}
