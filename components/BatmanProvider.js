import React, { useState, useEffect } from 'react';

/* First we will make a new context */
const BatmanContext = React.createContext()

/* Then create a provider Component */
const BatmanProvider = props => {
  const [data, setData] = useState(props.data);

  return (
    <BatmanContext.Provider
      value={{data: data}}
    >
      {props.children}
    </BatmanContext.Provider>
  )
}

/* then make a consumer which will surface it */
const BatmanConsumer = BatmanContext.Consumer

export default BatmanProvider
export { BatmanConsumer }
