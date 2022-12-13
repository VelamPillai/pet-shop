import { StoreContext } from './StoreContext';

export default function Container(props) {
  return <StoreContext.Provider>{props.children}</StoreContext.Provider>;
}
