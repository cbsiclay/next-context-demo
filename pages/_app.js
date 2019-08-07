import App, { Container } from 'next/app'
/* First we import our provider */
import CounterProvider from '../components/CounterProvider'
import BatmanProvider from '../components/BatmanProvider';

import fetch from 'isomorphic-unfetch';

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        {/* Then we wrap our components with the provider */}
        <CounterProvider>
          <BatmanProvider data={this.props.data}>
            <Component {...pageProps} />
          </BatmanProvider>
        </CounterProvider>
      </Container>
    )
  }
}

MyApp.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log('Fetched data inside of MyApp.getInitialProps: ', data.length);

  return {
    data: data.map(entry => entry.show)
  };
}

export default MyApp
