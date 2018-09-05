import React from 'react';
import diagram from '../assets/img/four-fs.png';

const Values = () => (
    <div>

        <div>
            <h4>Mission Statement</h4>
            <p>The BSF-F4 objective is to promote activities and programs that help to identify and connect each individual’s God’s endowed capabilities and skills with resources and opportunities that will enable the person to actualize and use them for the benefit of the community at large.</p>
        </div>

        <div>
            <h4>Vision</h4>
            <p>Freedom, fullness, fulfilment and fruitfulness for every individual.</p>
            <p>Providing individuals with resources and services that will help to enrich their lives in with freedom, fullness, fulfilment and fruitfulness.</p>
        </div>

        <div>
            <h4>Core Values</h4>
            <p>At Bethel-Sinai Foundation, we hold firmly believe that at the intersection of God’s grace and mercy is redemption. We engage and provide services that help to identify and connect God’s endowed capabilities and skills of each individual with resources and opportunities that enable the person to actualize and use them for the benefit of the community at large. In that spirit, we adhere to the following four core assets-based development model that will enable each individual to discover their unique talents and skills-set and to deploy them for the benefit of the community that they are part of. The four core assets-based development model is made up of:</p>
            <ul>
              <li>Freedom</li>
              <li>Fullness</li>
              <li>Fulfillment</li>
              <li>Fruitfulness</li>
            </ul>
            <img src={diagram} alt="Freedom: Power to act, Power to change. Fullness: Abundance, Completeness. Fulfillment: Satisfaction, Acheivement. Fruitfulness: Profitable, Beneficial"/>
        </div>

    </div>
)
 
export default Values;