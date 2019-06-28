import React from 'react';
import 'font-awesome/css/font-awesome.css';
import './App.css'

import SimpleSlider from './SimpleSlider';

const images=[{ img: "https://rukminim1.flixcart.com/image/660/792/jur9nrk0/shoe/k/b/a/wonder-1313-7-asian-grey-orange-original-imaffbmzjc5hmagy.jpeg?q=50", productName: "WNDR-13 Training Shoes",price:'100$' },
{ img: "https://rukminim1.flixcart.com/image/660/792/jwnusnk0/shoe/r/p/h/coscocnblue-11-asian-blue-original-imafhazbzxxhg6fz.jpeg?q=50", productName: "Cosco Navy Blue Gym Shoes",price:'100$' },
{ img: "https://rukminim1.flixcart.com/image/660/792/jnt7low0/shoe/b/7/u/combo-er-1077-349-10-earton-multicolor-original-imafaeq687rqwevd.jpeg?q=50", productName: "Bersache Combo(BR)-1077-349 Sneakers",price:'100$' },
{ img: "https://rukminim1.flixcart.com/image/660/792/jka1evk0/shoe/3/k/b/boxxyz-7-hotstyle-blue-original-imaf7nkwc8y7hqua.jpeg?q=50", productName: "Designer Loafers For Men",price:'600$' },
{ img: "https://rukminim1.flixcart.com/image/660/792/jsnjbm80/kids-shoe/n/f/p/5-coscocmouse-asian-original-imaf78gxmkzgxg7p.jpeg?q=50", productName: "Running Shoes For Men",price:'200$' },
{ img: "https://rukminim1.flixcart.com/image/660/792/jtx9evk0/shoe/q/m/f/ca4155-10-kraasa-tan-original-imaf2hmqzx9hwuet.jpeg?q=50", productName: "Boots, Outdoors, Boat Shoes ",price:'400$' },
{ img: "https://rukminim1.flixcart.com/image/660/792/jf8khow0/shoe/u/m/s/rwarrow-grey-7-weldone-multicolor-original-imaey8q8zzustgyt.jpeg?q=50", productName: "ARW Loafers For Men",price:'100$' },
{ img: "https://rukminim1.flixcart.com/image/660/792/jw2f6vk0/shoe/x/u/e/lac5010-7-luka-modric-maron-original-imaff72b7thzfecq.jpeg?q=50", productName: "Walking,Sports,Running,Gym,",price:'300$' }]
function App() {
  return (
    <div className="container">
      <SimpleSlider images={images} imageShowOnScreen={5}/>
    </div>
  );
}

export default App;
