import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../../../../graphql/generated";


export function Form() {
    const [nameInputValue, setNameInputValue] = useState<string>('');
    const [emailInputValue, setEmailInputValue] = useState<string>('');

    const [createNewSubscriber, {data, loading}] = useCreateSubscriberMutation();

    const redirect = useNavigate();

    async function handleSubmition(event: FormEvent) {
        event.preventDefault();

        await createNewSubscriber({
            variables: {
                name: nameInputValue,
                email: emailInputValue
            }
        })

        redirect('/event')
    }

    return(
        <form
        onSubmit={event => handleSubmition(event)}
        className='
        flex flex-col p-8 gap-y-[8px] bg-base-element min-w-[455px] rounded-[4px] border border-solid border-base-divisor
        '
        >
            <h2
            className='
            text-2xl text-base-text-title font-bold mb-[16px]
            '
            >
                Inscreva-se gratuitamente
            </h2>

            <input 
            type='text'
            placeholder='Seu nome completo'
            className='
            p-5 bg-base-background rounded text-base border border-solid border-transparent transition-colors
            placeholder:text-base-text-secondaryBody 
            focus:border-brand-green-400
            hover:border-brand-green-400
            '
            onChange={ event => setNameInputValue(event.target.value)}
            value={nameInputValue}
            >

            </input>

            <input
            type='email'
            placeholder='Digite seu email'
            className='
            p-5 bg-base-background rounded text-base border border-solid border-transparent transition-colors
            placeholder:text-base-text-secondaryBody 
            focus:border-brand-green-400
            hover:border-brand-green-400
            '
            onChange={ event => setEmailInputValue(event.target.value)}
            value={emailInputValue}
            >

            </input>

            <button
            disabled={loading}
            className='
            uppercase py-4 mt-[16px] bg-brand-green-500 rounded-[4px] font-bold text-sm text-white transition-colors
            hover:bg-brand-green-600
            disabled:opacity-60
            '
            >
                garantir minha vaga
            </button>
        </form>
    )
}