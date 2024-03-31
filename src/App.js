import shoppingCart from './shoppingcart.jpg';
import './App.css';

const shoppingCartList = [
  {name: 'Fallout4', releaseYear: '2015', price: '$20.00', purchasable: true},
  {name: 'Minecraft', releaseYear: '2011', price: '$20.00', purchasable: true},
  {name: 'League of Legends', releaseYear: '2009', price: '$00.00', purchasable: false},
  {name: 'Factorio', releaseYear: '2016', price: '$35.00', purchasable: true}
];

/**
 * Function for the confirm purchase popup button component
 */
function popUp(){
  window.alert("Your available games have been purchased!");
}

/**
 * Component that returns the formatted image of a shopping cart
 */
function ShoppingCartImage(){
  return(
    <img
      src={shoppingCart}
      alt="Shopping Cart"
      style={{
        width: 200,
        height: 200
      }}
    />
  );
}

/**
 * Component that contains the data for various video games
 *  and returns a list of those games formatted
 */
function VideoGameDisplay(){
  const listVideoGames = shoppingCartList.map(videoGame =>
    <li
      key={videoGame.name}
      >
        {videoGame.name + ' ' + videoGame.price + (videoGame.purchasable ? "" : " unavailable! ")}
    </li>
  );
  return(
    <>
      <h3>Your shopping cart: </h3>
      <ul>{listVideoGames}</ul>
    </>
  );
}

/**
 * Component that 'confirms' the purchase of the video games in the
 *  shopping cart list
 */
function PopUpButton(){
  return(
    <button onClick={popUp}>Confirm Purchase</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShoppingCartImage></ShoppingCartImage>
        <VideoGameDisplay></VideoGameDisplay>
        <PopUpButton></PopUpButton>
      </header>
    </div>
  );
}

export default App;
