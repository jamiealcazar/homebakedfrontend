import axios from 'axios';
import {useState} from 'react';

const UpdateForm = (props) => {
  const {foods, setFoods} = props;

  const [newName, setName] = useState('');
  const [newImage, setImage] = useState('');
  const [newPrice, setPrice] = useState('');

  const handleNewNameChange = (event) => {
    setName(event.target.value);
  }
  const handleNewImage = (event) => {
    setImage(event.target.value)
  }
  const handleNewPrice = (event) => {
    setPrice(event.target.value)
  }


  const handleNewHomebakedSubmit = (event) => {
    event.preventDefault()
    axios.put(`https://homebaked.herokuapp.com/homebaked/${props.food._id}`,
    {
      name: newName || foods.name,
      image: newImage || foods.image,
      price: newPrice || foods.price
    }
  )
  .then(() => {
    axios.get('https://homebaked.herokuapp.com/homebaked')
    .then(response => {
      setFoods(response.data);
    });
  });
};
console.log(props.food._id);

return (
  <div>
  <h3 class="m-5">Edit Item</h3>
  <form onSubmit={handleNewHomebakedSubmit}>
  Name: <input type="text" onChange={handleNewNameChange}/>
  <br/>
  Image: <input type="text" onChange={handleNewImage} />
  <br/>
  Price: <input type="text" onChange={handleNewPrice} />
  <br/>
  <input className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-yellow-500" type="submit" />
  </form>
  </div>
);
};

export default UpdateForm;
