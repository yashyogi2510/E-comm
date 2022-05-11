import React from 'react'
import { BrowserRouter as Routers,   Switch ,Route} from "react-router-dom";
import Beauty from './component/Beauty';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import Dashboard from './component/Dashboard'
import Product from './component/Product';
import Shop from './component/Shop';
import Signup from './component/Signup';

import Cloths from './component/Cloths';
import Electronics from './component/Electronics';
import Addpost from './component/Addpost';
import About from './component/About';
import Show from './component/Show';

  

const Router = () => {
    return (
        <>
            <Routers>
                <Switch>
                   <Route exact path="/"><Dashboard/></Route>
                   <Route exact path="/shop"><Shop/></Route> 
                   <Route exact path="/product"><Product/></Route> 
                   <Route exact path="/contact"><Contact/></Route> 
                   <Route exact path="/checkout/:id"><Checkout/></Route> 
                   <Route exact path="/signup"><Signup/></Route> 
                   <Route exact path="/beauty"><Beauty/></Route> 
                   <Route exact path="/cloths"><Cloths/></Route> 
                   <Route exact path="/elect"><Electronics/></Route> 
                   <Route exact path="/addpost"><Addpost/></Route> 
                   <Route exact path="/about"><About/></Route> 
                   <Route exact path="/showorders"><Show/></Route> 
                 
                </Switch>
            </Routers>
        </>
    )
}

export default Router
