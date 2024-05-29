import { useCounter } from "../hook/useCounter";

export const CounterCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <div className="mt-5">CounterCustomHook: {counter} </div>
      <hr />
      <button className="btn btn-primary mx-3" onClick={()=>increment(10)}>
        +1
      </button>
      <button className="btn btn-primary mx-3" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary mx-3" onClick={()=>decrement(2)}>
        -1
      </button>
    </>
  );
};
