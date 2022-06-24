import Image from '../../../assets/Image1.png';

export function Main() {
    return(
        <main
        className='
            w-full h-auto
        '
        >
        <img 
        src={Image}
        className='
            w-full aspect-auto
        ' 
        />
    </main>
    )
}