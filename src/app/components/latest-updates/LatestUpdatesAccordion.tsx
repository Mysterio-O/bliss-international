import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
import { latestUpdatesMetadata } from './latestUpdates'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export default function LatestUpdatesAccordion() {

    const data = latestUpdatesMetadata

    return (
        <Accordion
            type='single'
            collapsible
        >

            {
                data.map((d) => {

                    const isFileExists = d?.file_url;
                    const fileType = d?.file_type

                    return (
                        <AccordionItem key={d.id} value={`${d.title.slice(0, 5)}-${d.id}`} className='space-y-2'>
                            <AccordionTrigger>
                                <span className='text-lg'>
                                    {d.title}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className='h-auto'>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-base'>
                                        {d.description}
                                    </span>

                                    <div className='mt-2'>

                                        {
                                            d.highlight_text && (
                                                <p className=' font-medium text-yellow-400'>
                                                    {d?.highlight_text}
                                                </p>
                                            )
                                        }
                                        {
                                            isFileExists && (
                                                <span className='flex items-center gap-2'>
                                                    <a
                                                        href={d?.file_url || "#"}
                                                        download={true}
                                                        title={`Download ${fileType}`}
                                                    >
                                                        <Button variant={"outline"} className='max-w-36 cursor-pointer'>
                                                            <span className='flex items-center justify-center gap-1.5'>
                                                                <Download className='w-4 h-4' />
                                                                Download
                                                            </span>
                                                        </Button>
                                                    </a>
                                                    <span className='px-2 py-2 rounded-full bg-secondary'>
                                                        {d.download_count} downloaded
                                                    </span>
                                                </span>
                                            )
                                        }
                                    </div>
                                </div>

                            </AccordionContent>
                        </AccordionItem>
                    )
                })
            }



        </Accordion>
    )
}
