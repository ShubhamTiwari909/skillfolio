import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold mb-5">Accordion Demo</h2>
            <Accordion
                type="single"
                collapsible
                className="w-full space-y-3"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1" className="bg-slate-900 text-slate-100 px-5 py-2.5 rounded-xl">
                    <AccordionTrigger className="cursor-pointer py-2.5">Product Information</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Our flagship product combines cutting-edge technology with sleek
                            design. Built with premium materials, it offers unparalleled
                            performance and reliability.
                        </p>
                        <p>
                            Key features include advanced processing capabilities, and an
                            intuitive user interface designed for both beginners and experts.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-slate-900 text-slate-100 px-5 py-2.5 rounded-xl">
                    <AccordionTrigger className="cursor-pointer py-2.5">Shipping Details</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            We offer worldwide shipping through trusted courier partners.
                            Standard delivery takes 3-5 business days, while express shipping
                            ensures delivery within 1-2 business days.
                        </p>
                        <p>
                            All orders are carefully packaged and fully insured. Track your
                            shipment in real-time through our dedicated tracking portal.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-slate-900 text-slate-100 px-5 py-2.5 rounded-xl">
                    <AccordionTrigger className="cursor-pointer py-2.5">Return Policy</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            We stand behind our products with a comprehensive 30-day return
                            policy. If you&apos;re not completely satisfied, simply return the
                            item in its original condition.
                        </p>
                        <p>
                            Our hassle-free return process includes free return shipping and
                            full refunds processed within 48 hours of receiving the returned
                            item.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
