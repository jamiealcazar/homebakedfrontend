import {useState} from 'react'
import axios from 'axios';

const NewForm = (props) => {

const {setFoods} = props

const [newName, setName] = useState('')
const [newImage, setImage] = useState('')
const [newPrice, setPrice] = useState('')

const handleNewNameChange = (event) => {
  setName(event.target.value);
}
const handleNewImage = (event) => {
  setImage(event.target.value)
}
const handleNewPrice = (event) => {
  setPrice(event.target.value)
}

const handleNewFormSubmit = (event) => {
  event.preventDefault();

  axios.post(
    'https://homebaked.herokuapp.com/homebaked',
    {
      name: newName,
      image: newImage,
      price: newPrice,
    }).then(()=> {
      axios
        .get('https://homebaked.herokuapp.com/homebaked')
        .then((response)=> {
          setFoods(response.data);
        })
    })
}

return (
  <section id="addfood" class="myForm">
  <div class="border-solid outline-white">
  <h2>Add Food</h2>
  <form onSubmit={handleNewFormSubmit}>
  name: <input  type="text" onChange={handleNewNameChange}/>
  <br/>
  image: <input type="text" onChange={handleNewImage}/>
  <br/>
  price: <input type="text" onChange={handleNewPrice}/>
  <br/>
  <button class="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-yellow-500" type="submit" value="Log New Item" >Log New Item</button>
  </form>
  </div>
  </section>
)

}



export default NewForm
