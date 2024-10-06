"use client"

import { api } from "~/trpc/react";
import type { data } from "../_components/json_to_table";
import Table from "../_components/json_to_table";

export default function Itinerary({ searchParams }: { searchParams: Record<string, string | undefined>; }) {
    const destination = searchParams.destination ?? "none";
    const duration = searchParams.duration ?? "none";
    const questionary = searchParams.questionary ?? "none";
    const traveler_count = searchParams.traveler_count ?? "none";
    const budget = searchParams.budget ?? "none";

    const prompt = "Your job is to create detailed itinerary using the JSON syntax for the user without asking any more questions.\n" +
        "YOU MUST TAKE INTO ACCOUNT ALL FACTORS SPECIALLY THE WANTS OF THE USER. FOR EXAMPLE IF THE USER HAS NO MONEY THEN DON'T ADD ANYTHING PAID.\n" +
        "YOU MUST MAKE THE PLAN REALISTIC AND ATTAINABLE WITH THE DATA GIVEN. DON'T MAKE A REPETITIVE AND BORING ITINERARY UNLESS ASKED BY USER.\n" +
        "OUTPUT EVERY DAY IN THE DURATION. RESPONSES THAT DON'T OUTPUT EVERY DAY IN THEIR OWN JSON OBJECT WILL BE INVALID" +
        "YOU MUST RESPOND IN JSON SYNTAX. RESPONSES THAT ARE NOT A JSON CODEBLOCK WILL BE INVALID.\n" +
        "YOUR RESPONSE MUST HAVE THE FORMAT OF [{day: \"day [day num]\" [activities: {time: time, name: name, cost, cost, description, description}]}].\n" +
        "The current prompt is: " + 
        "The user's destination is " + destination +
        "The user will stay there for " + duration +
        "The user is " + questionary +
        (traveler_count == "Solo" ? "The user is traveling alone" : ("The user is being accompanied by " + traveler_count)) +
        "The user's budget is " + budget;

    const { data, isSuccess } = api.gemini.prompt.useQuery({ prompt });

    return(
        <div>
            destination: {destination} <br />
            duration: {duration} <br />
            questionary: {questionary} <br />
            traveler count: {traveler_count} <br />
            budget: {budget}
            <br />
            <div>
            {isSuccess && <Table json={JSON.parse(data?.slice(8, data.length - 3)) as data[]} />}
            </div>
        </div>
    )
}