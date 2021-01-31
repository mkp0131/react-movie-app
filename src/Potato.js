import React from 'react';
import Food from './Papapa';

function Potato({name}) {
	const foods = [
		{id: 1, item: '🍟'},
		{id: 2, item: '🍓'},
		{id: 3, item: '🥞'}
	];

	const makeFood = (foods) => {
		return <Food food={foods.item} key={foods.id} id={foods.id} />;
	}

  return (
    <React.Fragment>
      <h1>{name}</h1>
      <div>
				{
					foods.map(makeFood)
				}
      </div>
    </React.Fragment>
  );
}

export default Potato;