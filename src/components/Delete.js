import UpdateForm from './Update';
import axios from 'axios'

const Foods = props => {
  const {foods, setFoods} = props;

  const handleDelete = (event) => {
    axios.delete(`https://homebaked.herokuapp.com/homebaked/${foods._id}`)
      .then(response => {
        axios.get('https://homebaked.herokuapp.com/homebaked')
        .then(response => {
          setFoods(response.data);
        });
      });
  };

  return (
    <section id="menu">
    <div class="flex-grow grid grid-cols-2">
    <img class="rounded-2xl object-scale-down h-15 w-full" src={foods.image}/>
      <div class="rounded overflow-hidden shadow-xl py-10">
      <div class="px-6 py-4">
      <h3 class="text-2xl mb-5 p-5 font-cursive">{foods.name}</h3>
      <p class="text-white font-xl">{foods.price}</p>

      <button onClick={handleDelete} class="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-yellow-500" >Delete</button>
      <UpdateForm food={foods} setFoods={setFoods} />
      </div>
      </div>
    </div>
    </section>
  );
};

export default Foods;
