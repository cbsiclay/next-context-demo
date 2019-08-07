import React, { Component } from 'react'
import Link from 'next/link'
/* First we import the consumer */
import { CounterConsumer } from '../components/CounterProvider'
import { BatmanConsumer } from '../components/BatmanProvider';

export default class index extends Component {
  render () {
    return (
      /* Then we use our context through render props */
      <div>
        <CounterConsumer>
          {({ count, increase, decrease }) => (
            <div>
              <h1>HOME</h1>
              <p>Counter: {count}</p>
              <button onClick={increase}>Increase</button>
              <button onClick={decrease}>Decrease</button>
              <p>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </p>
            </div>
          )}
        </CounterConsumer>
        {/* Batman Data */}
        <BatmanConsumer>
          {({ data }) => {
            console.log('data inside of batmanconsumer in index.js: ', data);
            return (
            <div>
              <h1>Batman Data</h1>
              {data.map(show => <div>{show.name}</div>)}
            </div>
            )}
          }
        </BatmanConsumer>
      </div>
    )
  }
}
