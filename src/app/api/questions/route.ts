import { NextResponse } from 'next/server';
import { OpenAI } from "openai";

export const runtime = 'edge';


export async function GET(req: Request) {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });


    const { searchParams } = new URL(req.url)
    const transcript = searchParams.get('transcript')
    console.log("questions", transcript);

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",

        messages: [{
            role: "user", content: `The following transcript is either from just a patient or a conversation of both a doctor and a patient. 
        Please create a SOAP note; The Subjective, Objective, Assessment and Plan (SOAP) note is an acronym representing a widely used method of documentation for healthcare providers. Point form.
        
        Transcript: ${transcript}`,
        }],
        temperature: 0.5,
    });

    return NextResponse.json({ questions: chatCompletion.choices[0].message.content },
        {
            status: 200,
        },
    );
}