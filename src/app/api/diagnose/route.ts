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
            Please create a diagnosis through a list of the symptoms provided. Point form.

        
        Transcript: ${transcript}`,
        }],
        temperature: 1,
    });

    return NextResponse.json({ results: chatCompletion.choices[0].message.content },
        {
            status: 200,
        },
    );
}
