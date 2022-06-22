import Logo from '../../assets/Logo.svg'

export function Header() {
    return(
        <header
         className='
            w-full flex items-center justify-center h-[80px] bg-base-element
         '
        >
            
            <img
             className='
                w-60
             '
             src={Logo} 
             alt='Ignite lab ReactJs'
            />

        </header>
    )
}