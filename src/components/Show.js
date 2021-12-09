import Foods from './Delete.js'

const ShowFoods = props => {
  const {foods, setFoods} = props;

  return (
    <nav class="#menu">
    <h3 id="menusign" class='text-4xl p-8 my-0'>Menu</h3>
    <div class="item">
    {foods.map(food =>{
      return(
        <div class="m-3.5 justify-around flex flex-wrap p-2.5 border-solid">
        <Foods key={food._id} foods={food} setFoods={setFoods} />
        </div>
      );
    })}
    </div>
    </nav>
  );
};

export default ShowFoods;
