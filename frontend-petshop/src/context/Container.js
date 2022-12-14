import StoreContext from '../context/StoreContext.js';

export default function Container(props) {
  return (
      <StoreContext.Provider value={{}}>
          {props.children}
      </StoreContext.Provider>
  )
}
