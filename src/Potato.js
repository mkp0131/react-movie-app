import React from 'react';
// import ReactDOM from 'react-dom';

function Potato(props) {
  const {name, papapa} = props;
  const list = papapa.map((item) => {
    return <div key={item}>{item}</div>;
  })
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <div>
        {list}
      </div>
    </React.Fragment>
  );
}

export default Potato;