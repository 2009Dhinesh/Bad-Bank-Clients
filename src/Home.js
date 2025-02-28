import img1 from './images/home-img01.png';
import img2 from './images/home-img02.png';
import img3 from './images/home-img03.png';
import img4 from './images/home-img04.png';
import img5 from './images/home-img05.png';
import SubMain from './SubBadMain'



export default function Home(){

        // const arr = [img1 , img2 ,img3 ,img4 ,img5]
        const content = [
            {
            id:'1',
            img:img1,
            decription:'Banks are financial institutions that provide services like deposits, loans, and payment processing. They also offer services like certificates of deposit, currency exchange, and safe deposit boxes. '
        },
            {
            id:'2',
            img:img2,
            decription:'Banks accept funds from customers through checking and savings accounts, term deposits, and other methods '
        },
            {
            id:'3',
            img:img3,
            decription:'Banks make loans to customers through installment loans, auto loans, and other methods  '
        },
            {
            id:'4',
            img:img4,
            decription:'Banks process payments for customers through checks, Automated Clearing House (ACH), wire transfers, and other methods  '
        },
            {
            id:'5',
            img:img5,
            decription:'Banks provide services like individual retirement accounts (IRAs), currency exchange, and safe deposit boxes  '
        },
    ]

    return(<>
        <SubMain />
            <title>Dhisha Bank | Home</title>

        <div className='cont'>{
        content.map((item)=>{
            return(                
                <p style={{width:"300px"}}><img src={item.img} alt="img" />{item.decription}</p>
            )
        }
    
    )
        }
        </div>
    </>)
}