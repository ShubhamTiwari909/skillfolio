"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-5">Calender Demo</h2>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
            />
        </div>
    )
}
