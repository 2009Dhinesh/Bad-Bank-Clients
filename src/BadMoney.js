import Logo from './images/Bar Loader.gif'
export default function Loading (){



    return(<>
    {/* <div style={{
        position:'absolute',
        top:'40%',

    }}> */}

    <img src={Logo} alt="" style={{
        width:"100px",
        position:'absolute',
        top:'40%',

    }}/>
    {/* <span>Dhisha Bank</span> */}
    {/* </div> */}

    </>)
}