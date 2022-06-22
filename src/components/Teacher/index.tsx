export function Teacher() {
    return(
        <section
         className="
            flex gap-x-4 h-min items-center
         "
        >

            <img 
             src="https://avatars.githubusercontent.com/u/61752887?v=4"
             className="
                rounded-full object-cover object-center h-16 w-16 aspect-square border-2 border-solid border-brand-blue-300
             "
            />

            <section
             className="
                flex flex-col
             "
            >
                <h2
                 className="
                    text-2xl font-bold text-base-text-title
                 "
                >

                    Juan Garcia
                </h2>

                <span
                 className="
                    text-sm text-base-text-secondaryBody
                 "
                >
                    Front-End Dev
                </span>
            </section>
        </section>
    )
}