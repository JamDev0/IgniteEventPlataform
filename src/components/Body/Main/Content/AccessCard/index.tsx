import { CaretRight, Download } from "phosphor-react"

export function AccessCard() {
    return(
        <section
         className="
            flex flex-1 rounded min-w-fit max-w-[550px] overflow-hidden cursor-pointer
         "
        >

            <div
             className="
                px-6 py-12 text-white bg-brand-green-600
             "
            >

                <Download/>
            </div>

            <section
             className="
                p-6 flex items-center justify-between bg-base-element w-full flex-1
             "
            >
                <section
                 className="
                    flex flex-col gap-y-[8px] mr-4 max-w-[17.5rem]
                 "
                >
                    <h2
                     className="
                        text-base-text-title font-bol text-2xl shrink
                     "
                    >
                        Material complementar
                    </h2>

                    <p
                     className="
                        text-base-text-body text-sm shrink
                     "
                    >
                        Acesse o material complementar para acelerar o seu desenvolvimento
                    </p>
                </section>

            <CaretRight
             className="
                text-brand-blue-300 h-6 w-6
             "
            />
            </section>
        </section>
    )
}