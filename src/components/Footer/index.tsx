import RocketLogo from '../../assets/RocketLogo.svg';

export function Footer() {
    return(
        <footer
         className="
            flex justify-between w-full pt-[26px] border-t border-solid border-t-base-divisor text-base text-base-text-secondaryBody mt-[100px]
         "
        >
            <div
             className='
                flex gap-x-6
             '
            >
                <img
                 src={RocketLogo}
                 className='

                 '
                />

                <span>
                    Rocketseat - Todos os direitos reservados
                </span>
            </div>

            <a
             href="#"
            >
                Políticas de privacidade
            </a>
        </footer>
    )
}