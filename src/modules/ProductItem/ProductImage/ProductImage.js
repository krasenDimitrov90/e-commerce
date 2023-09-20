import './ProductImage.css';

import boiler from '../../../images/boiler.jpg';
import dispenser from '../../../images/dispenser.jpg';
import frape from '../../../images/frape.jpg';
import iutiq2 from '../../../images/iutiq2.png';
import utiq from '../../../images/utiq.jpg';
import kolona from '../../../images/kolona.jpg';
import kolona2 from '../../../images/kolona2.jpg';
import phone2 from '../../../images/iutiq2.png';

import melachka from '../../../images/melachka.jpg';
import krem from '../../../images/krem.png';
import krem2 from '../../../images/krem2.jpg';
import kartofki from '../../../images/kartofki.jpg';

const logos = { boiler, dispenser, frape, iutiq2, utiq, kolona, kolona2, phone2, melachka, krem, krem2, kartofki, };

export const ProductImage = ({ image }) => {
    return (
        <div className='product-image-container'>
            <img src={logos[image]} alt="Product" className='product-image' />
        </div>
    );
};