import Logo from '../../../assets/Logo.svg'
import { Form } from './Form'

export function Header() {
    return(
        <header
        className='
        flex justify-between mb-[80px]
        '
        >
            <section
            className='
            flex flex-col max-w-[625px] w-ful
            '
            >
                
                <img
                className='
                w-[13rem] max-w-[13rem] mb-[32.5px]
                ' 
                src={Logo}
                />

                <h1
                className='
                text-[2.5rem] text-base-text-title font-normal leading-[3rem] mb-[24px]
                '
                >
                    Construa uma <strong className='text-[2.5rem] font-semibold text-brand-blue-300'>aplicação completa</strong>, do zero, com <strong className='text-[2.5rem] font-semibold text-brand-blue-300'>React JS</strong>
                </h1>

                <p
                className='
                text-base text-base-text-body 
                '
                >
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                </p>
            </section>

            <Form/>
        </header>
    )
}