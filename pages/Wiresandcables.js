import Header from './Header'
import Footer from './Footer'

import {JumboProduct} from '../components/Jumbo'
import Wiresandcables,{ WiresandcablesPic} from '../components/WiresandCable_compo'

export default function WiresandcablesPage() {
    return (
        <div>
            <Header/>
            <JumboProduct/>
                
            <div >
                
            </div>
            <Wiresandcables className="headerbottom"/>
            <WiresandcablesPic/>
                
            <Footer/>
        </div>
    )
}

