"use client"

import { useState } from "react";
import { api } from "~/trpc/react";
import ResponseContainer from "../_components/response_container";

export default function Itinerary({ searchParams }: { searchParams: Record<string, string | undefined>; }) {
    const destination = searchParams.destination ?? "none";
    const duration = searchParams.duration ?? "none";
    const questionary = searchParams.questionary ?? "none";
    const traveler_count = searchParams.traveler_count ?? "none";
    const budget = searchParams.budget ?? "none";

    const prompt = "Your job is to create detailed itinerary using the JSON syntax for the user without asking any more questions.\n" +
        "YOU MUST RESPOND IN JSON SYNTAX. RESPONSES THAT ARE NOT A JSON CODEBLOCK WILL BE INVALID.\n" +
        "The current prompt is: " + 
        "The user's destination is " + destination +
        "The user will stay there for " + duration +
        "The user is " + questionary +
        (traveler_count == "solo" ? "The user is traveling alone" : ("The user is being accompanied by " + traveler_count)) +
        "The user's budget is " + budget;

    const { isSuccess, data, isLoading} = api.gemini.prompt.useQuery({ prompt });

    return(
        <div>
            {destination}
            {duration}
            {questionary}
            {traveler_count}
            {budget}
            <br />
            { data }
        </div>
    )
}