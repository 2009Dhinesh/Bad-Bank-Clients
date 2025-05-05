import Background1 from './images/front-img03.avif'
import Background2 from './images/front-img04.avif'
import Background3 from './images/front-img05.avif'
import Background4 from './images/front-img06.avif'
import Background5 from './images/front-img07.jpg'
import Background6 from './images/front-img08.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import SplashCursor from './BankSplash'

export default function Bad(){

function handleClickNext(){
let items = document.querySelectorAll('.item')
document.querySelector('.slide').appendChild(items\[0])
}

function handleClickPrev(){
let items = document.querySelectorAll('.item')
document.querySelector('.slide').prepend(items\[items.length - 1]) // here the length of items = 6
}

```
return(<>
<SplashCursor />
<div class="front-container" style={{marginTop:'3%' , marginLeft:'-5%' }}>

        <div class="slide">

            <div class="item" style={{backgroundImage: `url(${Background4})`}}>
                <div class="content">
                    <div class="name">Dhisha Bank</div>
                    <div class="des">Bank, an institution that deals in money and its substitutes and provides other money-related services. In its role as a financial intermediary, a bank accepts deposits and makes loans. </div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style={{backgroundImage: `url(${Background1})`}}>
                <div class="content">
                    <div class="name">Services</div>
                    <div class="des">Banks use content marketing to build trust with customers and improve their brand. Content can include podcasts, articles, calculators, and infographics.                         </div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style={{backgroundImage: `url(${Background2})`}}>
                <div class="content">
                    <div class="name">Branch</div>
                    <div class="des">Bank branch content can include information about the services offered, the benefits to the community, and how the branch can help customers. </div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style={{backgroundImage: `url(${Background3})`}}>
                <div class="content">
                    <div class="name">Employee</div>
                    <div class="des">Bank employee training includes teaching bank employees the skills, knowledge, and tools they need to perform their jobs. The training can help employees improve their performance, productivity, and job satisfaction. </div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style={{backgroundImage: `url(${Background5})`}}>
                <div class="content">
                    <div class="name">ATM</div>
                    <div class="des">An ATM (Automated Teller Machine) is a computerized device that allows customers to perform banking transactions without needing to visit a bank branch.                         </div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style={{backgroundImage: `url(${Background6})`}}>
                <div class="content">
                    <div class="name">About</div>
                    <div class="des">A bank is a financial institution that accepts deposits and lends money. Banks also offer other services, such as financial management, investment options, and credit cards.  </div>
                    <button>See More</button>
                </div>
            </div>

        </div>

        <div class="button">
            <button class="prev" onClick={ handleClickPrev }><FaArrowLeft /></button>
            <button class="next" onClick={ handleClickNext }><FaArrowRight /></button>
        </div>

    </div>


</>)
```

}
