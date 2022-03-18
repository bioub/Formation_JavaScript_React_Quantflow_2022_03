import { useDispatch, useSelector } from 'react-redux';
import Counter from '../counter/Counter';
import { increment } from '../store/actions';
import { nbClicksSelector } from '../store/selectors';

function Home() {
  const nbClicks = useSelector(nbClicksSelector);
  const dispatch = useDispatch();

  return (
    <div className="Home">
      <h2>Demo counters with Redux</h2>
      <Counter nbClicks={nbClicks} onIncrement={() => dispatch(increment(1))} />
      <Counter nbClicks={nbClicks} onIncrement={() => dispatch(increment(1))} />
      <Counter nbClicks={nbClicks} onIncrement={() => dispatch(increment(1))} />
    </div>
  );
}

export default Home;
