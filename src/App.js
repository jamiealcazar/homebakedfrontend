import './App.css';
import './index.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import NewForm from './components/New';
import ShowFoods from './components/Show';

const App = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    axios
    .get('https://homebaked.herokuapp.com/homebaked')
    .then((response) => {
      setFoods(response.data);
    });
  }, []);


  return (
  <main>
  <ul id="nav" class="flex border-b">
  <li class="-mb-px mr-1">
    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-yellow-500 font-cursive" href="#menu">Menu</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-yellow-500 hover:text-white-800 font-cursive" href="#aboutus">About Us</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-yellow-500 hover:text-white-800 font-cursive" href="https://forms.gle/MckuWe6s9R8FvDvo6">Order Now</a>
  </li>

  <a class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded" href="https://www.facebook.com/Homebaked-by-Nelly-109131924159086/photos/?ref=page_internal">
        <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        <span>Facebook</span>
    </a>
</ul>
  <nav class="nav-header">
  <h1 id="bynelly" class="my-5">Homebaked by Nelly</h1>
  <h3 class="my-6">Your Everyday Bread</h3>
  <ShowFoods foods={foods} setFoods={setFoods}/>
  </nav>
  <section id="aboutus" class="my-5 font-cursive text-xl flex flex-col justify-center items-center">
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://i.imgur.com/dhcSpvi.png">
  </img>
  <div class="px-6 py-4">
    <div class="font-bold text-3xl mb-2">About Us</div>
    <p class="font-cursive text-md text-justify">
      Homebaked by Nelly is a mother-daughter-son trio with a passion for bringing together unique flavors and ingredients highlighting Filipino tradition and beloved international recipes. Baked fresh daily in Alangilan, Batangas City. We hope you enjoy our products as much as we enjoyed curating them for you and your loved ones!
    </p>
  </div>
  </div>
  </section>
  <NewForm foods={foods} setFoods={setFoods}/>
  <h1 id="footer" class="m-10">Coded with &hearts; by Jamie</h1>
  </main>
  )
}





export default App;
